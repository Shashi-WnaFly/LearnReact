import RestaurantCard, { PromotedRestaurant } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [RestaurantList, setRestaurantList] = useState([]);
  const [FilteredList, setFilteredList] = useState([]);
  const [SearchRes, setSearchRes] = useState("");

  async function getCards() {
    try {
      const data = await fetch(RESTAURANT_API);
      const json = await data.json();

      setRestaurantList(
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredList(
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch {
      console.log("No data found");
    }
  }

  useEffect(() => {
    getCards();
  }, []);

  const WithPromotedLevel = PromotedRestaurant(RestaurantCard);

  const onlineStat = useOnlineStatus();
  if (onlineStat === false)
    return <h1>Are Internet to connect kr ye bhi mujhe batana hai</h1>;
  return RestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" w-full">
      <div className="">
        <button
          className=""
          onClick={() => {
            const filteredList = RestaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <div>
          <input
            type="text"
            value={SearchRes}
            onChange={(e) => {
              setSearchRes(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredList = RestaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(SearchRes.toLowerCase())
              );
              setFilteredList(filteredList);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex w-10/12 justify-evenly gap-5 flex-wrap pt-10 ml-auto mr-auto">
        {FilteredList.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurant_menu/" + restaurant?.info.id}
          >
            {restaurant?.info.promoted ? (
              <WithPromotedLevel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
