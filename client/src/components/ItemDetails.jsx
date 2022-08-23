/* eslint-disable react/no-danger */
import React from 'react';
import DOMPurify from 'dompurify';

import '../styles/components/ItemDetail.scss';
import shippingIcon from '../assets/images/ic_shipping.png';

function ItemDetails({ item }) {
  const priceArray = item.price.amount.toString().split('.');
  const price = parseInt(priceArray[0], 10).toLocaleString('es-AR', {
    maximumFractionDigits: 2,
  });
  let priceDecimals = priceArray[1];
  if (priceDecimals && priceDecimals.length === 1) {
    priceDecimals = priceArray[1] + 0;
  }

  const cleanHTMLDescription = DOMPurify.sanitize(
    item.description.replace(/(?:\r\n|\r|\n)/g, '<br>')
  );

  return (
    <div className="item-detail">
      <div className="item-description">
        <div className="item-description__image">
          <img src={item.picture} alt="" />
        </div>
        <h2 className="item-description__title">Descripción del producto</h2>
        <div
          className="item-description__details"
          dangerouslySetInnerHTML={{
            __html: cleanHTMLDescription,
          }}
        />
      </div>
      <div className="item-purchase">
        <div className="item-purchase__condition">
          {item.condition === 'new' ? 'Nuevo' : 'Usado'}
          {item.sold_quantity ? ` - ${item.sold_quantity} ` : ''}
          {item.sold_quantity && item.sold_quantity > 0 ? 'vendido' : ''}
          {item.sold_quantity > 1 ? 's' : ''}
        </div>
        <h1 className="item-purchase__title">{item.title}</h1>
        <div className="item-purchase__price">
          <div className="item-purchase__price-number">
            {item.price.currency === 'ARS' ? '$' : item.price.currency} {price}
            <sup>{priceDecimals}</sup>
          </div>
          <div
            className={
              item.free_shipping ? 'shipping-logo' : 'shipping-logo__inactive'
            }
          >
            <img src={shippingIcon} alt="shipping logo" />
          </div>
        </div>
        <button type="button" className="purchase-button">
          Comprar
        </button>
      </div>
    </div>
  );
}

export default ItemDetails;
