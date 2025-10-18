// pure Next/JSX, no TS or Tailwind
export default function InstagramStrip() {
  const username = "zestara.restaurant_";
  const followUrl = "https://www.instagram.com/zestara.restaurant_";

  const pics = [
    "https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/682332437e8108fa0593b864_instagram-thumb-01.webp",
    "https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/682332436c64cded2a845736_instagram-thumb-02.webp",
    "https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68300f5f27e2a2a5a6096d70_instagram-thumb-03.webp",
    "https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68233243f410f8adc97c0185_instagram-thumb-04.webp",
    "https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68233245896f75a920168730_instagram-thumb-05.webp",
    "https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/68233245896f75a920168730_instagram-thumb-05.webp",
  ];

  return (
    <section className="instagram">
      <div className="w-layout-blockcontainer container w-container">
        {/* top row */}
        <div className="insta-top">
          <span className="insta-ico" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
            </svg>
          </span>
          <span className="insta-user">{username}</span>
        </div>

        {/* 6-image strip */}
        <div className="insta-strip">
          {pics.map((src, i) => (
            <a
              key={i}
              href={followUrl}
              target="_blank"
              rel="noreferrer"
              className="insta-item w-inline-block"
              aria-label={`Open ${username} on Instagram`}
            >
              <img
                src={src}
                alt=""
                className="insta-img"
                loading="lazy"
                decoding="async"
              />
            </a>
          ))}
        </div>

        {/* button */}
        <div className="insta-cta">
          <a
            href={followUrl}
            target="_blank"
            rel="noreferrer"
            className="insta-btn w-inline-block"
          >
            <span className="btn-ico" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </span>
            FOLLOW ON INSTAGRAM
          </a>
        </div>
      </div>
    </section>
  );
}
