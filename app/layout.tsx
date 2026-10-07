import type { Metadata, Viewport } from "next";
import { Lora, Nunito } from "next/font/google";
import "./globals.css";
import { business } from "@/lib/data";

const heading = Lora({
  subsets: ["cyrillic", "latin"],
  variable: "--font-heading",
  display: "swap",
});
const body = Nunito({
  subsets: ["cyrillic", "latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${business.name} — пекарня | Свіжий хліб щодня`,
  description:
    "Місцева пекарня: подовий та житній хліб на заквасці, паляниці, пампушки та солодка випічка. Доставка по місту.",
  openGraph: {
    title: `${business.name} — пекарня`,
    description: business.tagline,
    locale: "uk_UA",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#b8742a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
