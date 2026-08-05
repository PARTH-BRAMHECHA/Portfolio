"use client";

import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const title = project?.title || "Untitled Project";
  const imageSrc = project?.image || "/project/placeholder.jpg";
  const tools = Array.isArray(project?.tools) ? project.tools : [];
  const longDescription = project?.longDescription || "More details coming soon.";
  const demoVideo = typeof project?.demoVideo === "string" ? project.demoVideo : "";
  const githubLink = typeof project?.github === "string" && project.github.trim() ? project.github : "";
  const blogLink = typeof project?.blogLink === "string" && project.blogLink.trim() ? project.blogLink : "";
  const deployedLink = typeof project?.deployedLink === "string" && project.deployedLink.trim() ? project.deployedLink : "";
  const sponsor = project?.Sponsor || "No sponsor";

  const isValidExternalLink = (value) => {
    if (!value) return false;
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  const hasValidGithub = isValidExternalLink(githubLink);
  const hasValidBlogLink = isValidExternalLink(blogLink);
  const hasValidDeployedLink = isValidExternalLink(deployedLink);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#1b203e] border border-[#242b44] rounded-xl p-5 w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto shadow-xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="text-white text-2xl float-right hover:text-red-400"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-white text-3xl font-bold mb-4">{title}</h2>

        {/* Image */}
        <img
          src={imageSrc}
          alt={title}
          className="rounded-lg w-full mb-5"
        />

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tools.map((tool, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs bg-[#252b47] text-[#16f2b3] rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>

        {sponsor && sponsor !== "No sponsor" && (
          <div className="mb-5 rounded-lg border border-[#16f2b3]/40 bg-[#16f2b3]/10 p-3">
            <p className="text-sm uppercase tracking-wider text-[#16f2b3] mb-1">Sponsor</p>
            <p className="text-white font-semibold">{sponsor}</p>
          </div>
        )}

        {/* Long Description */}
        <p className="text-[#d3d8e8] mb-5 leading-7">{longDescription}</p>

        {/* YouTube Demo */}
        {demoVideo && (
          <div className="w-full aspect-video mb-6">
            <iframe
              className="w-full h-full rounded-lg"
              src={
                demoVideo.includes("watch?v=")
                  ? demoVideo.replace("watch?v=", "embed/")
                  : demoVideo
              }
              title="Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {/* Github */}
          {hasValidGithub && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-pink-500 to-violet-600 text-white px-6 py-2 rounded-full font-medium"
            >
              View on GitHub
            </a>
          )}

          {/* Deployed App */}
          {hasValidDeployedLink && (
            <a
              href={deployedLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-[#16f2b3] text-[#16f2b3] px-6 py-2 rounded-full font-medium"
            >
              Visit Website
            </a>
          )}

          {/* Blog */}
          {hasValidBlogLink && (
            <a
              href={blogLink}
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-[#16f2b3] text-[#16f2b3] px-6 py-2 rounded-full font-medium"
            >
              Read Blog
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
