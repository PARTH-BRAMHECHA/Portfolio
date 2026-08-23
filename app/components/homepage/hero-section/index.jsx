// @flow strict

import { contactsData } from "@/utils/data/contactsData";
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiKaggle } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">

        {/* LEFT SIDE */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <p className="term-section-title mb-4">
            <span className="term-hash">$</span> whoami
          </p>
          <h1 className="text-3xl font-bold leading-10 text-term-text md:font-extrabold lg:text-[2.4rem] lg:leading-[3.2rem]">
            Hello, <br />
            This is{" "}
            <span className="text-term-green">{personalData.name}</span>
            {`, I'm a Professional `}
            <span className="text-term-cyan">{personalData.designation}</span>.
          </h1>

          {/* SOCIAL ICONS */}
          <div className="my-10 flex items-center gap-5">
            <Link
              href={contactsData.github}
              target="_blank"
              className="transition-all text-term-dim hover:text-term-green hover:scale-110 duration-300"
            >
              <BsGithub size={26} />
            </Link>
            <Link
              href={contactsData.linkedIn}
              target="_blank"
              className="transition-all text-term-dim hover:text-term-green hover:scale-110 duration-300"
            >
              <BsLinkedin size={26} />
            </Link>
            <Link
              href={contactsData.medium}
              target="_blank"
              className="transition-all text-term-dim hover:text-term-green hover:scale-110 duration-300"
            >
              <BsMedium size={26} />
            </Link>
            <Link
              href={contactsData.kaggle}
              target="_blank"
              className="transition-all text-term-dim hover:text-term-green hover:scale-110 duration-300"
            >
              <SiKaggle size={26} />
            </Link>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-3">
            <Link href="#contact" className="term-btn">
              <span>&gt;_ contact --me</span>
              <RiContactsFill size={16} />
            </Link>

            <Link
              className="term-btn term-btn-cyan"
              role="button"
              target="_blank"
              href="https://drive.google.com/file/d/1XDD8WTIAhRCPIujJDQok_Miqt1qWDFs3/view?usp=sharing"
            >
              <span>./resume --download</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE – CODE BOX */}
        <div className="order-1 lg:order-2 border border-term-border relative rounded-md bg-term-panel">
          <div className="flex items-center justify-between px-4 lg:px-5 py-3 border-b border-term-border">
            <div className="term-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span className="text-term-dim text-xs">coder.js</span>
          </div>

          <div className="overflow-hidden px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed">

              <div>
                <span className="mr-2 text-term-cyan">const</span>
                <span className="mr-2 text-term-text">coder</span>
                <span className="mr-2 text-term-cyan">=</span>
                <span className="text-term-dim">{"{"}</span>
              </div>

              {/* name */}
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-term-text">name:</span>
                <span className="text-term-dim">{`'`}</span>
                <span className="text-term-amber">Parth Bramhecha</span>
                <span className="text-term-dim">{`',`}</span>
              </div>

              {/* skills */}
              <div className="ml-4 lg:ml-8 mr-2">
                <span className="text-term-text">skills:</span>
                <span className="text-term-dim">{`['`}</span>
                <span className="text-term-amber">Python</span>
                <span className="text-term-dim">{"', '"}</span>
                <span className="text-term-amber">Machine Learning</span>
                <span className="text-term-dim">{"', '"}</span>
                <span className="text-term-amber">Deep Learning</span>
                <span className="text-term-dim">{"', '"}</span>
                <span className="text-term-amber">NLP</span>
                <span className="text-term-dim">{"', '"}</span>
                <span className="text-term-amber">FastAPI</span>
                <span className="text-term-dim">{"', '"}</span>
                <span className="text-term-amber">REST APIs</span>
                <span className="text-term-dim">{"', '"}</span>
                <span className="text-term-amber">TensorFlow</span>
                <span className="text-term-dim">{"', '"}</span>
                <span className="text-term-amber">PyTorch</span>
                <span className="text-term-dim">{"'],"}</span>
              </div>

              {/* boolean traits */}
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-term-text">hardWorker:</span>
                <span className="text-term-green">true</span>
                <span className="text-term-dim">,</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-term-text">quickLearner:</span>
                <span className="text-term-green">true</span>
                <span className="text-term-dim">,</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-term-text">problemSolver:</span>
                <span className="text-term-green">true</span>
                <span className="text-term-dim">,</span>
              </div>

              {/* added ML/NLP/research traits */}
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-term-text">machineLearning:</span>
                <span className="text-term-amber">"advanced"</span>
                <span className="text-term-dim">,</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-term-text">nlp:</span>
                <span className="text-term-amber">"low-resource + transformers"</span>
                <span className="text-term-dim">,</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-term-text">researchMindset:</span>
                <span className="text-term-green">true</span>
                <span className="text-term-dim">,</span>
              </div>

              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-term-text">projects:</span>
                <span className="text-term-cyan">[</span>
                <span className="text-term-amber">
                  "Fraud Detection", "Federated Learning", "OCR Systems", "SAR–NDVI Analysis"
                </span>
                <span className="text-term-cyan">]</span>
                <span className="text-term-dim">,</span>
              </div>

              {/* isHireable */}
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-term-green">isHireable:</span>
                <span className="text-term-cyan">function</span>
                <span className="text-term-dim">{`() {`}</span>
              </div>

              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-term-cyan">return</span>
                <span className="text-term-dim">{`(`}</span>
              </div>

              <div>
                <span className="ml-12 lg:ml-24 text-term-cyan">this.</span>
                <span className="mr-2 text-term-text">researchMindset</span>
                <span className="text-term-amber">&amp;&amp;</span>
              </div>

              <div>
                <span className="ml-12 lg:ml-24 text-term-cyan">this.</span>
                <span className="mr-2 text-term-text">machineLearning</span>
                <span className="text-term-amber">&amp;&amp;</span>
              </div>

              <div>
                <span className="ml-12 lg:ml-24 text-term-cyan">this.</span>
                <span className="mr-2 text-term-text">projects.length</span>
                <span className="mr-2 text-term-amber">&gt;=</span>
                <span className="text-term-green">4</span>
              </div>

              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-term-dim">{`);`}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 text-term-dim">{`};`}</span>
              </div>
              <div>
                <span className="text-term-dim">{`};`}</span>
                <span className="term-cursor"></span>
              </div>

            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
