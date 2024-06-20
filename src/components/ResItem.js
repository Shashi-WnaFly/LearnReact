import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import CategoryItems from "./CategoryItems";
import RestaurantTopDetails from "./RestaurantTopDetails";

const ResItem = () => {
  const { resId } = useParams();
  const resMenu = useResMenu(resId);

  console.log(resMenu);
  if (resMenu === null) return <Shimmer />;

  const items =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="w-6/12 mx-auto">
      <RestaurantTopDetails resDetails={resMenu} />

      {items.map((category) => {
        if (
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
          return (
            <div>
              <h1
                className=" font-bold p-2 border-b-4 my-4"
                key={category?.card?.card?.title}
              >
                {category?.card?.card?.title}
              </h1>
              <div>
                <CategoryItems list={category} />
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default ResItem;
