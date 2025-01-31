'use client';
import { useState } from "react";
import InitialChatForm from "@/components/dm-comps/InitialChatFrom";
import { MessageForm } from "@/components/search-comps/MessageForm";
import tempImage from "@/public/assets/discord_green.png";
import red from "@/public/assets/discord_red.png";
import hello from "@/public/assets/waving.gif";
import Image from "next/image";

export default function DirectMessagePage() {
  const [messages, setMessages] = useState([]);
  const [hoveredMessageIndex, setHoveredMessageIndex] = useState(null); // 툴팁 상태
  const name = "이원빈";
  const nickname = "iwonbeen";

  // "손 흔들기" 버튼 클릭 이벤트 (처음 인사하는 기능)
  const handleWaveClick = () => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "나",
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
          time: `${currentTime}`,
          content: message,
        },
      ]);
    }
  };

  return (
    <main className="flex-1 flex flex-col bg-[#313338] text-white">
      <div className="flex-1 overflow-y-auto p-4">
        {/* 👋 채팅방 입장 시 인사 메시지 (환영 메시지) */}
        <InitialChatForm imageUrl={tempImage} name={name} nickname={nickname} serverCount={1} />

        {/* 채팅 메시지 목록 */}
        <div className="mt-4">
          {messages.map((msg, index) => {
            const isFirstMessage = index === 0 || messages[index - 1].sender !== msg.sender;
            const showTooltip = !isFirstMessage; // 첫 번째 메시지에는 툴팁 표시 안 함

            return (
              <div
                key={index}
                className={`flex flex-col ${isFirstMessage ? "mt-4" : "mt-1"} relative`}
                onMouseEnter={() => showTooltip && setHoveredMessageIndex(index)}
                onMouseLeave={() => setHoveredMessageIndex(null)}
              >
                {isFirstMessage ? (
                  // 🔹 첫 번째 메시지: 프로필, 닉네임, 시간 표시
                  <div className="flex items-start space-x-3">
                    <Image src={red} alt="프로필" className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="flex items-center space-x-2">
                        <p className="text-sm font-semibold">{msg.sender}</p>
                        <p className="text-xs text-gray-400">{msg.time}</p>
                      </div>
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </div>
                ) : (
                  // 🔹 연속된 메시지: 프로필, 닉네임 없이 메시지만 표시
                  <p className="text-sm ml-[50px]">{msg.content}</p>
                )}

                {/* 🏷 툴팁 (첫 번째 메시지에는 표시하지 않음) */}
                {hoveredMessageIndex === index && showTooltip && (
                  <div
                    className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded-md shadow-md whitespace-nowrap z-50"
                  >
                    {msg.time}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 👋 손 흔들기 버튼 (채팅이 없을 때만 표시) */}
        {messages.length === 0 && (
          <div className="w-full mb-6 flex flex-col">
            <Image src={hello} alt="hello" className="h-60 w-60" />
            <button
              onClick={handleWaveClick}
              className="bg-[#5765f2] py-3 text-sm w-1/4 rounded-md mt-2"
            >
              {name}에게 손 흔들기
            </button>
          </div>
        )}

        {/* 입력 폼 */}
        <div className="fixed bottom-5 w-2/3">
          <MessageForm name={name} onSendMessage={handleSendMessage} />
        </div>
      </div>
    </main>
  );
}
