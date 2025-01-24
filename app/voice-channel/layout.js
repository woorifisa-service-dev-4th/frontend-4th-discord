import "../globals.css";

export default function VoiceChannelLayout({ children }) {
  return (
    <div className="flex flex-1">
      {/* Left Sidebar (Server List + Channel List) */}
      <div className="flex">        
        {/* Channel List */}
        <aside className="w-60 bg-discordGray flex flex-col py-4 px-2">
          {/* search form */}
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-gray-300">Channels</h2>
            <div className="space-y-2">
            </div>
          </div>
        </aside>
      </div>
      <div className="flex flex-1">
        { children }
      </div>
    </div>
  );
}
