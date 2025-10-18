"use client";

import { useEffect, useRef } from "react";

export default function MenuSection({
  title,
  side = "left",
  sideImage,
  items,
}) {
  const ref = useRef(null);

  // subtle stagger-in, same pattern we used before
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("in-view");
            io.unobserve(el.target || el);
          }
        }),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Put list + title in the same column; swap order for MAIN DISHES
  const ListColumn = (
    <div className="menu-right">
      <div className="menu-heading-wrap">
        <div className="menu-heading">{title}</div>
        <div className="menu-line"></div>
      </div>

      <div className="menu-list">
        {items.map((it, i) => {
          if (it.trendingLabel) {
            return (
              <div
                key={`label-${i}`}
                className="trending-heading reveal-up"
                style={{ "--d": `${0.05 + i * 0.05}s` }}
              >
                {it.trendingLabel}
              </div>
            );
          }

          const cls = `menu-block${it.trending ? " trending" : ""} reveal-up`;
          return (
            <div
              key={it.name}
              className={cls}
              style={{ "--d": `${0.05 + i * 0.05}s` }}
            >
              <div className="item-img">
                <img
                  className="item-image"
                  src={it.image}
                  alt={it.name}
                  loading="lazy"
                />
              </div>

              <div className="menu-data">
                <div className="menu-info">
                  <div className="item-name">{it.name}</div>
                  <div className="menu-line"></div>
                  <div className="item-amount">{it.price}</div>
                </div>
                <p className="item-desc">{it.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const ImageColumn = (
    <div className="menu-img reveal-up" style={{ "--d": "0s" }}>
      <img
        src={sideImage}
        alt={`${title} showcase`}
        className="section-image"
        loading="lazy"
      />
    </div>
  );

  return (
    <section ref={ref} className="menu">
      <div className="w-layout-blockcontainer container w-container">
        <div className="menu-wrap">
          {/* For APPETIZERS: image left; for MAIN DISHES: list left */}
          {side === "left" ? (
            <>
              {ImageColumn}
              {ListColumn}
            </>
          ) : (
            <>
              {ListColumn}
              {ImageColumn}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
