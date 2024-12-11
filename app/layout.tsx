import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import bgStyles from "./styles/background.module.css";
import { BackgroundProvider } from "./provider/background";
const orbit = localFont({
  src: "./fonts/Orbit-Regular.ttf",
  variable: "--font-orbit",
  weight: "100 200 300 400 500 600 700 900",
});
export const metadata: Metadata = {
  title: "개발자 신초이 | 포트폴리오 사이트",
  description: "반갑습니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${orbit.className} antialiased bg-black`}>
        <BackgroundProvider>{children}</BackgroundProvider>
      </body>
    </html>
  );
}
