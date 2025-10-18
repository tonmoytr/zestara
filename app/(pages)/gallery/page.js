import GalleryShowcase from "@/app/components/gallery/GalleryShowCase";
import Navbar from "@/app/components/shared/Navbar";
import PageHeader from "@/app/components/shared/PageHeader";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="ShowCase"
          content="Explore our gallery and immerse yourself in the beauty of our signature dishes & delightful dining experiences"
          // bgWord defaults to title; no need to pass
          align="left"
          size="xl"
        />
        <GalleryShowcase />
      </main>
    </>
  );
}
