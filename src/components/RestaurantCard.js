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
    <div className=" ">
      <div className="cardImage">
        <img
          src={CARD_IMG_URL + cloudinaryImageId}
          alt="food logo"
          className="foodLogo"
        />
        <div className="shadow">
          <p className="offers">
            {aggregatedDiscountInfoV3?.header}{" "}
            {aggregatedDiscountInfoV3?.subHeader}
          </p>
      </div>
        </div>
      <div className="details">
        <div>{name}</div>
        <p className="star">
          {" "}
          <IoMdStar size={18} className="fa-star" />{avgRating}
          <GoDotFill size={8} />{sla.slaString}
        </p>
        <p>{cuisines.join(", ")}</p>
        <p>{locality}</p>
      </div>
    </div>
  );
};

export const promotedResCard = (RestaurantCard) =>{
  return () =>{
    return(
      <div>
        <label>Promoted</label>
        <RestaurantCard />
      </div>
    )
  }
}

export default RestaurantCard;
