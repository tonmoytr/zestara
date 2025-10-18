export default function GalleryBottom() {
  return (
    <>
      <a className="gallery-img bottom w-inline-block">
        <img
          className="gallery-image big"
          alt="Gallery Image"
          loading="lazy"
          src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dff4787e69c2d6e81c_gallery-img-09.webp"
          sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
          srcSet="
            https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dff4787e69c2d6e81c_gallery-img-09-p-500.webp 500w,
            https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dff4787e69c2d6e81c_gallery-img-09-p-800.webp 800w,
            https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dff4787e69c2d6e81c_gallery-img-09-p-1080.webp 1080w,
            https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dff4787e69c2d6e81c_gallery-img-09-p-1600.webp 1600w,
            https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dff4787e69c2d6e81c_gallery-img-09-p-2000.webp 2000w,
            https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dff4787e69c2d6e81c_gallery-img-09-p-2600.webp 2600w,
            https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6825b1dff4787e69c2d6e81c_gallery-img-09.webp 3072w
          "
        />
      </a>

      <div className="gallery-box">
        <div>
          <h5 className="gallery-heading">
            Restaurant Interior &amp; Ambiance
          </h5>
          <p className="single-text">
            Explore the warm and inviting atmosphere of our restaurant, designed
            for your ultimate dining experience.
          </p>
        </div>
        <a
          href="/reservation"
          className="primary-button outline w-inline-block"
        >
          <div className="button-text-wrap">
            <div className="button-text">Reserve A Table</div>
            <div className="button-text hover">Reserve A Table</div>
          </div>
        </a>
      </div>
    </>
  );
}
