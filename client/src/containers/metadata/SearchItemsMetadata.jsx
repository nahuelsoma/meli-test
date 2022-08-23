import React from 'react';
import { Helmet } from 'react-helmet';

function SearchItemsMetadata({ items, q }) {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const title = q ? `${capitalize(q.toLowerCase())} | MercadoLibre 📦` : '';
  const description = q
    ? `Envíos Gratis en el día ✓ Comprá ${q.toLowerCase()} en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.`
    : `Envíos Gratis en el día ✓ Comprá en cuotas sin interés! Conocé nuestras increíbles ofertas y promociones en millones de productos.`;
  const image = items[0].picture ? items[0].picture : '';
  const location = window.location.href;

  return (
    <Helmet>
      {q && <title>{title}</title>}
      {q && <meta name="description" content={description} />}

      {q && <meta itemsProp="name" content={title} />}
      {q && <meta itemsProp="description" content={description} />}
      {items && image && <meta itemsProp="image" content={image} />}

      {q && location && <meta property="og:url" content={location} />}
      <meta property="og:type" content="website" />
      {q && <meta property="og:title" content={title} />}
      {q && <meta property="og:description" content={description} />}
      {items && image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary" />
      {q && <meta name="twitter:title" content={title} />}
      {q && <meta name="twitter:description" content={description} />}
      {items && image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
}

export default SearchItemsMetadata;
