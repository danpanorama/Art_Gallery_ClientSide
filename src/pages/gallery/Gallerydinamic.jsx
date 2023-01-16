import React, { useState, useEffect } from "react";
import "../../css/home.css";
import Gallerystate from "./Gallerystate";
import AxiosConfig from "../../config/AxiosConfig";
import {useLocation} from 'react-router-dom'

function Gallerydinamic(props) {
  let location = useLocation();
  const [imgarr, setimgarr] = useState([])
  const [loaderState, setLoader] = useState(false)
  

  useEffect(() => {

    getpaint();
  }, [location.state]);

  async function getpaint() {
    try {
      setLoader(true)
      await AxiosConfig.get('/upload',{params: {data:location.state}})
      .then((res) => {
  
        setimgarr(res.data)
        setLoader(false)
     
      })
      .catch((err) => {
        console.log(err);
        setLoader(false)
      });



    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="galcol">
      <div className={loaderState?"activeLoader":'disableLoader'}>
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
      <Gallerystate setLoader={setLoader} header={location.state} imgarr={imgarr} />
    </div>
  );
}

export default Gallerydinamic;
