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
import UserProfileBar from "@/components/channel-list-comps/UserBar";
import {FrenidsEmpty} from "@/components/frenidsEmpty";




export default function Home() {
    return (
        <div className="flex flex-1">
            <ChannelBar>
                <SearchFrom defaultValue={"대화 찾기"}/>
                <SideBar>
                    <SidebarItem icon={"/friend.png"} label={"친구"} isActive={false} href={'/direct-message'}/>
                    <SidebarItem icon={"/nitro.png"} label={"Nitro"} isActive={false}/>
                    <SidebarItem icon={"/shop.png"} label={"상점"} isActive={false}/>
                </SideBar>

                <div className="mt-auto">
                {/* UserProfileBar: 유저 프로필 */}
                <UserProfileBar
                    imageUrl="/assets/discord_blue.png"
                    stateIcon="/assets/status-online.svg"
                    username="홍길동"
                    statusMessage="온라인"
                />  
                </div>
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
                    <div className={"flex flex-1 justify-center items-center mx-12"}>
                        <FrenidsEmpty src={"/assets/empty-friends-background.svg"} alt={"현재 접속중인 친구가 없어요 ..."} w={421} h={218}/>
                    </div>
                </Content>

            </ContentUi>
        </div>
    );
}
