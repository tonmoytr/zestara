import FaqSection from "@/app/components/contact-us/FAQ";
import GroupReservation from "@/app/components/reservations/GroupReservation";
import HoursReceptionLocation from "@/app/components/reservations/HoursReceptionLocation";
import ReserveYourTable from "@/app/components/reservations/ReserveYourTable";
import Navbar from "@/app/components/shared/Navbar";
import PageHeader from "@/app/components/shared/PageHeader";

export default function ReservationPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Reservation"
          content="Reserve your spot effortlessly and enjoy a hassle-free meal. Choose your time and dine with ease."
          // bgWord defaults to title; no need to pass
          align="left"
          size="xl"
        />
        <HoursReceptionLocation />
        <ReserveYourTable />
        <GroupReservation />
        <FaqSection />
      </main>
    </>
  );
}
