import Image from "next/image";
import attach from "@/public/assets/attach-button.svg";

export function MessageForm({name}) {
    return (
        <div className={"flex items-center"}>
            <button 
                className={"flex items-center justify-center px-2 bg-[#383a40] py-2 focus:outline-none rounded-l-md"}
                style={{ height: "40px" }}
            >
                <Image
                    src={attach}
                    alt=""
                    width={24} 
                    height={24} 
                />
            </button>
            
            <input
                className={"bg-[#383a40] text-[#8f969f] w-full focus:outline-none rounded-r-md "}
                style={{ height: "40px", paddingLeft: "12px" }} 
                type="text"
                name="search"
                placeholder={`@${name}에 메시지 보내기`}
            />
        </div>
    

    );
}