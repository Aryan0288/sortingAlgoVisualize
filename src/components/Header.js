import React, { useEffect, useState } from "react";
import Body, { delbar } from "./Body";
import "../Styles/HeadCss.css";
import "../App.css"
import Bubble from "../Algorithms/Bubble";
import Insertion from "../Algorithms/Insertion";
import Selection from "../Algorithms/Selection";
import QuickSort from "../Algorithms/QuickSort";
import MergeSort from "../Algorithms/MergeSort";
import { reset } from "./OtherFunc";

export default function Header() {
  useEffect(() => {
    Body();
  },[]);
  const NewArr = () => {
    delbar();
    reset();
    Body(document.getElementById("arr_siz").value);
  };
  const ArrSize = () => {
    delbar();
    Body(document.getElementById("arr_siz").value);
  };

  const [slider,setSlider]=useState(20);
  const handleSliderChange = (e) => {
    setSlider(e.target.value);
  };
  const dynamicLeftValue = `calc(135px + ${slider}px)`;

  
  return (

    <div className="container">

      <div className="headingTop">
        <h1 id="title" className="font-effect-outline"> Sorting Visualizer </h1>
      </div>

      <div className="newInput">
        <div id="arr_sz">Array Size<input id="arr_siz" style={{color:"blue"}} type="range" min="5" max="50" defaultValue={50} onChange={ArrSize} /> </div>
        <button className="btn btn-primary" id="new_arr" onClick={NewArr}>New Array</button>
        <div id="sort_sp" style={{position:"relative"}}>
          Sorting Speed 
          <input id="sort_speed" type="range" min="-10" max="100" onChange={handleSliderChange} defaultValue={20} />
          <span id="dis-abs" style={{position:"absolute",left:`${dynamicLeftValue}`,top:"-11px",fontSize:"14px"}}>{slider}</span> 
        </div>
      </div>

      <div className="sortButtons">
        <button type="submit" id="bubble" onClick={Bubble} className="sorting_btn bs">BubbleSort</button>
        <button onClick={Insertion} className="sorting_btn is">InsertionSort</button>
        <button onClick={MergeSort} className="sorting_btn ms">MergeSort</button>
        <button onClick={QuickSort} className="sorting_btn qs">QuickSort</button>
        <button onClick={Selection} className="sorting_btn ss">SelectionSort</button>
      </div>
      

      <div className="container_sort_time" id="sorter"> 
        <div id="time">
          <div className="sort_title">Sorting Time</div>
          <span className="digit dig_mili" id="min">00</span>
          <span className="txt">:</span>
          <span className="digit dig_mili1" id="sec">00</span>
          <span className="txt">:</span>
          <span className="digit dig_mili" id="count">00</span>  
        </div>
      </div>

      <div id="bars"></div>

    </div>
    
  ); 

}
