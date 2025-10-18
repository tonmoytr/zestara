export default function GalleryTop() {
  return (
    <div className="gallery-top">
      {/* Column 1 */}
      <div className="gallery-wrap">
        {/* Big image */}
        <a className="gallery-img w-inline-block">
          <img
            className="gallery-image"
            alt="Gallery Image"
            loading="lazy"
            src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd17801b8932f60209_gallery-img-01.webp"
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 728.024658203125px, (max-width: 1919px) 940.031982421875px, 49vw"
            srcSet="
              https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd17801b8932f60209_gallery-img-01-p-500.webp 500w,
              https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd17801b8932f60209_gallery-img-01-p-800.webp 800w,
              https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd17801b8932f60209_gallery-img-01-p-1080.webp 1080w,
              https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd17801b8932f60209_gallery-img-01-p-1600.webp 1600w,
              https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd17801b8932f60209_gallery-img-01-p-2000.webp 2000w,
              https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd17801b8932f60209_gallery-img-01.webp 2528w
            "
          />
        </a>

        {/* Small image + text block */}
        <div className="gallery-data">
          <a className="gallery-img w-inline-block">
            <img
              className="gallery-image small"
              alt="Gallery Image"
              loading="lazy"
              src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd96aa6150102b3121_gallery-img-04.webp"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
              srcSet="
                https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd96aa6150102b3121_gallery-img-04-p-500.webp 500w,
                https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd96aa6150102b3121_gallery-img-04-p-800.webp 800w,
                https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd96aa6150102b3121_gallery-img-04-p-1080.webp 1080w,
                https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd96aa6150102b3121_gallery-img-04.webp 1232w
              "
            />
          </a>

          <div className="gallery-block">
            <div>
              <h5 className="gallery-heading">The Masters at Work</h5>
              <p className="single-text">
                From appetizers to desserts, every dish is crafted with passion
                &amp; precision.
              </p>
            </div>
            <a
              href="/our-menu"
              className="primary-button outline w-inline-block"
            >
              <div className="button-text-wrap">
                <div className="button-text">View Our Menu</div>
                <div className="button-text hover">View Our Menu</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Column 2 */}
      <div className="gallery-wrap">
        <div className="gallery-data">
          <a className="gallery-img w-inline-block">
            <img
              className="gallery-image small"
              alt="Gallery Image"
              loading="lazy"
              src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dc0f2189cb63e5e2e2_gallery-img-02.webp"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
              srcSet="
                https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dc0f2189cb63e5e2e2_gallery-img-02-p-500.webp 500w,
                https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dc0f2189cb63e5e2e2_gallery-img-02-p-800.webp 800w,
                https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dc0f2189cb63e5e2e2_gallery-img-02-p-1080.webp 1080w,
                https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dc0f2189cb63e5e2e2_gallery-img-02.webp 1264w
              "
            />
          </a>

          <a className="gallery-img w-inline-block">
            <img
              className="gallery-image small"
              alt="Gallery Image"
              loading="lazy"
              src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd33a69d3666432919_gallery-img-03.webp"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
              srcSet="
                https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd33a69d3666432919_gallery-img-03-p-500.webp 500w,
                https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd33a69d3666432919_gallery-img-03-p-800.webp 800w,
                https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd33a69d3666432919_gallery-img-03-p-1080.webp 1080w,
                https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dd33a69d3666432919_gallery-img-03.webp 1264w
              "
            />
          </a>
        </div>

        {/* Big image */}
        <a className="gallery-img w-inline-block">
          <img
            className="gallery-image"
            alt="Gallery Image"
            loading="lazy"
            src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dde5d3a20fbfed8517_gallery-img-05.webp"
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
            srcSet="
              https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dde5d3a20fbfed8517_gallery-img-05-p-500.webp 500w,
              https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dde5d3a20fbfed8517_gallery-img-05-p-800.webp 800w,
              https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dde5d3a20fbfed8517_gallery-img-05-p-1080.webp 1080w,
              https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dde5d3a20fbfed8517_gallery-img-05-p-1600.webp 1600w,
              https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dde5d3a20fbfed8517_gallery-img-05-p-2000.webp 2000w,
              https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dde5d3a20fbfed8517_gallery-img-05.webp 2592w
            "
          />
        </a>
      </div>
    </div>
  );
}
