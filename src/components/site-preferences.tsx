"use client";
import { useEffect, useRef, useSyncExternalStore } from "react";
const subscribe = (notify: () => void) => { window.addEventListener("portfolio-preferences", notify); return () => window.removeEventListener("portfolio-preferences", notify); };
const snapshot = () => [document.documentElement.dataset.theme || "light", document.documentElement.dataset.sound || "off", document.documentElement.dataset.motion || "full"].join("|");
const serverSnapshot = () => "light|off|full";
function preference(key: string, value: string) { document.documentElement.dataset[key] = value; try { localStorage.setItem(`preston-${key}`, value); } catch {} window.dispatchEvent(new Event("portfolio-preferences")); }
function ThemeIcon({ dark }: { dark: boolean }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{dark ? <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></> : <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />}</svg>;
}
function SettingsIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true" focusable="false"><path d="M3 6h4m4 0h10M3 12h10m4 0h4M3 18h4m4 0h10" /><circle cx="9" cy="6" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="9" cy="18" r="2" /></svg>;
}
export default function SitePreferences() {
  const panel = useRef<HTMLDetailsElement>(null);
  useEffect(() => { const outside = (event: PointerEvent) => { if (panel.current && !panel.current.contains(event.target as Node)) panel.current.open = false; }; document.addEventListener("pointerdown", outside); return () => document.removeEventListener("pointerdown", outside); }, []);
  const [theme, sound, motion] = useSyncExternalStore(subscribe, snapshot, serverSnapshot).split("|");
  return <div className="site-preferences"><button className="theme-toggle" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} onClick={() => preference("theme", theme === "dark" ? "light" : "dark")}><span aria-hidden="true"><ThemeIcon dark={theme === "dark"} /></span></button><details ref={panel} className="preference-panel" onKeyDown={event => { if (event.key === "Escape") { event.stopPropagation(); event.currentTarget.open = false; event.currentTarget.querySelector("summary")?.focus(); } }}><summary aria-label="Display, sound and motion settings" title="Display, sound and motion settings"><span aria-hidden="true"><SettingsIcon /></span></summary><div className="preference-options"><strong>Display &amp; sound</strong><p>Choose the settings that suit you.</p><button aria-pressed={sound === "on"} onClick={() => preference("sound", sound === "on" ? "off" : "on")}><span>Sound effects</span><span>{sound === "on" ? "On" : "Off"}</span></button><button aria-pressed={motion === "reduce"} onClick={() => preference("motion", motion === "reduce" ? "full" : "reduce")}><span>Reduce motion</span><span>{motion === "reduce" ? "On" : "Off"}</span></button><small>Sounds are off by default. Your choices stay on this device.</small></div></details></div>;
}
