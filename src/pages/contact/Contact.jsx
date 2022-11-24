import React,{ useState } from 'react';
import '../../css/home.css'
import '../../css/contact.css'

import Infocomp from '../../components/Infocomp';
import FormCon from '../../components/formcontact/FormCon';
import Loaader from '../../components/loader/Loader';

function Contact(props) {


  return (
    <div>
        <div className="all_contact h901 flexcenter">
            <div className="div_inside_contact">
                <div className="felxrowtocol  holding_info">
                    <div className="info_mario">

                        <Infocomp/>
                    </div>
                    <div className="contact_form flexcol">
                  
                        <FormCon text={props.text}/>
                     <p className='linktxt'>  {props.msg}</p> 
                        <Loaader loader={props.loader}/>

                    </div>
                </div>

            </div>
        </div>
      
    
    </div>
  );
}

export default Contact;
