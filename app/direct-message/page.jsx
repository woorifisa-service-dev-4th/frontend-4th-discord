'use client';
import { useState } from "react";
import InitialChatForm from "@/components/dm-comps/InitialChatFrom";
import { MessageForm } from "@/components/search-comps/MessageForm";
import hello from "@/public/assets/waving.gif";
import myProfileImage from "@/public/assets/discord_green.png"; // ✅ "나"의 프로필 이미지 추가
import SidebarItem from "@/components/channel-list-comps/SidebarSection";
import { FindDmForm } from "@/components/search-comps/FindDmForm";
import SideBar from "@/ui/siderBar";
import plus from "@/public/assets/channel-plus.svg";
import Image from "next/image";
import DmUserList from "@/components/dm-comps/DmUserList";
import GDiscord from "@/public/assets/discord_green.png";
import offline from "@/public/assets/status-offline.svg";
import DmOverlay from "@/components/dm-comps/OverlayForm"; // ✅ DmOverlay 추가
import userIcon from "@/public/assets/user-btn-icon.png";
import UserProfileBar from "@/components/channel-list-comps/UserBar";
import { TabBar } from "@/ui/tabBar";
import TabItem from "@/components/channel-list-comps/TabItem";

export default function DirectMessagePage() {
  const [messages, setMessages] = useState([]);
  const [hoveredMessageIndex, setHoveredMessageIndex] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null); // 🔹 선택된 유저 상태 추가
  const [isOverlayOpen, setIsOverlayOpen] = useState(false); // 🔹 우측 창 열림/닫힘 상태 추가
  const [users, setUsers] = useState([
    { id: 1, name: "이원빈", image: GDiscord, state: offline },
    { id: 2, name: "김철수", image: GDiscord, state: offline },
    { id: 3, name: "박영희", image: GDiscord, state: offline },
  ]);

  // 🔹 유저 삭제 함수
  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
    if (selectedUser?.id === id) {
      setSelectedUser(null); // 선택된 유저 삭제 시 초기화
      setIsOverlayOpen(false); // 오버레이 닫기
    }
  };

  const handleWaveClick = () => {
    setMessages((prev) => [
      ...prev,
      {
        sender: "나",
        senderImage: myProfileImage, // ✅ "나"의 이미지 추가
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
          senderImage: myProfileImage, // ✅ "나"의 이미지 추가
          time: `오늘 ${currentTime}`,
          content: message,
        },
      ]);
    }
  };

  return (
    <>
      <div className="flex flex-1 overflow-visible relative">
        <div className="flex">
          {/* 사이드바 */}
          <aside className="w-60 bg-[#2b2d31] flex flex-col py-3 px-1 z-10">
            <FindDmForm />
            <SideBar>
              <SidebarItem icon={"/friend.png"} label={"친구"} isActive={false}/>
              <SidebarItem icon={"/nitro.png"} label={"Nitro"} isActive={false}/>
              <SidebarItem icon={"/shop.png"} label={"상점"} isActive={false}/>
            </SideBar>
            
            <div className='flex justify-between items-center p-3 font-bold mt-3'>
              <p className='text-sm text-gray-400'>다이렉트 메세지</p>
              <button>
                <Image src={plus} alt="+" className="w-3 h-3 grayscale brightness-75" />
              </button>
            </div>

            {/* 🔹 유저 목록 */}
            <div>
              {users.map((user) => (
                <DmUserList 
                  key={user.id} 
                  id={user.id}
                  name={user.name} 
                  imageUrl={user.image} 
                  state={user.state} 
                  isSelected={selectedUser?.id === user.id}
                  onSelect={() => {
                    setSelectedUser(user);
                    setIsOverlayOpen(true); // 🔹 유저 선택 시 오버레이 열기
                  }} 
                  onDelete={() => handleDeleteUser(user.id)}
                />
              ))}
            </div>

            <div className="mt-auto sticky bottom-0">
              {/* UserProfileBar: 유저 프로필 */}
              <UserProfileBar
                imageUrl="/assets/discord_blue.png"
                stateIcon="/assets/status-online.svg"
                username="홍길동"
                statusMessage="온라인"
              />
            </div>
          </aside>
        </div>

        {/* 메인 채팅 화면 */}
        <section className="flex flex-col w-full overflow-visible">
          <div className="h-12 flex items-center px-4 space-x-4 border-b border-black">
            <TabBar>
              <TabItem label={"온라인"} isActive={false}/>
              <TabItem label={"모두"} isActive={false}/>
              <TabItem label={"대기중"} isActive={false}/>
              <TabItem label={"추천"} isActive={false}/>
              <TabItem label={"차단 목록"} isActive={false}/>
            </TabBar>
          </div>

          <div className="flex flex-1 p-9">
            {selectedUser ? (
              <div className="flex-1 p-4">
                <InitialChatForm 
                  imageUrl={selectedUser.image} 
                  name={selectedUser.name} 
                  nickname={selectedUser.name} 
                  serverCount={1} 
                />

                {messages.length === 0 && (
                  <div className="w-full mb-6 flex flex-col">
                    <Image src={hello} alt="hello" className="h-60 w-60 ml-10 translate-x-10" />
                    <button
                      onClick={handleWaveClick}
                      className="bg-[#5765f2] py-2 w-[400px] text-sm rounded-md mt-2"
                    >
                      {selectedUser.name}에게 손 흔들기
                    </button>
                  </div>
                )}

                <div className="mt-4">
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start ${index === 0 ? "mt-4" : "mt-1"} relative`}>
                      {index === 0 && (
                        <Image 
                          src={msg.sender === "나" ? myProfileImage : selectedUser.image} 
                          alt="프로필" 
                          className="w-10 h-10 rounded-full mr-3" 
                        />
                      )}
                      <div>
                        <p className="text-sm font-semibold">{msg.sender}</p>
                        <p className="text-xs text-gray-400">{msg.time}</p>
                        <p className="text-sm">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 메시지 입력 폼 */}
                <div className="fixed bottom-5 w-2/3">
                  <MessageForm name={selectedUser.name} onSendMessage={handleSendMessage} />
                </div>
              </div>
            ) : (
              <div className="flex-1 flex justify-center items-center text-gray-400">
                채팅할 유저를 선택하세요.
              </div>
            )}
          </div>
        </section>

        {isOverlayOpen && selectedUser && (
          <DmOverlay 
            imgUrl={selectedUser.image} 
            state={selectedUser.state} 
            name={selectedUser.name} 
            nickname={selectedUser.name} 
          />
        )}
      </div>
    </>
  );
}
