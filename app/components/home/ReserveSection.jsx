"use client";

export default function ReserveSection() {
  // no external libs; form is purely presentational/pixel-match
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-wrap">
          {/* LEFT: photo */}
          <div className="contact-img">
            <div className="section-img">
              {/* Use any wide dining image here; styling makes it pixel-identical */}
              <img
                className="section-image"
                src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826c490a0c070636bb74456_about-hero.webp"
                alt="Restaurant interior"
                loading="eager"
              />
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="contact-left">
            <h2 className="contact-heading">Reserve your Table</h2>

            <form className="w-form contact-form" onSubmit={handleSubmit}>
              <div className="form-wrapper">
                <input
                  className="w-input input"
                  type="text"
                  name="name"
                  placeholder="Enter your name*"
                  required
                />

                <input
                  className="w-input input phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone number*"
                  required
                />

                <input
                  className="w-input input email"
                  type="email"
                  name="email"
                  placeholder="Email address"
                />

                <input
                  className="w-input input"
                  type="number"
                  name="guests"
                  min="1"
                  placeholder="Number of guest*"
                  required
                />

                <input
                  className="w-input input date"
                  type="date"
                  name="date"
                  placeholder="Date*"
                  required
                />

                <textarea
                  className="w-input textarea"
                  name="message"
                  placeholder="Message*"
                  required
                />
              </div>

              <div className="contact-bottom">
                <button className="w-button contact-button" type="submit">
                  RESERVE NOW
                </button>
              </div>

              {/* Webflow-style messages (kept for parity; hidden unless toggled) */}
              <div className="w-form-done success-message">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div className="w-form-fail error-message">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
