import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const domain = 'https://jsonplaceholder.typicode.com';

export const apiBaseQuery = fetchBaseQuery({
  baseUrl: domain,
  prepareHeaders: async headers => {
    return headers;
  },
});
