import { useEffect, useState } from 'react';

import API from '../API';

function useFetchItems(value, endpoint) {
  const [state, setState] = useState({
    data: {},
    error: false,
    loading: true,
  });

  useEffect(() => {
    setState({
      data: {},
      error: false,
      loading: true,
    });

    if (value) {
      window
        .fetch(`${API}${endpoint}${value}`)
        .then((response) => response.json())
        .then((data) => {
          setState({
            data,
            error: !!data.error,
            loading: false,
          });
        });
    } else {
      setState({
        data: {},
        error: true,
        loading: false,
      });
    }
  }, [value]);

  return state;
}

export default useFetchItems;
