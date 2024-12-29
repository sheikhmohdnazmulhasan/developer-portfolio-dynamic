import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "node",
      src: "/images/logos/node.png",
      className: "h-7 w-11",
    },
    {
      title: "express",
      src: "/images/logos/ex.png",
      className: "h-7 w-11",
    },
    {
      title: "psql",
      src: "/images/logos/psql.png",
      className: "h-7 w-11",
    },
    {
      title: "mongo",
      src: "/images/logos/mongodb.png",
      className: "h-7 w-11",
    },
    {
      title: "prisma",
      src: "/images/logos/prisma.png",
      className: "h-7 w-11",
    },
    {
      title: "TypeScript",
      src: "/images/logos/ts.png",
      className: "h-7 w-11",
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",
      className: "h-7 w-11",
    },
    {
      title: "React",
      src: "/images/logos/react.png",
      className: "h-7 w-11",
    },
    {
      title: "redux",
      src: "/images/logos/redux.png",
      className: "h-7 w-11",
    },
    {
      title: "tailwind",
      src: "/images/logos/tailwind.png",
      className: "h-7 w-11",
    },
    {
      title: "antd",
      src: "/images/logos/antd.png",
      className: "h-7 w-11",
    },
  ];

  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`100`}
            height={`100`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
