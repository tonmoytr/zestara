"use client";

import { useEffect } from "react";
import GalleryBottom from "./GalleryBottom";
import GalleryCenter from "./GalleryCenter";
import GalleryTop from "./GalleryTop";

export default function GalleryShowcase() {
  // same reveal-on-scroll we’ve used elsewhere
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-up");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-inview"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-inview");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="gallery">
      <div className="w-layout-blockcontainer container w-container">
        <div className="gallery-wrapper reveal-up">
          <GalleryTop />
        </div>

        <div className="gallery-center reveal-up">
          <GalleryCenter />
        </div>

        <div className="gallery-bottom reveal-up">
          <GalleryBottom />
        </div>
      </div>
    </section>
  );
}
