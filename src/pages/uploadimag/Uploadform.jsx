import React, { useState } from "react";
import AxiosConfig from "../../config/AxiosConfig";
import Prevewe from "../../components/Prevewe";
import { useRef } from "react";
import './upload.css'

function Uploadform(props) {
  const fileref = useRef(null);

  return (
    <div className={props.openwindow?"" : "all_uploaddesable"}>
      <div className="formdiv">
        <h1>העלה תמונה חדשה </h1>
        <div className="center">
          <form
            className="formupload flexcenter"
            onSubmit={props.upload.handleSubmit}
            encType="multipart/form-data"
          >
            <input
              type="text"
              name="name"
              placeholder="name" className="inputext"
              values={props.upload.values.name}
              onChange={props.upload.handleChange}
            />
         
         <input
              type="text"
              name="size"
              placeholder="size" className="inputext"
              values={props.upload.values.size}
              onChange={props.upload.handleChange}
            />

            <input
              type="text"
              name="date"
              placeholder="date" className="inputext"
              values={props.upload.values.date}
              onChange={props.upload.handleChange}
            />
       

            <input
              ref={fileref}
              type="file"
              name="file"
              multiple
              accept="image/*"
              id="file"
              className="inputext"
              values={props.upload.values.file}
              onChange={(e) => {
                props.upload.setFieldValue("file", e.target.files[0]);
              }}
            />
            <select className="inputext" onBlur={props.upload.handleBlur} values={props.upload.values.date}
              onChange={props.upload.handleChange} id="category" name="category">
  <option value="draw">draw</option>
  <option value="oil">oil</option>
  <option value="water">water</option>
  <option value="print">print</option>
</select>

            {/* <div
              onClick={(e) => {
                fileref.current.click();
              }}
            >
              upload
            </div> */}
            <br />

            <input className="inputext" type="submit" />
          </form>
          <div className="respond">
            {props.upload.values.file ? (
              <Prevewe file={props.upload.values.file} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {props.msg}

      <div className={props.Lodar ? "activeLodare" : "disableLodare"}>
        <div className="msg"></div>
      </div>
    </div>
  );
}

export default Uploadform;
