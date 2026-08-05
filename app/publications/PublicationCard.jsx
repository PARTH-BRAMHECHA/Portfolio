"use client";

import Image from "next/image";

export default function PublicationCard({ publication, onClick }) {
  return (
    <div
      onClick={() => onClick(publication)}
      className="border border-[#1d293a] hover:border-[#464c6a] bg-[#1b203e] rounded-lg transition-all duration-500 group cursor-pointer"
    >
      {/* Image */}
      <div className="h-44 lg:h-52 overflow-hidden rounded-t-lg">
        <Image
          src={publication.image}
          width={1920}
          height={1080}
          alt={publication.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>

      <div className="p-3">
        {/* Title */}
        <p className="text-lg text-white font-semibold hover:text-violet-500">
          {publication.title}
        </p>

        {/* Date */}
        <p className="text-xs text-[#16f2b3] mt-1">{publication.date}</p>

        {/* Short Description */}
        <p className="text-sm text-[#d3d8e8] mt-2 line-clamp-2">
          {publication.shortDescription}
        </p>
      </div>
    </div>
  );
}
