import { LOGO_URL } from '../utils/constants';
import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = ()=>{
    const [user, setUser] = useState("Login");

    return (
        <div className="header">
            <img src={LOGO_URL} alt="logo" id="logo"/>
            <div>
                <ul className="links">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/service'>Service</Link></li>
                    <li><Link to='/contactus'>Contacts</Link></li>
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