import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen bg-discordDark text-white">
        {/* Header */}
        <header className="h-6 bg-discordSidebar flex items-center px-4">
          <h1 className="text-sm font-extrabold text-gray-500">Discord</h1>
        </header>
        {/* main layout */}
        <div className="flex flex-1">
          {children} 
        </div>
      </body>
    </html>
  );
}
