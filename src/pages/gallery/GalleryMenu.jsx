import React,{ useState } from 'react';
import '../../css/gallery.css'
import Img1 from '../../image/goodpic/home/rsz_chire.jpg'
import Img2 from '../../image/f.jpeg'
import Img3 from '../../image/goodpic/draw/rsz_1dan.jpg'
import {  NavLink} from "react-router-dom";
import LazyLoad from 'react-lazyload';

function GalleryMenu(props) {


  return (
    <div className='flexcenter w100 ' >
      <br /><br /><br /><br />
        <h3 className='headre cw'><NavLink className='Link_inside cw'  to={{pathname:"/"}} >Home</NavLink>/Gallery Menu</h3>
        <div className="squers_div grid">
            <div className="option flexcol ">
            <NavLink state={'oil'}   className="option flexcol" to={{pathname:"/gallery",state:'oil'}}>
<LazyLoad  className="imgaga">
                <div className="imgaga">
                
                  <img src={Img1} className='img' alt="" />
                  
                </div>
                </LazyLoad>
                <div className="btn">
                  <p className="btnn cw">oil paint</p>
                  </div>
                  </NavLink>
            </div>
            <div className="option flexcol">
            <NavLink state={'water'}    className="option flexcol" to={{pathname:"/gallery",state:'water'}}>
 <LazyLoad  className="imgaga" >
                <div className="imgaga">
               
                <img src={Img2} className='img' alt="" />
               
                </div> </LazyLoad>
                <div className="btn">
                  <p className="btnn cw">watercolor</p>
                  </div> 
                  </NavLink>
            </div>
            <div className="option flexcol">
            <NavLink state={'draw'}    className="option flexcol" to={{pathname:"/gallery",state:'oil'}}>
   <LazyLoad  className="imgaga">
                <div className="imgaga">
             
                <img src={Img3} className='img' alt="" />

                </div></LazyLoad>
                <div className="btn">
                  <p className="btnn cw">drawing</p>
                  </div>
                  </NavLink>
            </div> 
            
          
          
           

          

            
        </div>
     
    </div>
  );
}

export default GalleryMenu;
