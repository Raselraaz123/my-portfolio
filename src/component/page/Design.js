import React from 'react';

const Design = () => {
  return (
    <div>
      <div class="hero px-28 ">
        <div class="hero-content grid sm:grid-cols-1 sm:gap-40 lg:grid-cols-2  ">
          <div className="mt-[px] mb-28 gap-10 hover:bg-black hover:shadow-2xl rounded-2xl p-5">
            <h2 className="text-4xl font-bold">Design</h2>
            <p className="py-6">
              I'm probably not the typical designer positioned behind an
              Illustrator artboard adjusting pixels, but I design. Immersed in
              stylesheets tweaking font sizes and contemplating layouts is where
              you'll find me 0. I'm committed to creating fluent user
              experiences while staying fashionable.
            </p>
          </div>
          <div className="mt-[-120px] hover:bg-white hover:text-black hover:shadow-2xl rounded-2xl p-5">
            <h1 class="text-4xl font-bold">Engineering</h1>
            <p class="py-6">
              In building React applications, I'm equipped with just the right
              tools, and can absolutely function independently of them to
              deliver fast, resilient solutions optimized for scale —
              performance and scalabilty are priorities on my radar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;