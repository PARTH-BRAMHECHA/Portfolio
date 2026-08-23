"use client";

import Image from "next/image";

export default function ProjectCard({ project, onClick }) {
  const title = project?.title || "Untitled Project";
  const imageSrc = project?.image || "/project/placeholder.jpg";
  const shortDescription = project?.shortDescription || "More details coming soon.";
  const tools = Array.isArray(project?.tools) ? project.tools : [];

  return (
    <div
      onClick={() => onClick(project)}
      className="border border-term-border hover:border-term-green transition-all duration-300 bg-term-panel rounded-md relative group cursor-pointer"
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-term-border">
        <div className="term-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="text-term-dim text-[10px] truncate max-w-[60%]">{title.toLowerCase().replace(/\s+/g, "_")}.md</span>
      </div>

      {/* Image */}
      <div className="h-44 lg:h-52 overflow-hidden bg-term-panel-alt flex items-center justify-center">
        <Image
          src={imageSrc}
          width={1920}
          height={1080}
          alt={title}
          className="h-full w-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
        />
      </div>

      <div className="p-3">
        {/* Title */}
        <p className="text-base text-term-text font-medium group-hover:text-term-green transition-colors duration-300">
          {title}
        </p>

        {/* Short Description */}
        <p className="text-sm text-term-dim my-2 line-clamp-2">
          {shortDescription}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tools.slice(0, 3).map((tool, idx) => (
            <span
              key={idx}
              className="term-tag"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
