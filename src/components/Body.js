import Restaurant from "../utils/mockedData"
import RestaurantCard from "./RestaurantCard";
// import topRatedRestaurant from "./topRatedRestaurant";
import { useState } from "react";

const Body = ()=>{
    let [RestaurantList, setRestaurant] = useState(Restaurant);

    return (
        <div className="body">
            <div>
                <button className="top-btn" onClick={()=>{
                    setRestaurant(RestaurantList.filter( (obj) => obj.info.avgRating > 4));
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