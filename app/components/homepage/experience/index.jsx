// @flow strict
"use client";

import { useState } from "react";
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
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
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experiences.map(exp => {
                const isOpen = openId === exp.id;

                return (
                  <GlowCard
                    key={exp.id}
                    identifier={`experience-${exp.id}`}
                  >
                    <div className="p-3 relative">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80 pointer-events-none"
                      />

                      <div
                        className="cursor-pointer"
                        onClick={() => toggleCard(exp.id)}
                      >
                        <div className="flex justify-center">
                          <p className="text-xs sm:text-sm text-[#16f2b3]">
                            {exp.duration}
                          </p>
                        </div>

                        <div className="flex items-center gap-x-8 px-3 py-5">
                          <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                            <BsPersonWorkspace size={36} />
                          </div>
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                              {exp.title}
                            </p>
                            <p className="text-sm sm:text-base">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Expandable Work Description */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isOpen ? "max-h-[999rem] mt-3 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-sm text-gray-300 px-3 pb-2">
                          {exp.work}
                        </p>

                        {exp.certificates?.length > 0 && (
                          <div className="px-3 pb-4">
                            <p className="text-sm font-semibold text-[#16f2b3] mb-2">
                              Certificates
                            </p>
                            <div className="flex flex-wrap gap-3">
                              {exp.certificates.map((certificate, index) => (
                                <a
                                  key={`${exp.id}-${index}`}
                                  href={certificate.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={stopCardToggle}
                                  className="inline-flex items-center rounded-full border border-[#16f2b3]/70 bg-[#16f2b3]/20 px-3 py-2 text-sm font-medium text-[#16f2b3] shadow-sm transition hover:bg-[#16f2b3]/35"
                                >
                                  View Certificate
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
