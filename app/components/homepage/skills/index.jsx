// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-term-border pt-10">
      <p className="term-section-title mb-2">
        <span className="term-hash">#</span> pip list --skills
      </p>

      <div className="w-full my-8">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="w-32 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-300 m-2 sm:m-3 rounded-md group relative hover:-translate-y-1 cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-md border border-term-border bg-term-panel group-hover:border-term-green transition-all duration-300">
                <div className="flex flex-col items-center justify-center gap-2 p-5">
                  <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                    <Image
                      src={skillsImage(skill)}
                      alt={skill}
                      fill
                      style={{ objectFit: 'contain' }}
                      className="rounded-sm grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <p className="text-term-text text-xs sm:text-sm">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
