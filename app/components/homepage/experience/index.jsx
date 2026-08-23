// @flow strict
"use client";

import { useState } from "react";
import { experiences } from "@/utils/data/experience";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  const [openId, setOpenId] = useState(null);

  const toggleCard = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const stopCardToggle = (event) => {
    event.stopPropagation();
  };

  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-term-border pt-10">
      <p className="term-section-title mb-6">
        <span className="term-hash">#</span> ls ./experience
      </p>

      <div className="py-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

          <div className="hidden lg:flex justify-center items-start">
            <div className="w-full h-full opacity-90">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4">
              {experiences.map(exp => {
                const isOpen = openId === exp.id;

                return (
                  <GlowCard
                    key={exp.id}
                    identifier={`experience-${exp.id}`}
                  >
                    <div className="p-3 relative">
                      <div
                        className="cursor-pointer"
                        onClick={() => toggleCard(exp.id)}
                      >
                        <div className="flex justify-between items-center px-2 pt-1">
                          <span className="term-tag">{exp.duration}</span>
                          <span className="text-term-dim text-xs">{isOpen ? "[-]" : "[+]"}</span>
                        </div>

                        <div className="flex items-center gap-x-6 px-3 py-4">
                          <div className="text-term-cyan transition-all duration-300 hover:scale-110">
                            <BsPersonWorkspace size={30} />
                          </div>
                          <div>
                            <p className="text-base sm:text-lg mb-1 font-medium uppercase text-term-text">
                              {exp.title}
                            </p>
                            <p className="text-sm sm:text-base text-term-dim">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Expandable Work Description */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isOpen ? "max-h-[999rem] mt-2 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-sm text-term-dim px-3 pb-2 border-t border-term-border pt-3">
                          {exp.work}
                        </p>

                        {exp.certificates?.length > 0 && (
                          <div className="px-3 pb-4">
                            <p className="text-sm font-semibold text-term-green mb-2">
                              // certificates
                            </p>
                            <div className="flex flex-wrap gap-3">
                              {exp.certificates.map((certificate, index) => (
                                <a
                                  key={`${exp.id}-${index}`}
                                  href={certificate.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={stopCardToggle}
                                  className="term-btn term-btn-cyan text-xs px-3 py-1.5"
                                >
                                  view_certificate.pdf
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </GlowCard>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Experience;
