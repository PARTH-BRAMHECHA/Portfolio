"use client";

import { motion } from "framer-motion";

export default function PublicationModal({ publication, onClose }) {
  if (!publication) return null;

  const title = publication?.title || "Untitled Publication";
  const imageSrc = publication?.image || "/publications/placeholder.png";
  const longDescription = publication?.longDescription || "More details coming soon.";
  const date = publication?.date || "";
  const pdfLink = typeof publication?.pdfLink === "string" && publication.pdfLink.trim() ? publication.pdfLink : "";
  const paperLink = typeof publication?.paperLink === "string" && publication.paperLink.trim() ? publication.paperLink : "";
  const codeLink = typeof publication?.codeLink === "string" && publication.codeLink.trim() ? publication.codeLink : "";
  const datasetLink = typeof publication?.datasetLink === "string" && publication.datasetLink.trim() ? publication.datasetLink : "";
  const certificateLink = typeof publication?.certificateLink === "string" && publication.certificateLink.trim() ? publication.certificateLink : "";

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#1b203e] border border-[#242b44] rounded-xl p-5 w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="text-white text-2xl float-right hover:text-red-400"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-white text-3xl font-bold mb-3">{title}</h2>

        {date && (
          <p className="text-sm text-[#16f2b3] mb-4">{date}</p>
        )}

        {/* Image */}
        <img src={imageSrc} alt={title} className="rounded-lg w-full mb-5" />

        {/* Long Description */}
        <p className="text-[#d3d8e8] leading-7 mb-6 whitespace-pre-line">
          {longDescription}
        </p>

        <div className="flex flex-wrap gap-3">
          {pdfLink && (
            <a
              href={pdfLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-violet-600 text-white px-5 py-2 rounded-full font-medium"
            >
              View PDF
            </a>
          )}

          {paperLink && (
            <a
              href={paperLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-full font-medium"
            >
              View Paper
            </a>
          )}

          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-[#16f2b3] text-[#16f2b3] px-5 py-2 rounded-full font-medium"
            >
              View Code
            </a>
          )}

          {datasetLink && (
            <a
              href={datasetLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-[#f97316] text-[#f97316] px-5 py-2 rounded-full font-medium"
            >
              View Dataset
            </a>
          )}

          {certificateLink && (
            <a
              href={certificateLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-5 py-2 rounded-full font-medium"
            >
              View Certificate
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}