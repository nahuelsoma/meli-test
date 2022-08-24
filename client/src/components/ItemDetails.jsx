/* eslint-disable react/no-danger */
import React from 'react';
import DOMPurify from 'dompurify';

import EmptyItem from './EmptyItem';
import itemPriceHandler from '../utils/priceHandler';
import defaultImage from '../assets/images/default_image.jpg';
import shippingIcon from '../assets/images/ic_shipping.png';
import '../styles/components/ItemDetail.scss';

function ItemDetails({ item }) {
  if (!item.id) {
    return <EmptyItem />;
  }

  const price = itemPriceHandler(item.price);

  const cleanHTMLDescription = DOMPurify.sanitize(
    item.description.replace(/(?:\r\n|\r|\n)/g, '<br>')
  );

  return (
    <div className="item-detail">
      <div className="item-purchase">
        <div className="item-purchase__sticky">
          <div className="item-purchase__condition">
            {item.condition === 'new' ? 'Nuevo' : 'Usado'}
            {item.sold_quantity ? ` - ${item.sold_quantity} ` : ''}
            {item.sold_quantity && item.sold_quantity > 0 ? 'vendido' : ''}
            {item.sold_quantity > 1 ? 's' : ''}
          </div>
          <h1 className="item-purchase__title">{item.title}</h1>
          <div className="item-purchase__price">
            <div className="item-purchase__price-number">
              {price.currency} {price.amount.integer}
              <sup>{price.amount.decimals}</sup>
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
      <div className="item-description">
        <div className="item-description__image">
          <img src={item.picture || defaultImage} alt="" />
        </div>
        <h2 className="item-description__title">Descripción del producto</h2>
        <div
          className="item-description__details"
          dangerouslySetInnerHTML={{
            __html: cleanHTMLDescription,
          }}
        />
      </div>
    </div>
  );
}

export default ItemDetails;
