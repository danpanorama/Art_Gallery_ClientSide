import React,{ useState } from 'react';

function Popup(props) {
console.log(props.imgstate)



  return (
 <div className='popup'>  
      
        
       <div  className="center">
       <div className='white '><span title={props.pointer} className='arrowright butonmove' onClick={props.getback}>&#8592;</span><span onClick={props.getnext} id={props.pointer} className='arrowleft butonmove'>&#8594;</span><span onClick={props.getimg} className='butonmove exitbutton' >&#215;</span></div>
           
       <img onClick={props.getimg}   className='imgf' src={props.imgstate.url} alt="" />
       </div>

  

    
     <p className='gdd'> {props.imgstate.name} \ {props.imgstate.size}</p>
   

    </div>
  );
}

export default Popup;
