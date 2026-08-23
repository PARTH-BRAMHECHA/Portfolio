"use client";
// @flow strict
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const NAV_LINKS = [
  { label: "about", href: "/#about" },
  { label: "experience", href: "/#experience" },
  { label: "skills", href: "/#skills" },
  { label: "education", href: "/#education" },
  { label: "blogs", href: "/blog" },
  { label: "projects", href: "/projects" },
  { label: "publications", href: "/publications" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getLinkHref = (href) => (href.startsWith("/#") && pathname === "/" ? href.slice(1) : href);

  return (
    <nav className="bg-term-bg/90 backdrop-blur border-b border-term-border sticky top-0 z-[60]">
      <div className="flex items-center justify-between py-4">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-term-green text-base sm:text-lg md:text-xl font-bold tracking-tight whitespace-nowrap"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-term-dim">~/</span>parth-bramhecha
            <span className="text-term-dim">$</span>
            <span className="term-cursor"></span>
          </Link>
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-x-1" id="navbar-default">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={getLinkHref(link.href)}
                className="block px-2.5 py-1.5 no-underline outline-none hover:no-underline group"
              >
                <span className="text-term-dim group-hover:text-term-green transition-colors duration-200">[</span>
                <span className="text-term-text group-hover:text-term-green transition-colors duration-200 uppercase text-sm">
                  {link.label}
                </span>
                <span className="text-term-dim group-hover:text-term-green transition-colors duration-200">]</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-term-green border border-term-border rounded-sm p-2 hover:border-term-green transition-colors duration-200"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <HiOutlineX size={20} /> : <HiOutlineMenuAlt3 size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[28rem] opacity-100 border-t border-term-border" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col py-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={getLinkHref(link.href)}
                onClick={() => setIsOpen(false)}
                className="block px-2 py-2.5 no-underline outline-none hover:no-underline group"
              >
                <span className="text-term-dim group-hover:text-term-green transition-colors duration-200">[</span>
                <span className="text-term-text group-hover:text-term-green transition-colors duration-200 uppercase text-sm">
                  {link.label}
                </span>
                <span className="text-term-dim group-hover:text-term-green transition-colors duration-200">]</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
