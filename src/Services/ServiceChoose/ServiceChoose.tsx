import ServiceChoseEl from "./ServiceChoseEl";

export default function ServiceChoose() {
  return (
    <div className="pt-5">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 md:gap-20 lg:gap-5 justify-center items-center">
        <ServiceChoseEl
          img="https://api.amaranoc.am/service.svg"
          text="Սպասարկում"
        />
        <ServiceChoseEl
          img="https://api.amaranoc.am/services1.svg"
          text="Շոու"
        />
        <ServiceChoseEl
          img="https://api.amaranoc.am/services2.svg"
          text="Միջոցառումներ"
        />
        <ServiceChoseEl
          img="https://api.amaranoc.am/services3.svg"
          text="Տեխնիկա"
          className="hidden md:block"
        />
        <ServiceChoseEl
          img="https://api.amaranoc.am/services4.svg"
          text="Օրավարձով գույք"
          className="hidden lg:block"
        />
      </div>
    </div>
  );
}
