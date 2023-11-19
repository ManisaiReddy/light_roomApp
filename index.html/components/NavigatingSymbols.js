import "./NavigatingSymbol.css";
import React, { useState } from "react";
import bookImage from "./e-commereceWebsite/Images/impactbook.png";
import dressImage from "./e-commereceWebsite/Images/ladydress.png";
import iphone from "./e-commereceWebsite/Images/appleNonTransparent-removebg-preview.png";
import shoesImage from "./e-commereceWebsite/Images/nikeShoe.png";
import watch from "./e-commereceWebsite/Images/smartwatch-removebg-preview.png";

import facebook from"./e-commereceWebsite/Images/facebook.png"
import jockey from"./e-commereceWebsite/Images/jockeyNon-transparent-removebg-preview.png"
import button from"./e-commereceWebsite/Images/Menu.png"
import linkedin from"./e-commereceWebsite/Images/linkedin.png"
import twiter from"./e-commereceWebsite/Images/twitter.png"
import instagram from"./e-commereceWebsite/Images/instagram.png"
function NavigatingSymbols(props) {
  return (
    <div className="button_div">
      <button><img className="img" src={button} alt="image_button" onClick={()=>{props.change()} } ></img></button>
      <div className="h1">
      <div className="h2">
        <img src={dressImage} className="Image"></img>
        <span className="sp">Baby Trend-440INR</span>
      </div>
      <div className="h2">
        <img src={shoesImage} className="Image"></img>
        <span className="sp">Nike Shoes-3200INR</span>
      </div>
      <div className="h2">
        <img src={bookImage} className="Image"></img>
        <span className="sp">BagavathGitha-516INR</span>
        </div>
      <div className="h2">
      <img src={watch} className="Image" id="watch"></img>
      <span className="sp">Rolex1.2-13999INR</span>
      </div>
      <div className="h2">
      <img src={jockey} className="Image" id="jockey"></img>
      <span className="sp">Jockey-$1199INR</span>
      </div>
      <div className="h2">
      <img src={iphone} className="Image" id="iphone"></img>
      <span className="sp">iphone14pro-$1339</span>
      </div>
  </div>
  <footer>
    <div className="h1div">
      <h3>Follow me on!!!</h3>
    </div>
    <div className="urls">
      <a href="https://www.facebook.com/manzz.saduvala" className="url_list"><img src={facebook} className="hrefimg"></img></a>
      <a href="https://www.linkedin.com/in/manisai-saduvala-aa1559237" className="url_list" ><img src={linkedin} id="lin" className="hrefimg"></img></a>
      <a href="https://twitter.com/ManisaiReddy7" className="url_list"><img src={twiter} className="hrefimg"></img></a>
      <a href="https://www.instagram.com/manisai_21" className="url_list"><img src={instagram} id="inst" className="hrefimg"></img></a>
    </div>
  </footer>

    </div>
  )
}

export default NavigatingSymbols