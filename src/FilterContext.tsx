import React, { createContext, useContext, ReactNode, useState } from "react";

interface FilterContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedlocation: string[]; // Change from string to string[]
  setSelectedlocation: React.Dispatch<React.SetStateAction<string[]>>;
  overnightFilters: string;
  setOvernightFilters: (value: string) => void;
  minPrice: number | undefined;
  setMinPrice: (price: number | undefined) => void;
  maxPrice: number | undefined;
  setMaxPrice: (price: number | undefined) => void;
  roomFilters: number[];
  setPoolFilters: (pool: string) => void;
  poolFilters: string;
  setRoomFilters: (rooms: any[]) => void;
  bathroomFilters: any[];
  setBathroomFilters: (bathrooms: number[]) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedlocation, setSelectedlocation] = useState<string[]>([]);
  const [overnightFilters, setOvernightFilters] = useState<string>("");

  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [roomFilters, setRoomFilters] = useState<number[]>([]);
  const [bathroomFilters, setBathroomFilters] = useState<number[]>([]);
  const [poolFilters, setPoolFilters] = useState<string>("");
  return (
    <FilterContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        overnightFilters,
        setOvernightFilters,
        selectedlocation,
        setSelectedlocation,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        roomFilters,
        setRoomFilters,
        bathroomFilters,
        setBathroomFilters,
        poolFilters,
        setPoolFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
