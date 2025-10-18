import ChefsSection from "@/app/components/OurChef/ChrfSection";
import DineExperience from "@/app/components/OurMenu/DineExperience";
import Navbar from "@/app/components/shared/Navbar";
import PageHeader from "@/app/components/shared/PageHeader";

export default function OurChefs() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Our Chef"
          content="Our chefs blend tradition with innovation, creating dishes that delight the senses & redefine exquisite dining."
          // bgWord defaults to title; no need to pass
          align="left"
          size="xl"
        />
        <ChefsSection />
        <DineExperience />
      </main>
    </>
  );
}
