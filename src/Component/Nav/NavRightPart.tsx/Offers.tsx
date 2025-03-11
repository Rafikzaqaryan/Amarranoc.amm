import { useEffect, useState, useMemo } from "react";

import { db } from "../../../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import BookCard from "./BookCard";

import { useFilter } from "../../../FilterContext";
import Choose from "./Choose";

interface Product {
  pool: string;
  bathrooms: number;
  rooms: number;
  overnight: string;
  id: string;
  location: string;
  img: string;
  price: number;
  people: number;
  choose: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
}

export default function Offers() {
  const {
    searchQuery,
    selectedlocation,
    overnightFilters,
    roomFilters,
    bathroomFilters,
    poolFilters,
    minPrice,
    maxPrice,
  } = useFilter();

  const [bestOffers, setBestOffers] = useState<Product[]>([]);
  const [commonOffers, setCommonOffers] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [clickedChoose, setClickedChoose] = useState<string>("Առանձնատներ");

  const itemsPerPage: number = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const [bestOffersSnapshot, commonOffersSnapshot] = await Promise.all([
          getDocs(collection(db, "BestOffers")),
          getDocs(collection(db, "CommonOffers")),
        ]);

        const mapData = (doc: any): Product => ({
          id: doc.id,
          ...doc.data(),
        });

        setBestOffers(bestOffersSnapshot.docs.map(mapData));
        setCommonOffers(commonOffersSnapshot.docs.map(mapData));
      } catch (error) {
        console.error("Error fetching data from Firestore", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterOffers = (offers: Product[]) =>
    offers.filter((product) => {
      return (
        (!selectedlocation.length ||
          selectedlocation.includes(product.location)) &&
        (!overnightFilters || product.overnight === overnightFilters) &&
        (!roomFilters.length || roomFilters.includes(product.rooms)) &&
        (!poolFilters || product.pool.includes(poolFilters)) &&
        (!bathroomFilters.length ||
          bathroomFilters.includes(product.bathrooms)) &&
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (!searchQuery ||
          product.location.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (clickedChoose === "Առանձնատներ" || product.choose === clickedChoose)
      );
    });

  const filteredBestOffers = useMemo(
    () => filterOffers(bestOffers),
    [
      bestOffers,
      selectedlocation,
      overnightFilters,
      roomFilters,
      poolFilters,
      bathroomFilters,
      minPrice,
      maxPrice,
      searchQuery,
      clickedChoose,
    ]
  );

  const filteredCommonOffers = useMemo(
    () => filterOffers(commonOffers),
    [
      commonOffers,
      selectedlocation,
      overnightFilters,
      roomFilters,
      poolFilters,
      bathroomFilters,
      minPrice,
      maxPrice,
      searchQuery,
      clickedChoose,
    ]
  );

  const totalProducts = filteredBestOffers.length + filteredCommonOffers.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  const getPaginationButtons = (): number[] => {
    const buttons: number[] = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(page);
    }

    return buttons;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBestOffers = filteredBestOffers.slice(startIndex, endIndex);
  const paginatedCommonOffers = filteredCommonOffers.slice(
    startIndex,
    endIndex
  );

  return (
    <div>
      <div className="pt-[30px] pl-[50px] pr-[40px]  [@media(max-width:1300px)]:pl-[0px]">
        <Choose setClickedChoose={setClickedChoose} />
      </div>

      <h2 className="text-xl font-bold mt-[10px]  w-[400px] [@media(max-width:1300px)]:pl-[40px]  [@media(max-width:768px)]:text-[15px]">
        Լավագույն առաջարկներ
      </h2>

      {/* <div className="grid grid-cols-3 ml-[40px] [@media(max-width:1025px)]:grid-cols-1 mr-[10px] mt-5"> */}
      <div className="flex flex-wrap gap-[10px] [@media(max-width:1025px)]:pl-[20px]   [@media(max-width:1300px)]:justify-center ">
        {loading ? (
          <p>Loading...</p>
        ) : paginatedBestOffers.length ? (
          paginatedBestOffers.map((product) => (
            <BookCard
              key={product.id}
              id={product.id}
              location={product.location}
              image={product.img}
              img2={product.img2}
              img3={product.img3}
              img4={product.img4}
              img5={product.img5}
              price={product.price}
              people={product.people}
            />
          ))
        ) : (
          <p>Արդյունքներ չեն գտնվել</p>
        )}
      </div>

      <h2 className="sm: text-xl font-bold mt-[60px] w-[380px] [@media(max-width:1300px)]:pl-[40px] [@media(max-width:768px)]:text-[15px]">
        Սովորական առաջարկներ
      </h2>
      <div className="flex flex-wrap gap-[10px]   [@media(max-width:1300px)]:justify-center ">
        {loading ? (
          <p>Loading...</p>
        ) : paginatedCommonOffers.length ? (
          paginatedCommonOffers.map((product) => (
            <BookCard
              key={product.id}
              id={product.id}
              location={product.location}
              image={product.img}
              price={product.price}
              people={product.people}
              img2={product.img2}
              img3={product.img3}
              img4={product.img4}
              img5={product.img5}
            />
          ))
        ) : (
          <p>Արդյունքներ չեն գտնվել</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center space-x-4 mt-5">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`p-2  rounded-full ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <GrFormPreviousLink />
          </button>

          <div className="flex space-x-2">
            {getPaginationButtons().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`text-[18px] cursor-pointer w-[34px] h-[34px] flex justify-center items-center rounded-[20px] ${
                  currentPage === page
                    ? "bg-[#fd993a] text-white"
                    : "bg-white text-black"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`p-2  rounded-full ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <GrFormNextLink />
          </button>
        </div>
      )}
    </div>
  );
}
