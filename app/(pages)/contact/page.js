import InstaStrip from "@/app/components/blogs/InstaStrip";
import ContactForm from "@/app/components/contact-us/ContatForm";
import FAQ from "@/app/components/contact-us/FAQ";
import Navbar from "@/app/components/shared/Navbar";
import PageHeader from "@/app/components/shared/PageHeader";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Contact us"
          content="Whether you have inquiries about reservations, menu details, or special requests, feel free to reach out."
          // bgWord defaults to title; no need to pass
          align="left"
          size="xl"
        />

        <ContactForm />
        <FAQ />
        <InstaStrip />
      </main>
    </>
  );
}
