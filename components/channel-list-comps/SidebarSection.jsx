import Image from 'next/image';

const SidebarItem = ({ icon, label, isActive, href }) => {
  return (

      <div
        className={`flex items-center p-2 rounded-md cursor-pointer min-w-[160px] ${
          isActive
            ? 'bg-gray-600 text-white'
            : 'bg-[#2b2d31] text-gray-300 hover:bg-discordGray hover:text-white'
        }`}
      >
        <Image
           src={icon}
           alt="User Avatar"
           width={24}
           height={24}
           className="rounded-full ml-2"
         />
        <span className="ml-3 text-sm">{label}</span>
      </div>

  );
};

export default SidebarItem;
