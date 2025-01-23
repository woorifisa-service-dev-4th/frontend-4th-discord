import "./globals.css";
import FriendItem from "./share-comps/FriendSection";
import SidebarItem from "./share-comps/SidebarSection";
import TabItem from "./share-comps/TabItem";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen bg-discordDark text-white">
        {/* Header */}
        <header className="h-6 bg-discordSidebar flex items-center px-4">
          <h1 className="text-sm font-extrabold text-gray-500">Discord</h1>
        </header>
        {/* main  */}
        <div className="flex flex-1">
          {/* Left Sidebar (Server List + Channel List) */}
          <div className="flex ">
            {/* Server List */}
            <aside className="w-16 bg-discordSidebar flex flex-col items-center py-4 space-y-4">
              {/* 서버 아이콘 아래는 예시*/}
              <div className="w-12 h-12 bg-discordAccent rounded-full"></div>
              <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
              <div className="w-12 h-12 bg-red-500 rounded-full"></div>
            </aside>
            {/* Chaneel List */}
            <aside className="w-60 bg-discordGray flex flex-col py-4 px-2">
              {/* 채널 목록 */}
              <div className="mb-4">
                <h2 className="text-sm font-semibold text-gray-300">Channels</h2>
                <div className="space-y-2">
                <SidebarItem
        icon="/friend.png"  // 아이콘 경로
        label="친구"         // 라벨 텍스트
        isActive={false}      // 활성 상태
        href="/friends"      // 링크 경로
      />
      <SidebarItem
        icon="/nitro.png"
        label="Nitro"
        isActive={false}
        href="/nitro"
      />
      <SidebarItem
        icon="/shop.png"
        label="상점"
        isActive={false}
        href="/shop"
      />
                  



                  <div className="p-2"># music</div>
                  <FriendItem
        icon="/friend.png"
        label="김성준"
        isActive={false}
      />
                <FriendItem
        icon="/friend.png"
        label="유승한"
        isActive={false}
        
      />
                      <FriendItem
        icon="/friend.png"
        label="이소연"
        isActive={false}
        
      />
                </div>
              </div>
            </aside>
          </div>
          <section className="flex flex-col w-full ">

            {/* Second Header */}
            <div className="h-12 flex items-center px-4 space-x-4 border-b border-black">
            <TabItem label="친구" isActive={false}  />
            <TabItem label="온라인" isActive={false} />
            <TabItem label="모두" isActive={false}  />
            <TabItem label="대기 중" isActive={false} />
            </div>

            {/* Chat Area + Right Sidebar */}
            <div className="flex flex-1">
              {/* Chat Area  */}
              <main className="flex-1 flex flex-col">
                {/* Chat Message */}
                <div className="flex-1 overflow-y-auto p-4">
                  chat
                </div>
                <footer className="h-16 bg-discordGray flex items-center px-4">
                  <input
                    type="text"
                    placeholder="chat placeholder"
                    className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  />
                </footer>
              </main>
              {/* Right sidebar (user list) */}
              <aside className="w-60 bg-discordGray flex flex-col py-4 px-2">
                {/* 유저 목록 */}
                <p className="text-xs font-semibold text-gray-300">온라인 -3</p>
                <ul className="space-y-2">
                  <li className="p-2  rounded-md">User 1</li>
                  <li className="p-2  rounded-md">User 2</li>
                  <li className="p-2  rounded-md">User 3</li>
                </ul>
              </aside>
            </div>
          </section>

        </div>
      </body>
    </html>
  );
}
