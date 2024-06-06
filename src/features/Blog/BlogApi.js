
import {apiSlice} from "../api/apiSlice"

export const BlogApi= apiSlice.injectEndpoints({
    endpoints:(builder)=>({

        getSingleBlog:builder.query({
            query:(id)=>({
                 url:`/blogPost/${id}`
            })
        }),

        postBlog:builder.mutation({
           query:(data)=>({
            url: `/blogPost`,
            method: 'POST',
            body: data,
           })
        }),
        getAllBlog:builder.query({
            query:()=>({
                 url:`/blogPost`
            })
        }),
    })
})
export const { useGetAllBlogQuery,usePostBlogMutation, useGetSingleBlogQuery}=BlogApi
;

