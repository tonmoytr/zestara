export default function Banner() {
  return (
    <div className="story-wrapper">
      <div className="story-wrap">
        <div className="w-layout-blockcontainer story-container w-container">
          <div className="story-inner">
            {/* Left: Title */}
            <div className="overflow-hidden">
              <h1 className="story-title">About us</h1>
            </div>

            {/* Right: Image stack + CTA */}
            <div className="story-right">
              <div className="story-img">
                <img
                  className="story-image"
                  loading="lazy"
                  alt="About hero primary"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826c6158e728288f369326f_about-hero-img-01.webp"
                  srcSet="
                    https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826c6158e728288f369326f_about-hero-img-01-p-500.webp 500w,
                    https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826c6158e728288f369326f_about-hero-img-01-p-800.webp 800w,
                    https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826c6158e728288f369326f_about-hero-img-01-p-1080.webp 1080w,
                    https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826c6158e728288f369326f_about-hero-img-01-p-1600.webp 1600w,
                    https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826c6158e728288f369326f_about-hero-img-01.webp 1728w
                  "
                />
              </div>

              <div className="story-bottom">
                <div className="story-data">
                  <a href="/reservation" className="story-button">
                    Reserve A Table
                  </a>

                  <div className="story-img-02">
                    <img
                      className="story-image-02"
                      loading="lazy"
                      alt="About hero secondary"
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 840px"
                      src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826c6141bbb33cc0bfc4684_about-hero-img-02.webp"
                      srcSet="
                        https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826c6141bbb33cc0bfc4684_about-hero-img-02-p-500.webp 500w,
                        https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826c6141bbb33cc0bfc4684_about-hero-img-02-p-800.webp 800w,
                        https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826c6141bbb33cc0bfc4684_about-hero-img-02.webp 840w
                      "
                    />
                  </div>
                </div>

                <div className="story-img-02">
                  <img
                    className="story-image-02"
                    loading="lazy"
                    alt="About hero tertiary"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 840px"
                    src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826c6147878d7cf67aa4451_about-hero-img-03.webp"
                    srcSet="
                      https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826c6147878d7cf67aa4451_about-hero-img-03-p-500.webp 500w,
                      https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826c6147878d7cf67aa4451_about-hero-img-03-p-800.webp 800w,
                      https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826c6147878d7cf67aa4451_about-hero-img-03.webp 840w
                    "
                  />
                </div>
              </div>
            </div>
            {/* /Right */}
          </div>
        </div>
      </div>
    </div>
  );
}
