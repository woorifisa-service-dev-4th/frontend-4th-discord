/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        discordDark: "#313338",
        discordGray: "#2f3136",
        discordSidebar: "#202225",
        discordAccent: "#5865f2",
        discordGreen:"#22a559"
      },
  },
  plugins: [],
}
};