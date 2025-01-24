import {ChannelBar} from "@/ui/channelBar";
import SideBar from "@/ui/siderBar";
import {ContentUi} from "@/ui/contentUi";
import {ContentTabUi} from "@/ui/contentTabUi";
import {Content} from "@/ui/content";
import {MessageForm} from "@/components/search-comps/MessageForm";

export default function ChannelPage() {
    return (
        <div className="flex flex-1 relative">
            <ChannelBar>
                <div>채널이름</div>
                
                <SideBar>
                    <div>채널 1</div>
                    <div>채널 2</div>
                    <div>채널 3</div>
                </SideBar>
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
  