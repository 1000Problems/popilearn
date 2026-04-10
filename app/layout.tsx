import type { Metadata } from "next";
import { Baloo_Thambi_2, Nunito } from "next/font/google";
import "./globals.css";

const balooThambi = Baloo_Thambi_2({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PopiLearn — ¡Canta, baila, pop! y aprende",
  description:
    "Canal de YouTube para niños de 3 a 7 años. Canciones, aventuras y aprendizaje con Papá Leo, Mamá Ana, Lucas, Luna, Rob y más. ¡Próximamente!",
  keywords: ["kids", "niños", "YouTube", "aprender", "canciones", "español", "PopiLearn"],
  openGraph: {
    title: "PopiLearn — ¡Canta, baila, pop! y aprende",
    description: "Canal educativo de YouTube para niños. ¡Próximamente!",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${balooThambi.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
