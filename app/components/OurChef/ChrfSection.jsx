"use client";
import { useEffect } from "react";

const CHEFS = [
  {
    name: "Marvin McKinney",
    role: "Asian Cuisine Specialist",
    sub: "Mediterranean Cuisine",
    img: "https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68245cbf681c8114dca5698a_chef-main-01.webp",
  },
  {
    name: "Leslie Alexander",
    role: "Executive Chef",
    sub: "Artisan Desserts",
    img: "https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68245cc0e64f3211e60bf9d3_chef-main-02.webp",
  },
  {
    name: "Theresa Webb",
    role: "French Culinary Chef",
    sub: "Thai Fusion",
    img: "https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68245cbf2770f51ab95c97d7_chef-main-03.webp",
  },
  {
    name: "Wade Warren",
    role: "Saucier",
    sub: "Open-Fire Cooking",
    img: "https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68245cbf841cfb0458610b59_chef-main-04.webp",
  },
  {
    name: "Jenny Wilson",
    role: "Pastry Chef",
    sub: "Pastries",
    img: "https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68245cc0a6cd3820328cc283_chef-main-05.webp",
  },
  {
    name: "Ralph Edwards",
    role: "Butcher Chef",
    sub: "Gluten-Free Delights",
    img: "https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68245cc04153404a49056413_chef-main-06.webp",
  },
];

export default function ChefsSection() {
  useEffect(() => {
    // Reveal on scroll to match OG feel
    const blocks = document.querySelectorAll(".chef-block");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    blocks.forEach((b) => io.observe(b));
    return () => io.disconnect();
  }, []);

  return (
    <section className="our-chef">
      <div className="w-layout-blockcontainer container w-container">
        <div className="chef-wrapper">
          {CHEFS.map((c) => (
            <div className="chef-block" key={c.name}>
              <div className="chef-img">
                {/* exact dimensions handled by .chef-image in your CSS */}
                <img src={c.img} alt="Chef Image" className="chef-image" />
              </div>

              <div className="chef-data">
                <h4 className="chef-name">{c.name}</h4>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="chef-link w-inline-block"
                  aria-label="Instagram"
                >
                  <img
                    className="chef-insta-icon"
                    alt="Icon"
                    src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68245db897ab555cc351099d_icon-insta.svg"
                  />
                </a>
              </div>

              <div className="chef-bottom">
                <div className="chef-info">{c.role}</div>
                <div>{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Minimal reveal overrides (safe to keep here or move to your CSS file) */}
      <style jsx>{`
        .chef-block {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .chef-block.in-view {
          opacity: 1;
          transform: none;
        }
        /* slide up the insta icon like OG */
        .chef-link {
          transform: translateY(100%);
          transition: transform 0.5s ease;
        }
        .chef-block.in-view .chef-link {
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
