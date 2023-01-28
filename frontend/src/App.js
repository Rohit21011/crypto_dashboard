import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/links/dashboard";
import History from "./components/links/history";
import Market from "./components/links/market";
import MyWallet from "./components/links/Mywallet";
import News from "./components/links/news";
import Portfolio from "./components/links/portfolio";
import Setting from "./components/links/setting";
import Login from "./components/userLogin";

import "./custome-css.css";

function App() {
  return (
    <>
     
      <BrowserRouter>
        <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/mywallet" element={<MyWallet/>}/>
      <Route path="/market" element={<Market/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/setting" element={<Setting/>}/>
      </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
