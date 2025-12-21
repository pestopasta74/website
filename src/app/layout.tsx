import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MenubarModeToggle } from "@/components/ui/theme-switcher";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "pestopasta74's website",
    description: "Produced by pestopasta74",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <header className="w-full">
                        <Menubar>
                            <MenubarMenu>
                                <Link href="/">
                                    <MenubarTrigger>
                                        <Image src="/favicon.ico" alt="Logo" width={24} height={24} />
                                    </MenubarTrigger>
                                </Link>
                            </MenubarMenu>
                            <MenubarMenu>
                                <Link href="/projects">
                                    <MenubarTrigger>Projects</MenubarTrigger>
                                </Link>
                            </MenubarMenu>
                            <MenubarMenu>
                                <Link href="/fundraising">
                                    <MenubarTrigger>Fundraising</MenubarTrigger>
                                </Link>
                            </MenubarMenu>
                            <MenubarMenu>
                                <Link href="/notes">
                                    <MenubarTrigger>Notes</MenubarTrigger>
                                </Link>
                            </MenubarMenu>
                            <MenubarMenu>
                                <Link href="/calendar">
                                    <MenubarTrigger>Calendar</MenubarTrigger>
                                </Link>
                            </MenubarMenu>
                            <MenubarModeToggle />
                        </Menubar>
                    </header>
                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}
