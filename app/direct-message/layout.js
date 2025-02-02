'use client'
import SidebarItem from "@/components/channel-list-comps/SidebarSection";
import { FindDmForm } from "@/components/search-comps/FindDmForm";
import SideBar from "@/ui/siderBar";
import { useState } from "react";
import plus from "@/public/assets/channel-plus.svg";
import Image from "next/image";
import DmUserList from "@/components/dm-comps/DmUserList";
import GDiscord from "@/public/assets/discord_green.png";
import offline from "@/public/assets/status-offline.svg";
import DirectMessagePage from "./page";

export default function MainLayout({  }) {
  const [selectedUser, setSelectedUser] = useState(null); // 🔹 선택된 유저 상태 추가
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
    }
  };

  return (
    <div className="flex flex-1 overflow-visible">
      <div className="flex">
        <aside className="w-16 bg-[#202225] flex flex-col items-center py-4 space-y-4"></aside>
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

          {/* 🔹 배열을 `map()`을 사용하여 DmUserList 컴포넌트 여러 개 생성 */}
          <div>
            {users.map((user) => (
              <DmUserList 
                key={user.id} 
                id={user.id}
                name={user.name} 
                imageUrl={user.image} 
                state={user.state} 
                isSelected={selectedUser?.id === user.id}
                onSelect={() => setSelectedUser(user)} // 🔹 선택된 유저 업데이트
                onDelete={() => handleDeleteUser(user.id)}
              />
            ))}
          </div>
        </aside>
      </div>

      {/* 🔹 선택된 유저가 있으면 DirectMessagePage 렌더링 */}
      <section className="flex flex-col w-full overflow-visible m-10 p-3">
        {selectedUser ? (
          <DirectMessagePage selectedUser={selectedUser} />
        ) : (
          <div className="flex-1 flex justify-center items-center text-gray-400">
            채팅할 유저를 선택하세요.
          </div>
        )}
      </section>
    </div>
  );
}
