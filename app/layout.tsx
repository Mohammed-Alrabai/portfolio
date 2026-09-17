import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, JetBrains_Mono, Tajawal } from "next/font/google";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
});
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Mohammed Alrabai — Full-Stack Engineer",
  description:
    "Full-Stack Software Engineer specializing in DevOps and Application Security. Building and securing enterprise systems in production.",
};

const themeInitScript = `(function(){try{
var s=localStorage.getItem('cs');var scheme=s==='light'?'light':'dark';
document.documentElement.dataset.scheme=scheme;
var m=document.querySelector('meta[name="color-scheme"]');if(m)m.setAttribute('content',scheme);
var l=localStorage.getItem('lang');var lang=l==='ar'?'ar':'en';
document.documentElement.lang=lang;
document.documentElement.dir=lang==='ar'?'rtl':'ltr';
}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      data-scheme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable} ${tajawal.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <meta name="color-scheme" content="dark" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
