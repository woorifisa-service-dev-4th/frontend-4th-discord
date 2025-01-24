import Image from "next/image";
import FriendsBtn from "./FriendsBtn";

export default function InitialChatForm({imageUrl,nickname,name,serverCount}) {
  
  return (
    <>
    <Image src={imageUrl} alt="유저이미지" className="w-20 h-20 rounded-full mb-2"></Image>

    <p className="font-bold text-3xl mb-3">{name}</p>
    <p className="font-semibold text-2xl mb-4">{nickname}</p>
    <div className="flex mb-4">
      <p className="font-semibold flex flex-wrap text-[#b5bac1]">{name}</p>
      <p className="text-[#b5bac1]">님과 나눈 다이렉트 메세지의 첫 부분이에요.</p>
    </div>
    <div className="flex flex-wrap md:flex-nowrap">
      <div className="flex mr-10 justify-center">
        {serverCount===0 ? (
            <p className="text-sm text-[#b5bac1]">같이 있는 서버가 없음.</p>
          ): ( <button className="text-sm text-[#b5bac1]">같이 있는 서버 {serverCount}개 </button>)
          }
      </div>
        <div className='flex'>
          <FriendsBtn>친구 삭제하기</FriendsBtn>
          <FriendsBtn>차단하기</FriendsBtn>
        </div>
      </div>

    
    </>
  );
}