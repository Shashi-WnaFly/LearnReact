import { CARD_IMG_URL } from "../utils/constants";
import { GoDotFill } from "react-icons/go";
import { IoMdStar } from "react-icons/io";
const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    locality,
    sla,
    cloudinaryImageId,
    aggregatedDiscountInfoV3,
  } = resData?.info;
  // console.log(resData);
  return (
    <div className=" w-64 h-fit hover:scale-95 transition-transform flex-shrink-0 relative" data-testid="restrawCard">
      <div className=" w-full h-4/5 relative">
        <img
          src={CARD_IMG_URL + cloudinaryImageId}
          alt="food logo"
          className="w-full object-cover rounded-2xl h-44"
        />
        <div className=" absolute bottom-0 w-full ">
          <p className=" mb-2  text-white w-11/12 ml-3 font-extrabold text-xl">
            {aggregatedDiscountInfoV3?.header}{" "}
            {aggregatedDiscountInfoV3?.subHeader}
          </p>
        </div>
      </div>
      <div className=" overflow-hidden text-nowrap text-ellipsis pl-2 pt-2">
        <div className=" font-bold text-lg">{name}</div>
        <div className=" flex items-center font-semibold">
          {" "}
          <IoMdStar size={18} className=" p-0.5 bg-green-700 rounded-full text-white"/>
          <p className="ml-0.5 flex items-center">{avgRating}
          <GoDotFill size={8}/>
          </p>
          <p>{sla.slaString}</p>
        </div>
        <p className="">{cuisines.join(", ")}</p>
        <p>{locality}</p>
      </div>
    </div>
  );
};

export const PromotedRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute z-10 top-0 left-0 text-white p-2 bg-black m-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
