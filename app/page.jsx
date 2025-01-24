import Image from "next/image";
import {SearchFrom} from "@/components/search-comps/SearchForm";
import SideBar from "@/ui/siderBar";
import SidebarItem from "@/components/channel-list-comps/SidebarSection";
import {RxDividerVertical} from "react-icons/rx";
import {TabBar} from "@/ui/tabBar";
import TabItem from "@/components/channel-list-comps/TabItem";
import {ChannelBar} from "@/ui/channelBar";
import {ContentUi} from "@/ui/contentUi";
import {ContentTabUi} from "@/ui/contentTabUi";
import {Content} from "@/ui/content";

export default function Home() {
    return (
        <div className="flex flex-1">
            <ChannelBar>
                <SearchFrom defaultValue={"대화 찾기"}/>
                <SideBar>
                    <SidebarItem icon={"/friend.png"} label={"친구"} isActive={false}/>
                    <SidebarItem icon={"/nitro.png"} label={"Nitro"} isActive={false}/>
                    <SidebarItem icon={"/shop.png"} label={"상점"} isActive={false}/>
                </SideBar>
            </ChannelBar>
            <ContentUi>
                {/*Second Header*/}
                <ContentTabUi>
                    <div className={"flex"}>
                        <Image src={"/friend.png"} alt={"친구"} width={20} height={30}/>
                        <span className={"text-sm pl-3 mt-[2px]"}>친구</span>
                        <RxDividerVertical size={25} color={"gray"} className={"ml-2"}/>
                    </div>
                    <TabBar>
                        <TabItem label={"온라인"} isActive={false}/>
                        <TabItem label={"모두"} isActive={false}/>
                        <TabItem label={"대기중"} isActive={false}/>
                        <TabItem label={"추천"} isActive={false}/>
                        <TabItem label={"차단 목록"} isActive={false}/>
                    </TabBar>
                </ContentTabUi>
                <Content>
                    main페이지 : 친구들 보여주기
                </Content>

            </ContentUi>
        </div>
    );
}
