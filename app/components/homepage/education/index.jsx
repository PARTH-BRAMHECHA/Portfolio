// @flow strict
import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-term-border pt-10">
      <p className="term-section-title mb-6">
        <span className="term-hash">#</span> ls ./education
      </p>

      <div className="py-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="hidden lg:flex justify-center items-start">
            <div className="w-3/4 h-3/4 opacity-90">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4">
              {
                educations.map(education => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="p-3 relative text-term-text">
                      <div className="flex px-2 pt-1">
                        <span className="term-tag">{education.duration}</span>
                      </div>
                      <div className="flex items-center gap-x-6 px-3 py-4">
                        <div className="text-term-cyan transition-all duration-300 hover:scale-110">
                          <BsPersonWorkspace size={30} />
                        </div>
                        <div>
                          <p className="text-base sm:text-lg mb-1 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base text-term-dim">{education.institution}</p>
                          {education.value && (
                            <p className="text-sm sm:text-base text-term-green mt-1">
                              {education.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
