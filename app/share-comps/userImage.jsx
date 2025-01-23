import Image from "next/image";

export default function UserImage({imageUrl,state,size}) {
  const urlDimension = size === "big" ? 20 : size === "mid" ?  10: 8;
  const stateDimension = size === "big" ? 6 : size === "mid" ?  4: 1;
  const location = size === "big"?1 :0;
  const padding = size ==="small"? 2:2;
  return (
    <div className={`relative w-${urlDimension} h-${urlDimension}`}>
    
      <Image
        src={imageUrl}
        alt="User Image"
        className="rounded-full"
        layout="fill"
        objectFit="cover"
      />

      {/* 상태 이미지 */}
      <div className={`absolute bottom-${location} right-${location} w-${stateDimension} h-${stateDimension} bg-discordDark p-${padding} rounded-full`}>
        <Image
          src={state}
          alt="State Icon"
          layout="fill" 
          objectFit="contain"
          className='p-1'
        />
      </div>
    </div>
  );
}