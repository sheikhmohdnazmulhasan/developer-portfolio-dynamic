"use client";
import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { motion } from "framer-motion";
import RenderRichText from "@/app/utils/render-richt-text";
import { IArticles } from "@/hooks/lib/get-articles";
import { formatDate } from "../../lib/formatDate";

const SingleBlog = ({ blog }: { blog: IArticles }) => {
  return (
    <div className="py-10">
      <div className=" lg:flex-row justify-between items-center flex-col mt-20">
        <Heading className="font-black mb-2 pb-1"> {blog.title}</Heading>
        <div className="flex justify-between">
          <p>{formatDate(blog.createdAt)}</p>
          <div className="flex space-x-2 md:mb-1 mt-2 md:mt-0">
            {blog.tags?.map((stack: string) => (
              <span
                key={stack}
                className="text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        key={blog._id}
        className="relative"
      >
        <Image
          src={blog.image}
          alt="thumbnail"
          height="1000"
          width="1000"
          className="rounded-md object-contain"
        />
        <div className="absolute bottom-0 bg-white h-40 w-full [mask-image:linear-gradient(to_bottom,transparent,white)]" />
      </motion.div>

      <div>
        {/* <Paragraph className="max-w-xl mt-4">{product.description}</Paragraph> */}
      </div>
      <div className="prose prose-sm md:prose-base max-w-none text-neutral-600">
        <RenderRichText text={blog.description} />
      </div>
    </div>
  );
};

export default SingleBlog;
