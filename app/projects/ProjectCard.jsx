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
      className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group cursor-pointer"
    >
      {/* Image */}
      <div className="h-44 lg:h-52 overflow-hidden rounded-t-lg bg-[#11162b] flex items-center justify-center">
        <Image
          src={imageSrc}
          width={1920}
          height={1080}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>

      <div className="p-3">
        {/* Title */}
        <p className="text-lg text-white font-medium hover:text-violet-500">
          {title}
        </p>

        {/* Short Description */}
        <p className="text-sm text-[#d3d8e8] my-2 line-clamp-2">
          {shortDescription}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tools.slice(0, 3).map((tool, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-[#252b47] text-[#16f2b3] text-xs rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
