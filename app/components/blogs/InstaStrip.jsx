export default function InstaStrip() {
  return (
    <section className="instagram">
      <div className="w-layout-blockcontainer container w-container">
        <div className="insta-top">
          <div className="insta-icon">
            <img
              className="instagram-icon"
              alt="Icon"
              loading="lazy"
              src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/682333d86ed507d99aa52305_icon-insta.svg"
            />
          </div>
          <a className="insta-link" target="_blank" href="https://instagram.com">
            kofeo.restaurant_
          </a>
        </div>

        <div className="instagram-wrap">
          {[
            "682332437e8108fa0593b864_instagram-thumb-01.webp",
            "682332436c64cded2a845736_instagram-thumb-02.webp",
            "68300f5f27e2a2a5a6096d70_instagram-thumb-03.webp",
            "68233243f410f8adc97c0185_instagram-thumb-04.webp",
            "68233245896f75a920168730_instagram-thumb-05.webp",
            "6823324476e0c9379507b89b_instagram-thumb-06.webp",
          ].map((file, i) => (
            <div className="instagram-img" key={i}>
              <img
                className="instagram-image"
                alt="Image"
                loading="lazy"
                src={`https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/${file}`}
              />
            </div>
          ))}
        </div>

        <div className="button-outer center">
          <a className="insta-button w-inline-block" href="https://www.instagram.com/" target="_blank">
            <img
              alt="Icon"
              loading="lazy"
              src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/682332df1cf9503f76164559_ic-insta.svg"
            />
            <div className="button-text-wrap">
              <div className="button-text">Follow On Instagram</div>
              <div className="button-text hover">Follow On Instagram</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
