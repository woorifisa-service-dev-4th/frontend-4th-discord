'use client'
import { useState } from 'react';
import Image from 'next/image';

const SidebarItemWithClose = ({ icon, label, isActive, onRemove }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center p-2 rounded-md cursor-pointer min-w-[160px] ${
        isActive
          ? 'bg-gray-600 text-white'
          : 'bg-discordDark text-gray-300 hover:bg-gray-600 hover:text-white'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={icon} alt={label} width={24} height={24} />
      <span className="ml-3 text-sm flex-1">{label}</span>
      {isHovered && (
        <button
          onClick={onRemove}
          className="text-gray-300 hover:text-white"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SidebarItemWithClose;
