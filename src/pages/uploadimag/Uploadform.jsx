import React, { useState } from "react";
import AxiosConfig from "../../config/AxiosConfig";
import Prevewe from "../../components/Prevewe";
import { useRef } from "react";
import './upload.css'

function Uploadform(props) {
  const fileref = useRef(null);

  return (
    <div className="all_upload">
      <div className="formdiv">
        <h1>upload files</h1>
        <div className="center">
          <form
            className="form flexcenter"
            onSubmit={props.upload.handleSubmit}
            encType="multipart/form-data"
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              values={props.upload.values.name}
              onChange={props.upload.handleChange}
            />
             <input
              type="text"
              name="size"
              placeholder="size"
              values={props.upload.values.size}
              onChange={props.upload.handleChange}
            />

            <input
              type="text"
              name="date"
              placeholder="date"
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
              values={props.upload.values.file}
              onChange={(e) => {
                props.upload.setFieldValue("file", e.target.files[0]);
              }}
            />
            <select onBlur={props.upload.handleBlur} values={props.upload.values.date}
              onChange={props.upload.handleChange} id="category" name="category">
  <option value="draw">draw</option>
  <option value="oil">oil</option>
  <option value="water">water</option>
  <option value="print">print</option>
</select>

            <div
              onClick={(e) => {
                fileref.current.click();
              }}
            >
              upload
            </div>

            <input type="submit" />
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
