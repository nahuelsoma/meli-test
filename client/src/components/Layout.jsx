import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Footer from './Footer';
import icon from '../assets/images/Logo_ML.png';
import '../styles/components/Layout.scss';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">{children}</div>
      </div>
      <Footer />

      <Helmet>
        <link rel="icon" type="image/x-icon" href={icon} />
      </Helmet>
    </>
  );
}

export default Layout;
