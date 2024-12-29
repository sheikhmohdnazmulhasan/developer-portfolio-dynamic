"use client";

import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import useProject from "@/hooks/lib/get-project";

export default function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const { data: project, isLoading } = useProject({ _id: slug });

  console.log(project);

  if (isLoading) return <div className="">Loading ...</div>;

  return (
    <Container>
      <SingleProduct product={project} />
    </Container>
  );
}
