"use client";

import { useEffect } from "react";

export default function GroupReservation() {
  // keep the subtle reveal we’ve been using
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
    <section className="group-reservation">
      <div className="w-layout-blockcontainer container w-container">
        <div className="gr-wrapper reveal-up">
          {/* Left: title + copy */}
          <div className="gr-left">
            <h4 className="gr-title">Group Reservation</h4>
            <p className="gr-text">
              Planning a special gathering? Whether it&apos;s a corporate event,
              family celebration, or a friends&apos; reunion, we&apos;ve got you
              covered.
            </p>
          </div>

          {/* Right: Call / Email */}
          <div className="gr-right">
            <div className="gr-item">
              <span className="gr-label">Call us:</span>
              <a className="gr-link" href="tel:+(378)555-0108">
                +(378) 555-0108
              </a>
            </div>

            <div className="gr-item">
              <span className="gr-label">Email us:</span>
              <a className="gr-link" href="mailto:booking.kofeo@example.com">
                booking.kofeo@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
