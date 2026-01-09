import React from "react";

// Importing images to ensure they are bundled correctly for deployment
import PGWebsite from "/public/picturesofprojects/websiteforpg.png";
import NewsApp from "/public/picturesofprojects/websiteforNews.png";
import WeatherApp from "/public/picturesofprojects/websiteforWeather.png";
import AmazonClone from "/public/picturesofprojects/Amazonsclone.png";
import TextApp from "/public/picturesofprojects/textapp.png";
import TicTacToe from "/public/picturesofprojects/TicTacToe.png";
import FreelanceBG from "/public/picturesofprojects/bg.jpg";

export default function Projects() {
  return (
    <section id="projects" className="bg-black min-h-screen  py-20">

      {/* Heading */}
      <div className="text-center mb-16 relative pt-10">
        <h1 className="text-7xl font-extrabold text-white/15 absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none">
          Projects
        </h1>
        <h2 className="text-4xl font-extrabold text-white relative z-10">
          Projects
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-gray-500 text-lg">
          A collection of projects that demonstrate my skills, creativity, and ability to build impactful solutions.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3">

        {/* 1️⃣ PG Website */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl border border-zinc-700 transition duration-300">
          <img src={PGWebsite} alt="PG Website" className="w-full h-48 sm:h-60 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">Website for PG</h3>
            <p className="text-gray-400 text-sm mb-4">
              A modern, responsive PG accommodation platform.
            </p>
            <a
              href="https://github.com/Faizurrr/APNA_PG"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Click Here for Review
            </a>
          </div>
        </div>

        {/* 2️⃣ News App */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl border border-zinc-700 transition duration-300">
          <img src={NewsApp} alt="News App" className="w-full h-48 sm:h-60 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">Snap Headlines</h3>
            <p className="text-gray-400 text-sm mb-4">
              Real-time news application using APIs.
            </p>
            <a
              href="https://github.com/Faizurrr/newsapp-react-Based"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Click Here for Review
            </a>
          </div>
        </div>

        {/* 3️⃣ Weather App */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl border border-zinc-700 transition duration-300">
          <img src={WeatherApp} alt="Weather App" className="w-full h-48 sm:h-60 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">Weather App</h3>
            <p className="text-gray-400 text-sm mb-4">
              Real-time weather updates for any city.
            </p>
            <a
              href="https://github.com/Faizurrr/WetherAPP-reactbased-"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Click Here for Review
            </a>
          </div>
        </div>

        {/* 4️⃣ Amazon Clone */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl border border-zinc-700 transition duration-300">
          <img src={AmazonClone} alt="Amazon Clone" className="w-full h-48 sm:h-60 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">Amazon Clone</h3>
            <p className="text-gray-400 text-sm mb-4">
              Amazon homepage clone using HTML & CSS.
            </p>
            <a
              href="https://github.com/Faizurrr/Amazon-Clone"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Click Here for Review
            </a>
          </div>
        </div>

        {/* 5️⃣ Text App */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl border border-zinc-700 transition duration-300">
          <img src={TextApp} alt="Text App" className="w-full h-48 sm:h-60 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">Text App</h3>
            <p className="text-gray-400 text-sm mb-4">
              Text manipulation tool built with React.
            </p>
            <a
              href="https://github.com/Faizurrr/text_app-reactbased"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Click Here for Review
            </a>
          </div>
        </div>

        {/* 6️⃣ Tic Tac Toe */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl border border-zinc-700 transition duration-300">
          <img src={TicTacToe} alt="Tic Tac Toe" className="w-full h-48 sm:h-60 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">Tic Tac Toe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Interactive Tic Tac Toe game using HTML, CSS & JS.
            </p>
            <a
              href="https://github.com/Faizurrr/TicTocToe"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Click Here for Review
            </a>
          </div>
        </div>

      </div>

      {/* Freelancing Section - RESTORED EXACT STYLE */}
      <section className="relative w-screen h-96 mt-20">
        <img src={FreelanceBG} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 ">
          <h1 className="text-4x1 sm:text-6xl font-extrabold">
            I'm <span className="text-yellow-400">Available</span> for freelancing
          </h1>
          <p className="mt-4 max-w-2xl text-gray-300 text-lg">
            Open to new opportunities and excited to bring my expertise to your projects.
          </p>
          <a
            href="#contact"
            className="mt-8 px-10 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
          >
            HIRE ME
          </a>
        </div>
      </section>

    </section>
  );
}