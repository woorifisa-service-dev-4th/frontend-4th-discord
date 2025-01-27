'use client';

import { useEffect, useState } from "react";
import Link from "next/link"; // next/link 임포트
import DropdownMenu from "@/components/header-comps/Dropdown";
import CollapsibleSection from "@/components/channel-list-comps/Channel";
import ChannelItem from "./ChannelItem";
import SidebarItem from "./SidebarSection";
import { usePathname } from "next/navigation";


export default function Sidebar({ title }) {
  const [selectedVoiceChannel, setSelectedVoiceChannel] = useState(null);

  const menuItems = [
    { label: "서버 부스트", icon: "🔗", onClick: () => alert("서버 부스트 클릭") },
    { label: "초대하기", icon: "👤", onClick: () => alert("초대하기 클릭") },
    { label: "서버 설정", icon: "⚙️", onClick: () => alert("서버 설정 클릭") },
    { label: "이벤트 만들기", icon: "📅", onClick: () => alert("이벤트 만들기 클릭") },
    { label: "App 디렉터리", icon: "📂", onClick: () => alert("App 디렉터리 클릭") },
    { label: "알림 설정", icon: "🔔", onClick: () => alert("알림 설정 클릭") },
    { label: "개인정보 보호 설정", icon: "🛡️", onClick: () => alert("개인정보 보호 설정 클릭") },
    { label: "서버 프로필 편집", icon: "✏️", onClick: () => alert("서버 프로필 편집 클릭") },
    { label: "알림 끈 채널 숨기기", icon: "📪", onClick: () => alert("알림 끈 채널 숨기기 클릭") },
    { label: "서버 나가기", icon: "🚪", danger: true, onClick: () => alert("서버 나가기 클릭") },
  ];

  const chatChannels = ["일반"];
  const voiceChannels = ["일반"];
  const [isVoiceChannelOpen, setIsVoiceChannelOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    console.log("Current pathname:", pathname); // 디버그용
    if (pathname === "/voice-channel") {
      setIsVoiceChannelOpen(true); // voice-channel로 이동 시 열림
    }
  }, [pathname]);

  return (
    <div>
      {/* Dropdown Menu */}
      <DropdownMenu title={title} menuItems={menuItems} />

      {/* 이벤트 섹션 */}
      <div className="mb-4">
        <SidebarItem icon="/event.png" label="이벤트" isActive={false} />
      </div>

      {/* 채팅 채널 섹션 */}
      <div className="mb-4 mt-2">
        <CollapsibleSection title="채팅 채널">
          <ul className="space-y-2">
            {chatChannels.map((channel, index) => (
              <div
                key={index}
                className="group flex items-center justify-between p-2 w-full h-11 hover:bg-gray-700 rounded cursor-pointer"
              >
                <ChannelItem name={channel} type="text" />
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="text-gray-400 hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Invite to ${channel}`);
                    }}
                  >
                    👤
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </CollapsibleSection>
      </div>

      {/* 음성 채널 섹션 */}
      <div className="mb-4">
        <CollapsibleSection title="음성 채널" isOpen={isVoiceChannelOpen} // 상태값 전달
        setIsOpen={setIsVoiceChannelOpen}>
          <ul className="space-y-2">
            {voiceChannels.map((channel, index) => (
              <div key={index}>
                {/* Link를 사용하여 /voice-channel로 이동 */}
                <Link href="/voice-channel">
                  <div
                    className="group flex items-center justify-between p-2 w-full h-11 hover:bg-gray-700 rounded cursor-pointer"
                    onClick={() =>
                      setSelectedVoiceChannel((prev) =>
                        prev === channel ? null : channel
                      )
                    }
                  >
                    <ChannelItem name={channel} type="voice" />
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
                      <button
                        className="text-gray-400 hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Send message to ${channel}`);
                        }}
                      >
                        💬
                      </button>
                      <button
                        className="text-gray-400 hover:text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          alert(`Invite to ${channel}`);
                        }}
                      >
                        👤
                      </button>
                    </div>
                  </div>
                </Link>

                {/* SidebarItem: 선택된 음성 채널에만 표시 */}
                {selectedVoiceChannel === channel && (
                  <div className="mt-2">
                    <SidebarItem icon="/nitro.png" label="홍길동" />
                  </div>
                )}
              </div>
            ))}
          </ul>
        </CollapsibleSection>
      </div>
    </div>
  );
}
