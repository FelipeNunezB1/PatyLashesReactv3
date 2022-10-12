import "./Eyebrows.css";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import Lifting from "../imagenes/Lifting.jpg";
import Modal2 from "./Modal2";

const CardInfo = ({ reservas, name, handleDelete, hora, profesional }) => {
  return (
    <div class="card-list">
      <h2>{name}</h2>{name}
      {reservas.map((reserva) => (
        <div className="reservas-previw">
          <h5>Titulo: reserva.name </h5>
          <p>Descripcion: {reserva.hora}</p>
        </div>
      ))}
      <Modal2 />
    </div>
  );
};

export default CardInfo;
