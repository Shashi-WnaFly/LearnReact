import {useState, useEffect} from 'react';
import Shimmer from './Shimmer'

const ResItem = ()=>{
    const [resDetails, setResDetails] = useState(null);

    const getData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940947&lng=85.1375645&restaurantId=126292&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json = await data.json();
        setResDetails(json);
    }
    
    useEffect( () => {
        getData();
    },[])

    if(resDetails === null) return <Shimmer />;
    console.log(resDetails);
    // const {name, id, costForTwo, cuisines} = resDetails?.data?.cards[2]?.card?.card?.info;
    const items = resDetails?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    return (
        <div className="resItem">
            <ul>
                {items.map( (res) => <li key={res.id}>{res.card.info.name}</li>)}
            </ul>
    
        </div>
    )
}

export default ResItem;