'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineBook,
  AiOutlineCalendar,
  AiOutlineMail,
} from 'react-icons/ai';
import { BsFillSunFill, BsFillMoonFill, BsStars } from 'react-icons/bs';
import {
  FaNetworkWired,
  FaShieldAlt,
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaCodeBranch,
  FaTerminal,
} from 'react-icons/fa';
import {
  SiPython,
  SiLinux,
  SiDocker,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGit,
} from 'react-icons/si';
import { TbBinary, TbServer } from 'react-icons/tb';


import AboutSection from './components/About'; 
import ProjectSection from './components/Project';
import ExperienceSection from './components/Experience';
import EventSection from './components/Event';
import CertificationSection from './components/Certification';
import ContactSection from './components/Contact';

const Page = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined')
      return localStorage.getItem('darkMode') === 'true';
    return true;
  });
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('pt');
  const [displayedText, setDisplayedText] = useState('');

  const fullName = '  Aquilívio Maria Cumbe '; 
  const textDelay = 75; 

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prev) => prev + fullName.charAt(i));
      i++;
      if (i === fullName.length) {
        clearInterval(typingInterval);
      }
    }, textDelay);

    return () => clearInterval(typingInterval);
  }, [language, fullName]);


  const toggleDarkMode = () => setDarkMode(!darkMode);

  const FloatingIcons = () => {
    const icons = [
      { icon: <FaNetworkWired />, color: 'text-blue-400' },
      { icon: <FaShieldAlt />, color: 'text-green-400' },
      { icon: <SiPython />, color: 'text-yellow-400' },
      { icon: <TbBinary />, color: 'text-purple-400' },
      { icon: <SiLinux />, color: 'text-blue-300' },
      { icon: <TbServer />, color: 'text-teal-400' },
      { icon: <SiDocker />, color: 'text-blue-500' },
      { icon: <SiJavascript />, color: 'text-yellow-300' },
      { icon: <SiReact />, color: 'text-cyan-400' },
      { icon: <SiNodedotjs />, color: 'text-green-500' },
      { icon: <SiGit />, color: 'text-orange-500' },
      { icon: <FaCodeBranch />, color: 'text-pink-400' },
      { icon: <FaTerminal />, color: 'text-lime-400' },
    ];

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0.3,
              scale: 0.8,
            }}
            animate={{
              x: [null, Math.random() * 100 - 50],
              y: [null, Math.random() * 100 - 50],
              rotate: [0, Math.random() * 180],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
            className={`absolute text-3xl ${item.color}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    );
  };

  const Header = () => {
    const sectionNames = {
      home: { pt: 'Home', en: 'Home' },
      about: { pt: 'Sobre', en: 'About' },
      project: { pt: 'Projetos', en: 'Projects' },
      experience: { pt: 'Experiência', en: 'Experience' },
      event: { pt: 'Eventos', en: 'Events' },
      certification: { pt: 'Certificados', en: 'Certifications' },
      contact: { pt: 'Contato', en: 'Contact' },
    };

    const icons = {
      home: <AiOutlineHome />,
      about: <AiOutlineUser />,
      project: <AiOutlineProject />,
      experience: <AiOutlineBook />,
      event: <AiOutlineCalendar />,
      certification: <AiOutlineBook />,
      contact: <AiOutlineMail />,
    };

    return (
      <header className="fixed w-full z-50 p-4 bg-transparent">
        <div className="max-w-7xl mx-auto flex justify-between items-center border border-gray-300 dark:border-gray-700 rounded-full px-2 py-1 md:px-4 md:py-2 backdrop-filter backdrop-blur-lg bg-opacity-30 dark:bg-opacity-30 bg-white dark:bg-gray-800 shadow-lg">
          <div className="flex-1 flex justify-center">
            <nav className="flex space-x-1 sm:space-x-2 md:space-x-4">
              {Object.keys(sectionNames).map((section) => (
                <motion.button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative flex items-center p-1 md:p-3 rounded-lg transition-all group ${
                    activeSection === section
                      ? darkMode
                        ? 'text-teal-400'
                        : 'text-blue-600'
                      : darkMode
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span
                    className={`text-xl md:text-2xl ${
                      activeSection === section
                        ? 'animate-pulse'
                        : 'group-hover:animate-bounce'
                    }`}
                  >
                    {icons[section as keyof typeof icons]}
                  </span>
                  <span className="hidden md:inline ml-2">
                    {sectionNames[section as keyof typeof sectionNames][language]}
                  </span>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-gray-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 group-active:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                    {sectionNames[section as keyof typeof sectionNames][language]}
                  </span>
                </motion.button>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-1 md:space-x-3">
            <motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-1 text-xl ${
                darkMode ? 'text-yellow-400' : 'text-gray-700'
              }`}
            >
              {darkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
            </motion.button>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className={`p-0.5 rounded-full bg-transparent border text-xs md:text-base ${
                darkMode
                  ? 'text-white border-gray-600'
                  : 'text-gray-700 border-gray-300'
              }`}
            >
              <option value="pt">PT</option>
              <option value="en">EN</option>
            </select>
          </div>
        </div>
      </header>
    );
  };

  const HomeSection = () => {
    const content = {
      pt: {
        welcome: '👋 Olá, eu sou',
        description:
          'Meu trabalho é criar soluções que não só funcionam, mas que também encantam e inspiram.',
        skills: 'Habilidades:',
        roles: ['Desenvolvedor', 'Pentester', 'Gestor de Redes', 'Freelancer'],
        cta: 'Explorar Projetos',
      },
      en: {
        welcome: '👋 Hello, I am',
        description:
          'My work is about crafting solutions that not only function, but also delight and inspire.',
        skills: 'Skills:',
        roles: ['Developer', 'Pentester', 'Network Manager', 'Freelancer'],
        cta: 'Explore Projects',
      },
    };

    const roles = content[language].roles;
    const roleShadows = [
      'shadow-[0_0_20px_rgba(59,130,246,0.6)]',
      'shadow-[0_0_20px_rgba(239,68,68,0.6)]',
      'shadow-[0_0_20px_rgba(16,185,129,0.6)]',
      'shadow-[0_0_20px_rgba(168,85,247,0.6)]',
    ];

    return (
      <section
        className={`relative min-h-screen flex items-center justify-center`}
      >
        <FloatingIcons />

        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-center relative z-10">
          {/* Photo for mobile - visible on small screens, top-aligned */}
          <motion.div
            className="w-48 h-48 md:hidden rounded-full overflow-hidden mb-8 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,255,255,0.7)' }}
          >
            <img
              src="/images/aquilivio-photo.jpg"
              alt="Aquilívio Maria Cumbe"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="text-center md:text-left max-w-2xl md:mr-12">
            <h1
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {content[language].welcome}
            </h1>

            <h2
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 ${
                darkMode ? 'text-teal-400' : 'text-blue-600'
              }`}
            >
              {displayedText}
              <motion.span
                className="inline-block"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
              >
                |
              </motion.span>
            </h2>

            <p
              className={`text-lg md:text-xl mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {content[language].description}
            </p>

            <h3
              className={`text-2xl font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              {content[language].skills}
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
              {roles.map((role, index) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className={`px-5 py-2 rounded-lg font-medium ${
                    darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                  } ${roleShadows[index]} transition-shadow duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(0,255,255,0.8)]`}
                >
                  {role}
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#project"
              onClick={() => setActiveSection('project')}
              className={`inline-flex items-center px-6 py-3 rounded-lg text-lg font-semibold ${
                darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-blue-600 hover:bg-blue-700'
              } text-white`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content[language].cta}
              <BsStars className="ml-2" />
            </motion.a>
          </div>

          {/* Photo for desktop - visible on larger screens, aligned to the right */}
          <motion.div
            className="hidden md:block w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,255,255,0.7)' }}
          >
            <img
              src="/aquilivio-photo.jpg"
              alt="Aquilívio Maria Cumbe"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
    );
  };


  const Footer = () => {
    return (
      <footer className="py-6 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center border-t border-gray-300 dark:border-gray-700 pt-4">
          <div className={`mb-4 md:mb-0 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p>&copy; {new Date().getFullYear()} Aquilívio Maria Cumbe</p>
          </div>
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://wa.me/258840000000"
              className={
                darkMode
                  ? 'text-gray-400 hover:text-teal-400'
                  : 'text-gray-600 hover:text-blue-600'
              }
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://linkedin.com/in/aquilivio"
              className={
                darkMode
                  ? 'text-gray-400 hover:text-teal-400'
                  : 'text-gray-600 hover:text-blue-600'
              }
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/aquilivio"
              className={
                darkMode
                  ? 'text-gray-400 hover:text-teal-400'
                  : 'text-gray-600 hover:text-blue-600'
              }
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>
    );
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'
      } relative`}
    >{/* Render your AboutSection component here */}
      <Header />
      <div className="pt-20">
        {activeSection === 'home' && <HomeSection />}
        {activeSection === 'about' && <AboutSection darkMode={darkMode} language={language} />}
        {activeSection === 'project' && <ProjectSection darkMode={darkMode} language={language} />}
        {activeSection === 'experience' && <ExperienceSection darkMode={darkMode} language={language} />}
        {activeSection === 'event' && <EventSection darkMode={darkMode} language={language} />}
        {activeSection === 'certification' && <CertificationSection darkMode={darkMode} language={language} />}
        {activeSection === 'contact' && <ContactSection darkMode={darkMode} language={language} />}
      </div>
      <Footer />
    </div>
  );
};

export default Page;