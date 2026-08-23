"use client";

import { blogs } from "@/utils/data/blog-data";
import BlogCard from "./BlogCard";

export default function BlogsPage() {
  return (
    <div className="py-10 font-mono">
      {/* Heading */}
      <div className="mb-10">
        <p className="term-section-title">
          <span className="term-hash">#</span> ls ./blog
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {/* Read All Blogs Button */}
      <div className="text-center mt-12">
        <a
          href="https://medium.com/@parth.bramhecha007"
          target="_blank"
          className="term-btn"
        >
          ./read_all_blogs
        </a>
      </div>
    </div>
  );
}