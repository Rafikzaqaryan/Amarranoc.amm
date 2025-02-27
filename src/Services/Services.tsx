import Header from "../Component/Header/Header";
import ServiceChoose from "./ServiceChoose/ServiceChoose";
import ServiceOffers from "./ServiceOffers";
import Footer from "../Component/footer/Footer";

export default function Services() {
  return (
    <div>
      <Header />
      <ServiceChoose />
      <ServiceOffers />
      <Footer />
    </div>
  );
}
