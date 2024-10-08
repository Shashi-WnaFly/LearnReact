import RestaurantCard, { PromotedRestaurant } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import YourMind from "./YourMind";
import TopChainRestaurant from "./TopChainRestaurant";

const Body = () => {
  const [RestaurantList, setRestaurantList] = useState([]);
  const [FilteredList, setFilteredList] = useState([]);
  const [SearchRes, setSearchRes] = useState("");

  async function getCards() {
    try {
      const data = await fetch(RESTAURANT_API);
      const json = await data.json();
      console.log(json);

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

  function handleSearch(){
    const filterList = RestaurantList.filter((res) => res?.info?.name.toLowerCase().includes(SearchRes.toLowerCase()));
    setFilteredList(filterList)
  }
  function handleTopRatedRes(){
    const topRatedRes = RestaurantList.filter((res) => res?.info?.avgRating >= 4 ? res : null);
    setFilteredList(topRatedRes);
  }

  const WithPromotedLevel = PromotedRestaurant(RestaurantCard);
  const { userName, setUserName } = useContext(userContext);

  const onlineStat = useOnlineStatus();
  if (onlineStat === false)
    return <h1>Are Internet to connect kr ye bhi mujhe batana hai</h1>;
  return RestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" w-full">
      <YourMind />
      <div className="flex gap-2 w-9/12 mx-auto">
        <div><input type="text" placeholder="search here" className="p-2 border-red-300 border rounded-md" value={SearchRes} onChange={(e) => {
          setSearchRes(e.target.value);
        }}/></div>
        <button className="px-6 py-2 text-white bg-blue-500 rounded-full" onClick={handleSearch}>Search</button>
        <button className=" py-2 px-6 rounded-md bg-green-600 text-white" onClick={handleTopRatedRes}>Top Rated Restaurant</button>
      </div>
      <div className="my-8 border-b-2 w-[73%] mx-auto"></div>
      <TopChainRestaurant resList = {FilteredList} />
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
