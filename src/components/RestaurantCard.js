import { CARD_IMG_URL } from "../utils/constants";

const RestaurantCard = (props)=>{
    const { resData } = props;
    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = resData?.info;
    return (
    <div className="res_card">
        <img src={CARD_IMG_URL+resData.info.cloudinaryImageId} alt="food logo" className="foodLogo"/>
        <div className="details">
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{"deliveryTime : "+sla.slaString}</h4>
        </div>
    </div>
    )
};

export default RestaurantCard;