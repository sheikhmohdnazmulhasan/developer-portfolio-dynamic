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
export default function useArticles() {
  const { data, error, isLoading } = useSWR<IArticles[]>(
    `${serverUrl}/articles`,
    fetcher
  );

  return {
    data: data,
    error,
    isLoading,
  };
}
