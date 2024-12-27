import { TApiResponse } from "../../../interfaces/api-response";
import { baseApi } from "../../api/base-api";

const articleApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllArticles: builder.query({
      query: () => ({
        url: "/articles",
        method: "GET",
      }),
      transformResponse: (response: TApiResponse) => {
        if (!response || !response.data) {
          throw new Error("Invalid response structure");
        }
        return response.data;
      },
      providesTags: ["articles"],
    }),

    createNewArticle: builder.mutation({
      query: (payload: Record<string, unknown>) => ({
        url: "/articles",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["articles"],
    }),

    deleteArticle: builder.mutation({
      query: (args: { _id: string }) => ({
        url: `/articles/${args._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["articles"],
    }),
  }),
});

export const {
  useGetAllArticlesQuery,
  useCreateNewArticleMutation,
  useDeleteArticleMutation,
} = articleApi;
