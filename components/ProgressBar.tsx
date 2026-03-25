"use client";
import { useEffect } from "react";

export default function ProgressBar() {
  useEffect(() => {
    const bar = document.getElementById("progress-bar");
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (scrolled / total) * 100 : 0;
      if (bar) bar.style.width = `${pct}%`;
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div id="progress-bar" style={{ width: "0%" }} />;
}
