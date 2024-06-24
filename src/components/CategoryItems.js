import ItemList from "./ItemList";
import { useState } from "react";

const CategoryItems = ({ list, showItems, setShowIndex}) => {
  const [open, setOpen] = useState(false);
  
  const showHandle = () => {
    setShowIndex();
    setOpen(!open);
  }
  
  return (
    <div>
      <h1
        className=" font-bold p-2 border-b-4 my-4 cursor-pointer"
        key={list?.title}
        onClick={showHandle}
      >
        {list?.title} ({list?.itemCards.length})
      </h1>
      {showItems && open && <ItemList items={list?.itemCards} />}
    </div>
  );
};

export default CategoryItems;
