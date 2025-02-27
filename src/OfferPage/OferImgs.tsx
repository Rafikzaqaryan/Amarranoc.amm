interface Offer {
  img: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
}

export default function OferImgs({ offer }: { offer: Offer | null }) {
  if (!offer)
    return <p className="text-center text-gray-500">No images available</p>;

  return (
    <div className="flex gap-4">
      <div>
        <img
          src={offer.img}
          alt="Main Offer Image"
          className="w-[50vw] h-[600px] rounded-2xl object-cover"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[offer.img2, offer.img3, offer.img4, offer.img5].map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Offer Image ${index + 2}`}
            className="w-[281px] h-[294px] rounded-2xl object-cover"
          />
        ))}
      </div>
    </div>
  );
}
