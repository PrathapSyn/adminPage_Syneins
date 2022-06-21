import React from 'react';
import "../../../Styles/newFIle.css";
import mic1 from "../../../Assets/mic9.png";
import mic2 from "../../../Assets/mic3.jpg";
import mic3 from "../../../Assets/mic5.jpg";
import { useSelector } from 'react-redux';

function NewFileJs() {
    ///https://www.kirupa.com/images/orange.png

    const hostelNameSelected = useSelector((state) => state.AdminPageReducers);
  return (
    
   <>

<div id="outerContainer">
  <div id="container">
    <div class="item">
      <img src={mic1} style={{backgroundColor:"skyblue" ,borderRadius:"50px"}} />
    </div>
    <div class="circle" style={{animationDelay: "0s"}}></div>
    <div class="circle" style={{animationDelay: "1s"}}></div>
    <div class="circle" style={{animationDelay: "2s"}}></div>
    <div class="circle" style={{animationDelay: "3s"}}></div>
  </div>
</div>
</>
      
  )
}

export default NewFileJs