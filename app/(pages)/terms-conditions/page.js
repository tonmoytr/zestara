import Navbar from "@/app/components/shared/Navbar";
import PageHeader from "@/app/components/shared/PageHeader";

export default function TermsConditions() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Terms & Conditions"
          content="By accessing our restaurant services, you agree to our Terms & Conditions, ensuring a smooth & fair experience."
          // bgWord defaults to title; no need to pass
          align="left"
          size="xl"
        />
        <TermsConditions />
      </main>
    </>
  );
}
