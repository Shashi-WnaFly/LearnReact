import RestaurantCard, { PromotedRestaurant } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

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
  const { userName, setUserName } = useContext(userContext);

  const onlineStat = useOnlineStatus();
  if (onlineStat === false)
    return <h1>Are Internet to connect kr ye bhi mujhe batana hai</h1>;
  return RestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" w-full">
      <div className="flex items-center">
        <div className="border border-orange-500 p-2">
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
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
      <div className="flex w-9/12 gap-7 justify-evenly flex-wrap pt-10 m-auto">
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
