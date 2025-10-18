"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    // Parent-based reveal (one trigger for everything)
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            hero.classList.add("in-view");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 }
    );
    io.observe(hero);

    // Per-element fallback (extra safety)
    const io2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io2.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document
      .querySelectorAll(".hero-zoom, .reveal-up")
      .forEach((el) => io2.observe(el));

    // Ultimate fallback: if IO is unsupported or anything odd, force visible
    if (!("IntersectionObserver" in window)) {
      hero.classList.add("in-view");
      document
        .querySelectorAll(".reveal-up, .hero-zoom")
        .forEach((el) => el.classList.add("in-view"));
    }

    return () => {
      io.disconnect();
      io2.disconnect();
    };
  }, []);

  return (
    <section className="hero">
      {/* 3-image grid background */}
      <div className="hero-images">
        <div className="hero-img">
          <img
            className="hero-image hero-zoom"
            src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6827026c0c52a10d883adf43_hero-img-01.webp"
            alt="Hero Image"
            loading="lazy"
            style={{ "--d": "0s", "--dur": "1.8s" }}
          />
        </div>
        <div className="hero-img">
          <img
            className="hero-image hero-zoom"
            src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6827026df668e7177b0d0fe9_hero-img-02.webp"
            alt="Hero Image"
            loading="lazy"
            style={{ "--d": ".12s", "--dur": "2.0s" }}
          />
        </div>
        <div className="hero-img">
          <img
            className="hero-image hero-zoom"
            src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6827026cd84845e7ad8e3d37_hero-img-03.webp"
            alt="Hero Image"
            loading="lazy"
            style={{ "--d": ".24s", "--dur": "2.2s" }}
          />
        </div>
      </div>

      {/* dark overlay */}
      <div className="hero-overly" />

      {/* content */}
      <div className="w-layout-blockcontainer hero-container w-container">
        <div className="hero-wrapper">
          <div className="hero-top">
            <div className="hero-data">
              <div className="overflow-hidden">
                <h1 className="hero-title reveal-up" style={{ "--d": "0.10s" }}>
                  Simply Delicious
                </h1>
              </div>

              <div className="overflow-hidden">
                <p className="hero-text reveal-up" style={{ "--d": "0.18s" }}>
                  We bring you a fusion of flavours crafted with passion. From
                  fresh ingredients to expertly prepared dishes, every bite is a
                  celebration.
                </p>
              </div>
            </div>

            <Link
              href="/reservation"
              className="primary-button w-inline-block reveal-up"
              style={{ "--d": "0.26s" }}
            >
              <div className="button-text-wrap">
                <div className="button-text">Reserve A Table</div>
                <div className="button-text hover" aria-hidden="true">
                  Reserve A Table
                </div>
              </div>
            </Link>
          </div>

          <Link
            href="/our-menu"
            className="hero-link w-inline-block reveal-up"
            style={{ "--d": "0.34s" }}
          >
            <div className="button-text-wrap">
              <div className="button-text">Discover More</div>
              <div className="button-text hover" aria-hidden="true">
                Discover More
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
