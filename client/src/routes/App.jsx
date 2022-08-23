import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loading from '../components/Loading';
import Layout from '../components/Layout';
import '../styles/App.scss';

const Home = lazy(() => import('../containers/Home'));
const SearchItems = lazy(() => import('../containers/SearchItems'));
const SingleItem = lazy(() => import('../containers/SingleItem'));
const NotFound = lazy(() => import('../components/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/items" element={<SearchItems />} />
            <Route exact path="/items/:id" element={<SingleItem />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
