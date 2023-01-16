import React,{ useState } from 'react';
import '../../css/home.css'
import { NavLink } from "react-router-dom";

function Bio(props) {


  return (
    <div className='bgcol'>
        <div className="space20">
          
        </div>
      <div className="wid70margincenter">
<div className="felxrowtocol divbio">
    
    <div className="words">
        

<h3 className='fs1'>Mario Morcos</h3>


        <p className="txtspace">
        (birth year 1991) I born and raised in Jaffa, currently living and working in the city.</p>  
        <p className="txtspace">I studied drawing, painting and the principles of art at the studio of the painter Marek Yanai in Jerusalem, 
        and I have a diploma in architecture from the Shenkar School of Practical Engineering (2012, Tel-Aviv)
</p> 
<NavLink to='/uploadadmin' >upload</NavLink>


    </div>
    <div className="imagew">
  
<div className="bgimage">

</div>

    </div>
</div>
      </div>
    
    </div>
  );
}

export default Bio;
