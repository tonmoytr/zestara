'use client';
import gallery from '@/data/gallery2.json';

export default function PhotoGalleryTwoCol() {
  const {
    title = 'Photo Gallery',
    topLeft = '',            // BIG landscape
    topRight = [],           // [pizza, tartare] (SMALL, stacked)
    bottomLeft = [],         // [salmon, latte]  (SMALL, side-by-side)
    bottomRight = ''         // BIG portrait (eggs)
  } = gallery || {};

  return (
    <section className="gallery gallery-two">
      <div className="w-layout-blockcontainer container w-container">
        <h2 className="section-title">{title}</h2>

        <div className="g2">
          {/* LEFT COLUMN */}
          <div className="g2-col g2-left">
            <div className="g2-tile g2-big">
              <img src={topLeft} alt="" />
            </div>

            <div className="g2-row-2">
              <div className="g2-tile g2-small">
                <img src={bottomLeft[0] || ''} alt="" />
              </div>
              <div className="g2-tile g2-small">
                <img src={bottomLeft[1] || ''} alt="" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="g2-col g2-right">
            <div className="g2-stack-2">
              <div className="g2-tile g2-small">
                <img src={topRight[0] || ''} alt="" />
              </div>
              <div className="g2-tile g2-small">
                <img src={topRight[1] || ''} alt="" />
              </div>
            </div>

            <div className="g2-tile g2-big">
              <img src={bottomRight} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
