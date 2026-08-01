import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_URL } from "@/app/_data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: "Jhonatan Henrique | Desenvolvedor Full-Stack em Ji-Paraná",
  description:
    "Criação de landing pages, sistemas web e soluções com IA em Ji-Paraná, Rondônia. Conheça os projetos de Jhonatan Henrique e fale pelo WhatsApp.",
  applicationName: "Portfólio de Jhonatan Henrique",
  authors: [{ name: "Jhonatan Henrique" }],
  creator: "Jhonatan Henrique",
  category: "technology",
  alternates: SITE_URL ? { canonical: "/" } : undefined,
  keywords: [
    "desenvolvedor full-stack em Ji-Paraná",
    "criação de sites em Ji-Paraná",
    "landing pages em Rondônia",
    "desenvolvimento de sistemas web",
    "páginas de vendas para empresas",
    "sistemas personalizados",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Jhonatan Henrique | Desenvolvedor Full-Stack em Ji-Paraná",
    description:
      "Landing pages, sistemas web e soluções com IA construídos para problemas reais de empresas.",
    siteName: "Jhonatan Henrique",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhonatan Henrique | Desenvolvedor Full-Stack",
    description:
      "Landing pages, sistemas web e soluções com IA em Ji-Paraná, Rondônia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
