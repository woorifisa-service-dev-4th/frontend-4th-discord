import InitialChatForm from "@/components/dm-comps/InitialChatFrom";
import { MessageForm } from "@/components/search-comps/MessageForm";
import tempImage from "@/public/assets/discord_green.png";
import Image from "next/image";
import hello from "@/public/assets/waving.gif";

export default function DirectMessagePage() {
  const name = "이원빈";
    return (
      <main className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          {/* Chat Messages */}
          <InitialChatForm imageUrl={tempImage} name={name} nickname={"iwonbeen"} serverCount={1}/>
          

          <div className={"fixed bottom-5 w-2/3"}>
            <MessageForm name={"이원빈"} />
          </div>
          
          <div className="w-full">
            <Image src={hello} alt="hello" className='h-60 w-60'></Image>
          <button className="bg-[#5765f2] py-3 text-sm w-1/4 rounded-md">{name}에게 손 흔들기</button>
        </div>
        </div>
      </main>
    );
  }
  