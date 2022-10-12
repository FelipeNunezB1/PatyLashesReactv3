import ResponsiveAppBar from "./Nav";
import "./Eyebrows.css";
import React from "react";
import "./App1.css";
import Modal2 from './Modal2'
import CardINfoo from './CardINfoo'
import UseFetch from './UseFetch'




const Eyebrows = () => {

  const { data, isPending, error } = UseFetch('http://localhost:8000/cardinfo')

  return (
    <div className="App2">
      <ResponsiveAppBar />
      <div className="titulo-card-extension" id="Cejas">
        <h2>Cejasss</h2>
      </div>
      <Modal2 />
        {error && <div>{error}</div>}
        {isPending && <div>Cargando...</div>}
      <main>
        {data && <CardINfoo cardinfo={data} />}
      </main>
    </div>
  );
};

export default Eyebrows;
