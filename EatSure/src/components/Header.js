const Header = () => {
    return (
      <div className="header">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-6 col-lg-4">
              <div className="header__logo">
                <img src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" />
              </div>
            </div>
            <div className="col-6 col-lg-8">
              <div className="header__menu">
                <ul className="nav-items">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Profile</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>
                <button className="btn">Kontact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default Header;