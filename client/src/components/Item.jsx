import React from 'react';
import { Link } from 'react-router-dom';

import EmptyItem from './EmptyItem';
import useLazyScreen from '../hooks/useLazyScreen';
import itemPriceHandler from '../utils/priceHandler';
import shippingIcon from '../assets/images/ic_shipping.png';
import defaultImage from '../assets/images/default_image.jpg';
import '../styles/components/Item.scss';

function Item({ item }) {
  if (!item.id) {
    return <EmptyItem link={false} />;
  }

  const [show, element] = useLazyScreen();
  const price = itemPriceHandler(item.price);

  return (
    <div className="item" ref={element}>
      {show && (
        <>
          <div className="item-img">
            <Link to={item.id}>
              <img src={item.picture || defaultImage} alt={item.title} />
            </Link>
          </div>
          <div className="item-info">
            <div className="item-info__main">
              <div className="item-info__main-price">
                <Link to={item.id}>
                  <div className="item-info__main-price-num">
                    {price.currency} {price.amount.integer}
                    <sup>{price.amount.decimals}</sup>
                  </div>
                </Link>
                <div
                  className={
                    item.free_shipping
                      ? 'shipping-logo'
                      : 'shipping-logo__inactive'
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
        </>
      )}
    </div>
  );
}

export default Item;
