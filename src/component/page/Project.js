import React from 'react';

const Project = () => {
  return (
    <div className="px-28">
      <div class="hero w-full h-[500px] overflow-auto mt-10">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/CwNF6KM/Rasel-Car-Parts-Store.png"
            class="max-w-sm rounded-lg shadow-2xl sm:w-1/2"
          />
          <div>
            <h1 class="text-5xl font-bold lg:mt-[-600px]">
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
              className=" btn-link p-0 m-0"
              target="_blank"
              href="https://rasel-car-parts-store.web.app/"
            >
              Live Site
            </a>
            <br />
            <a
              className=" btn-link p-0 m-0"
              target="_blank"
              href="https://github.com/Raselraaz123/Rasel_Car_Parts_Store_client_side"
            >
              Github Client Side
            </a>
            <br />
            <a
              className=" btn-link p-0 m-0"
              target="_blank"
              href="https://github.com/Raselraaz123/Rasel_Car_Parts_Store_server_side"
            >
              Github Server Side
            </a>
          </div>
        </div>
      </div>

      <div class="hero  w-full h-[500px] overflow-auto mt-10 ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/d4wqVYz/Raaz-Perfume-Store.png"
            class="max-w-sm rounded-lg shadow-2xl sm:w-1/2"
          />
          <div>
            <h1 class="text-5xl font-bold lg:mt-[-500px]">
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
              className=" btn-link p-0 m-0"
              target="_blank"
              href="https://raaz-perfumes-store.web.app/"
            >
              Live Site
            </a>
            <br />
            <a
              className=" btn-link p-0 m-0"
              target="_blank"
              href="https://github.com/Raselraaz123/Raaz_Perfume_Store_client-side"
            >
              Github Client Side
            </a>
            <br />
            <a
              className=" btn-link p-0 m-0"
              target="_blank"
              href="https://github.com/Raselraaz123/Raaz_Perfume_Store_server_side"
            >
              Github Server Side
            </a>
          </div>
        </div>
      </div>
      <div class="hero  w-full h-[500px] overflow-auto mt-10">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/9GHMkTX/Travel-to-world.png"
            class="max-w-sm rounded-lg shadow-2xl sm:w-1/2"
          />
          <div>
            <h1 class="text-5xl font-bold">Travel to the world</h1>
            <p class="py-6">
              This is a traveling website. A valid user can make bookings for
              traveling to different countries from this website if he wishes.
              Firebase has been used on the website for authentication.
            </p>
            <a
              className=" btn-link p-0 m-0"
              target="_blank"
              href="https://travel-to-world-7da9f.web.app/"
            >
              Live Site
            </a>
            <br />
            <a
              className=" btn-link p-0 m-0"
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