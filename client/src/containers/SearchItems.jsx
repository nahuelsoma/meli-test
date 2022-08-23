import React from 'react';
import { useSearchParams } from 'react-router-dom';

import Layout from '../components/Layout';

import useFetchItems from '../hooks/useFetchItems';
import Loading from '../components/Loading';
import Item from '../components/Item';
import Breadcrumb from '../components/Breadcrumb';
import SearchHelp from '../components/SearchHelp';
import SearchItemsMetadata from './metadata/SearchItemsMetadata';
import '../styles/containers/SearchItems.scss';

function SearchItems() {
  const [queryParams] = useSearchParams();
  const q = queryParams.get('q');
  const endpoint = '/items?q=';

  const { data, error, loading } = useFetchItems(q, endpoint);

  if (!q || error) {
    return (
      <>
        <SearchHelp />
      </>
    );
  }

  const { items } = data;
  const { categories } = data;

  return (
    <>
      {categories && <Breadcrumb categoriesPath={categories} />}
      {loading ? (
        <Loading />
      ) : (
        <>
          <ol className="items-list">
            {items.map((item) => (
              <li key={item.id}>
                <Item key={item.id} item={item} />
              </li>
            ))}
          </ol>
          <SearchItemsMetadata items={items} q={q} />
        </>
      )}
    </>
  );
}

export default SearchItems;
