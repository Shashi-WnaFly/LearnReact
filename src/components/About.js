import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import userContext from "../utils/userContext";

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
        {/* //     <h1>About Page</h1>
        //     <h2>This is the first router page</h2>
        //     <User name={"Aman Anand"} location={"Kolkata"}/> */}
        
        <userContext.Consumer>
            {({loggedInUser})=> <h1>{loggedInUser}</h1>}
        </userContext.Consumer>
        
        <UserClass />
        </div>
        
        )
    } 
    
}

export default About;