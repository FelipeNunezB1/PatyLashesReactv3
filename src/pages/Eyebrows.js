import ResponsiveAppBar from "../components/navbar/Nav";
import '../assetsimagescss/css/Eyebrows.css'
import React from "react";
import Modal2 from '../components/Modal2'
import CardINfoo from '../components/CardINfoo'
import UseFetch from '../components/UseFetch'
import Footer from "../components/Footer/Footer";


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
      <Footer />
    </div>
  );
};

export default Eyebrows;
