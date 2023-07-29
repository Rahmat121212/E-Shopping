import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const brandService = createApi({
  reducerPath: "brand",
  tagTypes: ["brands"],
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
      createBrand: builder.mutation({
        query: (data) => {
          return {
            url: "brand",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["brands"],
      }),
      updateBrand: builder.mutation({
        query: (data) => {
          return {
            url: `brand/${data.id}`,
            method: "PUT",
            body: data,
          };
        },
        invalidatesTags: ["brands"],
      }),
      updateBrandImage: builder.mutation({
        query: (data) => {
          return {
            url: `update-brand-image`,
            method: "PUT",
            body: data,
          };
        },
        invalidatesTags: ["brands"],
      }),
      deleteBrand: builder.mutation({
        query: (id) => {
          return {
            url: `brand/${id}`,
            method: "DELETE",
          };
        },
        invalidatesTags: ["brands"],
      }),
      getBrands: builder.query({
        query: (page) => {
          return {
            url: `brand/${page}`,
            method: "GET",
          };
        },
        providesTags: ["brands"],
      }),
      fetchBrand: builder.query({
        query: (id) => {
          return {
            url: `fetchbrand/${id}`,
            method: "GET",
          };
        },
        providesTags: ["brands"],
      }),
      allBrands: builder.query({
        query: () => {
          return {
            url: "brands",
            method: "GET",
          };
        },
        providesTags: ["brands"],
      })
    };
  },
});

export const {
  useCreateBrandMutation,
  useGetBrandsQuery,
  useFetchBrandQuery,
  useAllBrandsQuery,
  useUpdateBrandMutation,
  useDeleteBrandMutation,
  useUpdateBrandImageMutation
} = brandService;

export default brandService;
