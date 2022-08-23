import React from 'react';

import search from '../assets/images/search.jpg';
import '../styles/components/SearchHelp.scss';

function SearchHelp() {
  return (
    <div className="search-help">
      <div className="search-help-container">
        <img src={search} alt="search" />
        <div className="search-help-info">
          <h3 className="search-help__title">
            No hay publicaciones que coincidan con tu búsqueda.
          </h3>
          <ul className="search-help__list">
            <li className="search-help__item">
              Revisá la ortografía de la palabra.
            </li>
            <li className="search-help__item">
              Utilizá palabras más genéricas o menos palabras.
            </li>
            <li className="search-help__item">
              Asegúrate de haber ingresado la query específica con el parámetro
              &apos;q&apos;.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SearchHelp;
