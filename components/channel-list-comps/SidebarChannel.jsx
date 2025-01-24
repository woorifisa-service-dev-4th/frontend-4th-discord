'use client';

import { useState } from "react";
import DropdownMenu from "@/components/header-comps/Dropdown";
import CollapsibleSection from "@/components/channel-list-comps/Channel";
import ChannelItem from "./ChannelItem";
import SidebarItem from "./SidebarSection";

export default function Sidebar({ title }) {
  const [selectedVoiceChannel, setSelectedVoiceChannel] = useState(null); // 선택된 음성 채널 상태

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
              <button
                key={index}
                className="group flex items-center justify-between p-2 w-full h-11 hover:bg-gray-700 rounded"
              >
                {/* 채널 이름 */}
                <ChannelItem name={channel} type="text" />
                {/* 오른쪽 아이콘 */}
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
              </button>
            ))}
          </ul>
        </CollapsibleSection>
      </div>

      {/* 음성 채널 섹션 */}
      <div className="mb-4">
        <CollapsibleSection title="음성 채널">
          <ul className="space-y-2">
            {voiceChannels.map((channel, index) => (
              <div key={index}>
                <button
                  className="group flex items-center justify-between p-2 w-full h-11 hover:bg-gray-700 rounded"
                  onClick={() =>
                    setSelectedVoiceChannel((prev) =>
                      prev === channel ? null : channel // 선택/해제
                    )
                  }
                >
                  {/* 채널 이름 */}
                  <ChannelItem name={channel} type="voice" />
                  {/* 오른쪽 아이콘 */}
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
                </button>

                {/* SidebarItem: 선택된 음성 채널에만 표시 */}
                {selectedVoiceChannel === channel && (
                  <div className="p-0 h-[10%] w-[80%] max-w-sm mx-auto">
                    <SidebarItem icon="/nitro.png" label="홍길동"
                    />
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
