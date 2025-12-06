import { Metadata } from "next";
import { GuestFooter, GuestHeader } from "@/components";
import { siteMetadata, inter } from "@/configs";

import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import "@/styles/font.css";
import "@/styles/global.css";
import "@/styles/responsive.css";
import "@/styles/theme.css";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} h-100`}>
        <GuestHeader />
        {children}
        <GuestFooter />
      </body>
    </html>
  );
}
