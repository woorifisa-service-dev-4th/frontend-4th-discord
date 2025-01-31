'use client'
import { useState, useRef } from "react";
import Image from "next/image";
import attach from "@/public/assets/attach-button.svg";

export function MessageForm({ name, onSendMessage }) {
  const [inputValue, setInputValue] = useState("");
  const isSending = useRef(false); // 중복 실행 방지

  const handleSend = () => {
    if (isSending.current) return; // 중복 실행 방지
    isSending.current = true;

    const trimmedMessage = inputValue.trim();
    if (!trimmedMessage) return; // 빈 메시지 전송 방지

    console.log("🔹 handleSend 실행됨:", trimmedMessage);

    onSendMessage(trimmedMessage);

    // 🔥 상태를 업데이트하고 비동기적으로 클리어
    setInputValue(""); 

    // 🔥 setTimeout을 사용해 다음 렌더링 사이클에서 강제 초기화
    setTimeout(() => {
      setInputValue("");
      isSending.current = false;
    }, 50); // 50ms 후 다시 실행 가능하도록 설정
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      console.log("⏎ Enter 키 입력 감지됨");
      handleSend();
    }
  };

  return (
    <div className="flex items-center">
      {/* 첨부 버튼 */}
      <button
        className="flex items-center justify-center px-2 bg-[#383a40] py-2 focus:outline-none rounded-l-md"
        style={{ height: "40px" }}
        onClick={handleSend} // 버튼 클릭 시 메시지 전송
      >
        <Image src={attach} alt="" width={24} height={24} />
      </button>

      {/* 입력 필드 */}
      <input
        className="bg-[#383a40] text-[#8f969f] w-full focus:outline-none rounded-r-md px-3"
        style={{ height: "40px" }}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown} // Enter 키 이벤트 감지
        placeholder={`@${name}에 메시지 보내기`}
      />
    </div>
  );
}
