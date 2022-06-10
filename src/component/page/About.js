import React from 'react';

const About = () => {
  return (
    <div className="px-28">
      <div class="hero  min-h-screen  ">
        <div class="hero-content flex-col lg:flex-row ">
          <img
            src="https://i.ibb.co/41rtsLx/rasel1.png"
            alt="Rasel"
            class="rounded-lg shadow-2xl  "
          />
          <div>
            <h2 class="font-bold text-xl">Name : Rasel Rana</h2>
            <h3>Email : raselraaz91@gmail.com</h3>
            <p>
              I am a web developer , I make responsive website <br />
              My skills are given below and I always try to learn new technology
              and apply it to the website.
            </p>
            <div className="shadow-2xl p-5 rounded-2xl">
              <li className="shadow-2xl btn btn-outline btn-secondary ml-2 mt-2">
                HTML-5
              </li>
              <li className="shadow-2xl btn btn-outline btn-secondary ml-2 mt-2">
                CSS
              </li>
              <li className="shadow-2xl btn btn-outline btn-secondary ml-2 mt-2">
                Bootstrap
              </li>
              <li className="shadow-2xl btn btn-outline btn-secondary ml-2 mt-2">
                Tailwind css
              </li>
              <li className="shadow-2xl btn btn-outline btn-secondary ml-2 mt-2">
                javascript
              </li>
              <li className="shadow-2xl btn btn-outline btn-secondary ml-2 mt-2">
                React
              </li>
              <li className="shadow-2xl btn btn-outline btn-secondary ml-2 mt-2">
                React Router
              </li>
              <li className="shadow-2xl btn btn-outline btn-secondary ml-2 mt-2">
                Firebase
              </li>
              <li className="shadow-2xl btn btn-outline btn-secondary ml-2 mt-2">
                Heroku
              </li>
              <li className="shadow-2xl btn btn-outline btn-secondary ml-2 mt-2">
                etc
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;