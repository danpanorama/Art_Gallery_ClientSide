import React,{ useState } from 'react';
import '../../css/home.css'
import Contact from './Contact';
import AxiosConfig from "../../config/AxiosConfig";
import { useFormik } from "formik";

function Contactfunc(props) {
  const [loaderState, setLoaderState]= useState(false)
  const [msgstate, setmsgstate]= useState("")

  function cleantheinput(){
    console.log(text.values.text)
  }



  const text = useFormik({
    initialValues: {
      name: '',
      email:'',
      number: '', 
      text: '',
    },
    onSubmit: async (values,{resetForm}) => {
     
      try {
        setLoaderState(true)
        setmsgstate("")
      
        
        
        await AxiosConfig.post("/message/sms", values)
          .then((res) => {
           
            setmsgstate(res.data.msg)
            setLoaderState(false)
         

          })
          .catch((err) => {
            console.log(err);
       
          });
          
        
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <div>
        
      <Contact msg={msgstate} loader={loaderState} text={text}/>
    
    </div>
  );
}

export default Contactfunc;
