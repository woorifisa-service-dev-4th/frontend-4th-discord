import { TurborepoAccessTraceResult } from "next/dist/build/turborepo-access-trace";
import UserProfileCard from  "../../components/voice-channel-comps/UserProfileCard"

export default function VoiceChannelPage() {
  const users = [
    {
      id: 1,
      username: "JohnDoe",
      avatarUrl: "https://i.pravatar.cc/150?img=1",
      isMuted: false,
      isStreaming : false,
    },
    {
      id: 2,
      username: "JaneSmith",
      avatarUrl: null,
      isMuted: true,
    },
    {
      id: 3,
      username: "SamBrown",
      avatarUrl: "https://i.pravatar.cc/150?img=3",
      isMuted: true,
    },
    {
      id: 4,
      username: "AliceGreen",
      avatarUrl: "https://i.pravatar.cc/150?img=4",
      isMuted: true,
    },
  ];

  const totalRows = Math.ceil(users.length / 2); // 2개씩 한 줄
  const heightPerRow = 100 / Math.max(totalRows, 1); // 전체 화면 기준 줄별 높이


  return (
    <main className="flex-1 flex">
      <div
        style={{
          height: "100vh", // 전체 높이
        }}
        className="w-full flex flex-wrap justify-center items-center gap-4"
      >
        {users.map((user) => (
          <UserProfileCard
            key={user.id}
            username={user.username}
            avatarUrl={user.avatarUrl}
            isMuted={user.isMuted}
            isSpeaking={user.isSpeaking}
            isStreaming={user.isStreaming}
          />
        ))}
      </div>
    </main>
  );
}