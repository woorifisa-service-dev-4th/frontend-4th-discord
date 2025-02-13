"use client"

import "./globals.css";
import SideBar from "@/ui/siderBar";
import {sideBarData} from "@/db/initData";
import ServerIconButton from "@/components/sever-list-comps/serverIconButton";
import {SideUi} from "@/ui/sideUi";
export default function RootLayout({ children }) {
    function a(){
        console.log("cc");
    }

    return (
        <html lang="en">
        <body className="flex w-screen h-screen bg-discordDark text-white overflow-y-hidden">
        {/*맨 왼쪽 sideBar 구간*/}
        <div className="flex h-full w-[72px] bg-discordSidebar overflow-y-auto custom-scrollbar">
            {/*맨왼쪽 sideUi*/}
            <SideUi>
                <div>
                    <ServerIconButton
                        key={0}
                        imageUrl={"/assets/discord_blue.png"}
                        name={"me"}
                    />
                </div>
                <SideBar>
                    {sideBarData.map((item, index) => (
                        <ServerIconButton key={index} imageUrl={item.imageUrl} name={item.name}/>
                    ))}
                </SideBar>
            </SideUi>
        </div>
        {/*본문 내용 (1,2,3,4분면)*/}
            {children}
        </body>
        </html>
    );
}
