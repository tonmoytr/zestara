"use client";

import { useEffect } from "react";

export default function CulinaryChefsSection() {
  useEffect(() => {
    // Simple intersection observer to mimic OG fade-ins
    const els = Array.from(document.querySelectorAll("[data-animate]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            // optional stagger via CSS var
            const delay = target.getAttribute("data-delay") || 0;
            target.style.setProperty("--reveal-delay", `${delay}ms`);
            target.classList.add("is-visible");
            io.unobserve(target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el, i) => {
      // fallback stagger if none specified
      if (!el.getAttribute("data-delay"))
        el.setAttribute("data-delay", String(i * 80));
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <section className="culinary-chef-s">
      <div className="w-layout-blockcontainer container w-container">
        {/* Wrapper */}
        <div className="cc-wrapper reveal" data-animate data-delay="0">
          {/* Left text */}
          <div className="cc-left">
            <div>
              <h2 className="cc-title">Our Culinary Chef’s</h2>
              <p className="single-text">
                From selecting the finest ingredients to mastering intricate
                techniques chefs ensure every plate is a masterpiece.
              </p>
            </div>

            <a
              href="/our-chef"
              className="primary-button outline w-inline-block"
            >
              <div className="button-text-wrap">
                <div className="button-text">View All Chef’s</div>
                <div className="button-text hover">View All Chef’s</div>
              </div>
            </a>
          </div>

          {/* Right grid */}
          <div className="cc-wrap">
            {/* empty box to match OG grid offset */}
            <div className="cc-box"></div>

            {/* 01 */}
            <div className="cc-block">
              <div className="cc-img">
                <img
                  className="cc-image reveal"
                  data-animate
                  src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68245cbf681c8114dca5698a_chef-main-01.webp"
                  alt="Chef Image"
                  loading="lazy"
                />
              </div>
              <div className="cc-data">
                <h5 className="cc-name">Marvin McKinney</h5>
                <div>Asian Cuisine Specialist</div>
              </div>
            </div>

            {/* 02 */}
            <div className="cc-block">
              <div className="cc-img">
                <img
                  className="cc-image reveal"
                  data-animate
                  src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68245cc0e64f3211e60bf9d3_chef-main-02.webp"
                  alt="Chef Image"
                  loading="lazy"
                />
              </div>
              <div className="cc-data">
                <h5 className="cc-name">Leslie Alexander</h5>
                <div>Executive Chef</div>
              </div>
            </div>

            {/* 03 */}
            <div className="cc-block">
              <div className="cc-img">
                <img
                  className="cc-image reveal"
                  data-animate
                  src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68245cbf2770f51ab95c97d7_chef-main-03-p-1080.webp"
                  alt="Chef Image"
                  loading="lazy"
                />
              </div>
              <div className="cc-data">
                <h5 className="cc-name">Theresa Webb</h5>
                <div>French Culinary Chef</div>
              </div>
            </div>

            {/* 04 */}
            <div className="cc-block">
              <div className="cc-img">
                <img
                  className="cc-image reveal"
                  data-animate
                  src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68245cbf841cfb0458610b59_chef-main-04.webp"
                  alt="Chef Image"
                  loading="lazy"
                />
              </div>
              <div className="cc-data">
                <h5 className="cc-name">Wade Warren</h5>
                <div>Saucier</div>
              </div>
            </div>

            {/* 05 */}
            <div className="cc-block">
              <div className="cc-img">
                <img
                  className="cc-image reveal"
                  data-animate
                  src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68245cc0a6cd3820328cc283_chef-main-05.webp"
                  alt="Chef Image"
                  loading="lazy"
                />
              </div>
              <div className="cc-data">
                <h5 className="cc-name">Dianne Russell</h5>
                <div>Pastry Chef</div>
              </div>
            </div>
          </div>
        </div>
        {/* /cc-wrapper */}
      </div>
    </section>
  );
}
