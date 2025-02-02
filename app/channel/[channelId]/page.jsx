import {ChannelBar} from "@/ui/channelBar";
import SideBar from "@/ui/siderBar";
import {ContentUi} from "@/ui/contentUi";
import {ContentTabUi} from "@/ui/contentTabUi";
import {Content} from "@/ui/content";
import {MessageForm} from "@/components/search-comps/MessageForm";
import Sidebar from "@/components/channel-list-comps/SidebarChannel";
import UserProfileBar from "@/components/channel-list-comps/UserBar";
import {FrenidsEmpty} from "@/components/frenidsEmpty";

export default function ChannelPage() {
    const title = "WORRI-FISA" //임시 데이터
    return (
        <div className="flex flex-1 ">
            
            <div className="flex w-60"> 
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
                    username="홍길동"
                    statusMessage="온라인"
                />  
                </div>

                </ChannelBar>
            </div>

            <ContentUi>
                {/*Second Header*/}
                <ContentTabUi>
                    <div className={"flex"}>
                        {title}
                    </div>
                </ContentTabUi>
                
                <Content>
                    {/*channel 페이지 : 채널에서 채팅 친 내용*/}
                    <div className={"flex flex-1 justify-center items-center mx-12"}>
                        <FrenidsEmpty src={"/assets/thread-icon.svg"} alt={"채팅을 시작할 수 있어요!"} w={200} h={200}/>
                    </div>
                </Content>
                {/*<MessageForm defaultValue={"나"}/>*/}
                {/*     Chat Area + Footer*/}

            </ContentUi>

            
        </div>
    );
  }
  