import {useState} from "react";

const User = (props) => {
    const {name, location} = props;
    const [ count, setCount ] = useState(0);
    // const [ count1 ] = useState(1)
    return (
        <div style={{border:"2px solid black", padding:"1rem"}}>
            <p>Name : {name}</p>
            <p>Location : {location}</p>
            <h2>count : {count}</h2>
            <button onClick={()=>{
                setCount(count+1)
            }}>Count Increaser</button>
            {/* <h2>count1 : {count1}</h2> */}
        </div>
    )
}

export default User;