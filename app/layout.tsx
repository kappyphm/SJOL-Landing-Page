import type { Metadata } from "next";
import { Roboto_Mono, Roboto_Slab } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Safe Journey Of Loppy",
  description:
    "Một dự án SSG104 lớp cô HoaNM :)) mọi người tải game ủng hộ sốp nhaaaaaaa",
};

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoMono.variable} ${robotoSlab.variable}`}>
      <body className="animate-fade-in">
        {children}
        <footer className="w-full text-center py-5 bg-gray-800 text-gray-400">
          <p>&copy; 2025 The7Bugs</p>
        </footer>
      </body>
    </html>
  );
}
