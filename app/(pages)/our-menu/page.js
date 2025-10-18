import ExploreCuisines from "@/app/components/home/ExploreCuisines";
import MenuPreview from "@/app/components/home/MenuPreview";
import MenuDesserts from "@/app/components/MenuDesserts";
import DineExperience from "@/app/components/OurMenu/DineExperience";
import Navbar from "@/app/components/shared/Navbar";
import PageHeader from "@/app/components/shared/PageHeader";

export default function OurMenu() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Our Menu"
          content="A carefully curated selection of dishes, crafted with the finest ingredients to bring out the perfect blend of flavors."
          // bgWord defaults to title; no need to pass
          align="left"
          size="xl"
        />
        <ExploreCuisines />
        <MenuPreview />
        <MenuDesserts />
        <DineExperience />
      </main>
    </>
  );
}
