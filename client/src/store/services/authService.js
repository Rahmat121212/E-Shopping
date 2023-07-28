import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const authService = createApi({
    reducerPath: 'auth',
    tagTypes : "auths",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/'
    }),
    endpoints: (builder) => {
       return {
           authLogin: builder.mutation({
               query: (loginData) => {
                   return {
                       url: 'login',
                       method: 'POST',
                       body: loginData
                   }
               },
               invalidatesTags: ["auths"],
           }),
           authRegister: builder.mutation({
               query: (loginData) => {
                   return {
                       url: 'register',
                       method: 'POST',
                       body: loginData
                   }
               },
               invalidatesTags: ["auths"],
           }),
           getAuth: builder.query({
               query: (page) => {
                   return {
                       url: `getAdmin/${page}`,
                       method: 'GET'
                   }
               },
               providesTags: ["auths"],
           }),
           getCustomer: builder.query({
               query: (page) => {
                   return {
                       url: `get-customer/${page}`,
                       method: 'GET'
                   }
               },
               providesTags: ["auths"],
           }),
           deleteAdmin: builder.mutation({
            query: (id) => {
              return {
                url: `delete-admin/${id}`,
                method: "DELETE",
              };
            },
            invalidatesTags: ["auths"],
          }),
           deleteCustomer: builder.mutation({
            query: (id) => {
              return {
                url: `delete-customer/${id}`,
                method: "DELETE",
              };
            },
            invalidatesTags: ["auths"],
          }),
           userRegister: builder.mutation({
            query: data => {
                return {
                    url: '/CustomerRegister',
                    method: 'POST',
                    body: data
                }
            },
            invalidatesTags: ["auths"],
           }),
           userLogin: builder.mutation({
            query: loginData => {
                return {
                    url: '/customerLogin',
                    method: 'POST',
                    body: loginData
                }
            },
            invalidatesTags: ["auths"],
           })
       }
    }
});
export const {useAuthLoginMutation,useDeleteAdminMutation,useDeleteCustomerMutation,useGetAuthQuery,useGetCustomerQuery,useAuthRegisterMutation, useUserRegisterMutation, useUserLoginMutation} = authService
export default authService