import React from 'react';
import { Helmet } from 'react-helmet';

import image from '../../assets/images/Logo_ML@2x.png.png.png';

function HomeMetadata() {
  const title = 'Test de Frontend de MercadoLibre';
  const description =
    'Test de Frontend de MercadoLibre realizado por Nahuel Soma';
  const location = window.location.href;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={location} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default HomeMetadata;
