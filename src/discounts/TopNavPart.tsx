const discountsInfo = [
  {
    discounts: "-15%",
    text1: "Զեղչ կախված ամրագրած օրերի քանակից",
    text2: "Ամրագրիր 5-15% զեղչ կստանաս ամրագրում 3-ից մինչև 20 օր:",
  },
  {
    discounts: "-10%",
    text1: "Ամենահայտնի Reel-ը սոցիալական հարթակում",
    text2:
      "Վիդեո տարբերակով ներկայացրու քո լավագույն օրերից մեկը amaranoc.am ի առանձնատներից մեկում և ստացիր 15% զեղչ",
  },
  {
    discounts: "-5%",
    text1: "Ավելացրու 5% զեղչ քո յուրաքանչյուր 3-րդ այցի համար",
    text2:
      "Իրականացրու բազմաթիվ ամրագրումներ և յուրաքանչյուր 3-րդ ամրագրման համար ստացիր 5% զեղչ",
  },
];

export default function TopNavPart() {
  return (
    <div>
      <strong>
        <h1 className="text-[36px] flex justify-center items-center">
          Հատուկ զեղչեր
        </h1>
      </strong>
      <div className="flex flex-col lg:flex-row gap-4 px-[20px] lg:px-[80px]">
        {discountsInfo.map(({ discounts, text1, text2 }, index) => (
          <div
            key={index}
            className="relative w-full xl:max-w-lg  rounded-lg overflow-hidden shadow-lg w-full h-[200px] xl:h-[260px]  bg-[url(https://amaranoc.am/images/raffle/special-discounts-image.jpg)] bg-cover"
          >
            <div className="absolute inset-0 bg-opacity-50 flex flex-col   text-white p-6 text-left">
              <h2 className="text-7xl font-bold">{discounts}</h2>
              <p className="text-lg font-semibold mt-2">{text1}</p>
              <p className="text-sm mt-2">{text2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
