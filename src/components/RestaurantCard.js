import { CARD_IMG_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
    <div className="res_card">
      <div className="cardImage">
        <img src={CARD_IMG_URL+cloudinaryImageId} alt="food logo" className="foodLogo" />
        <div className="shadow">
          <div className="offers">
            {aggregatedDiscountInfoV3?.header}{" "}
            {aggregatedDiscountInfoV3?.subHeader}
          </div>
        </div>
      </div>
      <div className="details">
        <div>{name}</div>
        <div>
        <FontAwesomeIcon icon={faStar} />{" "}{avgRating} : {sla.slaString}
        </div>
        <p>{cuisines.join(", ")}</p>
        <p>{locality}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
