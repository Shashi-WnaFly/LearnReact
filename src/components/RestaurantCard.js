import { CARD_IMG_URL } from "../utils/constants";
import { GoDotFill } from "react-icons/go";
import { IoMdStar } from "react-icons/io";
import userContext from "../utils/userContext";
import { useContext } from "react";
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
  const {loggedInUser} = useContext(userContext);
  return (
    <div className=" w-64 h-80">
      <div className=" w-full h-3/6 relative">
        <img
          src={CARD_IMG_URL + cloudinaryImageId}
          alt="food logo"
          className="h-full w-full object-cover"
        />
        <div className="flex justify-center">
          <p className="absolute bottom-0 text-white w-11/12 self-center">
            {aggregatedDiscountInfoV3?.header}{" "}
            {aggregatedDiscountInfoV3?.subHeader}
          </p>
        </div>
      </div>
      <div className=" overflow-hidden text-nowrap text-ellipsis">
        <div>{name}</div>
        <p className=" flex items-center">
          {" "}
          <IoMdStar size={18}/>
          {avgRating}
          <GoDotFill size={8} />
          {sla.slaString}
        </p>
        <p className="">{cuisines.join(", ")}</p>
        <p>{locality}</p>
        <p>loggedInUser : {loggedInUser}</p>
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
