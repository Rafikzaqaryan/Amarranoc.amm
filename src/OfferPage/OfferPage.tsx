import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";
import Header from "../Component/Header/Header";
import OfferAboutInfo from "./OfferAboutInfo";
import OferImgs from "./OferImgs";
import OfferPrice from "./OfferPrice";
import Footer from "../Component/footer/Footer";
import OfferAdvantages from "./OfferAdvantages";

interface Offer {
  id: string;
  location: string;
  img: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  price: number;
  category: string;
  rating: number;
  people: number;
  overNightPrice: number;
  code: string;
  adreess: string;
  overnight: string;
  buildingarea: number;
  commonarea: number;
  PeopleOvernight: number;
  bathrooms: number;
  pool: string;
  rooms: number;
  player?: string;
  garden?: string;
  swing?: string;
  dishes?: string;
  wifi?: string;
  parking?: string;
  airConditioner?: string;
  entrance?: string;
  fireplace?: string;
  bonfire?: string;
}

export default function OfferPage() {
  const { id } = useParams<{ id: string }>();

  const [offer, setOffer] = useState<Offer | null>(null);

  useEffect(() => {
    const fetchOffer = async () => {
      if (id) {
        try {
          const bestRef = doc(db, "BestOffers", id);
          const commonRef = doc(db, "CommonOffers", id);

          const bestSnap = await getDoc(bestRef);
          const commonSnap = await getDoc(commonRef);

          if (bestSnap.exists()) {
            setOffer({ id: bestSnap.id, ...bestSnap.data() } as Offer);
          } else if (commonSnap.exists()) {
            setOffer({ id: commonSnap.id, ...commonSnap.data() } as Offer);
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching offer data:", error);
        }
      }
    };

    fetchOffer();
  }, [id]);

  if (!offer) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Header />
      <div className="pl-[80px]">
        <div className="pt-[20px]">
          <OfferPrice offer={offer} />
        </div>
        <div className="pt-[30px]">
          <OferImgs offer={offer} />
        </div>
        <div className="pt-[30px]">
          <OfferAboutInfo offer={offer} />
        </div>
        <div className="pt-[30px]">
          <OfferAdvantages offer={offer} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
