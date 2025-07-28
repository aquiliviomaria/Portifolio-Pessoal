'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiDjango, SiSpring, SiGit, SiGithub, SiIntellijidea,
  SiPhp, SiMysql, SiPostgresql, SiSqlite, SiFirebase, SiWordpress,
  SiVercel, SiNetlify, SiGooglecloud, SiOracle, SiDocker
} from 'react-icons/si';
import { FaCode, FaNetworkWired, FaTerminal, FaLinux, FaServer, FaDatabase, FaJava, FaDesktop } from 'react-icons/fa';
import { DiVisualstudio } from 'react-icons/di';
import { TbBoxMultiple } from 'react-icons/tb';
import { AiOutlineCode } from 'react-icons/ai';

interface AboutSectionProps {
  darkMode: boolean;
  language: 'pt' | 'en';
}

const AboutSection: React.FC<AboutSectionProps> = ({ darkMode, language }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const content = {
    pt: {
      title: 'Sobre Mim',
      description1:
        'Ainda no **início da minha jornada profissional**, trago uma base sólida e uma paixão crescente pelo universo da tecnologia. Dediquei três anos ao estudo de **Administração de Sistemas e Redes no Instituto Foco**, onde mergulhei na gestão de infraestruturas de TI, configuração de redes e fundamentos essenciais de segurança informática. Atualmente, estou no **terceiro ano de Engenharia Informática e Tecnologia na UMUM**, onde aprofundo meus conhecimentos em **desenvolvimento de software e redes de computadores**, preparando-me para os desafios mais complexos da área.',
      description2:
        'Minha trajetória já inclui a participação ativa em **workshops e bootcamps**, complementada por **certificações em programação e cibersegurança**. Possuo experiência prática com linguagens como **C++, Java, Python e JavaScript**, com foco especial no **desenvolvimento full-stack para web**. Além do código, minha curiosidade me leva à **engenharia de redes e segurança cibernética**, áreas que me fascinam e nas quais busco constante aprimoramento.',
      description3:
        'Meu objetivo agora é **crescer profissionalmente**, aplicar e expandir minhas habilidades em projetos desafiadores e **contribuir para inovações** que façam a diferença.',
      technologiesTitle: 'Minhas Habilidades & Ferramentas',
    },
    en: {
      title: 'About Me',
      description1:
        'Still at the **beginning of my professional journey**, I bring a solid foundation and a growing passion for the world of technology. I dedicated three years to studying **Systems and Network Administration at Instituto Foco**, where I delved into IT infrastructure management, network configuration, and essential cybersecurity fundamentals. Currently, I am in my **third year of Computer Engineering and Technology at UMUM**, deepening my knowledge in **software development and computer networks**, preparing myself for the most complex challenges in the field.',
      description2:
        'My path already includes active participation in **workshops and bootcamps**, complemented by **certifications in programming and cybersecurity**. I have hands-on experience with languages such as **C++, Java, Python, and JavaScript**, with a special focus on **full-stack web development**. Beyond coding, my curiosity leads me to **network engineering and cybersecurity**, areas that fascinate me and in which I constantly seek to improve.',
      description3:
        'My goal now is to **grow professionally**, apply and expand my skills in challenging projects, and **contribute to innovations** that make a difference.',
      technologiesTitle: 'My Skills & Tools',
    },
  };

  const currentLanguage = language ?? 'pt';

  const technologiesData = [
    {
      category: { pt: 'Linguagens de Programação', en: 'Programming Languages' },
      items: [
        { name: 'Python', icon: <SiPython className="text-blue-500" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
        { name: 'Java', icon: <FaJava className="text-red-500" /> },
        { name: 'C++', icon: <FaCode className="text-blue-600" /> },
        { name: 'PHP', icon: <SiPhp className="text-purple-600" /> },
      ],
    },
    {
      category: { pt: 'Frameworks & Bibliotecas Web', en: 'Web Frameworks & Libraries' },
      items: [
        { name: 'React', icon: <SiReact className="text-cyan-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: 'Django', icon: <SiDjango className="text-green-700" /> },
        { name: 'Spring Boot', icon: <SiSpring className="text-green-500" /> },
      ],
    },
    {
      category: { pt: 'Bancos de Dados & ORMs', en: 'Databases & ORMs' },
      items: [
        { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
        { name: 'SQLite', icon: <SiSqlite className="text-blue-400" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
        { name: 'Workbench', icon: <FaDatabase className="text-orange-500" /> },
      ],
    },
    {
      category: { pt: 'Desenvolvimento Desktop (UI)', en: 'Desktop UI Development' },
      items: [
        { name: 'PySide', icon: <FaDesktop className="text-blue-500" /> },
        { name: 'JavaFX', icon: <FaJava className="text-red-500" /> },
        { name: 'Tkinter', icon: <SiPython className="text-blue-500" /> },
      ],
    },
    {
      category: { pt: 'Controle de Versão & Colaboração', en: 'Version Control & Collaboration' },
      items: [
        { name: 'Git', icon: <SiGit className="text-orange-600" /> },
        { name: 'GitHub', icon: <SiGithub className="text-black dark:text-white" /> },
      ],
    },
    {
      category: { pt: 'IDEs & Editores de Código', en: 'IDEs & Code Editors' },
      items: [
        { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="text-red-600" /> },
        { name: 'VS Code', icon: <DiVisualstudio className="text-blue-500" /> },
        { name: 'Code::Blocks', icon: <FaCode className="text-indigo-600" /> },
        { name: 'NetBeans', icon: <FaJava className="text-blue-500" /> },
        { name: 'Dev-C++', icon: <FaCode className="text-purple-600" /> },
      ],
    },
    {
      category: { pt: 'Cloud & Implantação', en: 'Cloud & Deployment' },
      items: [
        { name: 'Vercel', icon: <SiVercel className="text-black dark:text-white" /> },
        { name: 'Netlify', icon: <SiNetlify className="text-teal-500" /> },
        { name: 'Google Cloud', icon: <SiGooglecloud className="text-blue-600" /> },
        { name: 'Oracle Cloud', icon: <SiOracle className="text-red-600" /> },
        { name: 'Docker', icon: <SiDocker className="text-blue-700" /> },
      ],
    },
    {
      category: { pt: 'Sistemas Operacionais & Ambiente', en: 'Operating Systems & Environment' },
      items: [
        { name: 'Kali Linux', icon: <FaLinux className="text-purple-700" /> },
        { name: 'Fedora', icon: <FaLinux className="text-blue-600" /> },
        { name: 'Ubuntu', icon: <FaLinux className="text-orange-500" /> },
        { name: 'Ubuntu Server', icon: <FaServer className="text-orange-500" /> },
        { name: 'Terminal', icon: <FaTerminal className="text-gray-600 dark:text-gray-400" /> },
      ],
    },
    {
      category: { pt: 'Virtualização & Redes', en: 'Virtualization & Networking' },
      items: [
        { name: 'VirtualBox', icon: <TbBoxMultiple className="text-blue-700" /> },
        { name: 'VMware', icon: <TbBoxMultiple className="text-gray-600" /> },
        { name: 'EVE-NG', icon: <FaNetworkWired className="text-green-500" /> },
        { name: 'Cisco Packet Tracer', icon: <AiOutlineCode className="text-blue-800" /> },
      ],
    },
    {
      category: { pt: 'Outras Ferramentas', en: 'Other Tools' },
      items: [
        { name: 'XAMPP', icon: <FaServer className="text-orange-500" /> },
        { name: 'WordPress', icon: <SiWordpress className="text-blue-700" /> },
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const techCardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  const techItemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <section
      id="about"
      className={`min-h-screen py-12 px-4 sm:px-6 ${
        darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'
      } flex items-center justify-center`}
    >
      <motion.div
        className="max-w-4xl mx-auto w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Main Title */}
        <motion.h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 ${
            darkMode ? 'text-teal-400' : 'text-blue-600'
          }`}
          variants={titleVariants}
        >
          {content[currentLanguage].title}
        </motion.h2>

        {/* Description Text */}
        <div className="space-y-6 mb-12">
          <motion.p
            className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            variants={textVariants}
            dangerouslySetInnerHTML={{ __html: content[currentLanguage].description1.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
          />
          
          <motion.p
            className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            variants={textVariants}
            transition={{ delay: 0.1 }}
            dangerouslySetInnerHTML={{ __html: content[currentLanguage].description2.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
          />
          
          <motion.p
            className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            variants={textVariants}
            transition={{ delay: 0.2 }}
            dangerouslySetInnerHTML={{ __html: content[currentLanguage].description3.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
          />
        </div>

        {/* Technologies Title */}
        <motion.h3
          className={`text-2xl sm:text-3xl font-bold text-center mb-8 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
          variants={titleVariants}
          transition={{ delay: 0.3 }}
        >
          {content[currentLanguage].technologiesTitle}
        </motion.h3>

        {/* Technologies Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
        >
          {technologiesData.map((techCategory, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={techCardVariants}
              whileHover="hover"
              className={`rounded-lg p-4 sm:p-5 shadow-md border ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}
              transition={{ delay: categoryIndex * 0.05 + 0.3 }}
            >
              <h4 className={`text-lg sm:text-xl font-semibold mb-3 ${
                darkMode ? 'text-teal-300' : 'text-blue-700'
              }`}>
                {techCategory.category[currentLanguage]}
              </h4>
              
              <div className="grid grid-cols-2 gap-3">
                {techCategory.items.map((tech, itemIndex) => (
                  <motion.div
                    key={tech.name}
                    variants={techItemVariants}
                    whileHover="hover"
                    className={`flex items-center space-x-2 text-sm sm:text-base ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                    transition={{ delay: itemIndex * 0.03 + categoryIndex * 0.02 }}
                  >
                    <span className="text-xl sm:text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;