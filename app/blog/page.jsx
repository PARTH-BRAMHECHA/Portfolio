"use client";

import { blogs } from "@/utils/data/blog-data";
import BlogCard from "./BlogCard";

export default function BlogsPage() {
  return (
    <div className="py-10">
      {/* Heading */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] text-white px-5 py-2 text-2xl rounded-md">
            Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Read All Blogs Button */}
      <div className="text-center mt-12">
        <a
          href="https://medium.com/@parth.bramhecha007"
          target="_blank"
          className="inline-block bg-[#1a1443] text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-[#2a1f63] transition"
        >
          Read All My Blogs
        </a>
      </div>
    </div>
  );
}