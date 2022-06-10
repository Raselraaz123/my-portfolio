import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../shared/Footer';
import Design from './Design';
import HomeCarousel from './HomeCarousel';
import Pricing from './Pricing';

const Home = () => {
  return (
    <div>
      <div class="hero lg:p-28">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div>
            <div className=" text-5xl sm:text-3xl sm:font-bold lg:font-bold">
              <h1 class=" hover:text-orange-200">
                Assalamualaikum <br /> warahmatullahi <br /> wabarakatuh
              </h1>
            </div>
            <br /> <br />
            <div>
              <h2 className="text-4xl sm:text-2xl font-bold hover:italic">
                <span className="text-orange-300"> Hello</span> I am Rasel Rana
                I am a web developer ,<br /> I make responsive website
              </h2>
              <p class="py-6">
                I like to craft solid and scalable frontend products with great
                user experiences.
              </p>
              <a
                href="https://raaz-perfumes-store.web.app/"
                target="_blank"
                class="btn btn-primary"
              >
                Check out my project
              </a>
            </div>
          </div>
        </div>
      </div>
      <Design></Design>
      <Pricing></Pricing>
      <HomeCarousel></HomeCarousel>
      <Footer></Footer>
    </div>
  );
};

export default Home;