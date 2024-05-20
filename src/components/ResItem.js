import {useState, useEffect} from 'react';
import Shimmer from './Shimmer';
import { MENU_API } from '../utils/constants';
import { useParams } from 'react-router-dom';

const ResItem = ()=>{
    const [resDetails, setResDetails] = useState(null);

    const {resId} = useParams();

    useEffect( () => {
        getResInfo();
        console.log(resDetails);
    },[])

    async function getResInfo(){
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResDetails(json);
    }

    if(resDetails === null) return <Shimmer />;
    const {name, costForTwoMessage, cuisines} = resDetails?.data?.cards[2]?.card?.card?.info;
    const items = resDetails?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(items)
    return (
        <div className="resItem">
            <h1>{name}</h1>
            <h4>{cuisines.join(', ')} - {costForTwoMessage}</h4>
            <h2>Menu</h2>
            <ul>
                {
                    items.map( (res) => <li key={res?.card?.info?.id}>{res?.card?.info?.name} - Rs. {(res?.card?.info?.price)/100}</li>)
                }
            </ul>
    
        </div>
    )
}

export default ResItem;