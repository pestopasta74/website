"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
let audio: AudioContext | undefined;
function chime() {
  try {
    audio ??= new AudioContext();
    void audio.resume().catch(() => {});
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(660, audio.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(880, audio.currentTime + .065);
    gain.gain.setValueAtTime(.0001, audio.currentTime);
    gain.gain.exponentialRampToValueAtTime(.025, audio.currentTime + .008);
    gain.gain.exponentialRampToValueAtTime(.0001, audio.currentTime + .10);
    oscillator.connect(gain); gain.connect(audio.destination);
    oscillator.start(); oscillator.stop(audio.currentTime + .11);
  } catch { /* Navigation and controls keep working if audio is unavailable. */ }
}
export default function SiteEffects() {
  const pathname = usePathname();
  useEffect(() => {
    const click = (event: MouseEvent) => { if (document.documentElement.dataset.sound === "on" && (event.target as Element)?.closest("a,button,summary")) chime(); };
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) { if (document.documentElement.dataset.motion !== "reduce") entry.target.classList.add("gentle-arrival"); observer.unobserve(entry.target); } }, { threshold: .08 });
    document.querySelectorAll("main > section, .photo-notebook .photo-card").forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
