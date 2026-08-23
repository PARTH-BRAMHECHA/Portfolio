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
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 font-mono">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-term-panel border border-term-border rounded-md w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl"
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-term-border sticky top-0 bg-term-panel z-10">
          <div className="term-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="text-term-dim text-xs truncate max-w-[50%]">{title.toLowerCase().replace(/\s+/g, "_")}.pdf</span>
          <button
            onClick={onClose}
            className="text-term-dim hover:text-term-red transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-5">
          {/* Title */}
          <h2 className="text-term-text text-2xl md:text-3xl font-bold mb-3">{title}</h2>

          {date && (
            <p className="text-sm text-term-amber mb-4">{date}</p>
          )}

          {/* Image */}
          <img src={imageSrc} alt={title} className="rounded-sm border border-term-border w-full mb-5" />

          {/* Long Description */}
          <p className="text-term-dim leading-7 mb-6 whitespace-pre-line">
            {longDescription}
          </p>

          <div className="flex flex-wrap gap-3">
            {pdfLink && (
              <a
                href={pdfLink}
                target="_blank"
                rel="noreferrer"
                className="term-btn"
              >
                View PDF
              </a>
            )}

            {paperLink && (
              <a
                href={paperLink}
                target="_blank"
                rel="noreferrer"
                className="term-btn term-btn-cyan"
              >
                View Paper
              </a>
            )}

            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noreferrer"
                className="term-btn term-btn-ghost"
              >
                View Code
              </a>
            )}

            {datasetLink && (
              <a
                href={datasetLink}
                target="_blank"
                rel="noreferrer"
                className="term-btn term-btn-amber"
              >
                View Dataset
              </a>
            )}

            {certificateLink && (
              <a
                href={certificateLink}
                target="_blank"
                rel="noreferrer"
                className="term-btn"
              >
                View Certificate
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}