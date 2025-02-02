'use client';
import { useState } from "react";
import InitialChatForm from "@/components/dm-comps/InitialChatFrom";
import { MessageForm } from "@/components/search-comps/MessageForm";
import Image from "next/image";
import hello from "@/public/assets/waving.gif";
import myProfileImage from "@/public/assets/discord_green.png"; // ✅ "나"의 프로필 이미지 추가

export default function DirectMessagePage({ selectedUser }) {
  const [messages, setMessages] = useState([]);
  const [hoveredMessageIndex, setHoveredMessageIndex] = useState(null);

  // "손 흔들기" 버튼 클릭 이벤트 (처음 인사하는 기능)
  const handleWaveClick = () => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "나",
        senderImage: myProfileImage, // ✅ "나"의 이미지 추가
        time: "오늘 오후 5:04",
        content: "👋 손 흔들기를 보냈습니다.",
      },
    ]);
  };

  // 채팅 메시지 추가 함수
  const handleSendMessage = (message) => {
    if (message.trim()) {
      const currentTime = new Date().toLocaleTimeString("ko-KR", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setMessages((prev) => [
        ...prev,
        {
          sender: "나",
          senderImage: myProfileImage, // ✅ "나"의 이미지 추가
          time: `오늘 ${currentTime}`,
          content: message,
        },
      ]);
    }
  };

  return (
    <main className="flex-1 flex flex-col bg-[#313338] text-white">
      <div className="flex-1 p-4">
        {/* 👋 채팅방 입장 시 인사 메시지 */}
        <div className="mb-4">
          <InitialChatForm 
            imageUrl={selectedUser.imageUrl} 
            name={selectedUser.name} 
            nickname={selectedUser.name} 
            serverCount={1} 
          />
        </div>

        {/* 👋 손 흔들기 버튼 (메시지가 없을 때만 표시) */}
        {messages.length === 0 && (
          <div className="w-full mb-6 flex flex-col">
            <Image src={hello} alt="hello" className="h-60 w-60 ml-10 translate-x-10" />
            <button
              onClick={handleWaveClick}
              className="bg-[#5765f2] py-2 w-[400px] text-sm rounded-md mt-2"
            >
              {selectedUser.name}에게 손 흔들기
            </button>
          </div>
        )}

        {/* 채팅 메시지 목록 */}
        <div className="mt-4">
          {messages.map((msg, index) => {
            const isFirstMessage = index === 0 || messages[index - 1].sender !== msg.sender;
            const isMyMessage = msg.sender === "나";
            const showTooltip = !isFirstMessage;

            return (
              <div
                key={index}
                className={`flex items-start ${isFirstMessage ? "mt-4" : "mt-1"} relative`}
                onMouseEnter={() => showTooltip && setHoveredMessageIndex(index)}
                onMouseLeave={() => setHoveredMessageIndex(null)}
              >
                {/* ✅ 첫 번째 메시지만 프로필 이미지 표시 */}
                {isFirstMessage && (
                  <Image 
                    src={isMyMessage ? myProfileImage : selectedUser.imageUrl} 
                    alt="프로필" 
                    className="w-10 h-10 rounded-full mr-3" 
                  />
                )}

                {/* ✅ 연속된 메시지는 약간 오른쪽으로 들여쓰기 (ml-12) */}
                <div className={`${isFirstMessage ? "" : "ml-12 translate-x-2"}`}>
                  {/* ✅ 첫 번째 메시지일 때만 보낸 사람 & 시간 표시 */}
                  {isFirstMessage && (
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-semibold">{msg.sender}</p>
                      <p className="text-xs text-gray-400">{msg.time}</p>
                    </div>
                  )}
                  <p className="text-sm">{msg.content}</p>
                </div>

                {/* 🏷 툴팁 (첫 번째 메시지에는 표시하지 않음) */}
                {hoveredMessageIndex === index && showTooltip && (
                  <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded-md shadow-md whitespace-nowrap z-50">
                    {msg.time}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 입력 폼 */}
        <div className="fixed bottom-5 w-2/3">
          <MessageForm name={selectedUser.name} onSendMessage={handleSendMessage} />
        </div>
      </div>
    </main>
  );
}
