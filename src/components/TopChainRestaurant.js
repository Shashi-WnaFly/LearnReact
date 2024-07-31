import RestaurantCard from "./RestaurantCard";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const TopChainRestaurant = (props) => {
  const { resList } = props;

  const handleRightArrow = () => {
    let slider = document.getElementById("resSlider");
    slider.scrollLeft += 720;
    if(slider.scrollLeft <= 0){
      let left = document.getElementById('left');
      {left.style.color = 'black'}
    }
  };
  const handleLeftArrow = () => {
    let slider = document.getElementById("resSlider");
    slider.scrollLeft -= 720;
    if(slider.scrollLeft <= 300){
      let left = document.getElementById('left');
      {left.style.color = '#d1d5db'}
    }
  };
  return (
    <div className=" w-9/12 mx-auto">
      <div className="">
        <div className="flex justify-between m-4">
          <div className=" font-bold text-2xl mt-4">
            Top restaurant chains in patna
          </div>
          <div className=" flex gap-2 items-end">
            <button onClick={handleLeftArrow} id="left" className=" text-gray-300 rounded-full" >
              <FaArrowCircleLeft size={30} />
            </button>
            <button onClick={handleRightArrow} className=" rounded-full">
              <FaArrowCircleRight size={30} />
            </button>
          </div>
        </div>
      </div>

      <div className=" flex object-center relative">
        <div
          id="resSlider"
          className="w-full h-full flex overflow-x-scroll scroll scroll-smooth gap-8 p-4 whitespace-nowrap scrollbar-hide"
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
