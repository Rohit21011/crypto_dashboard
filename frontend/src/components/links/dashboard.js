import React, { useEffect, useState } from "react";
import Card from "../card";
import Header from "../header";
import LeftNav from "../left-nav";
import Bitcoin from "../images/bitcoin.png";
import binance from "../images/binance.png";
import ethereum from "../images/ethereum.png";
import litecoin from "../images/litecoin.png";
import axios from "axios";

const Dashboard=()=>{
    const [getprice,setprice]=useState([]);
   useEffect(()=>{
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=4982114e-4022-48b8-835b-69b44458dfc9',{
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers":
          "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'",
        "Content-Type": "application/json",
        "X-CMC_PRO_API_KEY": '4982114e-4022-48b8-835b-69b44458dfc9',
      }},
    )
      .then((response) => response.json())
      .then((actualData) => setprice(actualData))
    },[]);
   console.log(getprice.bitcoin)
    return(
        <div>
         <Header/>
         <LeftNav/>
         <div className="card-position">
           
            <Card logo={Bitcoin} name="Bitcoin(BTC)"/>
        
         <Card logo={ethereum} name="Ethereum(ETC)"/>
         <Card logo={binance}   name="Binance(BNB)"/>
         <Card logo={litecoin}  name="Litecoin(LTC)"/>
         </div>
         
        </div>
    )
}
export default Dashboard;