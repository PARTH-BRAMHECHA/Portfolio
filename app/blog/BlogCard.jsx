"use client";

import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
    <a
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-term-border hover:border-term-green bg-term-panel rounded-md transition-all duration-300 group block"
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-term-border">
        <div className="term-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Image */}
      <div className="h-44 lg:h-52 overflow-hidden bg-term-panel-alt">
        <Image
          src={blog.image}
          width={1920}
          height={1080}
          alt={blog.title}
          className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
        />
      </div>

      <div className="p-3 flex flex-col">
        {/* Subject & Date */}
        <div className="flex justify-between items-center text-term-green text-xs">
          <span className="term-tag">{blog.subject}</span>
          <p className="text-term-dim">{blog.date}</p>
        </div>

        {/* Title */}
        <p className="my-2 text-base text-term-text font-medium group-hover:text-term-green transition-colors duration-300">
          {blog.title}
        </p>

        {/* Short Description */}
        <p className="text-sm text-term-dim line-clamp-3">
          {blog.shortDescription}
        </p>
      </div>
    </a>
  );
}
