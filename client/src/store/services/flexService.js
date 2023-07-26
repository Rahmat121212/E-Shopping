import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const flexService = createApi({
  reducerPath: "flex",
  tagTypes: ["flexs"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    prepareHeaders: (headers, { getState }) => {
      const reducers = getState();
      const token = reducers?.authReducer?.adminToken;
      console.log(token);
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      createFlex: builder.mutation({
        query: (data) => {
          return {
            url: "flex",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["flexs"],
      }),
      updateFlex: builder.mutation({
        query: (data) => {
          return {
            url: `flex-update/${data.id}`,
            method: "PUT",
            body: data,
          };
        },
        invalidatesTags: ["flexs"],
      }),
      deleteFlex: builder.mutation({
        query: (id) => {
          return {
            url: `flex-delete/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["flexs"],
      }),
      getFlexs: builder.query({
        query: (page) => {
          return {
            url: `flex/${page}`,
            method: "GET",
          };
        },
        providesTags: ["flexs"],
      }),
      fetchFlex: builder.query({
        query: (id) => {
          return {
            url: `single-flex/${id}`,
            method: "GET",
          };
        },
        providesTags: ["flexs"],
      }),
      allFlexs: builder.query({
        query: () => {
          return {
            url: "flexs",
            method: "GET",
          };
        },
        providesTags: ["flexs"],
      }),
      randomFlexs: builder.query({
        query: () => {
          return {
            url: "flexs/random",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useCreateFlexMutation,
  useGetFlexsQuery,
  useFetchFlexQuery,
  useAllFlexsQuery,
  useRandomFlexsQuery,
  useUpdateFlexMutation,
  useDeleteFlexMutation,
} = flexService;

export default flexService;
