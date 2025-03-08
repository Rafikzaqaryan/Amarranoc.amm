import { useEffect, useMemo, useState } from "react";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import { IoMdClose } from "react-icons/io";
import ServiceChoose from "./ServiceChoose/ServiceChoose";

interface Product {
  img: string;
  price: string;
  text1: string;
  text2: string;
  choose: string;
  id: string;
}

export default function ServiceOffers() {
  const [service, setServices] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [clickedChoose, setClickedChoose] = useState<string>("Սպասարկում");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const serviceSnapshot = await getDocs(collection(db, "Service"));

        const mapData = (doc: any): Product => ({
          id: doc.id,
          ...doc.data(),
        });

        setServices(serviceSnapshot.docs.map(mapData));
      } catch (error) {
        console.error("Error fetching data from Firestore", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredServices = useMemo(
    () => service.filter((product) => product.choose === clickedChoose),
    [service, clickedChoose]
  );

  const handleBookClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <ServiceChoose setClickedChoose={setClickedChoose} />
      <div className="px-6 md:px-16 pb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {loading ? (
            <p>Loading...</p>
          ) : filteredServices.length > 0 ? (
            filteredServices.map((product) => (
              <div
                key={product.id}
                className="shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={product.img}
                  alt={product.text1}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 flex flex-col gap-3">
                  <strong className="text-lg">{product.text1}</strong>
                  <p className="text-sm text-gray-700 h-[50px]">
                    {product.text2}
                  </p>
                </div>
                <div className="flex items-center justify-between px-4 pb-3">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://amaranoc.am/images/price.svg"
                      alt="price"
                    />
                    <strong className="text-lg text-[#575b65]">
                      {product.price}֏
                    </strong>
                  </div>
                  <button
                    className="w-[104px] h-[34px] border border-[#fb9438] text-[13px]  rounded-3xl hover:bg-[#fb9438] hover:text-white transition"
                    onClick={() => handleBookClick(product)}
                  >
                    Ամրագրել
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Արդյունքներ չեն գտնվել</p>
          )}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgb(16,22,35,.2)]  bg-opacity-0.5 z-50">
          <div className="bg-white w-[500px] h-[600px] p-6 rounded-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl text-black mb-4">
                {selectedProduct.text1}
              </h2>
              <button className="text-black " onClick={closeModal}>
                <IoMdClose />
              </button>
            </div>

            <p className="text-[23px]">{selectedProduct.text2}</p>
            <div className="flex justify-between mt-[330px] items-center">
              <p className="font-bold mt-4  text-gray-700 flex items-center gap-2 text-[20px]">
                <img src="https://amaranoc.am/images/price.svg" alt="price" />
                {selectedProduct.price}֏
              </p>
              <button className="w-[100px] h-[40px] border border-[#fb9438]  text-white rounded-xl bg-[#fb9438]  ">
                Ամրագրել
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
