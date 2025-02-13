import TabItem from "@/components/channel-list-comps/TabItem";
import {RxDividerVertical} from "react-icons/rx";
import Image from "next/image";
export function TabBarComp(){
    return( <div className={"flex items-center overflow-hidden relative flex-1"}>
        <Image src={"/friend.png"} alt={"친구"} width={24} height={24} />
        <span className={"text-sm"}>친구</span>
        <RxDividerVertical size={25} color={"gray"} />
        <TabItem label={"온라인"} isActive={false} />
        <TabItem label={"모두"} isActive={false} />
        <TabItem label={"대기중"} isActive={false} />
        <TabItem label={"추천"} isActive={false} />
        <TabItem label={"차단 목록"} isActive={false} />
        <TabItem label={"친구 추가하기"} isActive={false} />
    </div>);
}