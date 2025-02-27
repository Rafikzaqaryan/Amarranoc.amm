import SignIcon from "./SignIcon";

export default function Search() {
  return (
    <div className="flex gap-2 items-center">
      <img
        src="https://amaranoc.am/images/header/globus.svg"
        className="w-5 h-5"
        alt="Globe"
      />
      <SignIcon />

      <div className="md:block hidden">
        <div className="md:block hidden">
          <div className="flex items-center w-[240px] h-[45px] border border-gray-300 rounded-[40px] px-3 py-2">
            <input
              type="text"
              placeholder="Որոնում"
              className="flex-grow outline-none text-[#dcdddf] bg-inherit "
            />
            <img
              src="https://amaranoc.am/images/header/search.svg"
              className="w-[16px] h-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
