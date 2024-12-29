"use client";

import { Container } from "@/components/Container";
import Loading from "@/components/Loading";
import { SingleProduct } from "@/components/Product";
import useProject from "@/hooks/lib/get-project";

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const { data: project, isLoading } = useProject({ _id: slug });

  if (isLoading) return <Loading />;

  return (
    <Container>
      <SingleProduct product={project} />
    </Container>
  );
}
