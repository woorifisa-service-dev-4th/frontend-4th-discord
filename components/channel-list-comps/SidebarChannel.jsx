'use client';

import DropdownMenu from "@/components/header-comps/Dropdown";
import CollapsibleSection from "@/components/channel-list-comps/Channel";
import ChannelItem from "./ChannelItem";

export default function Sidebar() {
  const menuItems = [
    { label: '서버 부스트', icon: '🔗', onClick: () => alert('서버 부스트 클릭') },
    { label: '초대하기', icon: '👤', onClick: () => alert('초대하기 클릭') },
    { label: '서버 설정', icon: '⚙️', onClick: () => alert('서버 설정 클릭') },
    { label: '이벤트 만들기', icon: '📅', onClick: () => alert('이벤트 만들기 클릭') },
    { label: 'App 디렉터리', icon: '📂', onClick: () => alert('App 디렉터리 클릭') },
    { label: '알림 설정', icon: '🔔', onClick: () => alert('알림 설정 클릭') },
    { label: '개인정보 보호 설정', icon: '🛡️', onClick: () => alert('개인정보 보호 설정 클릭') },
    { label: '서버 프로필 편집', icon: '✏️', onClick: () => alert('서버 프로필 편집 클릭') },
    { label: '알림 끈 채널 숨기기', icon: '📪', onClick: () => alert('알림 끈 채널 숨기기 클릭') },
    { label: '서버 나가기', icon: '🚪', danger: true, onClick: () => alert('서버 나가기 클릭') },
  ];

  const chatChannels = ["일반", "공지사항", "업데이트"];

  return (
    <div>
      {/* Dropdown Menu */}
      <DropdownMenu title="원빈이와 태영이의 서버" menuItems={menuItems} />

      {/* Collapsible Section for Channels */}
      <CollapsibleSection title="채팅 채널">
        <ul className="space-y-2">
          {chatChannels.map((channel, index) => (
            <li
              key={index}
              className="text-gray-300 hover:bg-gray-700 rounded cursor-pointer p-2"
            >
              {channel}
            </li>
          ))}
        </ul>
      </CollapsibleSection>

      <ChannelItem
        name="일반"
        type="text"
        onInvite={() => alert("Invite to 일반")}
      />

      <CollapsibleSection title="음성 채널">
        <ul className="space-y-2">
          {chatChannels.map((channel, index) => (
            <li
              key={index}
              className="text-gray-300 hover:bg-gray-700 rounded cursor-pointer p-2"
            >
              {channel}
            </li>
          ))}
        </ul>
      </CollapsibleSection>

      <ChannelItem
      name="일반"
      type="voice"
      onMessage={() => alert("Send message to 일반")}
      onInvite={() => alert("Invite to 일반")}
/>

    </div>
  );
}
