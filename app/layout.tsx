import type { Metadata } from "next";
import { Roboto_Mono, Roboto_Slab } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Safe Journey Of Loppy",
  description:
    "Một dự án SSG104 lớp cô HoaNM :)) mọi người tải game ủng hộ sốp nhaaaaaaa",
  icons: "/GR-Text.png",
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
          <div className="container mx-auto px-4">
            <p className="text-lg font-semibold">&copy; 2025 The7Bugs</p>
            <p className="mt-2 text-sm">
              Safe Journey of Loppy là một tựa game về tham gia giao thông an
              toàn được phát triển bởi nhóm sinh viên đại học FPT Hà Nội.
            </p>
            <div className="mt-3">
              <a
                href="https://www.facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Kết nối với chúng tôi trên Facebook
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
