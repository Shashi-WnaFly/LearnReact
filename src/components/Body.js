import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{
    const [RestaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        getCards();
    }, []);

    const getCards = async () => {
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        setRestaurantList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    }

   return (RestaurantList.length === 0) ? < Shimmer /> : (
        <div className="body">
            <div>
                <button className="top-btn" onClick={()=>{
                    setRestaurantList(RestaurantList.filter( (obj) => obj.info.avgRating > 4));
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    RestaurantList.map( (RestaurantList) => (<RestaurantCard key={RestaurantList.info.id} resData={RestaurantList}/>))
                }
            </div>
        </div>
    )
}

export default Body;