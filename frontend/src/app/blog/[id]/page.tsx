"use client";

import SingleBlog from "@/components/Blog";
import { Container } from "@/components/Container";
import Loading from "@/components/Loading";
import useArticle, { IArticles } from "@/hooks/lib/get-article";
import { redirect } from "next/navigation";

export default function SingleProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const _id = params.id;

  const { data: project, isLoading, error } = useArticle({ _id });

  if (isLoading) return <Loading />;
  if (!!error) return redirect("/blog");

  return (
    <Container>
      <SingleBlog blog={project as IArticles} />
    </Container>
  );
}
