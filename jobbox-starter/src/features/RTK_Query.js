
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const postSlice = createApi({
  reducerPath: 'posts',
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  endpoints: (builder) => ({}),
  tagTypes: ['post'], // set auto refetch names
})
