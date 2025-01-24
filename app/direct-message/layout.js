'use client'
import "../globals.css";
import { FindDmForm } from "@/components/search-comps/FindDmForm";
import DmOverlay from "@/components/dm-comps/OverlayForm";
import { useState } from "react";


export default function MainLayout({ children }) {
  const [isOverlayOpen, setOverlayOpen] = useState(false);

  return (
    <div className="flex flex-1">
      {/* Left Sidebar (Server List + Channel List) */}
      <div className="flex">
        {/* Server List */}
        <aside className="w-16 bg-[#202225] flex flex-col items-center py-4 space-y-4">
          {/* 서버 넣어주시면 됩니다 */}
        </aside>

        {/* Channel List */}
        <aside className="w-60 bg-[#2b2d31] flex flex-col py-3 px-1">
          <FindDmForm />
          
          <div className="mb-4">

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
          {/*테스트 버튼 */}
          <butto className='text-white' onClick={() => setOverlayOpen(!isOverlayOpen)}>버튼</butto>
        </div>

        {/* Chat Area + Footer */}
        <div className="flex flex-1">
          {/* Chat Area */}
          <main className="flex-1 flex flex-col">
            <div className="flex-1 overflow-y-auto p-4">{children}</div>
            {/* Footer */}
          </main>
          {isOverlayOpen && (
        <DmOverlay/>
      )}
          
        </div>
        {/* 오버레이 */}
        
      
      </section>
      
    </div>
  );
}
