"use client";

import { useState } from "react";
import { publications } from "@/utils/data/publication-data";
import PublicationCard from "./PublicationCard";
import PublicationModal from "./PublicationModal";

export default function PublicationsPage() {
  const [selectedPublication, setSelectedPublication] = useState(null);

  return (
    <div className="py-10 font-mono">
      {/* Header */}
      <div className="mb-10">
        <p className="term-section-title">
          <span className="term-hash">#</span> ls ./publications
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
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
