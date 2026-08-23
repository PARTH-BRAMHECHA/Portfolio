// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative border-t border-term-border pt-10">
      <p className="term-section-title mb-6">
        <span className="term-hash">#</span> cat about.md
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1 border border-term-border bg-term-panel rounded-md p-5">
          <p className="font-medium mb-4 text-term-green text-sm uppercase tracking-wider">
            // who i am
          </p>
          <p className="text-term-text text-sm lg:text-base leading-relaxed">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <div className="border border-term-border p-2 bg-term-panel rounded-md">
            <Image
              src={personalData.profile}
              width={260}
              height={260}
              alt="Parth Bramhecha"
              className="rounded-sm transition-all duration-700 grayscale hover:grayscale-0 cursor-pointer"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
