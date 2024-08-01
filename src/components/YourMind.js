import { FiArrowRight , FiArrowLeft } from "react-icons/fi";
import { topCategoryScroll } from "../utils/constants";

const YourMind = () => {

    const handleRightArrow = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft += 565;
    };
    const handleLeftArrow = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft -=565;
    };

  return (
    <div className=" w-9/12 mx-auto pt-4">
      <div className="flex justify-between mx-4 mb-4">
        <h3 className=" font-bold text-2xl">What's on your mind</h3>
        <div className=" flex justify-between gap-3">
          <button onClick={handleLeftArrow} className=" rounded-full p-2 bg-[#d7d8d9]">
            <FiArrowLeft size={17} />
          </button>
          <button onClick={handleRightArrow} className=" rounded-full p-2 bg-[#d7d8d9]">
            <FiArrowRight size={17} />
          </button>
        </div>
      </div>

      <div className=" flex object-center">
        <div id="slider" className=" w-full h-full flex gap-6 overflow-x-scroll scroll scroll-smooth whitespace-nowrap scrollbar-hide p-4">
          {topCategoryScroll.map((item) => <img id={item?.id} src={item?.img} className="w-36"/>)}
        </div>
      </div>
    </div>
  );
};

export default YourMind;
