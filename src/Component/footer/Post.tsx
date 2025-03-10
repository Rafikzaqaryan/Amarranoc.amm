export default function Post() {
  return (
    <div className="bg-[#101623] bg-[url(https://amaranoc.am/images/footer/home-add-application.png)] bg-no-repeat bg-cover w-99.9vw h-[586px] py-8 flex justify-center items-center">
      <div className="w-[80vw] h-[400px] bg-[#38403e]  border-[#636a68] rounded-[20px] border px-4 py-6 md:py-10 md:px-8 ">
        <div className="text-white flex items-center justify-center gap-4 pt-4">
          <div className="w-[50px] md:w-[300px] h-[1px] bg-white"></div>
          <h1 className="text-[20px] md:text-[30px] font-bold text-center">
            Տեղադրել հայտարարություն
          </h1>
          <div className="w-[50px] md:w-[300px] h-[1px] bg-white"></div>
        </div>

        <p className="text-white text-center text-[12px] md:text-[14px] pt-4">
          Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ
        </p>

        <div className="flex flex-col md:flex-row gap-4  justify-center items-center pt-6">
          <input
            type="text"
            className="w-full max-w-[320px]  border-[#636a68]  text-[#636a68]  h-[40px] pl-4 text-[12px] bg-transparent border rounded-[10px]"
            placeholder="Անուն Ազգանուն"
          />
          <input
            type="text"
            className="w-full max-w-[320px]  border-[#636a68]  text-[#636a68]  h-[40px] pl-4 text-[12px] bg-transparent border rounded-[10px]"
            placeholder="Հեռախոսահամար"
          />
          <input
            type="text"
            className="w-full max-w-[320px]  border-[#636a68]  text-[#636a68] h-[40px] pl-4 text-[12px] bg-transparent border rounded-[10px]"
            placeholder="Էլ․ հասցե"
          />
          <button className="w-full max-w-[120px] h-[40px] text-white bg-[#fd993a] border-none rounded-[40px]">
            Ուղարկել
          </button>
        </div>
      </div>
    </div>
  );
}
