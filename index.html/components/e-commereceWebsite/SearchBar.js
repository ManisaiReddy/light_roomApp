import "./SearchBar.css";
import React from "react";

import img1 from"./Images/image1.png"

function SearchBar() {
  return (
    <div className="search">
        <input className="search-bar" type="text" placeholder="ClickHere" onChange={(e)=>(e.target.value)}></input>
        <img src={img1} alt="" className="image"></img>
    </div>
  )
}

export default SearchBar