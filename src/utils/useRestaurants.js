import { useState, useEffect } from "react";
import { RESTAURANT_API } from "./constants";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  async function getData(){
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();

    setRestaurants(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(()=>{
    getData();
  })

  return restaurants;
};

export default useRestaurants;
