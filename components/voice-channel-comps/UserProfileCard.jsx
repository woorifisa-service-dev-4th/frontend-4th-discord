'use client';

import React, { useEffect, useRef, useState } from "react";

const UserProfileCard = ({
  username,
  avatarUrl,
  isStreaming, // 비디오 스트리밍 여부
  isMuted, // 음소거 여부
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false); // 음성 감지 상태
  const videoRef = useRef(null); // 비디오 태그 참조
  const streamRef = useRef(null); // 전체 스트림 참조
  const audioAnalyserRef = useRef(null); // 오디오 분석 노드 참조

  useEffect(() => {
    if (isStreaming || !isMuted) {
      console.log(isMuted);
      
      // 비디오 또는 오디오 스트림 요청
      navigator.mediaDevices
        .getUserMedia({ video: isStreaming, audio: !isMuted }) // isStreaming에 따라 비디오, isMuted에 따라 오디오 요청
        .then((stream) => {
          streamRef.current = stream;

          if (isStreaming && videoRef.current) {
            // 비디오 연결
            videoRef.current.srcObject = stream;
          }

          if (!isMuted) {
            // 오디오 분석 설정
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const analyser = audioContext.createAnalyser();
            const source = audioContext.createMediaStreamSource(stream);

            source.connect(analyser);
            audioAnalyserRef.current = analyser;

            // 음성 감지
            const dataArray = new Uint8Array(analyser.frequencyBinCount);
            const detectSpeaking = () => {
              analyser.getByteFrequencyData(dataArray);
              const volume = dataArray.reduce((a, b) => a + b) / dataArray.length;

              // 볼륨 임계값 기준으로 isSpeaking 업데이트
              setIsSpeaking(volume > 50); // 50은 임계값, 필요시 조정

              if (!isMuted) {
                requestAnimationFrame(detectSpeaking); // 반복 호출
              }
            };

            detectSpeaking();
          }
        })
        .catch((err) => {
          console.error("Error accessing media devices:", err);
          alert("Unable to access media devices. Please check your permissions.");
        });

      return () => {
        // 컴포넌트 언마운트 시 리소스 정리
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((track) => track.stop());
        }
        if (audioAnalyserRef.current) {
          audioAnalyserRef.current.disconnect();
        }
      };
    }
  }, [isStreaming, isMuted]);

  return (
    <div
      className={`w-96 h-1/2 flex justify-center items-center p-2 rounded-md bg-discordGray transition ${
        isSpeaking ? "ring-2 ring-green-500" : ""
      }`}
    >
      {isStreaming ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted // 본인 비디오의 오디오는 항상 음소거
          className="w-full h-full rounded-md object-cover border border-gray-600"
        />
      ) : (
        <img
          src={avatarUrl} // 기본 이미지
          alt={`${username}'s avatar`}
          className="w-20 h-20 rounded-full object-cover border border-gray-600"
        />
      )}
    </div>
  );
};

export default UserProfileCard;
