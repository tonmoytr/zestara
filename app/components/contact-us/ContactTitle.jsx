"use client";

import { useEffect, useRef } from "react";

export default function ContactTitle() {
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

  return (
    <section ref={ref} className="page-title page-title--contact">
      <div className="w-layout-blockcontainer container w-container">
        <div className="title-wrap">
          <h1 className="heading heading--bg">Contact us</h1>
          <p className="title-info">
            Whether you have inquiries about reservations, menu details, or
            special requests, feel free to reach out.
          </p>
        </div>
      </div>
    </section>
  );
}
