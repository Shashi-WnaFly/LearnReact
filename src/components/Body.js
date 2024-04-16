import Restaurant from "../utils/mockedData"
import RestaurantCard from "./RestaurantCard";

const Body = ()=>(
    <div className="body">
        <div className="res-container">
            {
                Restaurant.map( (restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
            }
        </div>
    </div>
);

export default Body;