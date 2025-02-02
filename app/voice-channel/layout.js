import { ChannelBar } from "@/ui/channelBar";
import "../globals.css";
import Sidebar from "@/components/channel-list-comps/SidebarChannel";
import UserProfileBar from "@/components/channel-list-comps/UserBar";

export default function VoiceChannelLayout({ children }) {
  const title = "WORRI-FISA"; // 임시 데이터

  return (
    <div className="flex flex-1">
      {/* Left Sidebar (Server List + Channel List) */}
      <ChannelBar>
        <Sidebar title={title} />

        {/* VoiceChannelConnected: 음성 채널 정보 */}
        <div className="mt-auto">
          {/* UserProfileBar: 유저 프로필 */}
          <UserProfileBar
            imageUrl="/assets/discord_blue.png"
            stateIcon="/assets/status-online.svg"
            username="홍길동"
            statusMessage="온라인"
          />
        </div>
      </ChannelBar>

      {/* Main Content */}
      <div className="flex flex-1">
        {children}
      </div>
    </div>
  );
}
