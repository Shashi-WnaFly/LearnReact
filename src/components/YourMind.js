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
    return <div className=" w-9/12 mx-auto pt-4">
        <div className="flex justify-between mx-4 mb-4">
            <h3 className=" font-bold text-2xl">What's on your mind</h3>
            <div className=" flex justify-between gap-2">
                <FaArrowAltCircleLeft size={30} className=" text-zinc-400"/>
                <FaArrowCircleRight size={30}/>
            </div>
        </div>

        <div className="w-lvw flex gap-6 overflow-x-scroll">
            <div className=" w-36"><img src={PURE_VEG_DELIGHTS} /></div>
            <div className=" w-36"><img src={BIRYANI} /></div>
            <div className=" w-36"><img src={PIZZAS} /></div>
            <div className=" w-36"><img src={NORTH_INDIANS} /></div>
            <div className=" w-36"><img src={NORTH_INDIANS} /></div>
            <div className=" w-36"><img src={NORTH_INDIANS} /></div>
            <div className=" w-36"><img src={NORTH_INDIANS} /></div>
            <div className=" w-36"><img src={NORTH_INDIANS} /></div>
            <div className=" w-36"><img src={NORTH_INDIANS} /></div>
            <div className=" w-36"><img src={NORTH_INDIANS} /></div>
            <div className=" w-36"><img src={NORTH_INDIANS} /></div>

            
        </div>
    </div>
}

export default YourMind;