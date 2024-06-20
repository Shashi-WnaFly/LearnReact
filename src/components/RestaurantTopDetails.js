import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { IoMdStar, IoIosBicycle } from "react-icons/io";
import { SiCommonworkflowlanguage } from "react-icons/si";

const RestaurantTopDetails = ({ resDetails }) => {
  const {
    name,
    avgRatingString,
    costForTwoMessage,
    totalRatingsString,
    areaName,
    cuisines,
    feeDetails,
    sla,
  } = resDetails?.data?.cards[2]?.card?.card?.info;
  return (
    <div>
      <div>
        <Link className=" text-xs font-light pb-2" to={"/"}>
          Home / <span className="font-normal">{name}</span>
        </Link>
      </div>
      <div className="my-5">
        <span className=" text-2xl font-bold pl-4 pb-3">{name}</span>
      </div>
      <div>
        <div className="p-4  border-2 border-black-600 rounded-2xl">
          <div className=" font-bold flex content-center">
            <span className=" inline-flex self-center p-0.5 text-white bg-green-600 rounded-full">
              {<IoMdStar />}
            </span>
            <span className=" ml-2 cursor-not-allowed">
              {avgRatingString} ({totalRatingsString}) {GoDotFill}{" "}
              {costForTwoMessage}
            </span>
          </div>
          <p className=" font-bold text-orange-500 underline text-sm p-1">
            {cuisines.join(", ")}
          </p>
          <div className=" flex align-middle text-sm font-bold leading-8">
            <span className=" inline-flex w-6 self-stretch">
              <SiCommonworkflowlanguage size={40} />
            </span>
            <div>
              <span>Outlet </span>
              <span className=" font-normal "> {areaName}</span>
              <p>{sla?.slaString.toLowerCase()}</p>
            </div>
          </div>
          <div className=" flex mt-4 align-middle">
            <span className="inline-flex self-center">
              <IoIosBicycle />
            </span>
            <p className="ml-2">{feeDetails?.message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantTopDetails;
