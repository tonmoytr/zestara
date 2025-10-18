import Banner from "@/app/components/about/Banner";
import CulinaryChefsSection from "@/app/components/about/CulinaryChefsSection";
import OurHistory from "@/app/components/about/OurHistory";
import FaqSection from "@/app/components/contact-us/FAQ";
import Navbar from "@/app/components/shared/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <OurHistory />
        <FaqSection />
        <CulinaryChefsSection />
      </main>
    </>
  );
}
