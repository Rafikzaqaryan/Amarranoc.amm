const serviceObj = [
  {
    img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724331775249--0.16594454212797016image.webp&w=1920&q=75",
    text1: "Մատուցող",
    text2:
      "Յուրաքանյչուր մատուցող կարող է սպասարկել 15-20 անձի։ Ծառայության արժեքը կախված է միջոցառման անցկացման վայրից։",
    servPrice: "20,000",
  },
  {
    img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724330468263--0.5829426973721912image.webp&w=1920&q=75",
    text1: "Բարմեն",
    text2:
      "Մեր պրոֆեսիոնալ բարմենները տիրապետում են տարբեր տեսակի խմիչքների պատրաստման հմտություններին։",
    servPrice: "25,000",
  },
  {
    img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724331582281--0.8016246618454268image.webp&w=1920&q=75",
    text1: "Խոհարար",
    text2:
      "Արժեքը կախված է միջոցառման անձանց քանակից և ուտեստների մենյուից։ Մեր խոհարարները ստեղծում են համերի հրաշալի համադրություն։",
    servPrice: "35,000",
  },
  {
    img: "https://amaranoc.am/_next/image?url=https%3A%2F%2Fapi.amaranoc.am%2F1724346434036--0.5362400594372552image.webp&w=1920&q=75",
    text1: "Հանդիսավար",
    text2:
      "Այս բաժնում մենք կփորձենք օգնել Ձեզ հանդիսավարի (թամադայի) ընտրության հարցում։",
    servPrice: "60,000",
  },
];

export default function ServiceOffers() {
  return (
    <div className="px-6 md:px-16 pb-36">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {serviceObj.map((el, i) => (
          <div key={i} className="shadow-lg rounded-lg overflow-hidden">
            <img
              src={el.img}
              alt={el.text1}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col gap-3">
              <strong className="text-lg">{el.text1}</strong>
              <p className="text-sm text-gray-700">{el.text2}</p>
            </div>
            <div className="flex items-center justify-between px-4 pb-4">
              <div className="flex items-center gap-2">
                <img src="https://amaranoc.am/images/price.svg" alt="price" />
                <strong className="text-lg text-[#575b65]">
                  {el.servPrice}֏
                </strong>
              </div>
              <button className="px-4 py-2 border border-[#fb9438] text-[#fb9438] rounded-3xl hover:bg-[#fb9438] hover:text-white transition">
                Ամրագրել
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
