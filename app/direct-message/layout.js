'use client'
import SidebarItem from "@/components/channel-list-comps/SidebarSection";
import DmOverlay from "@/components/dm-comps/OverlayForm";
import { FindDmForm } from "@/components/search-comps/FindDmForm";
import SideBar from "@/ui/siderBar";
import { useState } from "react";
import plus from "@/public/assets/channel-plus.svg"
import Image from "next/image";


export default function MainLayout({ children }) {
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  const name = "이원빈";
  const nickname = "iwonbeen";

  return (
    <div className="flex flex-1 overflow-visible">
      
      <div className="flex">
        <aside className="w-16 bg-[#202225] flex flex-col items-center py-4 space-y-4">
        
        </aside>

        <aside className="w-60 bg-[#2b2d31] flex flex-col py-3 px-1 z-10">
          <FindDmForm />
          <SideBar>
                    <SidebarItem icon={"/friend.png"} label={"친구"} isActive={false}/>
                    <SidebarItem icon={"/nitro.png"} label={"Nitro"} isActive={false}/>
                    <SidebarItem icon={"/shop.png"} label={"상점"} isActive={false}/>
                </SideBar>
          <div className='flex justify-between justify-center p-3 font-bold mt-3'>
            <p className='text-sm text-gray-400'>다이렉트 메세지</p>
            <button>
              <Image src={plus} alt="+" className="w-3 h-3 grayscale brightness-75" />
            </button>
          </div>
        </aside>
      
      </div>

      {/* Main Content */}
      <section className="flex flex-col w-full overflow-visible"> 
        <div className="h-12 flex items-center px-4 space-x-4 border-b border-black">
          <button className='text-white' onClick={() => setOverlayOpen(!isOverlayOpen)}>버튼</button>
        </div>

        {/* Chat Area */}
        <div className="flex flex-1 overflow-visible "> {/* ✅ `overflow-visible` 적용 */}
          <main className="flex-1 flex flex-col overflow-visible ">
            <div className="flex-1 overflow-y-auto p-4 ">{children}</div>
          </main>

          {isOverlayOpen && (
            <DmOverlay imgUrl={profile} state={online} name={name} nickname={nickname}/>
          )}
        </div>
      </section>
    </div>
  );
}
