'use client'
import React, { useState } from 'react'

const FooterControls = ({isStreaming, isMuted, onToggleStreaming, onToggleMuted, onDisconnect}) => {
  const [showControls, setShowControls] = useState(false); 
  return (
    <>
      {/* 하단 버튼 컨트롤 */}
      <div
        className="fixed bottom-0 left-auto w-auto bg-discordGray p-4 space-x-4 transition-opacity z-10"
        style={{
          opacity: showControls ? 1 : 0,
          pointerEvents: showControls ? "auto" : "none",
        }}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        {/* 카메라 버튼 */}
        <button
          onClick={onToggleStreaming}
          className={`px-4 py-2 rounded-md text-white ${
            isStreaming ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {isStreaming ? "카메라 끄기" : "카메라 켜기"}
        </button>

        {/* 마이크 버튼 */}
        <button
          onClick={onToggleMuted}
          className={`px-4 py-2 rounded-md text-white ${
            isMuted ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {isMuted ? "마이크 켜기" : "마이크 끄기"}
        </button>

        {/* 연결 끊기 버튼 */}
        <button
          onClick={onDisconnect}
          className="px-4 py-2 rounded-md bg-gray-500 text-white"
        >
          연결 끊기
        </button>
      </div>

      {/* 마우스 이벤트 영역 */}
      <div
        className="absolute bottom-0 left-0 w-full h-12 z-0"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      ></div>
    </>
  );
};

export default FooterControls;
