import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import { useEffect, useState } from "react";
import CategoryItems from "./CategoryItems";

const ResItem = () => {
  const { resId } = useParams();
  // const [ resMenu, setResMenu ] = useState(null);

  // useEffect(()=>{
  const resMenu = useResMenu(resId);
  // setResMenu(data);
  // },[]);
  console.log(resMenu);
  if (resMenu === null) return <Shimmer />;

  const items =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="w-6/12 mx-auto">
      {items.map((category) => {
        if (
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
          return (
            <div>
              <h1 className=" font-bold size-10" key={category?.card?.card?.title}>{category?.card?.card?.title}</h1>
              <div><CategoryItems list={category} /></div>

            </div>
          )
      })}
    </div>
  );
};

export default ResItem;
