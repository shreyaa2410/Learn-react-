import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [auth,setAuth]=useState("Login");
    return (
      <div className="header">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-6 col-lg-4">
              <div className="header__logo">
                <Link to="/"><img src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" /></Link>
              </div>
            </div>
            <div className="col-6 col-lg-8">
              <div className="header__menu">
                <ul className="nav-items">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
                <button className="btn" onClick={()=>{auth=='Login'?setAuth("Logout"):setAuth("Login")}}>{auth}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default Header;