import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        // console.log("parent componentDidMount");
    }

    render(){
        return(
        <div>
            <h1>About Page</h1>
            <h2>This is the first router page</h2>
            <User name={"Aman Anand"} location={"Kolkata"}/>
        </div>
        )
    } 
    
}

export default About;