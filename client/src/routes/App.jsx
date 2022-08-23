import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../containers/Home';
import SearchItems from '../containers/SearchItems';
import ItemDetail from '../containers/SingleItem';
import NotFound from '../components/NotFound';

import '../styles/App.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/items" element={<SearchItems />} />
          <Route exact path="/items/:id" element={<ItemDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
