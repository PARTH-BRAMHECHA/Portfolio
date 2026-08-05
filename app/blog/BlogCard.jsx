"use client";

import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
    <a
      href={blog.url}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-[#1d293a] hover:border-[#464c6a] bg-[#1b203e] rounded-lg transition-all duration-500 group block"
    >
      {/* Image */}
      <div className="h-44 lg:h-52 overflow-hidden rounded-t-lg">
        <Image
          src={blog.image}
          width={1920}
          height={1080}
          alt={blog.title}
          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>

      <div className="p-3 flex flex-col">
        {/* Subject & Date */}
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{blog.subject}</p>
          <p>{blog.date}</p>
        </div>

        {/* Title */}
        <p className="my-2 text-lg text-white font-medium hover:text-violet-500">
          {blog.title}
        </p>

        {/* Short Description */}
        <p className="text-sm text-[#d3d8e8] line-clamp-3">
          {blog.shortDescription}
        </p>
      </div>
    </a>
  );
}
