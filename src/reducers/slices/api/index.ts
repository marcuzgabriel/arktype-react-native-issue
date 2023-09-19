import { createApi } from '@reduxjs/toolkit/query/react';
import { apiBaseQuery } from '../../../helpers/redux/apiBaseQuery';

export default createApi({
  reducerPath: 'api',
  tagTypes: ['GetUsers'],
  baseQuery: apiBaseQuery,
  endpoints: () => ({}),
});
