import { ReactNode } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Offer {
  price: ReactNode;
  location: ReactNode;
  people: ReactNode;
  id: string;
  title: string;
  image?: string;
}

interface LikedStore {
  likedOffers: Offer[];
  toggleLike: (offer: Offer) => void;
}

const useLikedStore = create<LikedStore>()(
  persist(
    (set, get) => ({
      likedOffers: [],
      toggleLike: (offer) => {
        const { likedOffers } = get();
        const isLiked = likedOffers.some((o) => o.id === offer.id);

        const updatedOffers = isLiked
          ? likedOffers.filter((o) => o.id !== offer.id)
          : [...likedOffers, offer];

        set({ likedOffers: updatedOffers });
      },
    }),
    { name: "likedOffers" }
  )
);

export default useLikedStore;
