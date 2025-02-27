import { useEffect, useState, useMemo } from "react";
import { useFilter } from "../../../FilterContext";
import { db } from "../../../Firebase";
import { collection, getDocs } from "firebase/firestore";

interface Product {
  location: string;
  overnight?: string;
}

export default function Location() {
  const { selectedlocation, setSelectedlocation } = useFilter();

  const [categories, setCategories] = useState<
    { location: string; count: number }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);

        const bestOffersSnapshot = await getDocs(collection(db, "BestOffers"));
        const commonOffersSnapshot = await getDocs(
          collection(db, "CommonOffers")
        );

        const locationCount: { [key: string]: number } = {};

        bestOffersSnapshot.forEach((doc) => {
          const product = doc.data() as Product;
          if (product.location) {
            locationCount[product.location] =
              (locationCount[product.location] || 0) + 1;
          }
        });

        commonOffersSnapshot.forEach((doc) => {
          const product = doc.data() as Product;
          if (product.location) {
            locationCount[product.location] =
              (locationCount[product.location] || 0) + 1;
          }
        });

        const sortedCategories = Object.entries(locationCount)
          .sort((a, b) => b[1] - a[1])
          .map(([location, count]) => ({ location, count }));

        setCategories(sortedCategories);
      } catch (error) {
        setError("Error fetching categories from Firestore.");
        console.error("Error fetching categories from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleRadioChangeCategories = (location: string) => {
    setSelectedlocation((selectedlocation: string[]) => {
      if (selectedlocation.includes(location)) {
        return selectedlocation.filter((loc: string) => loc !== location);
      } else {
        return [...selectedlocation, location];
      }
    });
  };

  const sortedCategories = useMemo(() => {
    return categories.map((category, index) => (
      <label key={index} className="flex items-center gap-2 text-[14px]">
        <input
          type="checkbox"
          value={category.location}
          onChange={() => handleRadioChangeCategories(category.location)}
          checked={selectedlocation.includes(category.location)}
          className="cursor-pointer"
        />
        {category.location} {category.count}
      </label>
    ));
  }, [categories, selectedlocation]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="p-2">
        <h2 className="text-[black]">Տարածարջան</h2>
      </div>
      <div className="h-40 pl-[10px] overflow-y-scroll scrollbar scrollbar-w-12 scrollbar-bg-red-500 flex flex-col gap-y-2">
        {sortedCategories}
      </div>
    </div>
  );
}
