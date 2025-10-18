"use client";

import gallery from "@/data/gallery.json";
import { useEffect, useMemo, useRef, useState } from "react";

export default function Gallery() {
  const ref = useRef(null);
  const [active, setActive] = useState("All");

  // filter items
  const items = useMemo(() => {
    return active === "All"
      ? gallery.items
      : gallery.items.filter((i) => i.category === active);
  }, [active]);

  // reveal on scroll
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in-view");
            io.unobserve(el);
          }
        }),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // init PhotoSwipe lightbox
  useEffect(() => {
    if (!window || !window.PhotoSwipeLightbox) return;
    const lightbox = new window.PhotoSwipeLightbox({
      gallery: "#z-gallery",
      children: "a[data-pswp]",
      pswpModule: () => window.PhotoSwipe,
    });
    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  return (
    <section ref={ref} className="gallery">
      <div className="w-layout-blockcontainer container w-container">
        {/* header */}
        <div className="gallery-head">
          <div className="gallery-title">Gallery</div>
          <div className="gallery-line" aria-hidden="true" />
        </div>

        {/* filters */}
        <div
          className="gallery-filters"
          role="tablist"
          aria-label="Filter gallery"
        >
          {gallery.categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              className={`g-pill${active === cat ? " is-active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* masonry grid */}
        <div id="z-gallery" className="gallery-grid" data-filter={active}>
          {items.map((it, i) => (
            <a
              key={it.src + i}
              href={it.src}
              data-pswp
              data-pswp-width={it.w}
              data-pswp-height={it.h}
              data-pswp-caption={it.caption}
              className="g-item reveal-up"
              style={{ "--d": `${(i % 9) * 0.06}s` }}
            >
              <span className="g-media">
                <img
                  src={it.src}
                  alt={it.caption || it.category}
                  loading="lazy"
                  decoding="async"
                />
                <span className="g-overlay" aria-hidden="true">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
