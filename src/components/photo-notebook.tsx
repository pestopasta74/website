"use client";
import { useState } from "react";
import PhotoCard from "./photo-card";
import { photos } from "@/data/photos";
export default function PhotoNotebook() { const [category,setCategory]=useState("Everything"); const visible=photos.filter(photo=>category==="Everything"||photo.category===category);return <><div className="photo-notebook-controls"><div className="timeline-filters" role="group" aria-label="Filter photographs">{["Everything","Portraits","Work","Sport","Community","Life"].map(item=><button key={item} aria-pressed={category===item} onClick={()=>setCategory(item)}>{item}</button>)}</div><p className="timeline-count" role="status">{visible.length} photographs · {category.toLowerCase()}</p></div><section className="photo-notebook" aria-label="Personal photographs">{visible.map(photo=><PhotoCard key={photo.slug} slug={photo.slug}/>)}</section></>; }
