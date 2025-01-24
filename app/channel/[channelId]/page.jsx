import {ChannelBar} from "@/ui/channelBar";
import SideBar from "@/ui/siderBar";
import {ContentUi} from "@/ui/contentUi";
import {ContentTabUi} from "@/ui/contentTabUi";
import {Content} from "@/ui/content";
import {MessageForm} from "@/components/search-comps/MessageForm";
import Sidebar from "@/components/channel-list-comps/SidebarChannel";

export default function ChannelPage() {
    return (
        <div className="flex flex-1 relative">
            <ChannelBar>
                <Sidebar 
                    title = "WORRI-FISA"
                />
            </ChannelBar>
            <ContentUi>
                {/*Second Header*/}
                <ContentTabUi>
                    <div className={"flex"}>
                        # 채널이름
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
  