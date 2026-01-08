  import { 
  SiGithub, 
  SiLinkedin, 
  SiX, 
  SiGmail 
} from "react-icons/si";
import { MdPhone } from "react-icons/md";

export default function Footer() {
  return (
       
    <footer className="bg-black text-gray-300 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About Section */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">About</h2>
          <p className="text-gray-400 font-bold leading-relaxed">
              
I am an Electrical & Computer 
Science Bachelor's student and an accomplished programmer
 with a diverse skill set. In addition to my academic pursuits, I also engage in freelance work.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Links</h2>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
            <li><a href="#projects" className="hover:text-yellow-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-gray-400">
        
              
            <li>Web Development</li>
            <li>Full Stack Developer</li>
            <li>Data Analysis</li>
        
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Have a Questions?</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>📍 Jamia Nagar, Okhla, New Delhi, 110025</li>
            <li>📞 +91 8052914779</li>
            <li>✉️ faizurbtech@gmail.com</li>
          </ul>
        </div>

      </div>

      
         {/* Icons */}
                <div className="flex flex-wrap justify-center gap-8 mt-10 text-gray-300 text-3xl">
                  <a href="mailto:faizurbtech@gmail.com" className="hover:text-yellow-400 transition">
                    <SiGmail />
                  </a>
        
                  <a href="https://github.com/Faizurrr" target="_blank" className="hover:text-white transition">
                    <SiGithub />
                  </a>
        
                  <a href="https://www.linkedin.com/in/faizurrahman-868700326/" target="_blank" className="hover:text-blue-500 transition">
                    <SiLinkedin />
                  </a>
        
                  <a href="https://x.com/Faizurrr18" target="_blank" className="hover:text-sky-400 transition">
                    <SiX />
                  </a>
        
                  <a href="tel:+919876543210" className="hover:text-green-400 transition">
                    <MdPhone />
                  </a>
                 
                </div>
                   <p className="text-center text-gray-500 text-sm mt-10">
        &copy; {new Date().getFullYear()}  Faizurrahman. All rights reserved.
      </p>
    </footer>
  );
}
