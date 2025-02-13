import Image from "next/image";

export function FrenidsEmpty({src,alt,w,h}) {
  return (
    <div>
      <div className={" fle x-1 f lex justify-center items-center mb-[40px]"}>
        <Image
          src={src}
          alt={"친구없음 "}
          width={w}
          height={h}
        />
      </div>
      <div className={"flex justify-center items-center"}>
          {alt}
      </div>
    </div>
  );
}
