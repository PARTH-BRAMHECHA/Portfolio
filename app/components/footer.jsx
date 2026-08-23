// @flow strict
import Link from 'next/link';
import { personalData } from '@/utils/data/personal-data';

function Footer() {
  return (
    <div className="relative border-t bg-term-bg border-term-border text-term-text font-mono">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between">

          <p className="text-sm text-term-dim">
            <span className="text-term-green">$</span> echo "&copy; Portfolio by{" "}
            <Link
              target="_blank"
              href={personalData.github}
              className="text-term-green hover:underline"
            >
              Parth Bramhecha
            </Link>
            "
          </p>

        </div>
      </div>
    </div>
  );
};

export default Footer;
