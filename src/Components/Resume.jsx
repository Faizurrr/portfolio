export default function Resume() {
  return (
    <section id="resume">
      <div className="bg-black min-h-screen pt-20">

        {/* Heading */}
        <div className="relative flex items-center justify-center">
          <h1 className="absolute text-8xl font-extrabold text-white/15">
            Resume
          </h1>
          <h1 className="relative text-6xl font-extrabold text-white">
            Resume
          </h1>
        </div>

        {/* Intro */}
        <p className="max-w-3xl mx-auto text-center text-gray-500 text-lg leading-relaxed py-7">
          Motivated Bachelor's student skilled in Python, C, C++, and JavaScript,
          with experience in web and application development, DSA, and
          problem-solving. Passionate about learning system design, APIs,
          databases, Machine Learning, and DevOps.
        </p>

        {/* ===== CARDS GRID (IMPORTANT PART) ===== */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] rounded-2xl p-8 shadow-xl">
              <h2 className="text-yellow-400 text-2xl font-bold mb-3">
                2020-2022
              </h2>
              <h3 className="text-white text-3xl font-semibold mb-2">
                Secondary Education
              </h3>
              <p className="uppercase tracking-widest text-sm text-gray-500 mb-5">
                Gandhi Adarash  Vidyalaya Inter Collage(U.P Board)
              </p>
              <p className="text-gray-400 leading-relaxed">
                I completed my secondary education with a strong foundation in
                Mathematics and Science, achieving excellent academic results.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] rounded-2xl p-8 shadow-xl">
              <h2 className="text-yellow-400 text-2xl font-bold mb-3">
                2022 – 2024
              </h2>
              <h3 className="text-white text-3xl font-semibold mb-2">
                Senior Secondary Education
              </h3>
              <p className="uppercase tracking-widest text-sm text-gray-500 mb-5">
               Gandhi Adarash  Vidyalaya Inter Collage(U.P Board)
              </p>
              <p className="text-gray-400 leading-relaxed">
                Completed senior secondary education in Science with a focus on
                Physics, Chemistry, and Mathematics.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] rounded-2xl p-8 shadow-xl">
              <h2 className="text-yellow-400 text-2xl font-bold mb-3">
                2024-2028
              </h2>
              <h3 className="text-white text-3xl font-semibold mb-2">
                   B.Tech(Electrical & Computer Engineering)
              </h3>
              <p className="uppercase tracking-widest text-sm text-gray-500 mb-5">
                 Jamia Millia Islamia (New Delhi).
              </p>
              <p className="text-gray-400 leading-relaxed">
                       I am currently pursuing a Bachelor of Technology (B.Tech) with a strong interest in software development and problem-solving. I am continuously learning new
                        technologies and improving my coding
                         skills to build efficient and scalable applications.  
              </p>
            </div>

         
            
           


          </div>
               <div className="mt-10 flex justify-center items-center">
  <a href = "\Resumepdf\FaizurRahman_Resume_White.pdf (2).pdf"className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center">
    DOWNLOAD RESUME
  </a>
    </div>
        </div>
            
      </div>
    </section>
  );
}
