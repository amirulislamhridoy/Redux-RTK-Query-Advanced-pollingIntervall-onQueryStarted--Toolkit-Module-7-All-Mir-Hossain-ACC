import { postSlice } from './RTK_Query';

const postApi = postSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPost: builder.query({
      query: () => `posts`,
      providesTags: ['post'] // it will fetch when data will be invalid
    }),
    getPhotos: builder.query({
      query: () => `photos`,
      invalidatesTags: ['post'] // it will invalid then fetch by provideTags name
    }),
    getJobs: builder.query({
      query: () => `/jobs`,
    }),
    addJob: builder.mutation({
      query: (data) => ({
        url: '/addJob',
        method: 'POST',
        body: data
      })
    })
  }),
})

export const { useGetPostQuery, useGetPhotosQuery, useAddJobMutation, useGetJobsQuery } = postApi