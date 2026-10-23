"use client";
import SitePreferences from "./site-preferences";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [{ href: "/#work", label: "Projects" }, { href: "/journey", label: "Experience" }, { href: "/life", label: "About me" }, { href: "/photos", label: "Photos" }, { href: "/#contact", label: "Contact" }];
export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-navigation" onKeyDown={event => { if (event.key === "Escape") { setOpen(false); document.getElementById("navigation-toggle")?.focus(); } }}>
    <Link href="/" className="personal-mark" aria-label="Preston Whiteman, home" onClick={() => setOpen(false)}>PRESTON<br /><span>WHITEMAN</span><i /></Link>
    <SitePreferences />
    <button id="navigation-toggle" className="navigation-toggle" aria-expanded={open} aria-controls="site-navigation-links" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "×" : "+"}</span></button>
    <nav id="site-navigation-links" className={open ? "navigation-links is-open" : "navigation-links"} aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href || (link.href === "/#work" && pathname.startsWith("/projects/")) ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav>
  </header>;
}
