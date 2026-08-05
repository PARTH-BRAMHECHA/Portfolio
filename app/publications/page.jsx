"use client";

import { useState } from "react";
import { publications } from "@/utils/data/publication-data";
import PublicationCard from "./PublicationCard";
import PublicationModal from "./PublicationModal";

export default function PublicationsPage() {
  const [selectedPublication, setSelectedPublication] = useState(null);

  return (
    <div className="py-10">
      {/* Header */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] text-white px-5 py-2 text-2xl rounded-md">
            Publications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8">
        {publications.map((pub) => (
          <PublicationCard
            key={pub.id}
            publication={pub}
            onClick={setSelectedPublication}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedPublication && (
        <PublicationModal
          publication={selectedPublication}
          onClose={() => setSelectedPublication(null)}
        />
      )}
    </div>
  );
}
