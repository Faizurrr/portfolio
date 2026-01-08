export default function Home() {
  return (
    <section id="home">
      <div className="min-h-screen bg-black flex flex-col md:flex-row items-center px-4 md:px-16">

        {/* IMAGE CONTAINER — RIGHT SIDE ON DESKTOP */}
        <div className="relative flex-1 w-full flex justify-center md:order-2">
          
          {/* IMAGE */}
          <img
            src="/1.png"
            alt="Profile"
            className="w-full max-w-[420px] mask-fade"
          />

          {/* TEXT OVER IMAGE — MOBILE ONLY */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/60 px-6 md:hidden">
            <p className="text-yellow-400 tracking-widest mb-2 font-semibold">
              HELLO!
            </p>

            <h1 className="text-3xl font-extrabold leading-tight text-center">
              I'm <span className="text-yellow-400">Faizurrahman</span>
            </h1>

            <p className="text-gray-300 mt-4 text-lg">
              A Web Developer
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="#contact"
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold"
              >
                HIRE ME
              </a>

              <a
                href="#projects"
                className="border border-gray-300 px-6 py-2 rounded-full"
              >
                MY WORKS
              </a>
            </div>
          </div>
        </div>

        {/* TEXT CONTENT — LEFT SIDE ON DESKTOP */}
        <div className="hidden md:block text-white max-w-3xl flex-1 md:order-1">
          <p className="text-yellow-400 tracking-widest mb-4 font-semibold">
            HELLO!
          </p>

          <h1 className="text-6xl font-extrabold leading-tight">
            I'm <span className="text-yellow-400">Faizurrahman</span>
          </h1>

          <p className="text-2xl text-gray-300 mt-6">
            A Web Developer
          </p>

          <div className="flex gap-6 mt-10">
            <a
              href="#contact"
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              HIRE ME
            </a>

            <a
              href="#projects"
              className="border border-gray-400 text-white px-8 py-3 rounded-full hover:border-white transition"
            >
              MY WORKS
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
