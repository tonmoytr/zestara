export default function OurHistory() {
  return (
    <section className="our-history">
      <div className="w-layout-blockcontainer container w-container">
        <div className="history-wrapper">
          {/* Left column: title + paragraphs + small note */}
          <div className="history-left">
            <h2 className="history-title">Our History</h2>

            <div className="history-text">
              <p className="single-text">
                Journey started with a passion bringing people together over
                exceptional food.
              </p>
              <p className="single-text">
                Founded years ago with a vision to serve authentic flavors
                crafted with love and care, our restaurant quickly became a
                beloved culinary destination.
              </p>
              <p className="single-text">
                Our history is not just about food it’s about the memories
                created at every table, the friendships forged, &amp; the
                moments shared.
              </p>
            </div>

            <div className="history-info-text">
              Albert Flores founder of Kofeo.
            </div>
          </div>

          {/* Center image */}
          <div className="history-center">
            <div className="section-img">
              <img
                className="section-image"
                loading="lazy"
                alt="History image 01"
                src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826ceb200969b106796b2de_history-img-01.webp"
              />
            </div>
          </div>

          {/* Right column: short copy + image */}
          <div className="history-right">
            <p className="single-text">
              Every dish tells a story, every meal creates an experience, and
              every guest becomes a part of our ever-growing family.
            </p>

            <div className="history-img">
              <div className="section-img">
                <img
                  className="section-image"
                  loading="lazy"
                  alt="History image 02"
                  src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6826ceb21338eea3dba2ca7b_history-img-02.webp"
                />
              </div>
            </div>
          </div>
          {/* /Right */}
        </div>
      </div>
    </section>
  );
}
