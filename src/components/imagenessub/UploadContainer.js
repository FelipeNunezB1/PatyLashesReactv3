import React from "react";
import ResponsiveAppBar from "../Nav";
import Upload from "./Upload";
import ListImage from "./ListImage";

const UploadContainer = () => {
  return (
    <>
      <div className="container mt-3">
        <ResponsiveAppBar />
        <div className="row">
          <div className="col-nd-3">
            <Upload />
          </div>
          <div className="col-nd-9">
            <ListImage />
          </div>
        </div>
      </div>

      <h1 style={{ color: "black" }}>UploadContainer</h1>
    </>
  );
};

export default UploadContainer;
