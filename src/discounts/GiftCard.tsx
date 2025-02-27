export default function GiftCard() {
  let priceObj = [
    { price: 50000 },
    { price: 60000 },
    { price: 70000 },
    { price: 80000 },
    { price: 90000 },
    { price: 100000 },
  ];
  return (
    <div className="flex justify-center pt-[100px] gap-[20px] text-center flex-col xl:flex-row ">
      <div>
        <p className="text-[40px] pb-3">
          Պատվիրի՛ր <span className="text-[#fb9438]">Նվեր քարտ</span> <br />
          Քո կամ ընկերերիդ համար
        </p>
        <p className="pt-3">
          Բաց մի թող մեր բացառիկ զեղչի քարտերը։ Եթե պլանավորում <br /> ես քո
          հաջորդ արձակուրդը՝ ընկերներիդ կամ ընտանիքիդ <br /> անդամների հետ, մեր
          զեղչային քարտերը առաջարկում են <br /> անգերազանցելի խնայողություններ
          ամառանոցների և <br /> ծառայությունների լայն տեսականիով: Ընտրիր զեղչի
          չափը <br /> քարտի վրա։
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-[662px] h-[383px] bg-[#fb9438] rounded-2xl flex justify-center items-center gap-[30px]  flex-col">
          <img
            src="https://amaranoc.am/images/white-logo.svg"
            className="w-[295px] h-[80px]"
          />
          <div className="grid grid-cols-3 gap-2 text-white text-[20px]">
            {priceObj.map((el, i) => (
              <div
                key={i}
                className="w-[120px] h-[42px] border border-white  flex items-center justify-center rounded-3xl"
              >
                {el.price}֏
              </div>
            ))}
          </div>
          <div className="mt-[20px]">
            <div className="w-[120px] h-[42px] border border-white text-white flex items-center justify-center rounded-3xl">
              Պատվիրել
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
