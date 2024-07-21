import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Header = () => {
  const [user, setUser] = useState("Login");
  const onlineStat = useOnlineStatus();
  const {loggedInUser} = useContext(userContext);
  return (
    <div className="flex justify-between p-4 items-center font-medium text-lg">
      <img src={LOGO_URL} alt="logo" id="logo" className="w-16 ml-4" />
      <div>
        <ul className="flex gap-6 mr-5">
          <li>Connectivity : {onlineStat == false ? "🔴" : "✅"}</li>
          <li className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-blue-600 ...">
            <Link to="/">Home</Link>
          </li>
          <li className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-blue-600 ...">
            <Link to="/about">About</Link>
          </li>
          <li className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-blue-600 ...">
            <Link to="/service">Service</Link>
          </li>
          <li className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-blue-600 ...">
            <Link to="/contactus">Contacts</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart ({0} items)</Link>
          </li>
          <li>
            <button
              className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none hover:text-blue-600 ..."
              onClick={() => {
                if (user === "Login") setUser("Logout");
                else setUser("Login");
              }}
            >
              {user}
            </button>
          </li>
            <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
