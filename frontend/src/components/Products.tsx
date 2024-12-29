"use client";
import React from "react";
import { Heading } from "./Heading";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import useProjects from "@/hooks/lib/get-projects";
import RenderRichText from "@/app/utils/render-richt-text";
import Loading from "./Loading";

export const Products = () => {
  const { data: projects, isLoading } = useProjects();

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="grid grid-cols-1  gap-10">
        {projects?.map((product, idx: number) => (
          <motion.div
            key={product._id}
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.2, delay: idx * 0.1 }}
          >
            <Link
              href={`/projects/${product._id}`}
              key={product._id}
              className="group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4"
            >
              <Image
                src={product.image}
                alt="thumbnail"
                height={159}
                width={200}
                className="rounded-md w-full md:w-[200px] md:object-cover"
              />
              <div className="flex flex-col justify-between">
                <div>
                  <Heading
                    as="h4"
                    className="font-black text-lg md:text-lg lg:text-lg "
                  >
                    {product.title}
                  </Heading>
                  {/* <Paragraph className="text-sm md:text-sm lg:text-sm mt-2 max-w-xl">
                    {product.description}
                  </Paragraph> */}
                  <RenderRichText text={product.description.slice(0, 250)} />
                </div>
                <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
                  {product.technologies?.map((stack: string) => (
                    <span
                      key={stack}
                      className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
