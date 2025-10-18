"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="w-layout-blockcontainer container w-container">
        {/* top grid */}
        <div className="footer-grid">
          {/* col 1: about */}
          <div className="f-col about">
            <h4 className="f-title">About zestara</h4>
            <p className="f-text">
              Washington Ave. Manchester,
              <br />
              Kentucky 39495
            </p>
            <p className="f-text">+ (378) 555-0108</p>
            <p className="f-text">
              <a
                href="mailto:zestara.restaurant@example.com"
                className="f-link"
              >
                zestara.restaurant@example.com
              </a>
            </p>

            <div className="footer-socials">
              <Link href="#" className="social">
                <i className="fa-brands fa-x-twitter" />
              </Link>
              <Link href="#" className="social">
                <i className="fa-brands fa-facebook-f" />
              </Link>
              <Link href="#" className="social">
                <i className="fa-brands fa-youtube" />
              </Link>
              <Link href="#" className="social">
                <i className="fa-brands fa-instagram" />
              </Link>
            </div>
          </div>

          {/* col 2: pages */}
          <div className="f-col">
            <h4 className="f-title">Pages</h4>
            <ul className="f-list">
              <li>
                <Link href="/about-us" className="f-link">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/our-menu" className="f-link">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="f-link">
                  Reservation
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="f-link">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/our-chef" className="f-link">
                  Our Chef’s
                </Link>
              </li>
            </ul>
          </div>

          {/* col 3: resources */}
          <div className="f-col">
            <h4 className="f-title">Resources</h4>
            <ul className="f-list">
              <li>
                <Link href="/contact" className="f-link">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="f-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="f-link">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* col 4: ctas */}
          <div className="f-col ctas">
            <Link href="/our-menu" className="cta-outline">
              Explore Our Menu
            </Link>
            <Link href="/reservation" className="cta-solid">
              <i className="fa-regular fa-calendar" />
              Reserve a Table
            </Link>
          </div>
        </div>

        {/* watermark + bottom */}
        <div className="footer-bottom">
          <div className="footer-watermark">zestara</div>
          <div className="footer-meta">
            <p>© 2025 Zestara.</p>
            <p>
              Designed by{" "}
              <Link href="#" className="f-link">
                Aartic
              </Link>
              . Powered by{" "}
              <Link href="#" className="f-link">
                Webflow
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
