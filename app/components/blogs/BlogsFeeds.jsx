"use client";

const BLOGS = [
  {
    href: "/blog-posts/the-magic-of-our-exclusive-tasting-nights-a-food-lovers-dream",
    img: {
      src: "https://cdn.prod.website-files.com/68241abbbe9f3034706db098/68242b15d365fbebf0501a2c_blog-thumb-07.webp",
      alt: "Post Image",
    },
    title: "The magic of our exclusive tasting nights a food lover’s dream",
    date: "May 23, 2025",
    excerpt:
      "Each evening is food lover’s dream an unforgettable journey through flavors, textures, & culinary artistry crafted to inspire and delight.",
  },
  {
    href: "/blog-posts/how-our-restaurant-enhances-your-dining-experience",
    img: {
      src: "https://cdn.prod.website-files.com/68241abbbe9f3034706db098/68242aedfb68413cd199cc11_blog-thumb-06.webp",
      alt: "Post Image",
    },
    title: "How our restaurant enhances your dining experience",
    date: "May 23, 2025",
    excerpt:
      "At Kofeo, our menu is a celebration of rich culinary traditions from around the world reimagined with heart and creativity.",
  },
  {
    href: "/blog-posts/locally-sourced-ingredients-make-all-the-difference-in-taste",
    img: {
      src: "https://cdn.prod.website-files.com/68241abbbe9f3034706db098/68242acb465fd41f92790ecb_blog-thumb-05.webp",
      alt: "Post Image",
    },
    title: "Locally sourced ingredients make all the difference in taste",
    date: "May 23, 2025",
    excerpt:
      "Ingredients elevate every dish with fresher flavors, richer nutrients, and a true taste of the region — the essence of fine dining at its best.",
  },
  {
    href: "/blog-posts/exploring-authentic-flavors-from-around-the-world",
    img: {
      src: "https://cdn.prod.website-files.com/68241abbbe9f3034706db098/68242aacd354bac3e4f99f3d_blog-thumb-04.webp",
      alt: "Post Image",
    },
    title: "Exploring authentic flavors from around the world",
    date: "May 23, 2025",
    excerpt:
      "At Kofeo, we explore authentic dishes from every corner of the world, bringing diverse cultures and flavors together in one place.",
  },
  {
    href: "/blog-posts/why-dining-out-is-more-than-just-eating-its-an-experience",
    img: {
      src: "https://cdn.prod.website-files.com/68241abbbe9f3034706db098/68242a5f3b2beb2f4dcd7ce7_blog-thumb-02.webp",
      alt: "Post Image",
    },
    title: "Why dining out is more than just eating it’s an experience",
    date: "May 23, 2025",
    excerpt:
      "Dining out is more than satisfying hunger — it’s about ambiance, service, presentation, and the joy of savoring each moment.",
  },
];

export default function BlogsFeed() {
  return (
    <section className="blogs">
      <div className="w-layout-blockcontainer container w-container">
        <div className="w-dyn-list">
          <div role="list" className="post-list w-dyn-items">
            {BLOGS.map((p, i) => (
              <div role="listitem" className="post-item w-dyn-item" key={i}>
                <a href={p.href} className="post-block w-inline-block">
                  <div className="post-img">
                    <img
                      className="post-image"
                      src={p.img.src}
                      alt={p.img.alt}
                      loading="lazy"
                    />
                  </div>

                  <div className="post-right">
                    <div className="post-data">
                      <h3 className="post-title">{p.title}</h3>
                      <div>{p.date}</div>
                    </div>

                    <div className="post-info">
                      <p className="single-text">{p.excerpt}</p>

                      <div className="link-button">
                        <div className="button-text-wrap">
                          <div className="button-text">Read Article</div>
                          <div className="button-text hover">Read Article</div>
                        </div>
                        <img
                          className="arrow"
                          alt="Icon"
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/67a1a751729a973ff35d337a/6822f3eee7eeae0b4a2b2b1c_ic-arrow.svg"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Pagination (View More) */}
          <div
            role="navigation"
            aria-label="List"
            className="w-pagination-wrapper pagination"
          >
            <a className="w-pagination-next primary-button outline" href="#">
              <div className="button-text-wrap">
                <div className="button-text">View More</div>
                <div className="button-text hover">View More</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
