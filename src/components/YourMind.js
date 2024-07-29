import { FaArrowCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import {
  PURE_VEG_DELIGHTS,
  BIRYANI,
  PIZZAS,
  NORTH_INDIANS,
  ROLLS,
  BURGERS,
  CAKE,
  CHINESE,
  DOSA,
  PAV_BHAJI,
  RASGULLA,
  PURE_VEG,
  NOODLES,
  PARATHA,
  MOMOS,
  SHAWARMA,
  CHOLE_BHATURE,
  ICE_CREAM,
  RASMALAI,
  PASTRY,
} from "../utils/constants";

const YourMind = () => {

    // const handleWheel = (e) => { 
    //     e.preventDefault();
    //     let slider = document.getElementById('slider');
    //     slider.scrollLeft += e.deltaY;  
    // }

    const handleRightArrow = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft += 500;
    };
    const handleLeftArrow = () => {
        let slider = document.getElementById('slider');
        slider.scrollLeft -=500;
    };

  return (
    <div className=" w-9/12 mx-auto pt-4">
      <div className="flex justify-between mx-4 mb-4">
        <h3 className=" font-bold text-2xl">What's on your mind</h3>
        <div className=" flex justify-between gap-2">
          <button onClick={handleLeftArrow}>
            <FaArrowAltCircleLeft size={30} className=" rounded-full text-zinc-400" />
          </button>
          <button onClick={handleRightArrow} className=" rounded-full">
            <FaArrowCircleRight size={30} />
          </button>
        </div>
      </div>

      <div className=" flex object-center">
        <div id="slider" className=" w-full h-full flex gap-6 overflow-x-scroll scroll scroll-smooth whitespace-nowrap scrollbar-hide ">
          <img src={PURE_VEG_DELIGHTS} className="inline-block w-36" />
          <img src={BIRYANI} className="inline-block w-36" />
          <img src={PIZZAS} className=" inline-block w-36 " />
          <img src={NORTH_INDIANS} className=" inline-block w-36 " />
          <img src={ROLLS} className=" inline-block w-36 " />
          <img src={BURGERS} className=" inline-block w-36 " />
          <img src={CAKE} className=" inline-block w-36 " />
          <img src={CHINESE} className=" inline-block w-36 " />
          <img src={DOSA} className=" inline-block w-36 " />
          <img src={PAV_BHAJI} className=" inline-block w-36 " />
          <img src={RASGULLA} className=" inline-block w-36 " />
          <img src={PURE_VEG} className=" inline-block w-36 " />
          <img src={NOODLES} className=" inline-block w-36 " />
          <img src={PARATHA} className=" inline-block w-36 " />
          <img src={MOMOS} className=" inline-block w-36 " />
          <img src={SHAWARMA} className=" inline-block w-36 " />
          <img src={CHOLE_BHATURE} className=" inline-block w-36 " />
          <img src={ICE_CREAM} className=" inline-block w-36 " />
          <img src={RASMALAI} className=" inline-block w-36 " />
          <img src={PASTRY} className=" inline-block w-36 " />
        </div>
      </div>
    </div>
  );
};

export default YourMind;
