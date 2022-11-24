import React,{ useState } from 'react';

function Infocomp(props) {


  return (
    <div className='all_info_comp'>

     <div className="flexcol div_holding_info">
         <div className="flexrow info_box">
             {/* <div className="circul">

             </div> */}
             <div className="info_txt">
                 <p className="txt">contact info:</p>
                 {/* <p className="disk">art is my way, and my soul leav me a massage</p> */}
             </div>
         </div>
         <div className="flexrow info_box">
             {/* <div className="circul">

             </div> */}
             <div className="info_txt">
                 <p className="txt">email: morcmario@gmail.com</p>
                 {/* <p className="disk">hope to respond soon, leave me an email</p> */}

             </div>
         </div>
         <div className="flexrow info_box">
             {/* <div className="circul">

             </div> */}
             <div className="info_txt">
                 <p className="txt"> <a className='linktxt' href='tel:+972546982417'> tel: +972546982417</a></p>
                 {/* <p className="disk">call now</p> */}

                 
             </div>
         </div>
     </div>
      
    
    </div>
  );
}

export default Infocomp;
