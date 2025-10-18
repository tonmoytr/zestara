"use client";

export default function ContactForm() {
  return (
    <section className="contact">
      <div className="w-layout-blockcontainer container w-container">
        <div className="contact-wrap">
          {/* Left: form */}
          <div className="contact-left">
            <div className="contact-heading">Leave a Message</div>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-wrapper">
                <input
                  type="text"
                  className="input name"
                  placeholder="Enter your name*"
                  required
                />
                <input
                  type="email"
                  className="input email"
                  placeholder="Email address"
                />
                <input
                  type="tel"
                  className="input phone"
                  placeholder="Phone number*"
                  required
                />
                <textarea
                  className="textarea message"
                  placeholder="Message*"
                  required
                />
              </div>

              <div className="contact-bottom">
                <button type="submit" className="contact-button">
                  Submit Now
                </button>
              </div>
            </form>
          </div>

          {/* Right: image pillar */}
          <div className="contact-img">
            <div className="section-img">
              <img
                className="section-image"
                src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6823153ea35dd0f54e4bf846_contact.webp"
                alt="Dining space"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
