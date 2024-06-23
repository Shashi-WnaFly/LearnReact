import { CARD_IMG_URL } from "../utils/constants";

const ItemList = ({items}) => {
  return (
    <div>
      {items.map((item) => {
        const { id, name, description, imageId, price } = item?.card?.info;
        return (
          <div className=" flex w-full justify-between p-4" key={id}>
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
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
