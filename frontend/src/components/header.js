import React from "react";
import avatar from "../man.png";
const Header = () => {
  return (
    <div className="setHeader">
      <div>
        <h2>
          <i class="fab fa-gg"></i> CoinBasket
        </h2>
      </div>
      <div className="search">
        <input type="search" placeholder="search"></input>
        <i class="material-icons">search</i>
      </div>
      <div className="notification">
      <i class='fas fa-bell'></i>
      </div>
      <div className="profile">
        <span>
          <img src={avatar} alt="user" width="37px"/> 
          <select>
            <option value="username">USERNAME</option>
            <option value="Account">Account</option>
            <option value="Account">Logout</option>
          </select>
        </span>
      </div>
    </div>
  );
};
export default Header;
