import type { Metadata } from "next";
import JourneyTimeline from "@/components/journey-timeline";
export const metadata:Metadata={
  alternates: { canonical: "/journey" },title:"Experience & Timeline | Preston Whiteman",description:"A visual timeline of my studies, research, engineering, student leadership and life at Bath."};
export default function Journey(){return <main tabIndex={-1} id="main-content" className="visual-page"><section className="page-intro"><p className="small-label">A work in progress / 2024–2026</p><h1>The journey <em>so far.</em></h1><p>A few milestones from the last few years. Some are technical, some involve people, and one involves running 21 km in a cow costume.</p></section><section className="timeline-section" aria-label="My experience timeline"><JourneyTimeline /></section></main>;}
