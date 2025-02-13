import Image from "next/image";

import {SectionTwoMain} from "@/components/search-comps/sectionTwoMain";
import {TabBarComp} from "@/components/tabBarComp";
import {ToolBar} from "@/components/toolBar";
import SidebarItem from "@/components/channel-list-comps/SidebarSection";
import UserProfileBar from "@/components/userProfileBar";
import {SectionTwo} from "@/ui/sectionTwo";
import {SectionTwoAndThree} from "@/ui/sectionTwoAndThree";
import SectionThree from "@/ui/sectionThree";
import SectionOneAndFour from "@/ui/sectionOneAndFour";
import SectionOne from "@/ui/sectionOne";
import SectionFour from "@/ui/sectionFour";
import UserProfileBarUi from "@/ui/userProfileBarUi";
import SectionThreeMain from "@/components/sectionThreeMain";
import SectionFourMain from "@/components/SectionFourMain";


export default function Home() {
    return (
        <div className={"flex flex-1"}>
            {/*sections 2,3*/}
            <SectionTwoAndThree>
                {/*section 2*/}
                <SectionTwo>
                    <SectionTwoMain/>
                </SectionTwo>
                {/*section 3*/}
                <SectionThree>
                    <SectionThreeMain/>
                </SectionThree>
                {/*고정 userProfileBar*/}
                <UserProfileBarUi>
                    <UserProfileBar
                        imageUrl="/assets/discord_blue.png"
                        stateIcon="/assets/status-online.svg"
                        username="이원빈"
                        statusMessage="온라인"
                    />
                </UserProfileBarUi>
            </SectionTwoAndThree>
            {/*sections 1,4*/}
            <SectionOneAndFour>
                {/*section 1*/}
                <SectionOne>
                    <TabBarComp/>
                    <ToolBar/>
                </SectionOne>
                {/*section 4*/}
                <SectionFour>
                    <SectionFourMain/>
                </SectionFour>
            </SectionOneAndFour>


        </div>
    );
}
