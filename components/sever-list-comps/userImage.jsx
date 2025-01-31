import Image from "next/image";

export default function UserImage({imageUrl,state,size}) {
  const urlDimension = size === "big" ? 20 : size === "mid" ?  10: 8;
  const stateDimension = size === "big" ? 6 : size === "mid" ?  4: 1;
  const location = size === "big"?1 :0;
  const width = size ==='big'?80 :64;
  return (
    <div className={`relative w-${urlDimension} h-${urlDimension} bg-[#232428] rounded-full`}>
      <Image
        src={imageUrl}
        alt="User Image"
        className="rounded-full p-1"
        width={width}
        height={width}
        objectFit="cover"
      />
      <div className={`absolute bottom-1 right-1 w-${stateDimension} h-${stateDimension} bg-[#232428] p-2 rounded-full`}>
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