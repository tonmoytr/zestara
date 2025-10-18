"use client";

import data from "@/data/menuSections.json";
import MenuSection from "../OurMenu/MenuSection";

export default function MenuPreview() {
  return (
    <>
      {data.map((sec) => (
        <MenuSection
          key={sec.title}
          title={sec.title}
          side={sec.side}
          sideImage={sec.sideImage}
          items={sec.items}
        />
      ))}
    </>
  );
}
