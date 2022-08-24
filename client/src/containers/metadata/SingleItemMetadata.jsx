import React from 'react';
import { Helmet } from 'react-helmet';

import itemPriceHandler from '../../utils/priceHandler';

function SingleItemMetadata({ item }) {
  const title = item.title ? item.title : '';
  const price = itemPriceHandler(item.price);
  const fullTitle = `${title} | ${price.currency} ${price.amount.integer},${price.amount.decimals}`;
  const description = item.description ? item.description.substr(0, 200) : '';
  const image = item.picture ? item.picture : '';
  const location = window.location.href;

  return (
    <Helmet>
      {item && fullTitle && <title>{fullTitle}</title>}
      {item && description && <meta name="description" content={description} />}

      {item && fullTitle && <meta itemProp="name" content={fullTitle} />}
      {item && description && (
        <meta itemProp="description" content={description} />
      )}
      {item && image && <meta itemProp="image" content={image} />}

      {item && location && <meta property="og:url" content={location} />}
      <meta property="og:type" content="website" />
      {item && fullTitle && <meta property="og:title" content={fullTitle} />}
      {item && description && (
        <meta property="og:description" content={description} />
      )}
      {item && image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary" />
      {item && fullTitle && <meta name="twitter:title" content={fullTitle} />}
      {item && description && (
        <meta name="twitter:description" content={description} />
      )}
      {item && image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}

export default SingleItemMetadata;
