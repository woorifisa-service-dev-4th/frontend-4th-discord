import UserImage from "../sever-list-comps/userImage";


export default function DmOverlay({ imgUrl, state, name , nickname }) {
  const tmpDate = "2018년 5월 12일";
  return (
    <div className="fixed right-0 w-1/4 h-full bg-[#232428] shadow-lg z-5">
      <div className="flex items-center bg-discordGreen w-full h-1/6 relative">
          <button className=" absolute -bottom-5 left-4 w-16 h-16 ">
            <UserImage imageUrl={imgUrl} state={state} size="big"/>
          </button>
        
      </div>

      <div className="text-white mt-10 px-4">
        <p className='text-xl font-bold '>{name}</p>
        <p className="font-light text-sm">{nickname}</p>
      </div>

      <div className="absolute left-9 w-5/6 bg-[#303136] text-white py-3 px-3 mt-4 rounded-md shadow-md">
        <p className='text-xs font-semibold mb-2'>가입시기:</p>
        <p className='text-sm font-thin'>{tmpDate}</p>
      </div>

      <div className="absolute w-full bottom-0 mb-9">
        <button className="bg-[#303136] text-[#8f969f] font-semibold py-3 w-full hover:text-white transition-all duration-200">
          전체 프로필 보기
        </button>
      </div>

    </div>

  );
}
