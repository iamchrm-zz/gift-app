import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifts = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    return getGifts(category).then((img) => {
      setTimeout(() => {
        setState({ data: img, loading: false });
      }, 1000);
    });
  }, [category]);

  return state;
};
