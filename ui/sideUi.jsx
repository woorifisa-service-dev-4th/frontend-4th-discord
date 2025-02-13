export function SideUi({children}){
    return (
        <aside className={
            "flex flex-col w-full items-center bg-discordSidebar h-full flex-shrink-0"
        }>
            {children}
        </aside>
    )
}