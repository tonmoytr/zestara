import InstaStrip from "../components/blogs/InstaStrip";
import ExploreCuisines from "../components/home/ExploreCuisines";
import FeaturesBand from "../components/home/FeaturesBand";
import Hero from "../components/home/Hero";
import MenuPreview from "../components/home/MenuPreview";
import PhotoGalleryTwoCol from "../components/home/PhotoGallery";
import ReserveYourTable from "../components/reservations/ReserveYourTable";
import Navbar from "../components/shared/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="page-top">
        <Hero />
        <ExploreCuisines />
        <MenuPreview />
        <FeaturesBand />
        {/* <Gallery /> */}
        <PhotoGalleryTwoCol />
        <ReserveYourTable />
        <InstaStrip />
      </main>
    </>
  );
}
