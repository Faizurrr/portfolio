import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const navigation = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "RESUME", href: "#resume" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <Disclosure as="nav" className="bg-black sticky top-0 z-50 shadow-lg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex h-16 items-center justify-between">

              {/* LOGO */}
              <div className="flex items-center gap-3">
               
                <h1 className="text-xl font-extrabold tracking-widest text-white">
                  Portfolio
                </h1>
              </div>

              {/* DESKTOP NAV */}
              <div className="hidden md:flex space-x-8">
                {navigation.map((item) => {
                  const isActive = activeSection === item.href;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`text-sm tracking-widest transition-all duration-300
                        ${
                          isActive
                            ? "text-yellow-400 font-bold"
                            : "text-gray-400 font-medium hover:text-yellow-400"
                        }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>

              {/* MOBILE MENU BUTTON */}
              <div className="md:hidden">
                <Disclosure.Button className="text-gray-300 hover:text-white">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          <Disclosure.Panel className="md:hidden bg-black border-t border-gray-800">
            <div className="space-y-4 px-6 py-6">
              {navigation.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block tracking-widest transition-all
                      ${
                        isActive
                          ? "text-yellow-400 font-bold"
                          : "text-gray-400 hover:text-yellow-400"
                      }`}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
