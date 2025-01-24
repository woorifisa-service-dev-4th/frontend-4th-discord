"use client"

import "./globals.css";
import {HeaderBar} from "@/ui/headerBar";
import { IoMdClose } from "react-icons/io";
import { VscChromeMinimize } from "react-icons/vsc";
import { IoIosSquareOutline } from "react-icons/io";
import SideBar from "@/ui/siderBar";
import {sideBarData} from "@/db/initData";
import ServerIconButton from "@/components/sever-list-comps/serverIconButton";
import {SearchFrom} from "@/components/search-comps/SearchForm";
import SidebarItem from "@/components/channel-list-comps/SidebarSection";
import Image from "next/image";
import {RxDividerVertical} from "react-icons/rx";
import {TabBar} from "@/ui/tabBar";
import TabItem from "@/components/channel-list-comps/TabItem";
export default function RootLayout({ children }) {
    function a(){
        console.log("cc");
    }

    return (
        <html lang="en">
        <body className="flex flex-col h-screen bg-discordDark text-white">
        {/* Header */}
        <header className="h-6 bg-discordSidebar flex  items-center justify-between">
            <h1 className="text-sm font-extrabold text-gray-500 ml-3">Discord</h1>
            <HeaderBar>
                <VscChromeMinimize color="gray" size={20} className={"mr-2"}/>
                <IoIosSquareOutline color="gray" size={20} className={"mr-2"}/>
                <IoMdClose color="gray" size={20} onClick={a} className={"mr-2"}/>
            </HeaderBar>
        </header>
        {/* [dmId] layout */}

        <div className="flex flex-1">
            {/*<div className="flex">*/}
                {/* Server List */}
                <aside className="w-16 bg-discordSidebar flex flex-col items-center py-4 space-y-4">
                    <SideBar>
                        {sideBarData.map((item, index) => (
                            <ServerIconButton key={index} imageUrl={item.imageUrl} name={item.name}/>
                        ))}
                    </SideBar>
                </aside>
            {children}
        </div>
        </body>
        </html>
    );
}
