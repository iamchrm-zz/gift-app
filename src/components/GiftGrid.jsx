import React from "react";

import { useFetchGifts } from "../hooks/useFetchGifts";
import { GiftItem } from "./GiftItem";

export const GiftGrid = ({ category, OnAdd }) => {
  const { data: images, loading } = useFetchGifts(category);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center pt-10">
          <div className="transition ease-in duration-300 ">
            <div className="animate-pulse fadeIn">
              <h1 className="text-white text-center text-6xl">Loading</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center pt-4 ">
          <div className="transition ease-in duration-300 grid grid-cols-3 gap-4 pointer-events-auto">
            {images.map((img) => (
              <GiftItem key={img.id} {...img} OnAdd={OnAdd} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
