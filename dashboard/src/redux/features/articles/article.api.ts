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
  }),
});

export const { useGetAllArticlesQuery } = articleApi;
