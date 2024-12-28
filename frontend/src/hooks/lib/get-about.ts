import { serverUrl } from "@/config";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
export default function useAbout() {
  const { data, error, isLoading } = useSWR(`${serverUrl}/about`, fetcher);

  return {
    data: data?.data,
    error,
    isLoading,
  };
}
