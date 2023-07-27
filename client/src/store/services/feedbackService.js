import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const feedbackService = createApi({
    reducerPath: 'feedback',
    tagTypes: "feedbacks",
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
               },
               invalidatesTags: ["feedbacks"],
           }),
           getfeedback: builder.query({
            query: page => {
                return {
                    url: `getData/${page}`,
                    method: 'GET', 
                }
            },
            providesTags: ["feedbacks"],
           }),
           feedbackDelete: builder.mutation({
            query: (id) => {
                return {
                    url: `feedbackDelete/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ["feedbacks"],

           })
       }
    }
});
export const {useCreateFeedBackMutation, useFeedbackDeleteMutation, useGetfeedbackQuery} = feedbackService
export default feedbackService