"use client";

import { useEffect } from "react";

export default function DineExperience() {
  // same subtle reveal we’ve used everywhere
  useEffect(() => {
    const els = document.querySelectorAll(".reveal-up");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-inview"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-inview");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="menu-dine">
      <div className="w-layout-blockcontainer container w-container">
        <div className="menu-dine__grid">
          {/* LEFT IMAGE */}
          <div className="menu-dine__side reveal-up">
            <div className="section-img">
              <img
                className="section-image"
                loading="lazy"
                alt="Dining interior"
                src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826ceb200969b106796b2de_history-img-01.webp"
                sizes="(max-width: 991px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* CENTER COPY */}
          <div className="menu-dine__center reveal-up">
            <h3 className="menu-dine__heading">Get Your Dine Experience</h3>
            <div className="menu-dine__rule" />

            <div className="menu-dine__card">
              <h5 className="menu-dine__card-title">MIDDAY FEAST AWAITS</h5>
              <p className="menu-dine__line">
                <strong>Mon- Thu:</strong>&nbsp; 11:00 AM to 03:00 PM
              </p>
              <p className="menu-dine__line">
                <strong>Fri- Sun:</strong>&nbsp; 12:00 AM to 04:00 PM
              </p>
            </div>

            <div className="menu-dine__card">
              <h5 className="menu-dine__card-title">A PERFECT NIGHT FEAST</h5>
              <p className="menu-dine__line">
                <strong>Mon- Thu:</strong>&nbsp; 05:00 AM to 10:00 PM
              </p>
              <p className="menu-dine__line">
                <strong>Fri- Sun:</strong>&nbsp; 05:30 AM to 11:00 PM
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="menu-dine__side reveal-up">
            <div className="section-img">
              <img
                className="section-image"
                loading="lazy"
                alt="Dining table"
                src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68246605a2356a40a317ac67_experience-02-p-1080.webp"
                sizes="(max-width: 991px) 100vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
