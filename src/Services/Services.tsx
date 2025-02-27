import Header from "../Components/Header/Header";
import ServiceChoose from "./ServiceChoose/ServiceChoose";
import ServiceOffers from "./ServiceOffers";
import Footer from "../Components/footer/Footer";

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
