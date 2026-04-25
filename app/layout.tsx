import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CookieConsent } from "@/components/cookie-consent";
import { LanguageProvider } from "@/components/language-provider";
import { StickyQuoteButton } from "@/components/sticky-quote-button";
import { Language } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arcstone Construct",
  description: "Premium construction company portfolio website.",
};

async function resolveInitialLanguageFromCookie(): Promise<Language> {
  const cookieStore = await cookies();
  const value = cookieStore.get("arcstone_lang")?.value;
  if (value === "ru" || value === "es" || value === "en") return value;
  return "en";
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLanguage = await resolveInitialLanguageFromCookie();

  return (
    <html
      lang={initialLanguage}
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-site text-neutral-100">
        <LanguageProvider initialLanguage={initialLanguage}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
            <StickyQuoteButton />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}

