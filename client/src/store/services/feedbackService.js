import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const feedbackService = createApi({
    reducerPath: 'feedback',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api/'
    }),
    endpoints: (builder) => {
       return {
           createFeedBack: builder.mutation({
               query: (data) => {
                   return {
                       url: 'create',
                       method: 'POST',
                       body: data
                   }
               }
           }),
           userRegister: builder.mutation({
            query: data => {
                return {
                    url: '/register',
                    method: 'POST',
                    body: data
                }
            }
           }),
           userLogin: builder.mutation({
            query: loginData => {
                return {
                    url: '/login',
                    method: 'POST',
                    body: loginData
                }
            }
           })
       }
    }
});
export const {useCreateFeedBackMutation, useUserRegisterMutation, useUserLoginMutation} = feedbackService
export default feedbackService