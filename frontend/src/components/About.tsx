"use client";

import useAbout from "@/hooks/lib/get-about";
import RenderRichText from "@/app/utils/render-richt-text";

export default function About() {
  const { data, error, isLoading } = useAbout();

  if (isLoading) return <div className="mt-4">Loading ...</div>;

  return (
    <div className="mt-5">
      <RenderRichText text={data?.description} />
    </div>
  );
}
