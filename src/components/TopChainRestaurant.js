import RestaurantCard from "./RestaurantCard";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const TopChainRestaurant = (props) => {
  const { resList } = props;

  const handleRightArrow = () => {
    let slider = document.getElementById("resSlider");
    slider.scrollLeft += 720;
    if (slider.scrollLeft <= 0) {
      let left = document.getElementById("left");
      {
        left.style.color = "black";
        left.style.background = "#d7d8d9";
      }
    }
  };
  const handleLeftArrow = () => {
    let slider = document.getElementById("resSlider");
    slider.scrollLeft -= 720;
    if (slider.scrollLeft <= 0) {
      let left = document.getElementById("left");
      {
        left.style.background = "#e5e7eb";
        left.style.color = "#9ca3af";
      }
    }
  };
  return (
    <div className=" w-9/12 mx-auto pt-px">
      <div className="flex justify-between m-4">
        <div className=" font-bold text-2xl">
          Top restaurant chains in patna
        </div>
        <div className=" flex gap-3 items-end">
          <button
            onClick={handleLeftArrow}
            id="left"
            className=" rounded-full bg-[#d7d8d9] p-2"
          >
            <FiArrowLeft size={17} />
          </button>
          <button
            onClick={handleRightArrow}
            className=" rounded-full bg-[#d7d8d9] p-2"
          >
            <FiArrowRight size={17} />
          </button>
        </div>
      </div>

      <div className=" flex object-center relative">
        <div
          id="resSlider"
          className="w-full h-full flex overflow-x-scroll scroll scroll-smooth gap-8 px-4 whitespace-nowrap scrollbar-hide"
        >
          {resList.map((res) => (
            <RestaurantCard resData={res} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopChainRestaurant;
