import { useDispatch } from "react-redux";
import { CARD_IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => {
        const { id, name, description, imageId, price } = item?.card?.info;
        return (
          <div className=" flex w-full justify-between py-7 p-4 relative border-b-2" key={id}>
            <div className=" flex justify-between w-9/12 p-4 flex-col">
              <div>
                <span className=" font-semibold p-2">{name}</span>
                <span> -- {price / 100} rupees</span>
              </div>
              <div className="w-9/12">{description}</div>
            </div>
            <img
              className=" w-3/12 h-28 object-cover"
              src={CARD_IMG_URL + imageId}
            />
            <button className=" font-bold text-green-600 absolute right-12 bottom-2 py-2 px-10 rounded-lg bg-white border-black border hover:bg-slate-200" onClick={() => handleAddItems(item)}>ADD</button>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
