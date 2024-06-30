import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import CategoryItems from "./CategoryItems";
import RestaurantTopDetails from "./RestaurantTopDetails";
import { useState } from "react";

const ResItem = () => {
  const { resId } = useParams();
  const resMenu = useResMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  // console.log(resMenu);
  
  if (resMenu === null) return <Shimmer />;

  const items =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-6/12 mx-auto">
      <RestaurantTopDetails restaurantInfo={resMenu} />

      {items.map((category, index) => (
        <CategoryItems
          key={category?.card?.card?.title}
          list={category?.card?.card}
          showItems={index == showIndex && true}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default ResItem;
