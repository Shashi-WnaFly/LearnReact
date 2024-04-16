import { LOGO_URL } from '../utils/constants';
import { USER_URL } from '../utils/constants';

const Header = ()=>(
    <div className="header">
        <img src={LOGO_URL} alt="logo" id="logo"/>
        <input type="text" placeholder="Search Here" id="search-bar"></input>
        <div>
            <ul className="links">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Contacts</li>
            </ul>
        </div>
        <img src={USER_URL} id="user"></img>
    </div>
)

export default Header;