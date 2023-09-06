// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Login } from '../../shared/types'

// Define a service using a base URL and expected endpoints
export const CollideApi = createApi({
  reducerPath: 'CollideApi',
  baseQuery: fetchBaseQuery({
    // http://localhost:5000
    //https://rich-gold-goldfish.cyclic.app
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${localStorage.getItem("accessToken")}`
      );
    },
  }),

  endpoints: (builder) => ({
   // tagTypes : ["User"],
    signup: builder.mutation({
        query: (payload) => ({
          url: "/user/api/v1/register",
          method: "POST",
          body: payload,
        }),
      }),
      login: builder.mutation({
        query: (payload) => ({
          url: "/user/api/v1/login",
          method: "POST",
          body: payload,
        }),
       // invalidatesTags: ["User"],
      }),
  }),
})


export const { useLoginMutation, useSignupMutation } = CollideApi