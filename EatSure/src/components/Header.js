import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
const Header = () => {
  const [auth,setAuth]=useState("Login");
  const onlineStatus=useOnlineStatus();
  const {loginUser,setUserName}= useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
    console.log(onlineStatus)
    return (
      <div className="header">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-6 col-lg-2">
              <div className="header__logo">
                <Link to="/"><img src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" /></Link>
              </div>
            </div>
            <div className="col-6 col-lg-10">
              <div className="header__menu">
                <ul className="nav-items">
                  <li>
                    Status:{onlineStatus==true?"🟢":"🔴"}
                  </li>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/grocery">Grocery</Link>
                  </li>
                  <li>
                    <Link to="/cart" className="relative"><FontAwesomeIcon icon={faCartShopping} className="text-blue-700"></FontAwesomeIcon><span className="cart-badge">{cartItems.length}</span></Link>
                  </li>
                </ul>
                <button className="btn" onClick={()=>{auth=='Login'?setAuth("Logout"):setAuth("Login")}}>{auth}</button>
                <span className="text-gray-700 font-bold text-lg">{loginUser}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default Header;