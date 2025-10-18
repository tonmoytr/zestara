"use client";

import cuisines from "@/data/cuisines.json";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ExploreCuisines() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Parent trigger to ensure everything reveals together
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("in-view");
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="cuisines">
      <div>
        <h2 style={{textAlign: "center", paddingBottom: "35px"}}>Explore By Our Cuisines</h2>
      </div>
      <div className="w-layout-blockcontainer container w-container">
        <div className="cuisines__grid">
          {cuisines.map((item, idx) => (
            <Link
              key={item.title}
              href={item.href}
              className="c-card reveal-up"
              style={{ "--d": `${idx * 0.08}s` }}
            >
              <div className="c-card__media">
                <img
                  src={item.image}
                  alt={item.title}
                  className="c-card__img"
                  loading="lazy"
                />
                <span className="c-card__overlay" aria-hidden="true" />
              </div>

              <div className="c-card__body">
                <div className="c-card__tag">{item.tag}</div>
                <h3 className="c-card__title">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
