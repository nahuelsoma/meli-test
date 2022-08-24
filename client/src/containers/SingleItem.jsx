import React from 'react';
import { useParams } from 'react-router-dom';

import useFetchItems from '../hooks/useFetchItems';
import Loading from '../components/Loading';
import ItemDetails from '../components/ItemDetails';
import Breadcrumb from '../components/Breadcrumb';
import NotFound from '../components/NotFound';
import SingleItemMetadata from './metadata/SingleItemMetadata';

function SingleItem() {
  const { id } = useParams();
  const endpoint = '/items/';
  const { data, error, loading } = useFetchItems(id, endpoint);

  if (!id || error) {
    return <NotFound />;
  }

  const { item } = data;
  const { categories } = data;

  return loading ? (
    <Loading />
  ) : (
    <>
      <Breadcrumb categoriesPath={categories} />
      <ItemDetails item={item} />
      <SingleItemMetadata item={item} />
    </>
  );
}

export default SingleItem;
