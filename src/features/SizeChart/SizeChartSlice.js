import { apiSlice } from "../api/apiSlice";

export const sizeChartSlice = apiSlice.injectEndpoints({
  tagTypes: ["sizeChart"],

  endpoints: (builder) => ({

    getSizeChart: builder.query({
      query: () => "/getSizeChart",
      providesTags: ["sizeChart"],
    }),

    addSizeChart: builder.mutation({
      query: (data) => ({
        url: "/createSizeChart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["sizeChart"],
    }),

    deleteSizeChart: builder.mutation({
      query: (id) => ({
        url: `/deleteSizeChart/${id}`,
        method: "DELETE",
      }),
    }),
    invalidatesTags: ["sizeChart"],
  }),
});

export const {
    useAddSizeChartMutation,
    useGetSizeChartQuery,
    useDeleteSizeChartQuery
}=sizeChartSlice