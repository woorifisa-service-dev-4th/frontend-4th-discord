// "use client"
//
// import "../globals.css";
// import SideBar from "@/ui/siderBar";
// import SidebarItem from "@/components/channel-list-comps/SidebarSection";
// import friend from "@/public/friend.png"
// import ServerIconButton from "@/components/sever-list-comps/serverIconButton";
// import {sideBarData} from "@/db/initData";
// import {TabBar} from "@/ui/tabBar";
// import TabItem from "@/components/channel-list-comps/TabItem";
// import Image from "next/image";
// import { RxDividerVertical } from "react-icons/rx";
// import {MessageForm} from "@/components/search-comps/MessageForm";
// import {SearchFrom} from "@/components/search-comps/SearchForm";
//
//
// export default function MainLayout({ children }) {
//     return (
//         <div className="flex flex-1">
//             {/* Left Sidebar (Server List + Channel List) */}
//
//
//             {/* Main Content */}
//             <section className="flex flex-col w-full">
//                 {/* Second Header */}
//                 <div className="h-12 flex items-center px-4 space-x-4 border-b border-black">
//                     {/* 탭 아이템 */}
//                     <div className={"flex"}>
//                         <Image src={"/friend.png"} alt={"친구"} width={20} height={30}/>
//                         <span className={"text-sm pl-3 mt-[2px]"}>친구</span>
//                         <RxDividerVertical size={25} color={"gray"} className={"ml-2"}/>
//                     </div>
//                     <TabBar>
//                         <TabItem label={"온라인"} isActive={false}/>
//                         <TabItem label={"모두"} isActive={false}/>
//                         <TabItem label={"대기중"} isActive={false}/>
//                         <TabItem label={"추천"} isActive={false}/>
//                         <TabItem label={"차단 목록"} isActive={false}/>
//                     </TabBar>
//                 </div>
//
//                 {/* Chat Area + Footer */}
//                 <div className="flex flex-1">
//                     {/* Chat Area */}
//                     <[dmId] className="flex-1 flex flex-col">
//                         <div className="flex-1 overflow-y-auto p-4">{children}</div>
//                         {/* Footer */}
//                     </[dmId]>
//
//                     {/* Right Sidebar (User List) */}
//                     <aside className="w-60 bg-discordGray flex flex-col py-4 px-2">
//                         {/* 유저 목록 */}
//                         <p className="text-xs font-semibold text-gray-300">온라인 -3</p>
//                         <ul className="space-y-2">
//                             {/* 유저 1 2 3 */}
//                         </ul>
//                     </aside>
//                 </div>
//             </section>
//         </div>
//     );
// }
