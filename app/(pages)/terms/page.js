import Navbar from "@/app/components/shared/Navbar";
import PageHeader from "@/app/components/shared/PageHeader";
import TermsSection from "@/app/components/terms/TermsSection";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Privacy Policy"
          content="By accessing our restaurant services, you agree to our Terms & Conditions, ensuring a smooth & fair experience."
          // bgWord defaults to title; no need to pass
          align="left"
          size="xl"
        />
        <TermsSection />
      </main>
    </>
  );
}
