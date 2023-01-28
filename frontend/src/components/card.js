import React from "react";

const Card=({logo,price,name})=>{

    return(
        <div className="card-layout">
          <img src={logo} alt="bitcoin" width="65px" />
          <p>{price}</p>
          <p>{name}</p>
        </div>
    )   
}
export default Card;