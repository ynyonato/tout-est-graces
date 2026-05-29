import type { Metadata } from "next";
import { Sora, Poppins, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ets Tout Est Grâce | Le goût, le service et la grâce réunis (Togo)",
  description: "Ets Tout Est Grâce (Atakpamé, Togo) vous accompagne avec des produits alimentaires de qualité (épices artisanales, amuse-gueules), des services bureautiques et des formations professionnelles pratiques (Word, Excel, Internet).",
  keywords: [
    "Ets Tout Est Grâce",
    "Tout Est Grâce",
    "Togo",
    "Atakpamé",
    "alimentation artisanale",
    "épices togolaises",
    "amuse-gueules",
    "bureautique",
    "formations informatique",
    "formation Excel",
    "formation Word",
    "informatique Togo",
    "dynamisme",
  ],
  authors: [{ name: "Ets Tout Est Grâce" }],
  openGraph: {
    title: "Ets Tout Est Grâce | Le goût, le service et la grâce réunis (Togo)",
    description: "Alimentation artisanale de qualité, bureautique rapide et formations informatiques pratiques à Atakpamé, Togo.",
    url: "https://tout-est-grace.tg", // representative local URL
    siteName: "Ets Tout Est Grâce",
    images: [
      {
        url: "/assets/flyer_dynamisme_1.jpg",
        width: 1000,
        height: 1000,
        alt: "Ets Tout Est Grâce - Symbole du Dynamisme",
      },
    ],
    locale: "fr_TG",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${sora.variable} ${poppins.variable} ${inter.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-flash theme inline script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-sand-light text-slate-900 dark:bg-deepblack dark:text-slate-100 transition-theme overflow-x-hidden antialiased">
        <ThemeProvider>
          <Header />
          <main className="flex-grow pt-[80px]">
            {children}
          </main>
          <Footer />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
