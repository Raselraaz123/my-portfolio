import React from 'react';
import { Link } from 'react-router-dom';
import Design from './Design';

const Home = () => {
  return (
    <div>
      <div class="hero p-28">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 class="text-5xl font-bold">
              Assalamualaikum warahmatullahi wabarakatuh
            </h1>
            <h2 className="text-4xl font-bold hover:italic">
              <span className="text-orange-300"> Hello</span> I am Rasel Rana I
              am a web developer , I make responsive website
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
      <Design></Design>
    </div>
  );
};

export default Home;