import React,{ useState,useEffect } from 'react';
import "../../css/home.css";
import { useFormik } from "formik";
import AxiosConfig from "../../config/AxiosConfig";
import {useDispatch,useSelector} from "react-redux";
import * as ActionTypes from './../../store/Actions'
import Uploadform from './Uploadform';

import List from '../../components/listworks/List';


import '../../css/home.css'

function Uploadimage(props) {
  const dispatch = useDispatch();
  const user =  useSelector((state)=>state.users);
  const item =  useSelector((state)=>state.item);
  const [fileState,setFileState]= useState()
  const [error,setErrorState]= useState('')

  const [namestate,setnamestate]= useState('')
  const [passstate,setpassstate]= useState('')
  const [Lodar,setLoader]= useState(false)
  const [msg,setmsg]= useState([])



  function setValeuOnChane(e){
    setnamestate(e.target.value)

  }

  function setpassValeuOnChane(e){
    setpassstate(e.target.value)

  }


  async function deletework(e){
    try {
      await AxiosConfig.post("/upload/deletwork", {path:e.target.id,number:e.target.title})
        .then((res) => {
          console.log(res.data);
          if(res.data.err){
            setErrorState(res.data.err)
            return
          }

          dispatch({type:ActionTypes.DELET_ITEM,data:res.data})

        })
        .catch((err) => {
          console.log(err);
        
        });
      
    } catch (e) {
      console.log(e);
    
    }

  }



  async function getdataworks(){

    try {
      
     
      await AxiosConfig.get("/upload/show")
        .then((res) => {
          if(res.data.err){
            setErrorState(res.data.err)
            return
          }
          

          dispatch({type:ActionTypes.SET,data:res.data})

        })
        .catch((err) => {
          console.log(err);
        
        });
      
    } catch (e) {
      console.log(e);
    
    }

  }

  useEffect(()=>{
    getdataworks()

  },[])

  
  const upload = useFormik({
    initialValues: {
      file: null,
      name:'',
      category: 'draw', 
      date: '',
      size:''
    },
    onSubmit: async (values) => {
      let data = new FormData();
      data.append('file',values.file,values.file.name);
      let k = JSON.stringify(values)
      data.append('user', k)
      try {
        setLoader(true)
        
        await AxiosConfig.post("/upload", data)
          .then((res) => {
            console.log(res.data.msg)
            if(res.data.err){
              setErrorState(res.data.err)
              return
            }
            
            setLoader(false)
            dispatch({type:ActionTypes.ADD_ITEM,data:res.data.work})

          })
          .catch((err) => {
            console.log(err);
            setmsg(err)
            setLoader(false)
            setErrorState(err)
          });
        
      } catch (e) {
        console.log(e);
        setmsg(e)
            setLoader(false)
            setErrorState(e)
      }
    },
  });


function logins(e){
  e.preventDefault()

  dispatch({type:ActionTypes.LOGIN,data:{name:namestate,pass:passstate}})



}


  return (
    <div>
      {error}
      {user.isLog == false? 
    <div className="form">
      <form onSubmit={logins} action="">
        <input type="text" name='name' onChange={setValeuOnChane} />
        <input type="password" name="password" onChange={setpassValeuOnChane} id="password" />
        <button>login</button>
      </form>
    </div>

    :
   
    <div>
       <Uploadform Lodar={Lodar} msg={msg} upload={upload} />
       <br /><br /><br /><br /><br />
       <List deletework={deletework} data={item.item}/>
    </div>

  

    }

        
    </div>
  );
}

export default Uploadimage;
