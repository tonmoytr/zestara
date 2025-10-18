// app/components/contact/FaqSection.jsx
"use client";

import { useRef, useState } from "react";

const faqs = [
  {
    q: "How can I make a reservation?",
    a: "You can reserve a table online through our website or call us directly. We recommend booking in advance for a seamless dining experience.",
  },
  {
    q: "What are your restaurant’s opening hours?",
    a: "We are open from 11:00 AM to 10:00 PM for lunch and dinner. Buffet hours may vary, so please check our schedule for details.",
  },
  {
    q: "Do you offer home delivery or takeaway?",
    a: "Yes! We offer both home delivery and takeaway services. You can place your order online or call us for quick service.",
  },
  {
    q: "Can I modify or cancel my reservation?",
    a: "Yes, you can modify or cancel your reservation by contacting us at least 24 hours in advance. For last-minute changes, please call us directly.",
  },
  {
    q: "Do you have private dining or event booking options?",
    a: "Yes, we offer private dining spaces and event bookings for special occasions. Contact us for availability and customized arrangements.",
  },
  {
    q: "Is parking available at the restaurant?",
    a: "Yes, we provide dedicated parking for our guests. Valet service may also be available during peak hours.",
  },
];

function Arrow({ open }) {
  // OG uses a chevron arrow. We rotate it on open.
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{
        transition: "transform .28s ease",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="#D9D9D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FaqSection() {
  const [open, setOpen] = useState(null);
  const refs = useRef({});

  const toggle = (idx) => setOpen((cur) => (cur === idx ? null : idx));

  return (
    <section className="faq">
      <div className="w-layout-blockcontainer container w-container">
        <h2 className="section-title">Have Any Questions?</h2>

        {/* force equal heights and OG flex widths */}
        <div className="faq-wrapper stretch">
          {/* LEFT (image, 40%) */}
          <div className="faq-img">
            <div className="section-img">
              <img
                className="section-image"
                alt="Image"
                src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/682326cf8cb8778b9f094748_faq.webp"
                loading="lazy"
              />
            </div>
          </div>

          {/* RIGHT (accordion, 60%) */}
          <div className="faq-right">
            {faqs.map((item, idx) => {
              const isOpen = open === idx;
              return (
                <div key={idx} className={`faq-info${isOpen ? " open" : ""}`}>
                  <button
                    type="button"
                    className="que"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                  >
                    <h5 className="que-text">{item.q}</h5>
                    <div className="que-icon">
                      <Arrow open={isOpen} />
                    </div>
                  </button>

                  <div
                    ref={(el) => (refs.current[idx] = el)}
                    className="ans"
                    style={{
                      maxHeight:
                        isOpen && refs.current[idx]
                          ? `${refs.current[idx].scrollHeight}px`
                          : 0,
                      transition: "max-height .33s ease",
                    }}
                  >
                    <div className="ans-box">
                      <p className="ans-text">{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
