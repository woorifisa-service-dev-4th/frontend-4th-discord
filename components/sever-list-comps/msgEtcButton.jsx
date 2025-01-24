'use client'
import talk from '@/public/assets/talk_image.png';
import etc from '@/public/assets/etc_image.png';
import Image from 'next/image';
import { useState } from 'react';
export default function MsgEtcButton({property}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const value = property==="msg"? talk : etc;
  const tooltipText = property==="msg"? "메세지 보내기": "기타";
  return (
    <div className="relative w-10 h-10 bg-discordGray rounded-full">
      <button
        onMouseEnter={() => setShowTooltip(true)} // 마우스 올릴 때 툴팁 표시
        onMouseLeave={() => setShowTooltip(false)} // 마우스 벗어날 때 툴팁 숨김
        className="w-full h-full flex items-center justify-center"
      >
        <Image src={value} alt="Button Image" />
      </button>
      {showTooltip && (
        <div className="absolute font-semibold -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-md p-2 rounded-md shadow-lg z-50 whitespace-nowrap">
          {tooltipText}
          <div
            className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2
              w-0 h-0 border-l-[6px] border-l-transparent 
              border-r-[6px] border-r-transparent
              border-t-[6px] border-t-gray-900"
          ></div>
        </div>
      )}
    </div>
  );
}