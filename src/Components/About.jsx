export default function About() {
  return (
    <section id="about">
      <div className="bg-black min-h-screen flex flex-col md:flex-row items-center px-4 md:px-16">

        {/* IMAGE CONTAINER — HIDDEN ON SMALL SCREENS */}
        <div className="relative flex-1 w-full justify-center hidden md:flex">
          <img
            src="/1.png"
            alt="Profile"
            className="w-full max-w-[420px] mask-fade"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="flex-1 text-white flex flex-col items-center md:items-start text-center md:text-left">
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            About Me
          </h1>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            I am an Electrical & Computer Science Bachelor's student and an accomplished
            programmer with a diverse skill set. In addition to my academic
            pursuits, I also engage in freelance work.
          </p>

          <div className="space-y-4 text-base md:text-lg">
            <p><span className="font-semibold">Name:</span> Faizurrahman</p>
            <p><span className="font-semibold">Date of birth:</span> Jan 01, 2005</p>
            <p><span className="font-semibold">Address:</span> Jamia Nagar, Okhla, New Delhi</p>
            <p><span className="font-semibold">Zip code:</span> 110025</p>
            <p><span className="font-semibold">Email:</span> faizurbtech@gmail.com</p>
            <p><span className="font-semibold">Phone:</span> +91-8052914779</p>
          </div>

          {/* CENTER BUTTON ON MOBILE */}
          <div className="mt-10">
            <a href="\Resumepdf\FaizurRahman_Resume_White.pdf (2).pdf" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition">
              DOWNLOAD RESUME
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
