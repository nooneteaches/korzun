import type { Metadata, Viewport } from "next";
import { Manrope, Fraunces } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Александр Корзун — предприниматель, AI-продукты",
  description: "Запускаю сервисы в спорте, знакомствах, творчестве и AI. Москва.",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${manrope.variable} ${fraunces.variable} antialiased`}>
      <body className="min-h-[100dvh]">{children}</body>
    </html>
  );
}
