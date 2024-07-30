import { FaArrowCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { topCategoryScroll } from "../utils/constants";

const YourMind = () => {

    const handleRightArrow = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft += 560;
    };
    const handleLeftArrow = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft -=560;
    };

  return (
    <div className=" w-9/12 mx-auto pt-4">
      <div className="flex justify-between mx-4 mb-4">
        <h3 className=" font-bold text-2xl">What's on your mind</h3>
        <div className=" flex justify-between gap-2">
          <button onClick={handleLeftArrow} >
            <FaArrowAltCircleLeft size={30} className=" rounded-full "/>
          </button>
          <button onClick={handleRightArrow} className=" rounded-full">
            <FaArrowCircleRight size={30} />
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
