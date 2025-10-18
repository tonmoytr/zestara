"use client";

import menu from "@/data/menu.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

function isActive(pathname, href) {
  if (!href) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();

  const links = menu.filter((m) => m.type !== "cta");
  const cta = menu.find((m) => m.type === "cta");

  return (
    <section className="header">
      <div
        data-w-id="0d54cd7d-f7e9-9d40-9f43-f711db7baa1c"
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div className="w-layout-blockcontainer container w-container">
          <div className="navbar-wrap">
            {/* Brand / Logo */}
            <Link
              href="/"
              className="brand w-inline-block"
              aria-label="Zestara Home"
            >
              <img loading="lazy" style={{width: "70px"}} src="/assets/images/logo/logo.png" alt="zestara" />
            </Link>

            {/* Main Nav */}
            <nav role="navigation" className="nav-menu w-nav-menu">
              {links.map((item) => {
                const active = isActive(pathname, item.href);
                const cls = `nav-link w-inline-block${
                  active ? " w--current" : ""
                }`;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cls}
                    aria-current={active ? "page" : undefined}
                  >
                    <div className="link-text">{item.label}</div>
                    <div className="link-text hover" aria-hidden="true">
                      {item.label}
                    </div>
                  </Link>
                );
              })}

              {/* Mobile CTA lives INSIDE the nav */}
              {cta && (
                <Link
                  href={cta.href}
                  className="nav-button mobile w-inline-block"
                  aria-current={
                    isActive(pathname, cta.href) ? "page" : undefined
                  }
                >
                  <div className="button-text-wrap">
                    <div className="button-text">{cta.label}</div>
                    <div className="button-text hover" aria-hidden="true">
                      {cta.label}
                    </div>
                  </div>
                </Link>
              )}
            </nav>

            {/* Right side: Menu label + burger + DESKTOP CTA */}
            <div className="nav-right">
              <div className="menu-text">Menu</div>
              <div className="menu-button w-nav-button" id="zestara-nav-button">
                <div className="top-line" />
                <div className="center-line" />
                <div className="bottom-line" />
              </div>

              {/* Desktop CTA lives OUTSIDE the nav (like OG) */}
              {cta && (
                <Link
                  href={cta.href}
                  className="nav-button home w-inline-block"
                  aria-current={
                    isActive(pathname, cta.href) ? "page" : undefined
                  }
                >
                  <div className="button-text-wrap">
                    <div className="button-text">{cta.label}</div>
                    <div className="button-text hover" aria-hidden="true">
                      {cta.label}
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
