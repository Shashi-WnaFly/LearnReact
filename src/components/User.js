import {useState, useEffect} from "react";

const User = (props) => {
    const {name, location} = props;
    const [ count, setCount ] = useState(0);
    // useEffect( ()=>{
        // const timer = setInterval( ()=>{
    //         console.log("functional component");
        // }, 1000)
        // console.log(useEffect());
        // return ()=>{
            // clearInterval(timer); // this is how we can create something like componentWillUnmount
        // }
    // }, [])
    // console.log(useEffect()); It will print undefined because useEffect does not return a Value;
    return (
        <div style={{border:"2px solid black", padding:"1rem"}}>
            <p>Name : {name}</p>
            <p>Location : {location}</p>
            <h2>count : {count}</h2>
        </div>
    )
}

export default User;