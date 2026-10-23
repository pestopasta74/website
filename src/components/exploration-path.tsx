"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const pages: Record<string, {label:string; related:string; relatedLabel:string; hint:string}> = {
 "/projects/monte-carlo-option-pricing": {label:"Monte Carlo engine",related:"/projects/research-impact",relatedLabel:"Research internship",hint:"Another application of Python, this time with professional users and research evidence."},
 "/projects/research-impact": {label:"Research impact",related:"/projects/monte-carlo-option-pricing",relatedLabel:"Option-pricing project",hint:"Explore the numerical methods, recorded results and validation in my independent project."},
 "/journey": {label:"Experience & timeline",related:"/life",relatedLabel:"About me",hint:"More about sport, student communities and my route to university."},
 "/life": {label:"About me",related:"/journey",relatedLabel:"Experience & timeline",hint:"See where these experiences sit alongside my study and technical work."},
 "/photos": {label:"Photo notebook",related:"/journey",relatedLabel:"Experience & timeline",hint:"Read the stories and responsibilities behind the photographs."},
};
export function Breadcrumbs() { const path = usePathname(); const page = pages[path]; if (!page) return null; return <nav className="breadcrumbs" aria-label="Breadcrumb"><ol><li><Link href="/">Home</Link></li>{path.startsWith("/projects/") && <li><Link href="/#work">Projects</Link></li>}<li aria-current="page">{page.label}</li></ol></nav>; }
export default function ExplorationPath() { const page=pages[usePathname()]; if (!page) return null; return <section className="continue-exploring" aria-labelledby="continue-title"><div><h2 id="continue-title">{page.relatedLabel}</h2><p>{page.hint}</p></div><div><Link className="text-link" href={page.related}>{page.relatedLabel}<span aria-hidden="true">→</span></Link><Link className="back-home" href="/#work">Back to selected work</Link></div></section>; }
