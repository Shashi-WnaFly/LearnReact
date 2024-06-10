import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const ResItem = () => {
  const { resId } = useParams();

  const resMenu = useResMenu(resId);

  if (resMenu === null) return <Shimmer />;

  const { name, costForTwoMessage, cuisines } =
    resMenu?.data?.cards[2]?.card?.card?.info;
  const items =
    resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  return (
    <div className="resItem">
      <h1>{name}</h1>
      <h4>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h4>
      <h2>Menu</h2>
      <ul>
        {items.map((res) => (
          <li key={res?.card?.info?.id}>
            {res?.card?.info?.name} - Rs. {res?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResItem;
