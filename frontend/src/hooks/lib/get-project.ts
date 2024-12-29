import { serverUrl } from "@/config";
import axios from "axios";
import useSWR from "swr";

export interface IProject {
  _id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  live_preview: string;
  source: string;
  createdAt: string;
  updatedAt: string;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);
export default function useProject({ _id }: { _id: string }) {
  const { data, error, isLoading } = useSWR(
    `${serverUrl}/projects/${_id}`,
    fetcher
  );

  return {
    data: data?.data as IProject,
    error,
    isLoading,
  };
}
