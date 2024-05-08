import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{
    const [RestaurantList, setRestaurantList] = useState([]);
    const [FilteredList, setFilteredList] = useState([]);
    const [SearchRes, setSearchRes] = useState("");
 
    async function getCards() {
        try{
            const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=25.5940947&lng=85.1375645&page_type=DESKTOP_WEB_LISTING");
            const json = await data.json();
            console.log(json)
            setRestaurantList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
            setFilteredList(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
        }
        catch{
            console.log("No data found");
        }
    }

    useEffect(() => {
        getCards();
    }, []);

   return (RestaurantList.length === 0) ? < Shimmer /> : (
        <div className="body">
            <div className="tools">
                <button className="top-btn" onClick={()=>{
                    const filteredList = RestaurantList.filter( (res) => res.info.avgRating > 4);
                    setFilteredList(filteredList);
                }}>Top Rated Restaurant</button>
                <div id="search_bar">
                    <input type="text" value={SearchRes} onChange={(e)=>{
                        setSearchRes(e.target.value)
                    }}/>
                    <button className="top-btn" onClick={()=>{
                        const filteredList = RestaurantList.filter((res)=> res.info.name.toLowerCase().includes(SearchRes.toLowerCase()));
                        setFilteredList(filteredList);
                    }}>Search</button>
                </div>
            </div>
            <div className="res-container">
                {
                    FilteredList.map( (RestaurantList) => (<RestaurantCard key={RestaurantList.info.id} resData={RestaurantList}/>))
                }
            </div>
        </div>
    )
}

export default Body;