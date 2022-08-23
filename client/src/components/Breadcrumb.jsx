import React from 'react';

import breadcrumbArrow from '../assets/images/bradcrumb-arrow.png';
import '../styles/components/Breadcrumb.scss';

function Breadcrumb({ categoriesPath }) {
  const pathLength = categoriesPath.length;
  const path = [];

  for (let i = 0; i < pathLength - 1; i++) {
    const category = categoriesPath[i];
    path.push(
      <li className="breadcrumb__item" key={category}>
        <span>{category}</span>
        <div className="breadcrumb__icon">
          <img src={breadcrumbArrow} alt="arrow" />
        </div>
      </li>
    );
  }

  path.push(
    <li className="breadcrumb__item">
      <span className="breadcrumb__active">
        {categoriesPath[pathLength - 1]}
      </span>
    </li>
  );

  return <ol className="breadcrumb">{path}</ol>;
}

export default Breadcrumb;
