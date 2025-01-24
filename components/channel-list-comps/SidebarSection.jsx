import Link from 'next/link';
import Image from 'next/image';

const SidebarItem = ({ icon, label, isActive, href }) => {
  return (

      <div
        className={`flex items-center p-2 rounded-md cursor-pointer min-w-[160px] ${
          isActive
            ? 'bg-gray-600 text-white'
            : 'bg-discordGray text-gray-300 hover:bg-gray-600 hover:text-white'
        }`}
      >
        <Image src={icon} alt={label} width={24} height={24} />
        <span className="ml-4 text-sm">{label}</span>
      </div>

  );
};

export default SidebarItem;
