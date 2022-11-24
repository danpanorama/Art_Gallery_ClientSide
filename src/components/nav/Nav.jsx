import React,{ useState } from 'react';
import { Routes, NavLink, Route, Router } from "react-router-dom";
import Home from '../home/Home'
import GalleryMenu from '../../pages/gallery/GalleryMenu';
import Nofuondpage from '../../pages/home/Nofuondpage';
import Gallerydinamic from '../../pages/gallery/Gallerydinamic';
import Uploadimage from '../../pages/uploadimag/Uploadimage';
import Contactfunc from '../../pages/contact/Contactfunc';
import Bio from '../../pages/bio/Bio';

import Navname from './Navname';

function Nav(props) {
  const [navbar,setnavbar ] = useState(false)
  const changebacgraound = ()=>{
    if(window.scrollY >= 80){
        setnavbar(true)
    }
    else{
        setnavbar(false)
    }
 }


  return (
    <div>
     <Navname/>

<Routes bassname="/">
<Route path="/gallerymenu" element={<GalleryMenu/>} exact/>
<Route path="/*" element={<Home/>} exact/>
<Route path="/404" element={<Nofuondpage/>} exact/>
<Route path="/gallery" element={<Gallerydinamic/>} exact/>
<Route path="/uploadadmin" element={<Uploadimage/>} exact/>

<Route path="/bio" element={<Bio/>} exact/>

<Route path="/contact" element={<Contactfunc/>} exact/>



{/* <PrivateRoute path="/updateelement" component={UpdateElement} exact/> */}
</Routes>

</div>
  );
}

export default Nav;
