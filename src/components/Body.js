import RestaurantCard, {promotedResCard}from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurants from "../utils/useRestaurants";

const Body = () => {
  const [RestaurantList, setRestaurantList] = useState([]);
  const [FilteredList, setFilteredList] = useState([]);
  const [SearchRes, setSearchRes] = useState("");

  // const datae = useRestaurants();

  // useEffect(()=>{
  //   setRestaurantList(datae);
  //   setFilteredList(datae);
  // },[datae])

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

  const onlineStat = useOnlineStatus();
  if (onlineStat === false)
    return <h1>Are Internet to connect kr ye bhi mujhe batana hai</h1>;
  const promotedRes = promotedResCard(RestaurantCard);
  return RestaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className=" ">
      <div className="">
        <button
          className="top-btn"
          onClick={() => {
            const filteredList = RestaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
        <div id="search_bar">
          <input
            type="text"
            value={SearchRes}
            onChange={(e) => {
              setSearchRes(e.target.value);
            }}
          />
          <button
            className="top-btn"
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
      <div className=" w-auto h-auto flex justify-evenly gap-6 align-middle flex-wrap mt-6 m-36">
        {FilteredList.map((RestaurantList) => (
          <Link
            style={{ textDecoration: "none" }}
            key={RestaurantList.info.id}
            to={"/restaurants/" + RestaurantList.info.id}
          >
            <RestaurantCard resData={
              RestaurantList.info.promoted ? promotedRes : RestaurantCard 
              } />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
