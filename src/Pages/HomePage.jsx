import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
function HomePage() {
  const experiences = [
    {
      title: "Merdeka Sama",
      role: "Web Developer",
      year: "2023",
    },
    {
      title: "Freelancer",
      role: "Fullstack Developer",
      year: "2024",
    },
    {
      title: "Draftcoding.ID",
      role: "Frontend Developer",
      year: "2024",
    },
  ];

  return (
    <div className="relative bg-[#131313] text-white overflow-hidden">
      {/* Section Hero */}
      <section id="about" className="min-h-screen flex items-center justify-center relative px-4">
        <div
          className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-50 lg:h-60 bg-[#a5cfff] opacity-25 blur-3xl top-1 left-1/3"
          style={{ transform: "rotate(30deg)" }}
        />
        <div
          className="absolute w-40 h-60 sm:w-48 sm:h-64 md:w-64 md:h-72 lg:w-64 lg:h-120 bg-[#a5cfff] opacity-25 blur-3xl top-[-12%] left-[50%]"
          style={{ transform: "rotate(30deg)" }}
        />

        {/* Content */}
        <div className="text-center relative z-10">
          <p className="text-base md:text-lg lg:text-xl">Hello I'm</p>
          <h1 className="font-bold text-2xl md:text-4xl lg:text-4xl mb-5">
            Arwaa Althifal Suhermanja
          </h1>
          <p className="font-light text-sm md:text-base lg:text-lg max-w-xl mx-auto">
            Fresh graduate in Informatics Engineer with a strong enthusiasm for
            the tech industry. I possess a deep understanding of computer
            systems, networks, and web development.
          </p>
          <button className="mt-5 border px-4 py-1 md:px-4 md:py-1 lg:px-4 lg:py-1 rounded-xl hover:bg-slate-700 transition duration-300">
            <a className="text-sm md:text-md lg:text-base" href="#">
              Download CV
            </a>
          </button>
        </div>
      </section>

      {/* Section Kedua */}
      <section id="ed" className="sectiondua py-4 px-4 bg-[#151414]">
        <div className="flex items-center justify-center">
          <img
            src="/images/fotoweb.png"
            alt=""
            loading="lazy"
            className="w-32 md:w-32 lg:w-50 object-contain"
          />
          <div className="gap-0">
            <h2 className="text-lg md:text-3xl font-bold">Education</h2>
            <h1 className="text-md md:text-lg font-">Mercu Buana University</h1>
            <p className="max-w-md mx-auto text-sm md:text-base text-amber-50 font-light">
              Bachelor's Degree in Informatics Engineer
            </p>
            <p className="max-w-md mx-auto text-sm md:text-base text-amber-50 font-semibold">
              GPA: 3.68
            </p>
          </div>
        </div>
      </section>

      {/* Section Ketiga */}
      <section id="exp" className="sectiontiga min-h-screen justify-center relative px-4 py-20">
        <div className="text-center relative z-10">
          <h1 className="font-bold text-md md:text-xl lg:text-2xl">
            Work Project
          </h1>
          <div className="mx-auto w-32 h-[20px] bg-[#0daff4] opacity-40 blur-[20px] mb-10"></div>
        </div>
        <div className="grid items-center justify-center gap-10 px-4">
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
            <img
              src="/images/dwt.png"
              alt="Project 1"
              loading="lazy"
              className="w-100 object-contain mx-auto md:mx-0"
            />
            <div className="text-center md:text-left">
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl">
                Dewata Waterproofing Indonesia
              </h1>
              <p className="max-w-md text-sm md:text-base text-amber-50 font-light mb-3">
                Website Management Data Dewata Waterproofing Indonesia
              </p>
              <p className="max-w-md text-sm md:text-base text-amber-50 font-light">
                <i>
                  Tools: Laravel, Bootstrap, PHP, HTML, CSS, JavaScript, MySQL
                </i>
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
            <img
              src="/images/bl.png"
              alt="Project 2"
              loading="lazy"
              className="w-100 object-contain mx-auto md:mx-0"
            />
            <div className="text-center md:text-left">
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl">
                Sistem Informasi Akademik
              </h1>
              <p className="max-w-md text-sm md:text-base text-amber-50 font-light mb-3">
                Website Bimbingan Lomba UPNVJ CRUD.
              </p>
              <p className="max-w-md text-sm md:text-base text-amber-50 font-light">
                <i>
                  Tools: Laravel, Bootstrap, PHP, HTML, CSS, JavaScript, MySQL
                </i>
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
            <img
              src="/images/dlp.png"
              alt="Project 3"
              loading="lazy"
              className="w-100 object-contain mx-auto md:mx-0"
            />
            <div className="text-center md:text-left">
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl">
                Website Profile Pemerintahan Desa Dolopo
              </h1>
              <p className="max-w-md text-sm md:text-base text-amber-50 font-light mb-3">
                Company Profile responsive & dinamis menggunakan Laravel.
              </p>
              <p className="max-w-md text-sm md:text-base text-amber-50 font-light">
                <i>Tools: Laravel, Bootstrap, PHP, HTML/CSS, MySQL, Railway</i>
              </p>
              <button className="mt-5 border px-4 py-1 md:px-4 md:py-1 lg:px-4 lg:py-1 rounded-xl hover:bg-slate-700 transition duration-300">
                <a
                  className="text-sm md:text-md lg:text-base"
                  href="https://dolopo.desa.id"
                  target="_blank"
                >
                  View Site
                </a>
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
            <img
              src="/images/ms.png"
              alt="Project 3"
              loading="lazy"
              className="w-100 rounded-xl object-contain mx-auto md:mx-0"
            />
            <div className="text-center md:text-left">
              <h1 className="font-bold text-lg md:text-xl lg:text-2xl">
                Website Company Profile CV Merdeka Sama
              </h1>
              <p className="max-w-md text-sm md:text-base text-amber-50 font-light mb-3">
                Company Profile responsive & dinamis menggunakan React.
              </p>
              <p className="max-w-md text-sm md:text-base text-amber-50 font-light">
                <i>Tools: ReactJS, Bootstrap, HTML/CSS, MySQL, Vite, Vercel</i>
              </p>
              <button className="mt-5 border px-4 py-1 md:px-4 md:py-1 lg:px-4 lg:py-1 rounded-xl hover:bg-slate-700 transition duration-300">
                <a
                  className="text-sm md:text-md lg:text-base"
                  href="https://merdekasama-reactvite.vercel.app/"
                  target="_blank"
                >
                  View Site
                </a>
              </button>
            </div>
          </div>
          <div
            className="absolute w-40 h-120 sm:w-48 sm:h-64 md:w-64 md:h-72 lg:w-64 lg:h-180 bg-[#a5cfff] opacity-15 blur-3xl bot-1 right-[-10%]"
            style={{ transform: "rotate(10deg)" }}
          />
        </div>
      </section>

      {/* Section Kedua */}
      <section className="sectionempat justify-center relative px-4 py-20">
        <div className="text-center relative z-10">
          <h1 className="font-bold text-md md:text-xl lg:text-2xl">
            Work Experiences
          </h1>
          <div className="mx-auto w-32 h-[20px] bg-[#0daff4] opacity-40 blur-[20px] mb-5"></div>
        </div>

        <div className="text-white py-16">
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 w-full md:w-4/5 mx-auto">
            {/* Garis horizontal (desktop only) */}
            <div className="hidden md:block absolute top-[8%] w-full h-1 bg-gray-700 z-0" />

            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="z-10 flex flex-col items-center text-center w-full md:w-1/4"
              >
                {/* Titik timeline */}
                <div
                  className={`w-6 h-6 rounded-full border-4 ${
                    idx === 0
                      ? "bg-white border-white"
                      : "bg-gray-600 border-gray-600"
                  }`}
                ></div>

                {/* Detail */}
                <div className="mt-4 min-h-[100px] flex flex-col justify-between">
                  <h3 className="font-bold text-lg break-words max-w-[180px] mx-auto">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-400">{exp.role}</p>
                  <p className="mt-1 font-semibold">{exp.year}</p>
                </div>
              </div>
            ))}
            <div
              className="absolute w-40 h-120 sm:w-48 sm:h-64 md:w-64 md:h-72 lg:w-64 lg:h-72 bg-[#a5cfff] opacity-15 blur-3xl bot-1 left-[-25%]"
              style={{ transform: "rotate(10deg)" }}
            />
          </div>
        </div>
      </section>

      <section id="contact" className="sectionlima flex-row relative px-4 py-20 justify-center items-center">
        <div className="text-center relative z-10">
          <h1 className="font-light text-3xl md:text-xl lg:text-5xl mb-10">
            Get In <span className="font-bold">Touch.</span>
          </h1>
        </div>
        <div className="flex-row flex justify-center gap-5">
            <a href="" target="_blank"><FontAwesomeIcon icon={faInstagram} className="text-5xl text-white hover:text-slate-600" /></a>
            <a href="" target="_blank"><FontAwesomeIcon icon={faWhatsapp} className="text-5xl text-white hover:text-slate-600" /></a>
            <a href="" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="text-5xl text-white hover:text-slate-600" /></a>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
