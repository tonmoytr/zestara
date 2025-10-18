import PrivacySection from "@/app/components/privacy/PrivacySection";
import Navbar from "@/app/components/shared/Navbar";
import PageHeader from "@/app/components/shared/PageHeader";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Privacy Policy"
          content="We value your trust our Privacy Policy ensures your personal data is handled with care and transparency."
          // bgWord defaults to title; no need to pass
          align="left"
          size="xl"
        />
        <PrivacySection />
      </main>
    </>
  );
}
