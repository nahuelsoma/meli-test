import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/EmptyItem.scss';

function EmptyItem({ link }) {
  return (
    <div className="empty-item">
      <div>
        <p>Ups! Este item se encuentra vacío</p>
        {link === false ? null : (
          <Link to="/">
            <p className="empty-item__link">Volver a la página de inicio</p>
          </Link>
        )}
      </div>
    </div>
  );
}

export default EmptyItem;
