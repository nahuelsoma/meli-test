import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Item.scss';
import shippingIcon from '../assets/images/ic_shipping.png';

function Item({ item }) {
  const priceArray = item.price.amount.toString().split('.');
  const price = parseInt(priceArray[0], 10).toLocaleString('es-AR', {
    maximumFractionDigits: 2,
  });
  let priceDecimals = priceArray[1];
  if (priceDecimals && priceDecimals.length === 1) {
    priceDecimals = priceArray[1] + 0;
  }

  return (
    <div className="item">
      <div className="item-img">
        <Link to={item.id}>
          <img src={item.picture} alt={item.title} />
        </Link>
      </div>
      <div className="item-info">
        <div className="item-info__main">
          <div className="item-info__main-price">
            <Link to={item.id}>
              <div className="item-info__main-price-num">
                {item.price.currency === 'ARS' ? '$' : item.price.currency}{' '}
                {price}
                <sup>{priceDecimals}</sup>
              </div>
            </Link>
            <div
              className={
                item.free_shipping ? 'shipping-logo' : 'shipping-logo__inactive'
              }
            >
              <img src={shippingIcon} alt="shipping logo" />
            </div>
          </div>
          <Link to={item.id}>
            <h3 className="item-info__main-title">{item.title}</h3>
          </Link>
        </div>
        <div className="item-info__location">{item.state}</div>
      </div>
    </div>
  );
}

export default Item;
