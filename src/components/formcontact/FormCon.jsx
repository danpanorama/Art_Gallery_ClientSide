import React,{ useState } from 'react';

function FormCon(props) {


  return (
    <div className='form_info_div'>
        <div className="contactheader">
                    <p>send message to Mario</p>
                    </div>
        <form   onSubmit={props.text.handleSubmit} className="formin flexcol">

            <input required type="text" className='input' name='name'
             values={props.text.values.name}
             onChange={props.text.handleChange}
             placeholder='name' />
            <input required type="text" className='input' name='email'
             values={props.text.values.email}
             onChange={props.text.handleChange}
             placeholder='&#9993;' />
            <input required  type="number" className='input' name='number'
             values={props.text.values.number}
             onChange={props.text.handleChange}
             placeholder='&#9742;' />
<textarea required className='texarea' values={props.text.values.text}
             onChange={props.text.handleChange} placeholder='enter message here' name="text" id="" cols="20" rows="5">


</textarea>
<button className='btnsend'>send</button>

        </form>
      
    
    </div>
  );
}

export default FormCon;
