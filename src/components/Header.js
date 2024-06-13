import { LOGO_URL } from '../utils/constants';
import { useState } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = ()=>{
    const [user, setUser] = useState("Login");
    const onlineStat = useOnlineStatus();
    return (
        <div className="flex justify-between p-">
            <img src={LOGO_URL} alt="logo" id="logo" className="w-20"/>
            <div>
                <ul className="flex gap-1 ">
                    <li>Connectivity : {onlineStat == false ? "🔴" : "✅"}</li>
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