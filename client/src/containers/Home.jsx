import React from 'react';

import logo from '../assets/images/Logo_ML_2x.png';
import HomeMetadata from './metadata/HomeMetadata';
import '../styles/containers/Home.scss';

function Home() {
  return (
    <>
      <div className="home">
        <div>
          <img src={logo} alt="logo MercadoLibre" />
          <h3>Bienvenido al Test de Frontend de MercadoLibre</h3>
          <p className="home__text">
            Para comenzar, puedes realizar una búsqueda desde la barra superior.
          </p>
        </div>
      </div>

      <HomeMetadata />
    </>
  );
}

export default Home;
