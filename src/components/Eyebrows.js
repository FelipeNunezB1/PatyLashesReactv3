import ResponsiveAppBar from "./Nav";
import "./Eyebrows.css";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import Lifting from "../imagenes/Lifting.jpg";
import Modal from "./Modal";
import MoviesGrid from "./MoviesGrid";
import "./App1.css";
import Modal2 from './Modal2'


const Eyebrows = () => {
  return (
    <div className="App1">
      <ResponsiveAppBar />
      <main>
        <div className="titulo-card-extension" id="Cejas">
          <h2>Cejas</h2>
        </div>
      <Modal2 />

        <MoviesGrid />
      </main>
    </div>
  );
};

export default Eyebrows;
