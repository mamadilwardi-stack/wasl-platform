import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AppShell } from "@/components/layout/shell";
import { SettingsProvider } from "@/components/settings/settings-provider";
import { MaintenanceBanner } from "@/components/layout/maintenance-banner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "WASL | وصل — Global Digital Platform",
  description:
    "WASL is a global digital mediation platform connecting clients and service providers with Escrow, security, and trust.",
  icons: {
    icon: [{ url: "/images/wasl-mark.png", type: "image/png" }],
    apple: "/images/wasl-mark.png",
  },
  openGraph: {
    title: "WASL — Global Digital Platform",
    description: "Premium global mediation marketplace",
    images: [{ url: "/images/wasl-logo.png" }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SettingsProvider>
          <MaintenanceBanner />
          <AppShell>{children}</AppShell>
        </SettingsProvider>
      </body>
    </html>
  );
}
