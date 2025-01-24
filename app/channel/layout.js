import "../globals.css";

export default function ChannelLayout({ children }) {
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

      {/* Main Content */}
      <section className="flex flex-col w-full">
        {/* Second Header */}
        <div className="h-12 flex items-center px-4 space-x-4 border-b border-black">
          {/* 탭 아이템 */}
        </div>

        {/* Chat Area + Footer */}
        <div className="flex flex-1">
          {/* Chat Area */}
          <main className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
            {/* Footer */}
            <footer className="h-16 bg-discordGray flex items-center px-4">
              <input
                type="text"
                placeholder="chat placeholder"
                className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
            </footer>
          </main>

          {/* Right Sidebar (User List) */}
          <aside className="w-60 bg-discordGray flex flex-col py-4 px-2">
            {/* 유저 목록 */}
            <p className="text-xs font-semibold text-gray-300">온라인 -3</p>
            <ul className="space-y-2">
              {/* 유저 1 2 3 */}
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}
