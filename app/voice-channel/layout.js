import "../globals.css";

export default function VoiceChannelLayout({ children }) {
  return (
    <div className="flex flex-1">
      {/* Left Sidebar (Server List + Channel List) */}
      <div className="flex">
        {/* Server List */}
        <aside className="w-16 bg-discordSidebar flex flex-col items-center py-4 space-y-4">
          {/* 서버 넣어주시면 됩니다 */}
        </aside>

        {/* Channel List */}
        <aside className="w-60 bg-discordGray flex flex-col py-4 px-2">
          {/* search form */}
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-gray-300">Channels</h2>
            <div className="space-y-2">
              {/* 채널 목록 */}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
