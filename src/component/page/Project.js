import React from 'react';

const Project = () => {
  return (
    <div className="lg:px-28">
      <div class="hero w-full  mt-10">
        <div class="hero-content flex-col lg:flex-row">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <img
              src="https://i.ibb.co/CwNF6KM/Rasel-Car-Parts-Store.png"
              class="rounded-lg shadow-2xl  h-[500px] sm:w-[250px] md:w-6/12 lg:w-full"
            />
            <img
              src="https://i.ibb.co/Y8W3zz8/Store2.png"
              class="rounded-lg shadow-2xl  h-[500px] sm:w-[250px] md:w-6/12 lg:w-full"
            />
            <img
              src="https://i.ibb.co/xFXxkL9/Store3.png"
              class="rounded-lg shadow-2xl  sm:w-[250px] md:w-6/12 lg:w-full"
            />
          </div>
          <div>
            <h1 class="lg:text-5xl font-bold sm:text-3xl ">
              Rasel Car Parts Store
            </h1>
            <p class="py-6">
              A full-stack website to purchase parts from manufacturers,
              including the admin route, users can purchase parts they want and
              the admin will be able to track activity. A fully functional
              authentication system has been implemented with a secure payment
              gateway.All data will be dynamically loaded and updated with time.
            </p>
            <a
              className="mb-2 btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500"
              target="_blank"
              href="https://rasel-car-parts-store.web.app/"
            >
              Live Site
            </a>
            <br />
            <a
              className="mb-2 btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500"
              target="_blank"
              href="https://github.com/Raselraaz123/Rasel_Car_Parts_Store_client_side"
            >
              Github Client Side
            </a>
            <br />
            <a
              className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500"
              target="_blank"
              href="https://github.com/Raselraaz123/Rasel_Car_Parts_Store_server_side"
            >
              Github Server Side
            </a>
          </div>
        </div>
      </div>

      <div class="hero  w-full mt-10 ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <img
              src="https://i.ibb.co/d4wqVYz/Raaz-Perfume-Store.png"
              class="rounded-lg shadow-2xl h-[500px] sm:w-[250px] md:w-6/12 lg:w-full"
            />
            <img
              src="https://i.ibb.co/mSnskjZ/Perfume-Store2.png"
              class="rounded-lg shadow-2xl h-[500px] sm:w-[250px] md:w-6/12 lg:w-full"
            />
            <img
              src="https://i.ibb.co/9r1kDgB/Perfume-Store3.png"
              class="rounded-lg shadow-2xl sm:w-[250px] md:w-6/12 lg:w-full"
            />
          </div>
          <div>
            <h1 class="lg:text-5xl font-bold sm:text-3xl ">
              Raaz Perfume Store
            </h1>
            <p class="py-6">
              It’s a perfume inventory management website. Where inventory of
              perfume can be updated by any valid user. If he/she adds any new
              perfume it can be viewed from home. The user can also see which
              perfume has he added by himself and firebase has been used to
              authenticate the user. Data will be loaded and saved in the
              MongoDB database.
            </p>
            <a
              className="mb-2 btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500"
              target="_blank"
              href="https://raaz-perfumes-store.web.app/"
            >
              Live Site
            </a>
            <br />
            <a
              className="mb-2 btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500"
              target="_blank"
              href="https://github.com/Raselraaz123/Raaz_Perfume_Store_client-side"
            >
              Github Client Side
            </a>
            <br />
            <a
              className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500"
              target="_blank"
              href="https://github.com/Raselraaz123/Raaz_Perfume_Store_server_side"
            >
              Github Server Side
            </a>
          </div>
        </div>
      </div>
      <div class="hero  w-full  mt-10">
        <div class="hero-content flex-col lg:flex-row">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <img
              src="https://i.ibb.co/9GHMkTX/Travel-to-world.png"
              class=" rounded-lg shadow-2xl h-[500px] sm:w-[250px] md:w-6/12 lg:w-full"
            />
            <img
              src="https://i.ibb.co/ypyZ4JL/world2.png"
              class=" rounded-lg shadow-2xl h-[500px] sm:w-[250px] md:w-6/12 lg:w-full"
            />
            <img
              src="https://i.ibb.co/6y3LNsN/world3.png"
              class=" rounded-lg shadow-2xl sm:w-[250px] md:w-6/12 lg:w-full"
            />
          </div>

          <div>
            <h1 class="lg:text-5xl font-bold sm:text-3xl">
              Travel to the world
            </h1>
            <p class="py-6">
              This is a traveling website. A valid user can make bookings for
              traveling to different countries from this website if he wishes.
              Firebase has been used on the website for authentication.
            </p>
            <a
              className="mb-2 btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500"
              target="_blank"
              href="https://travel-to-world-7da9f.web.app/"
            >
              Live Site
            </a>
            <br />
            <a
              className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500"
              target="_blank"
              href="https://github.com/Raselraaz123/Travel_to_world"
            >
              Github Client Side
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;








