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
  const [openwindow,setWindow]= useState(false)
  const [error,setErrorState]= useState('')

  const [namestate,setnamestate]= useState('')
  const [passstate,setpassstate]= useState('')

  const [namenamestate,setNameState]= useState('')
  const [date,setDateState]= useState('')
  const [size,setSizeState]= useState('')

  
  const [Lodar,setLoader]= useState(false)
  const [msg,setmsg]= useState([])



  function setValeuOnChane(e){
    setnamestate(e.target.value)



  }


  function openwind(){
    setWindow(!openwindow)
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



function getname(e){
  setNameState(e.target.value)

}
function getsize(e){
  setSizeState(e.target.value)

}
function getdate(e){
  setDateState(e.target.value)

}



async function changeName(e){
  try {
    setLoader(true)
    
    await AxiosConfig.post("/upload/changename", {name:namenamestate,number:e.number})
      .then((res) => {
        if(res.data.err){
          setErrorState(res.data.err)
          return
        }
        e.name = namenamestate
        setLoader(false)
        dispatch({type:ActionTypes.EDIT_ITEM,data:{number:e.number,ele:e}})
        setNameState('')

      })
      .catch((err) => {
        console.log(err);
        setmsg(err.message)
        setLoader(false)
        setErrorState(err.message)
        setNameState('')
      });
    
  } catch (e) {
    console.log(e);
    setmsg(e.message)
        setLoader(false)
        setErrorState(e.message)
        setNameState('')
  }
}

async function changeDate(e){
  try { 
    setLoader(true)
    
    await AxiosConfig.post("/upload/changedate", {date:date,number:e.number})
      .then((res) => {
        if(res.data.err){
          setErrorState(res.data.err)
          return
        }
        e.date = date
        setLoader(false)
        dispatch({type:ActionTypes.EDIT_ITEM,data:{number:e.number,ele:e}})
        setDateState('')

      })
      .catch((err) => {
        console.log(err);
        setmsg(err.message)
        setLoader(false)
        setErrorState(err.message)
        setDateState('')
      });
    
  } catch (e) {
    console.log(e);
    setmsg(e.message)
        setLoader(false)
        setErrorState(e.message)
        setDateState('')
  }
}

async function changeSize(e){
  try {
    setLoader(true)
    
    await AxiosConfig.post("/upload/changesize", {size:size,number:e.number})
      .then((res) => {
        if(res.data.err){
          setErrorState(res.data.err)
          return
        }
        e.size = size
        setLoader(false)
        dispatch({type:ActionTypes.EDIT_ITEM,data:{number:e.number,ele:e}})
        setSizeState('')

      })
      .catch((err) => {
        console.log(err);
        setmsg(err.message)
        setLoader(false)
        setErrorState(err.message)
        setSizeState('')
      });
    
  } catch (e) {
    console.log(e);
    setmsg(e.message)
        setLoader(false)
        setErrorState(e.message)
        setSizeState('')
  }
}



  return (
    <div className='w100  flexcenter'>
      {error}
      {user.isLog == false? 
    <div className=" flexrow divlogin ">
      <form onSubmit={logins} action="" className='flexcol center formform'>
        <input type="text" name='name' onChange={setValeuOnChane} className='inputext' />
        <input type="password" name="password" onChange={setpassValeuOnChane} id="password" className='inputext' />
        <button className='bunnon'  >התחבר</button>
      </form>
      <div className="bgimage2">

      </div>
    </div>

    :
   
    <div>
     
<div className={"all_upload positionfixale" }>
<div className='posrel'>    
  <button className='closebtn' onClick={openwind}>{openwindow? 'סגור חלון':'הוסף תמונה'}</button>
</div>
   <Uploadform openwindow={openwindow} Lodar={Lodar} msg={msg} upload={upload} />
</div>
<div className="navFilter">
  <div className="flexcol">
  <div className="filter"><p className="p">water</p></div>
  <div className="filter"><p className="p">oil</p></div>
  <div className="filter"><p className="p">drawing</p></div>
  </div>
</div>
      
       
       <br /><br /><br /><br /><br />
       <List changeName={changeName} changeSize={changeSize} changeDate={changeDate} getname={getname} getdate={getdate} getsize={getsize} deletework={deletework} data={item.item}/>
    </div>

  

    }

        
    </div>
  );
}

export default Uploadimage;
