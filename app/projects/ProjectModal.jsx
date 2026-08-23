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
  const sponsorshipCertificate = typeof project?.sponsorshipCertificate === "string" && project.sponsorshipCertificate.trim()
    ? project.sponsorshipCertificate
    : "";
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
          <span className="text-term-dim text-xs truncate max-w-[50%]">{title.toLowerCase().replace(/\s+/g, "_")}.md</span>
          <button
            onClick={onClose}
            className="text-term-dim hover:text-term-red transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-5">
          {/* Title */}
          <h2 className="text-term-text text-2xl md:text-3xl font-bold mb-4">{title}</h2>

          {/* Image */}
          <img
            src={imageSrc}
            alt={title}
            className="rounded-sm border border-term-border w-full mb-5"
          />

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tools.map((tool, i) => (
              <span
                key={i}
                className="term-tag"
              >
                {tool}
              </span>
            ))}
          </div>

          {sponsor && sponsor !== "No sponsor" && (
            <div className="mb-5 rounded-sm border border-term-amber/40 bg-term-amber/10 p-3">
              <p className="text-sm uppercase tracking-wider text-term-amber mb-1">// sponsor</p>
              <p className="text-term-text font-semibold">{sponsor}</p>
            </div>
          )}

          {/* Long Description */}
          <p className="text-term-dim mb-5 leading-7">{longDescription}</p>

          {/* YouTube Demo */}
          {demoVideo && (
            <div className="w-full aspect-video mb-6 border border-term-border rounded-sm overflow-hidden">
              <iframe
                className="w-full h-full"
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
                className="term-btn"
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
                className="term-btn term-btn-cyan"
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
                className="term-btn term-btn-cyan"
              >
                Read Blog
              </a>
            )}

            {sponsorshipCertificate && (
              <a
                href={sponsorshipCertificate}
                target="_blank"
                rel="noreferrer"
                className="term-btn term-btn-amber"
              >
                Sponsorship Certificate
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
