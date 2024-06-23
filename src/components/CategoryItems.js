import ItemList from "./ItemList";
import { useState } from "react";

const CategoryItems = ({ list }) => {
  const [showItems, setShowItems] = useState(false);

  const showHandle = () => {
    setShowItems(!showItems);
  }
  // console.log(items);
  return (
    <div>
      <h1
        className=" font-bold p-2 border-b-4 my-4 cursor-pointer"
        key={list?.title}
        onClick={showHandle}
      >
        {list?.title} ({list?.itemCards.length})
      </h1>
      {showItems && <ItemList items={list?.itemCards} />}
    </div>
  );
};

export default CategoryItems;
