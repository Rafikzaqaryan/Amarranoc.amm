interface Offer {
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

const amenities = [
  { key: "player" },
  { key: "swing" },
  { key: "wifi" },
  { key: "air-conditioner" },
  { key: "garden" },
  { key: "dishes" },
  { key: "parking" },
  { key: "entrance" },
  { key: "fireplace" },
  { key: "bonfire" },
];

export default function OfferAdvantages({ offer }: { offer: Offer | null }) {
  if (!offer) {
    return <p className="text-center text-gray-500">No images available</p>;
  }

  return (
    <div className="w-[88vw] h-auto border border-[#d8d9dc] rounded-2xl p-5">
      <h1 className="text-xl font-semibold mb-4">Առավելություններ</h1>
      <div className="grid grid-cols-4  gap-3 ">
        {amenities.map(({ key }) =>
          offer[key as keyof Offer] ? (
            <div key={key} className="flex items-center gap-4">
              <img
                src={`https://api.amaranoc.am/${key}.svg`}
                className="w-[40px] h-[40px]"
              />
              <p>{offer[key as keyof Offer]}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
