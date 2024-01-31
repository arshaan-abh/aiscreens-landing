import { Inter, Rubik, Manrope, Monda } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const monda = Monda({
  subsets: ["latin"],
  variable: "--font-monda",
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${rubik.variable} ${manrope.variable} ${monda.variable} flex flex-col items-center bg-zinc-950 font-inter text-white`}
      >
        {children}
      </body>
    </html>
  );
}

// TODO list:
// 1. package.json metadata
// 2. stylelint
// 3. stylelint-config-prettier
// 4. self made stuff
