import "./ImageList.css";
import React, { Component, useState } from "react";
import cargo from "./e-commereceWebsite/Images/Cargo.png";
import whish from "./e-commereceWebsite/Images/WhilshList.png";

import NavigatingSymbols from"./NavigatingSymbols"
import groceries from"./e-commereceWebsite/Images/Groceries.png"
import food from"./e-commereceWebsite/Images/Food.png"
import travel from"./e-commereceWebsite/Images/Travel.png"
import movies from"./e-commereceWebsite/Images/Movies.png"
import metro from"./e-commereceWebsite/Images/Metro.png"
class ImageList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         display:"none"
      }
      this.getDisplay=this.getDisplay.bind(this)
    }
    getDisplay()
    {
      this.setState({
        display:"block"
      })
    }
  render(){
    var set=this.state.display
  return ( <div>
    <NavigatingSymbols change={this.getDisplay}/>
    <div className="imageList_div"  style={{display:set}}>
        <a href="">
          <button className="button_for">
          <img src={food} alt="image_button" className="list" >
          </img></button>food
        </a>
        <a href="">
          <button className="button_for">
          <img src={groceries} alt="image_button" className="list" >
          </img></button>groceries
        </a>
        <a href="">
          <button className="button_for">
          <img src={travel} alt="image_button" className="list" ></img>
          </button>travel</a>
        <a href="">
          <button className="button_for">
          <img src={movies} alt="image_button" className="list" ></img>
          </button>movies</a>
        <a href="">
          <button className="button_for">
          <img src={metro} alt="image_button" className="list" >
          </img></button>metro</a>
        <a href="">
          <button className="button_for">
          <img src={whish} alt="image_button" className="list" >
          </img></button>food</a>
        <a href="">
          <button className="button_for">
          <img src={cargo} alt="image_button" className="list" >
          </img></button>cargo</a>
    </div>
    </div>
  )
  }
}

export default ImageList