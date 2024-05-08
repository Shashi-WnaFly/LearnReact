import { LOGO_URL } from '../utils/constants';
import { useState} from "react";

const Header = ()=>{
    const [user, setUser] = useState("Login");

    return (
        <div className="header">
            <img src={LOGO_URL} alt="logo" id="logo"/>
            <div>
                <ul className="links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Contacts</li>
                    <li><button className='login-btn' onClick={()=>{
                        if(user==="Login") setUser("Logout");
                        else setUser("Login");
                    }}>{user}</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;