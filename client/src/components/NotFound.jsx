import React from 'react';
import { Link } from 'react-router-dom';

import notfound from '../assets/images/not_found.jpg';
import '../styles/components/NotFound.scss';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__info">
        <img src={notfound} alt="notfound" />
        <h3 className="not-found__text">Parece que esta página no existe</h3>
        <Link to="/">
          <p className="not-found__link">Volver a la página de inicio</p>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
