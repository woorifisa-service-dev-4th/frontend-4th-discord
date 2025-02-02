'use client'

import UserProfileCard from  "../../components/voice-channel-comps/UserProfileCard"
import FooterControls from "../../components/voice-channel-comps/FooterControls";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VoiceChannelPage() {
  const [isStreaming, setIsStreaming] = useState(false); // 카메라 상태
  const [isMuted, setIsMuted] = useState(true); // 마이크 상태

  const router = useRouter();

  // 연결 끊기 핸들러
  const handleDisconnect = () => {
    alert("연결을 끊었습니다."); // 경고창 표시
    router.push("/channel/123"); // URL 이동
  };

  const users = [
    {
      id: 1,
      username: "JohnDoe",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
      isMuted: isMuted,
      isStreaming : isStreaming,
    },
    {
      id: 2,
      username: "JaneSmith",
      avatarUrl: null,
      isMuted: true,
    },
    {
      id: 3,
      username: "SamBrown",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
      isMuted: true,
    },
    {
      id: 4,
      username: "AliceGreen",
      avatarUrl: "https://i.pravatar.cc/150?img=4",
      isMuted: true,
    },
  ];

  const totalRows = Math.ceil(users.length / 2); // 2개씩 한 줄
  const heightPerRow = 100 / Math.max(totalRows, 1); // 전체 화면 기준 줄별 높이

  


  return (
    <main className="flex-1 flex">
      <div
        style={{
          height: "100vh", // 전체 높이
        }}
        className="w-full flex flex-wrap justify-center items-center gap-4"
      >
        {users.map((user) => (
          <UserProfileCard
            key={user.id}
            username={user.username}
            avatarUrl={user.avatarUrl}
            isMuted={user.isMuted}
            isSpeaking={user.isSpeaking}
            isStreaming={user.isStreaming}
          />
        ))}
          <FooterControls
            isStreaming={isStreaming}
            isMuted={isMuted}
            onToggleStreaming={() => {
              setIsStreaming(!isStreaming)
              console.log("isStreaming");
            }} // 카메라 상태 변경
            onToggleMuted={() => {setIsMuted(!isMuted); console.log(isMuted);
            }} // 마이크 상태 변경
            onDisconnect={handleDisconnect} // 연결 끊기
          />
          
      </div>
    </main>
  );
}