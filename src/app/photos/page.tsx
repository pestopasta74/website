import type {Metadata} from "next";
import PhotoNotebook from "@/components/photo-notebook";
export const metadata:Metadata={
  alternates: { canonical: "/photos" },title:"Photo Notebook | Preston Whiteman",description:"Photographs and small moments from university, research, student leadership and the Bath Half Marathon."};
export default function Photos(){return <main tabIndex={-1} id="main-content" className="visual-page"><section className="page-intro"><p className="small-label">The photo notebook</p><h1>A few moments, <em>kept.</em></h1><p>The people, places and slightly unusual outfits behind the experiences. Choose a theme below, or select any photograph to open the full image in a new tab.</p></section><PhotoNotebook /></main>;}
