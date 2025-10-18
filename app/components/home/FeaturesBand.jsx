"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const FEATURES = [
  {
    icon: "https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826d41089b5dd5d9e1dbeb8_ic-authentic.svg",
    title: "Authentic Flavors",
    desc: "Savor the rich, genuine flavors of our expertly crafted dishes.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826d41039aa3af2159dfc70_ic-fresh.svg",
    title: "Fresh Ingredients",
    desc: "High-quality ingredients guarantees a delicious & dining experience.",
  },
  {
    icon: "https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826d410f51ea24c62fbb702_ic-quality.svg",
    title: "Quality Service",
    desc: "Friendly service that enhances your dining experience.",
  },
];

export default function FeaturesBand() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

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
    <section ref={ref} className="features-band">
      <div className="w-layout-blockcontainer container w-container">
        <div className="features-grid">
          {/* Left: headline + CTA */}
          <div className="features-lead">
            <h3 className="features-title reveal-up" style={{ "--d": "0s" }}>
              Crafting Memorable
              <br />
              Experiences
            </h3>

            <Link
              href="/our-menu"
              className="secondary-button w-inline-block reveal-up"
              style={{ "--d": ".08s" }}
            >
              <span className="button-text-wrap">
                <span className="button-text">Explore Our Menu</span>
                <span className="button-text hover" aria-hidden="true">
                  Explore Our Menu
                </span>
              </span>
            </Link>
          </div>

          {/* Right: three feature columns */}
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="feature-card reveal-up"
              style={{ "--d": `${0.08 + i * 0.08}s` }}
            >
              <img
                src={f.icon}
                alt=""
                className="feature-icon"
                aria-hidden="true"
              />
              <h4 className="feature-title">{f.title}</h4>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
