import { 
  SiGithub, 
  SiLinkedin, 
  SiX, 
  SiGmail 
} from "react-icons/si";
import { MdPhone } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import bgImage from "/1.png"; // Correct import path

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_y37g1vm",
      "template_d1yfsrk",
      formRef.current,
      "ZCseuel9FIcVDBwfF"
    )
    .then(() => {
      setStatus("Message sent successfully!");
      formRef.current.reset();
    })
    .catch(() => {
      setStatus("Something went wrong. Try again!");
    });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 md:px-8 py-12 flex flex-col items-center">
        
        {/* Heading */}
        <div className="relative flex items-center justify-center">
          <h1 className="absolute text-8xl font-extrabold text-white/15 select-none pointer-events-none">
            Contact
          </h1>
          <h1 className="relative text-5xl md:text-6xl font-extrabold text-white">
            Contact
          </h1>
        </div>

        {/* Description */}
        <p className="max-w-3xl text-center text-gray-200 text-lg leading-relaxed py-7">
          Feel free to reach out to discuss potential collaborations, projects,
          or any inquiries you may have.
        </p>

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

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full max-w-xl mt-16 bg-white/95 backdrop-blur-md p-8 rounded-xl shadow-xl"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 p-3 rounded mb-4 focus:border-yellow-400 focus:ring focus:ring-yellow-200 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 p-3 rounded mb-4 focus:border-yellow-400 focus:ring focus:ring-yellow-200 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full border border-gray-300 p-3 rounded mb-6 focus:border-yellow-400 focus:ring focus:ring-yellow-200 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-300 transition"
          >
            Send Message
          </button>

          {status && <p className="text-center mt-4 text-green-500">{status}</p>}
        </form>
      </div>
    </section>
  );
}
