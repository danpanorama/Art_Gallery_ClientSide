import React, { useState } from "react";

function List(props) {
  return (
    <div className="gridlist ">
      {props.data
        ? props.data.map((e) => {
            let immg = e.path.split("upload");

           
            return (
              <div className=" cardoflist" key={e.number}>
                <div className="flexcol">
                  <div className="imghit">
                    <img
                      className="img"
                      src={"https://morcmario.com/upload" + immg[1]}
                      alt=""
                    />
                  </div>

                  <div className="flexcol endf margpad">
                    <div className="namek ">
                      <label htmlFor="">שם</label>
                      <input
                        type="text"
                        className="inputlist"
                        placeholder={e.name}
                        onChange={props.getname}
                      />
                      <button onClick={()=>{props.changeName(e)}} className="changebtn">שנה</button>
                    </div>
                    <div className="namek">
                      {" "}
                      <label htmlFor="">גודל</label>  
                      <input
                        type="text"
                        className="inputlist"
                        placeholder={e.size}
                        onChange={props.getsize}
                      />
                      <button onClick={()=>{props.changeSize(e)}} className="changebtn">שנה</button>
                    </div>
                    <div className="namek">
                      <label htmlFor="">תאריך</label>
                      <input
                        type="text"
                        className="inputlist"
                        placeholder={e.date}
                        onChange={props.getdate}
                      />
                      <button onClick={()=>{props.changeDate(e)}} className="changebtn">שנה</button>
                    </div>
                    <div className="namek">
                      <select
                        onChange={()=>{props.getselection(e)}}
                        value={e.category}
                        name=""
                        id=""
                      >
                        <option value="draw">draw</option>
                        <option value="oil">oil</option>
                        <option value="water">water</option>
                        <option value="print">print</option>
                      </select>
                      <p>{e.category}</p>
                    </div>
                  </div>

                  <div className="btn">
                    <button
                      className="deleteclick"
                      onClick={props.deletework}
                      id={e.path}
                      title={e.number}
                    >
                      delet
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default List;
