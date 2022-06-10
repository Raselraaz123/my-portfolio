import React from 'react';

const Pricing = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-5">PRICING PER BUILD</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-28 mb-10 ">
        <div class="card bg-gradient-to-r from-red-300 to-blue-500 hover:from-pink-500 hover:to-yellow-500   text-primary-content shadow-2xl">
          <div class="card-body">
            <h2 class="card-title">BASIC</h2>
            <div className="text-center">
              <p>Website Audit</p>
              <p>Design</p>
              <p>Development</p>
            </div>
            <div class="card-actions justify-center">
              <button class="btn btn-outline text-white">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-violet-600   text-primary-content shadow-2xl">
          <div class="card-body">
            <h2 class="card-title">STANDARD</h2>
            <div className="text-center">
              <p>Website Audit</p>
              <p>Design</p>
              <p>Development</p>
              <p>Search Engine Optimization</p>
              <p>Live Chat</p>
            </div>
            <div class="card-actions justify-center">
              <button class="btn btn-outline text-white">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card bg-gradient-to-r from-green-400 to-green-500 hover:from-pink-400 hover:to-orange-600   text-primary-content shadow-2xl">
          <div class="card-body">
            <h2 class="card-title">PREMIUM</h2>
            <div className="text-center">
              <p>Website Audit</p>
              <p>Design</p>
              <p>Development</p>
              <p>Search Engine Optimization</p>
              <p>eCommerce</p>
              <p>Email Setup</p>
              <p>Hosting</p>
            </div>
            <div class="card-actions justify-center">
              <button class="btn btn-outline text-white">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;