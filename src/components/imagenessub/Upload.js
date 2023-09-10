import { Result } from "antd";
import React, { useState } from "react";
import Uploadservice from "../services/Uploadservice";

const Upload = ({ setImages, images }) => {
  const [name, setName] = useState("");
  const [file, setFile] = useState();
  const [pathImage, setPathImage] = useState(
    "http://localhost:4000/upload.png"
  );

  const sendImage = (e) => {
    console.log("estas en senIimage 1");
    e.preventDefault();
    console.log("estas en senIimage 2");
    Uploadservice.sendImages(name, file, 'Content-Type').then((result) => {
      console.log("El resultado es: ", result);
      console.log("estas en senIimage 3");
    });
    console.log("estas en senIimage 4")

  };

  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function load() {
          setPathImage(reader.result);
        };

        setFile(file);
      } else {
        console.log("There was a error");
      }
    }
  };

  return (
    <form>
      <div className="input-file">
        <input type="file" placeholder="File" onchange={onFileChange} />
        <img
          className="img-fluid img-thumbnail image"
          src={pathImage}
          alt="Image"
        />
        <input
          type="text"
          placeholder="Ingresar nombre"
          onchange={(e) => setName(e.target.value)}
        />

        <button type="submit" className="botonfeo" onClick={sendImage}>
          Agregar imagen
        </button>
      </div>
    </form>
  );
};

export default Upload;
