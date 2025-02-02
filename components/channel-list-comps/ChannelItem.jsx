'use client';

import { FaHashtag, FaVolumeUp, FaUserPlus, FaCommentAlt } from "react-icons/fa";

export default function ChannelItem({ name, type, onInvite, onMessage }) {
  // 채널 타입에 따른 아이콘
  const icon = type === "text" ? <FaHashtag /> : <FaVolumeUp />;

  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-700 rounded cursor-pointer">
      {/* Left: Icon and Name */}
      <div className="flex items-center space-x-2 text-gray-300">
        <span>{icon}</span>
        <span>{name}</span>
      </div>

      {/* Right: Buttons */}
      <div className="flex items-center space-x-2">
        {onMessage && (
          <button
            onClick={onMessage}
            className="p-1 text-gray-400 hover:text-white"
            title="Message"
          >
            <FaCommentAlt />
          </button>
        )}
        {onInvite && (
          <button
            onClick={onInvite}
            className="p-1 text-gray-400 hover:text-white"
            title="Invite"
          >
            <FaUserPlus />
          </button>
        )}
      </div>
    </div>
  );
}
