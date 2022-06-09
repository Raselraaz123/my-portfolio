import React from 'react';

const About = () => {
  return (
    <div>
      <div class="hero  min-h-screen  ">
        <div class="hero-content flex-col lg:flex-row ">
          <img
            src="https://i.ibb.co/Jcp1LMj/rasel2-removebg-preview.png"
            alt="Rasel"
            class="max-w-lg rounded-lg shadow-2xl  "
          />
          <div>
            <h2 class="font-bold text-xl">Name : Rasel Rana</h2>
            <h3>Email : raselraaz91@gmail.com</h3>
            <p>I am a web developer , I make responsive website <br />My skills are given below and I always try to learn new technology and apply it to the website.</p>
            <div>
              <li>HTML-5</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Tailwind css</li>
              <li>javascript</li>
              <li>React</li>
              <li>React Router</li>
              <li>Firebase</li>
              <li>Heroku</li>
              <li>etc</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;