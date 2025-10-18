"use client";

import { useEffect } from "react";

export default function ReserveYourTable() {
  // same subtle reveal we’ve been using
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
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="booking">
      <div className="w-layout-blockcontainer container w-container">
        <div className="booking-wrapper">
          {/* LEFT: image */}
          <div className="booking-left reveal-up">
            <div className="section-img">
              <img
                loading="lazy"
                alt="Dining ambience"
                className="section-image"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825c11bb6545d4884409b56_booking.webp"
                srcSet="
                  https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825c11bb6545d4884409b56_booking-p-500.webp 500w,
                  https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825c11bb6545d4884409b56_booking-p-800.webp 800w,
                  https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825c11bb6545d4884409b56_booking-p-1080.webp 1080w,
                  https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825c11bb6545d4884409b56_booking-p-1600.webp 1600w,
                  https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825c11bb6545d4884409b56_booking-p-2000.webp 2000w,
                  https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825c11bb6545d4884409b56_booking.webp 2592w
                "
              />
            </div>
          </div>

          {/* RIGHT: heading + form */}
          <div className="booking-right reveal-up">
            <div className="booking-top-info">
              <h3 className="booking-heading">Reserve Your Table</h3>
              <p className="single-text">
                Secure your reservation now and enjoy hassle-free, delightful
                culinary journey. We’ve got the perfect spot for you.
              </p>
            </div>

            <div className="contact-form w-form">
              <form
                id="wf-form-Reservation-Form"
                name="wf-form-Reservation-Form"
                method="get"
                data-name="Reservation Form"
              >
                {/* EXACT grid order + spans */}
                <div className="form-wrapper form-grid-2">
                  {/* Name — full width */}
                  <div className="form-col span-2">
                    <input
                      className="input w-input"
                      maxLength="256"
                      name="Name"
                      data-name="Name"
                      placeholder="Enter your name*"
                      type="text"
                      id="name"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="form-col">
                    <input
                      className="input phone w-input"
                      maxLength="256"
                      name="Phone"
                      data-name="Phone"
                      placeholder="Phone number*"
                      type="tel"
                      id="phone"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="form-col">
                    <input
                      className="input email w-input"
                      maxLength="256"
                      name="Email"
                      data-name="Email"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  {/* Guests */}
                  <div className="form-col">
                    <input
                      className="input w-input"
                      maxLength="256"
                      name="Guest"
                      data-name="Guest"
                      placeholder="Number of guest*"
                      type="text"
                      id="guest"
                      required
                    />
                  </div>

                  {/* Date */}
                  <div className="form-col">
                    <input
                      className="input date w-input"
                      maxLength="256"
                      name="Date"
                      data-name="Date"
                      placeholder="Date*"
                      type="text"
                      id="date"
                      required
                    />
                  </div>

                  {/* Message — full width */}
                  <div className="form-col span-2">
                    <textarea
                      id="message"
                      name="Message"
                      maxLength="5000"
                      data-name="Message"
                      placeholder="Message*"
                      required
                      className="textarea w-input"
                    />
                  </div>
                </div>

                <div className="contact-bottom align-right">
                  <input
                    type="submit"
                    className="contact-button w-button"
                    value="Reserve Now"
                  />
                </div>
              </form>

              {/* OG success/fail blocks (kept for styling parity) */}
              <div className="success-message w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
          {/* /right */}
        </div>
      </div>
    </section>
  );
}
