import React from 'react'
import './Header.css'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
// import amazon_logo from '././Header_images/amazon_logo.png'
import { Link } from 'react-router-dom';
import {useStateValue} from './StatePovider'
import { auth } from './firebase';
function Header() {

  const [{ basket, user}, dispatch] = useStateValue();
//for sign out
  const handleAuthentication = () =>{
    if(user) {
      auth.signOut();
    }
  };

  return (
    <>
      <div className="Header-Container">
        <Link to="/">
          <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
          />
        </Link>
        <div className="header_search">
          <input className="search-box" type="text" />
          <SearchIcon className="header_searchIcon" />
        </div>

        <div className="header_nav">
          <Link to="/login">
            <div onClick={handleAuthentication} className="header_option">
              <span className="header_optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header_optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">&Orders</span>
          </div>
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header_optionBasket">
              <ShoppingBasketIcon />
              <span className="header_optionLineOne header_backetCount">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header
