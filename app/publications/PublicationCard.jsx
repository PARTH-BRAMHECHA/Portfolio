"use client";

import Image from "next/image";

export default function PublicationCard({ publication, onClick }) {
  return (
    <div
      onClick={() => onClick(publication)}
      className="border border-term-border hover:border-term-green bg-term-panel rounded-md transition-all duration-300 group cursor-pointer"
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-term-border">
        <div className="term-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="text-term-dim text-[10px] truncate max-w-[60%]">{publication.title.toLowerCase().replace(/\s+/g, "_")}.pdf</span>
      </div>

      {/* Image */}
      <div className="h-44 lg:h-52 overflow-hidden bg-term-panel-alt">
        <Image
          src={publication.image}
          width={1920}
          height={1080}
          alt={publication.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
        />
      </div>

      <div className="p-3">
        {/* Title */}
        <p className="text-base text-term-text font-semibold group-hover:text-term-green transition-colors duration-300">
          {publication.title}
        </p>

        {/* Date */}
        <p className="text-xs text-term-amber mt-1">{publication.date}</p>

        {/* Short Description */}
        <p className="text-sm text-term-dim mt-2 line-clamp-2">
          {publication.shortDescription}
        </p>
      </div>
    </div>
  );
}
