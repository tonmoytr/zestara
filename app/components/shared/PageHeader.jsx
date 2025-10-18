"use client";

import { useEffect, useRef } from "react";

/**
 * PageHeader
 * Reusable OG-style title band with big background word + sub copy.
 *
 * Props:
 * - title       (string)  : visible page title (e.g., "Contact us")
 * - content     (string)  : small paragraph under/near the title
 * - bgWord      (string?) : big background word; defaults to `title`
 * - align       ("left"|"center") : layout alignment (default "left")
 * - size        ("xl"|"lg"|"md")  : size of the big word (default "xl")
 * - className   (string?) : extra class hooks when needed
 */
export default function PageHeader({
  title,
  content,
  bgWord,
  align = "left",
  size = "xl",
  className = "",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in-view");
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const alignClass = align === "center" ? "is-center" : "is-left";
  const sizeClass = `size-${size}`;

  return (
    <section
      ref={ref}
      className={`page-title ${alignClass} ${sizeClass} ${className}`.trim()}
    >
      <div className="w-layout-blockcontainer container w-container">
        <div className="title-wrap">
          <h1 className="heading heading--bg">{bgWord || title}</h1>
          <p className="title-info">{content}</p>
          {/* Foreground visible title when centered variant is needed.
             If you ever want a separate foreground H1, uncomment below:

          <span className="heading-fg">{title}</span>
          */}
        </div>
      </div>
    </section>
  );
}
