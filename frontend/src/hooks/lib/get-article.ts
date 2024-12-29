import { serverUrl } from "@/config";
import axios from "axios";
import useSWR from "swr";

export interface IArticles {
  _id: string;
  title: string;
  image: string;
  tags: string[];
  description: string;
  createdAt: string;
  updatedAt: string;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);
export default function useArticle({ _id }: { _id: string }) {
  const { data, error, isLoading } = useSWR<IArticles>(
    `${serverUrl}/articles/${_id}`,
    fetcher
  );

  return {
    data: data,
    error,
    isLoading,
  };
}
