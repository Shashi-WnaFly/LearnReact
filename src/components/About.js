import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About Page</h1>
            <h2>This is the first router page</h2>
            <User name={"Shashi Anand"} location={"Patna"} />
            <UserClass name={"Aman Anand"} location={"Kolkata"}/>
        </div>
    )
}

export default About;