'use client';

import { useState, useRef, useEffect } from 'react';

const DropdownMenu = ({ title, menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* 드롭다운 버튼 */}
      <div
        className="flex items-center justify-between cursor-pointer p-2 text-gray-300 hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm font-medium">{title}</span>
        <span className="ml-2 text-lg">
          {isOpen ? '✖' : '▶'}
        </span>
      </div>

      {/* 드롭다운 메뉴 */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-64 bg-discordGray border border-gray-700 rounded-md shadow-lg z-50">
          <ul className="text-sm text-gray-300">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`flex items-center p-2 hover:bg-gray-700 ${
                  item.danger ? 'text-red-500' : ''
                }`}
                onClick={item.onClick}
              >
                {item.label}
                <span className="mr-2">{item.icon}</span>
                
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
