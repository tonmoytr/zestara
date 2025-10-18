"use client";
import desserts from "@/data/desserts.json";

export default function MenuDesserts() {
  return (
    <div className="menu-wrap container">
      {/* LEFT IMAGE */}
      <div className="menu-img">
        <div className="section-img">
          <img
            className="section-image"
            src={desserts.heroImage}
            alt="Dessert feature"
            loading="lazy"
          />
        </div>
      </div>

      {/* RIGHT LIST */}
      <div className="menu-right">
        <div className="menu-heading-wrap">
          <div className="menu-heading">{desserts.heading}</div>
          <div className="menu-line"></div>
        </div>

        <div className="menu-list">
          {/* Trending block */}
          <div className="trending-block">
            <div className="trending-heading">Trending / Season</div>
            <div className="menu-block trending">
              <div className="item-img">
                <img
                  src={desserts.trending.image}
                  alt={desserts.trending.name}
                  height="Auto"
                  className="item-image"
                  loading="lazy"
                />
              </div>
              <div className="menu-data">
                <div className="menu-info">
                  <div className="item-name">{desserts.trending.name}</div>
                  <div className="item-price">{desserts.trending.price}</div>
                </div>
                <div>{desserts.trending.desc}</div>
              </div>
            </div>
          </div>

          {/* Regular items */}
          {desserts.items.map((item, idx) => (
            <div className="menu-block" key={idx}>
              <div className="item-img">
                <img
                  src={item.image}
                  alt={item.name}
                  height="Auto"
                  className="item-image"
                  loading="lazy"
                />
              </div>
              <div className="menu-data">
                <div className="menu-info">
                  <div className="item-name">{item.name}</div>
                  <div className="item-price">{item.price}</div>
                </div>
                <div>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
