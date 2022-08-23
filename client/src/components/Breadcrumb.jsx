import React from 'react';

import breadcrumbArrow from '../assets/images/bradcrumb-arrow.png';
import '../styles/components/Breadcrumb.scss';

function Breadcrumb({ categoriesPath }) {
  const categorieLength = categoriesPath.length;
  const path = [];

  categoriesPath.forEach((category, i) => {
    if (i === categorieLength - 1) {
      path.push(
        <li className="breadcrumb__item" key={category}>
          <span className="breadcrumb__active">{category}</span>
        </li>
      );
    } else {
      path.push(
        <li className="breadcrumb__item" key={category}>
          <span>{category}</span>
          <div className="breadcrumb__icon">
            <img src={breadcrumbArrow} alt="arrow" />
          </div>
        </li>
      );
    }
  });

  return <ol className="breadcrumb">{path}</ol>;
}

export default Breadcrumb;
