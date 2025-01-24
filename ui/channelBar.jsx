export function ChannelBar({children}) {
    return (
        <aside className="w-60 bg-discordGray flex flex-col py-4 px-2">
            {children}
        </aside>
    );
}