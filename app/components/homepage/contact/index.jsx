// @flow strict
import { contactsData } from '@/utils/data/contactsData';
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BsLinkedin, BsMedium } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { SiKaggle } from "react-icons/si";
import ContactForm from './contact-form';

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-term-text border-t border-term-border pt-10">
      <p className="term-section-title mb-6">
        <span className="term-hash">#</span> ./contact.sh
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <ContactForm />
        <div className="lg:w-3/4 border border-term-border bg-term-panel rounded-md p-5">
          <div className="flex flex-col gap-5">
            <p className="text-sm md:text-base flex items-center gap-3">
              <MdAlternateEmail
                className="border border-term-border p-2 rounded-sm hover:border-term-green hover:text-term-green transition-all duration-300 text-term-dim cursor-pointer"
                size={32}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-base flex items-center gap-3">
              <IoMdCall
                className="border border-term-border p-2 rounded-sm hover:border-term-green hover:text-term-green transition-all duration-300 text-term-dim cursor-pointer"
                size={32}
              />
              <span>
                {personalData.phone}
              </span>
            </p>
            <p className="text-sm md:text-base flex items-center gap-3">
              <CiLocationOn
                className="border border-term-border p-2 rounded-sm hover:border-term-green hover:text-term-green transition-all duration-300 text-term-dim cursor-pointer"
                size={32}
              />
              <span>
                {personalData.address}
              </span>
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <Link target="_blank" href={contactsData.github}>
              <IoLogoGithub
                className="border border-term-border p-3 rounded-sm hover:border-term-green hover:text-term-green transition-all duration-300 text-term-dim cursor-pointer"
                size={44}
              />
            </Link>
            <Link target="_blank" href={contactsData.linkedIn}>
              <BsLinkedin
                className="border border-term-border p-3 rounded-sm hover:border-term-green hover:text-term-green transition-all duration-300 text-term-dim cursor-pointer"
                size={44}
              />
            </Link>
            <Link target="_blank" href={contactsData.medium}>
              <BsMedium
                className="border border-term-border p-3 rounded-sm hover:border-term-green hover:text-term-green transition-all duration-300 text-term-dim cursor-pointer"
                size={44}
              />
            </Link>
            <Link target="_blank" href={contactsData.kaggle}>
              <SiKaggle
                className="border border-term-border p-3 rounded-sm hover:border-term-green hover:text-term-green transition-all duration-300 text-term-dim cursor-pointer"
                size={44}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
