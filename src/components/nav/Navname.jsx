import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import "../../css/all.css";

function Navname(props) {
  const [activeState, setActiveState] = useState(false);
  const [navphonstate, setNavPhonState] = useState(false);


  function change() {
    setActiveState(!activeState);
  }

  function opennav(){
    setNavPhonState(!navphonstate)

  }

  return (
    <div className="all_nav">
      <div className="nav_bar flexrow ">
        <div className="name">marioss morcosem</div>

        <div className="links_all_div ">
          <div className="lu_links flexrow ">
            <NavLink activeclassname="acsi" className="Link" to="/">
              home
            </NavLink>

            <div className="po lu_links flexrow">
              <NavLink
                activeclassname="acsi"
                className="Link gallery_link"
                to="/gallerymenu"
              >
                gallery
              </NavLink>
              <div className={"activeNav"}>
                <div className="box_nav flexcol">
                  <NavLink  state={'water'}  className="Link_hiden" to={{pathname:"/gallery",state:'draw'}}>
                    water color
                  </NavLink>
                  <NavLink  state={'oil'}  className="Link_hiden" to={{pathname:"/gallery",state:'oil'}}>
                    oil
                  </NavLink>
                  <NavLink  state={'draw'} className="Link_hiden" to={{pathname:"/gallery",state:'water'}}>
                    drawings
                  </NavLink>
                </div>
              </div>
            </div>

            <NavLink activeclassname="acsi" className="Link" to="/bio">
             bio
            </NavLink>
            <NavLink activeclassname="acsi" className="Link" to="/contact">
              contact
            </NavLink>
          </div>
        </div>

        <div className="phonnav">
          <span className="icond" onClick={opennav}>
            <div className="menubaricon"></div>
          <div className="menubaricon"></div>
          <div className="menubaricon"></div>
          </span>

          <div  className={navphonstate?"activeNavPhone" : "displayonclick"}>
            <span className="exitbtnphon" onClick={opennav}>&#215;</span>
        
             <div className="name">mario morcos</div> 
          
      

            <div className="centerall_nav_phon">


            <div className=" flexcol navphonlinks">
            <NavLink onClick={opennav} activeclassname="acsi" className="Linkphon" to="/">
              home
            </NavLink>
           
          
              <NavLink onClick={opennav}
                activeclassname="acsi"
                className="Linkphon gallery_link"
                to="/gallerymenu"
              >
                gallery
              </NavLink>
            
                  <NavLink onClick={opennav} state={'water'}  className="Linkphon" to={{pathname:"/gallery",state:'draw'}}>
                    water color
                  </NavLink>
                  <NavLink  onClick={opennav}state={'oil'}  className="Linkphon" to={{pathname:"/gallery",state:'oil'}}>
                    oil
                  </NavLink>
                  <NavLink  onClick={opennav}state={'draw'} className="Linkphon" to={{pathname:"/gallery",state:'water'}}>
                    drawings
                  </NavLink>
          
          

            <NavLink onClick={opennav}activeclassname="acsi" className="Linkphon" to="/bio">
             bio
            </NavLink>
            <NavLink onClick={opennav}activeclassname="acsi" className="Linkphon" to="/contact">
              contact
            </NavLink>
          </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navname;
