import {ChannelBar} from "@/ui/channelBar";
import SideBar from "@/ui/siderBar";
import {ContentUi} from "@/ui/contentUi";
import {ContentTabUi} from "@/ui/contentTabUi";
import {Content} from "@/ui/content";
import {MessageForm} from "@/components/search-comps/MessageForm";
import Sidebar from "@/components/channel-list-comps/SidebarChannel";
import UserProfileBar from "@/components/channel-list-comps/UserBar";

export default function ChannelPage() {
    const title = "WORRI-FISA" //임시 데이터
    return (
        <div className="flex flex-1 relative">
            <ChannelBar>
                <Sidebar 
                    title = {title}
                />


            {/* VoiceChannelConnected: 음성 채널 정보 */}
            
            <div className="mt-auto">
            {/* UserProfileBar: 유저 프로필 */}
            <UserProfileBar
                imageUrl="/assets/discord_blue.png"
                stateIcon="/assets/status-online.svg"
                username="이원빈"
                statusMessage="온라인"
            />
            </div>


            </ChannelBar>
            <ContentUi>
                {/*Second Header*/}
                <ContentTabUi>
                    <div className={"flex"}>
                        {title}
                    </div>
                </ContentTabUi>
                
                <Content>
                    channel 페이지 : 채널에서 채팅 친 내용
                </Content>
                <MessageForm defaultValue={"나"}/>
                {/*     Chat Area + Footer*/}

            </ContentUi>

            
        </div>
    );
  }
  