import UserImage from "../sever-list-comps/userImage";
import GreenImg from "@/public/assets/discord_green.png";
import greyImg from "@/public/assets/discord_grey.png";

export default function DmUserList({ id, name, imageUrl, state, isSelected, onSelect, onDelete }) {

  return (
    <div
      className={`flex items-center p-1 rounded-md cursor-pointer transition-colors relative group
        ${isSelected ? "bg-gray-600" : "hover:bg-gray-700"}`}
      onClick={onSelect} // 🔹 클릭 시 선택된 유저 변경
    >
      <UserImage imageUrl={imageUrl} state={state} size={"mid"} className="ml-3" />

      <p className="ml-3 text-gray-400 text-l font-bold">{name}</p>

      <button 
        className={`ml-auto mr-3 text-gray-500 font-bold transition-opacity
          opacity-0 group-hover:opacity-100 ${isSelected ? "opacity-100" : ""}`}
        onClick={(e) => {
          e.stopPropagation(); 
          onDelete(id); 
        }}
      >
        ✖
      </button>
    </div>
  );
}
