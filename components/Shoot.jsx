"use client";

import { useState } from "react";

export function Shoot() {
    const [inputValue, setInputValue] = useState("");
    const [responseData, setResponseData] = useState("");

    async function submitHandler(event) {
        event.preventDefault(); // ✅ 새로고침 방지
        console.log("입력값:", inputValue);

        try {
            const response = await fetch("http://192.168.0.57:8087/hello", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ data: inputValue }),
            });

            if (!response.ok) {
                throw new Error(`서버 응답 오류: ${response.status}`);
            }

            const data = await response.json(); // ✅ JSON 데이터로 변환
            console.log("서버 응답:", data);

            setResponseData(data.data || "응답 데이터 없음"); // ✅ 올바른 값 저장
        } catch (error) {
            console.error("오류 발생:", error);
            setResponseData("에러 발생!");
        }
    }

    return (
        <>
            <form method="post" onSubmit={submitHandler}>
                <div>data</div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border p-2 text-center text-black"
                />
                <button type="submit" className="ml-2 p-2 border bg-blue-500 text-white">
                    전송
                </button>
            </form>
            <ul>
                {responseData ? <li>서버응답 : {responseData}</li> : <li>아직 데이터 없음</li>}
            </ul>
        </>
    );
}
