import React from 'react';

const HomeCarousel = () => {
  return (
    <div className="px-28 mb-10">
      <ul class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card">
          <li class="bg-purple-400 hover:bg-white hover:text-black card-body">
            <h2 class="text-xl font-bold color-primary text-uppercase">
              Mobile-friendly
            </h2>
            <p>
              A responsive design makes your website accessible to all users,
              regardless of their device.
            </p>
          </li>
        </div>
        <div className="card">
          {" "}
          <li class="bg-rose-400 hover:bg-white hover:text-black card-body">
            <h2 class="text-xl font-bold color-primary text-uppercase">
              Website Audits
            </h2>
            <p>
              Looking to improve your page performance, SEO, or user experience?
              Request a free site audit.
            </p>
          </li>
        </div>
        <div className="card">
          {" "}
          <li class="bg-violet-400 card-body hover:bg-white hover:text-black">
            <h2 class="text-xl font-bold color-primary text-uppercase">
              Content Management
            </h2>
            <p>
              Custom WordPress theme and plugin development. Easily update
              content without knowing how to code.
            </p>
          </li>
        </div>
        <div className="card">
          {" "}
          <li class="bg-yellow-400 card-body hover:bg-white hover:text-black">
            <h2 class="text-xl font-bold color-primary text-uppercase">
              Design + Development
            </h2>
            <p>
              Clean, modern designs - optimized for performance, search engines,
              and converting users to customers.
            </p>
          </li>
        </div>
        <div className="card">
          <li class=" bg-pink-400 card-body hover:bg-white hover:text-black">
            <h2 class="text-xl font-bold color-primary text-uppercase">
              eCommerce
            </h2>
            <p>
              Integration of eCommerce platforms, payment gateways, custom
              product templates, and more.
            </p>
          </li>
        </div>
        <div className="card">
          <li class=" bg-gray-400 card-body hover:bg-white hover:text-black">
            <h2 class=" text-xl font-bold color-primary text-uppercase">
              Analytics
            </h2>
            <p>
              Get insights into who is browsing your site so that you can make
              smarter business decisions.
            </p>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default HomeCarousel;