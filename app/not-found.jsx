// @flow strict

import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center font-mono px-4">
      <div className="border border-term-border bg-term-panel rounded-md p-8 max-w-md w-full">
        <div className="term-dots justify-center mb-4">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p className="text-term-red text-sm mb-2">bash: 404: page not found</p>
        <h1 className="text-5xl font-bold text-term-text mb-3">404</h1>
        <p className="text-term-dim text-sm">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          className="mt-6 inline-flex term-btn"
          role="button"
          href="/"
        >
          cd ~/home
        </Link>
      </div>
    </div>
  );
};

export default page;
