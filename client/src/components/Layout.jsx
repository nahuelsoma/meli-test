import React from 'react';

import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.scss';

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="main">
        <div className="container">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
