import { useEffect, useState } from "react";
import { MENU_API } from '../utils/constants';

const useResMenu = (resId) => {
    const [resMenu, setResMenu] = useState(null);

    async function getData() {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResMenu(json);
    };

    useEffect(()=>{
        getData();
    },[]);

    return resMenu;
}

export default useResMenu;