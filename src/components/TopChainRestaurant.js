import RestaurantCard from "./RestaurantCard";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const TopChainRestaurant = (props) => {
  const { resList } = props;

  const handleRightArrow = () => {
    let slider = document.getElementById("resSlider");
    slider.scrollLeft += 560;
  };
  const handleLeftArrow = () => {
    let slider = document.getElementById("resSlider");
    slider.scrollLeft -= 560;
  };
  return (
    <div className=" w-9/12 mx-auto">
      <div className="flex justify-between mx-4 mb-4">
        <h3 className=" font-bold text-2xl mt-4">Top restaurant chains in patna</h3>
        <div className=" flex gap-2 mt-4">
          <button onClick={handleLeftArrow}>
            <FaArrowCircleLeft size={30} className=" rounded-full" />
          </button>
          <button onClick={handleRightArrow} className=" rounded-full">
            <FaArrowCircleRight size={30} />
          </button>
        </div>
      </div>

      <div className=" flex object-center">
        <div id="resSlider" className="w-full h-full flex overflow-x-scroll scroll scroll-smooth gap-4 p-4 whitespace-nowrap scrollbar-hide">
          {
            resList.map((res) => <RestaurantCard resData={res} />)
          }
        </div>
      </div>
    </div>
  );
};

export default TopChainRestaurant;
