export default function Projects() {
  return (
    <section id="projects">
      <div className="min-h-screen bg-black">

        {/* Heading */}
        <div className="relative flex items-center justify-center pt-32">
          <h1 className="absolute text-7xl font-extrabold text-white/15">
            Projects
          </h1>
          <h1 className="relative text-4xl font-extrabold text-white">
            Projects
          </h1>
        </div>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-center text-gray-500 text-lg leading-relaxed py-7">
          A collection of projects that demonstrate my skills, creativity,
          and ability to build impactful solutions.
        </p>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto grid gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* 1️⃣ Website for PG */}
          <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300">
            <img src="/picturesofprojects/websiteforpg.png" alt="PG Website" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Website for PG</h3>
              <p className="text-gray-400 text-sm mb-4">
                A modern, responsive full-stack PG accommodation platform.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">React.js</span>
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">Tailwind.CSS</span>
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">Flask</span>
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">Postgres</span>
                <a
                  href="https://github.com/Faizurrr/APNA_PG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-yellow-400 text-black py-2 rounded-lg font-semibold mt-3 hover:bg-yellow-500 transition"
                >
                  Click Here for Review
                </a>
              </div>
            </div>
          </div>

          {/* 2️⃣ News App */}
          <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300">
            <img src="/picturesofprojects/websiteforNews.png" alt="News App" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Snap Headlines</h3>
              <p className="text-gray-400 text-sm mb-4">
                Real-time news application using APIs and React.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">React.js</span>
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">Bootstrap</span>
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">API</span>
                <a
                  href="https://github.com/Faizurrr/newsapp-react-Based"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-yellow-400 text-black py-2 rounded-lg font-semibold mt-3 hover:bg-yellow-500 transition"
                >
                  Click Here for Review
                </a>
              </div>
            </div>
          </div>

          {/* 3️⃣ Weather App */}
          <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300">
            <img src="/picturesofprojects/websiteforWeather.png" alt="Weather App" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Weather App</h3>
              <p className="text-gray-400 text-sm mb-4">
                Real-time weather updates for any city around the world.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">React.js</span>
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">Tailwind.CSS</span>
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">API</span>
                <a
                  href="https://github.com/Faizurrr/WetherAPP-reactbased-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-yellow-400 text-black py-2 rounded-lg font-semibold mt-3 hover:bg-yellow-500 transition"
                >
                  Click Here for Review
                </a>
              </div>
            </div>
          </div>

          {/* 4️⃣ Amazon Clone */}
          <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300">
            <img src="/picturesofprojects/Amazon'sclone.png" alt="Amazon Clone" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Amazon Clone</h3>
              <p className="text-gray-400 text-sm mb-4">
                Amazon homepage clone using HTML & CSS.
              </p>
              <div className="flex gap-2 mb-3">
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">HTML</span>
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">CSS</span>
              </div>
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
          <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300">
            <img src="/picturesofprojects/textapp.png" alt="Text App" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Text App</h3>
              <p className="text-gray-400 text-sm mb-4">
                Text manipulation tool built with React.
              </p>
              <div className="flex gap-2 mb-3">
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">React.js</span>
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">Bootstrap</span>
              </div>
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
          <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300">
            <img src="/picturesofprojects/Tic Tac Toe.png" alt="Tic Tac Toe" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Tic Tac Toe</h3>
              <p className="text-gray-400 text-sm mb-4">
                Interactive Tic Tac Toe game using HTML, CSS & JS.
              </p>
              <div className="flex gap-2 mb-3">
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">HTML</span>
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">CSS</span>
                <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">JS</span>
              </div>
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

        {/* Freelancing Section */}
        <section className="relative w-screen h-screen mt-20">
          {/* Background Image */}
          <img
            src="/picturesofprojects/bg.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-4/6 object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white pb-20">
            <h1 className="text-5xl md:text-5xl font-extrabold">
              I'm <span className="text-yellow-400">Available</span> for freelancing
            </h1>
            <p className="mt-4 max-w-2xl text-gray-300">
              Open to new opportunities and excited to bring my expertise to your projects.
              Let's work together to achieve your goals.
            </p>
            <a
              href="#contact"
              className="mt-8 px-10 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition"
            >
              HIRE ME
            </a>
          </div>
        </section>

      </div>
    </section>
  );
}
