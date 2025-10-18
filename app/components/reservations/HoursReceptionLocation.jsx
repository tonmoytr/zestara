"use client";

import { useEffect } from "react";

export default function HoursReceptionLocation() {
  useEffect(() => {
    // same tiny reveal we’ve been using (safe to keep or remove)
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
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="booking">
      <div className="w-layout-blockcontainer container w-container">
        <div className="booking-top">
          {/* Opening Hours */}
          <div className="reveal-up">
            <h4 className="booking-title">Opening Hours</h4>
            <div className="opening-wrap">
              <div className="opening-data">
                <div>Monday - Friday</div>
                <div>10AM - 08PM</div>
              </div>
              <div className="opening-line" />
              <div className="opening-data">
                <div>Saturday</div>
                <div>10AM - 11PM</div>
              </div>
              <div className="opening-line" />
              <div className="opening-data">
                <div>Sunday</div>
                <div>09AM - 12PM</div>
              </div>
            </div>
          </div>

          {/* Reception Contact */}
          <div className="reveal-up">
            <h4 className="booking-title">Reception Contact</h4>
            <div className="reception-wrap">
              <div className="opening-data">
                <div>Reception Desk:</div>
                <a href="tel:+(378)555-0108" className="reception-link">
                  +(378) 555-0108
                </a>
              </div>
              <div className="opening-data">
                <div>Reservation Hotline:</div>
                <a href="tel:+(239)555-0104" className="reception-link">
                  +(239) 555-0104
                </a>
              </div>
              <div className="opening-data">
                <div>Email:</div>
                <a
                  href="mailto:kofeo.restaurant@example.com"
                  className="reception-link"
                >
                  kofeo.restaurant@example.com
                </a>
              </div>
            </div>
          </div>

          {/* Our Location */}
          <div className="reveal-up">
            <h4 className="booking-title">Our Location</h4>
            <div>
              <h6 className="location-title">Kentucky, USA</h6>
              <div className="location-text">
                4517 Washington Ave. Manchester, Kentucky 39495
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
