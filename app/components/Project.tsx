'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaJava } from 'react-icons/fa';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiBootstrap,
  SiNodedotjs,
  SiGit,
  SiVercel,
  SiPostgresql,
  SiFirebase,
  SiTypescript
} from 'react-icons/si';

interface Project {
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  image: string;
  technologies: JSX.Element[];
  link?: string;
  githubLink?: string;
}

interface ProjectSectionProps {
  darkMode: boolean;
  language: 'pt' | 'en';
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ darkMode, language }) => {
  const currentLanguage = language ?? 'pt';

  const projects: Project[] = [
    {
      title: { pt: 'Sumário Digital – Virtualização do Livro de Turma', en: 'Digital Attendance – Virtual Class Register' },
      description: {
        pt: `Sistema web que digitaliza o livro de turma físico, permitindo registo de presenças, assinaturas digitais e geração de relatórios automáticos. Desenvolvido para resolver problemas de perda de registros e dificuldade de geração de relatórios confiáveis.`,
        en: `Web system that digitizes the physical class register, allowing attendance recording, digital signatures and automatic report generation. Developed to solve problems of lost records and difficulty in generating reliable reports.`,
      },
      image: 'sumario-digital.png',
      technologies: [
        <SiJavascript key="javascript" className="text-yellow-400" title="JavaScript" />,
        <SiHtml5 key="html5" className="text-orange-500" title="HTML5" />,
        <SiCss3 key="css3" className="text-blue-500" title="CSS3" />,
        <SiBootstrap key="bootstrap" className="text-purple-500" title="Bootstrap" />,
        <SiFirebase key="firebase" className="text-yellow-500" title="Firebase" />
      ],
      githubLink: '#',
    },
    {
      title: { pt: 'Sistema de Votação Eletrónica', en: 'Electronic Voting System' },
      description: {
        pt: `Sistema robusto e seguro desenvolvido com Django que garante integridade, privacidade e acessibilidade do processo eleitoral. Ideal para gerir votações de forma eficiente e transparente.`,
        en: `Robust and secure system developed with Django ensuring election integrity, privacy and accessibility. Ideal for managing votes efficiently and transparently.`,
      },
      image: 'secure-vote.png',
      technologies: [
        <SiPython key="python" className="text-blue-500" title="Python" />,
        <SiDjango key="django" className="text-green-700" title="Django" />,
        <SiBootstrap key="bootstrap" className="text-purple-500" title="Bootstrap" />,
        <SiPostgresql key="postgresql" className="text-blue-300" title="PostgreSQL" />
      ],
      githubLink: '#',
    },
    {
      title: { pt: 'MozDevz Inhambane', en: 'MozDevz Inhambane' },
      description: {
        pt: `Website da comunidade de desenvolvedores da UMUM em Inhambane. Mostra atividades, eventos e membros da comunidade. Desenvolvido como contribuição voluntária.`,
        en: `Website for the developer community at UMUM in Inhambane. Displays activities, events and community members. Developed as a voluntary contribution.`,
      },
      image: 'mozdevz-inhambane.png',
      technologies: [
        <SiHtml5 key="html5" className="text-orange-500" title="HTML5" />,
        <SiCss3 key="css3" className="text-blue-500" title="CSS3" />,
        <SiJavascript key="javascript" className="text-yellow-400" title="JavaScript" />,
        <SiBootstrap key="bootstrap" className="text-purple-500" title="Bootstrap" />
      ],
      link: 'https://aquiliviomaria.github.io/MozDev_Inhambane/',
      githubLink: '#',
    },
    {
      title: { pt: 'RandTeam: Sorteio de Temas', en: 'RandTeam: Topic Picker' },
      description: {
        pt: `Ferramenta intuitiva para sorteio de temas entre grupos. Facilita distribuição justa de temas para trabalhos em equipe ou apresentações.`,
        en: `Intuitive tool for random topic assignments among groups. Facilitates fair distribution of topics for teamwork or presentations.`,
      },
      image: 'randteam.png',
      technologies: [
        <SiReact key="react" className="text-cyan-400" title="React" />, 
        <SiTailwindcss key="tailwind" className="text-blue-400" title="Tailwind CSS" />, 
        <SiVercel key="vercel" className="text-gray-600 dark:text-gray-300" title="Vercel" />
      ],
      link: 'https://randteam.vercel.app',
      githubLink: 'https://github.com/aquiliviomaria/randteam',
    },
    {
      title: { pt: 'Txopela Tour', en: 'Txopela Tour' },
      description: {
        pt: `Plataforma que recomenda pontos turísticos em Moçambique usando algoritmo baseado em avaliações de visitantes autenticados.`,
        en: `Platform that recommends tourist spots in Mozambique using an algorithm based on authenticated visitor ratings.`,
      },
      image: 'txopela-tour.png',
      technologies: [
        <SiPython key="python" className="text-blue-500" title="Python" />, 
        <SiDjango key="django" className="text-green-700" title="Django" />, 
        <SiBootstrap key="bootstrap" className="text-purple-500" title="Bootstrap" />
      ],
      githubLink: 'https://github.com/aquiliviomaria/txopela-tour',
    },
    {
      title: { pt: 'Minhas Tarefas App', en: 'My Tasks App' },
      description: {
        pt: `Aplicativo simples de lista de tarefas com opção de modo claro/escuro e armazenamento local no navegador.`,
        en: `Simple to-do list app with light/dark mode option and browser local storage.`,
      },
      image: 'minhas-tarefas.png',
      technologies: [
        <SiJavascript key="javascript" className="text-yellow-400" title="JavaScript" />, 
        <SiHtml5 key="html5" className="text-orange-500" title="HTML5" />, 
        <SiCss3 key="css3" className="text-blue-500" title="CSS3" />
      ],
    },
    {
      title: { pt: 'KHOTSA', en: 'KHOSTA' },
      description: {
        pt: `Sistema web para gestão de estabelecimentos prisionais com foco em ambientes offline.`,
        en: `Web system for prison facility management with focus on offline environments.`,
      },
      image: 'khotsa.png',
      technologies: [
        <SiJavascript key="javascript" className="text-yellow-400" title="JavaScript" />, 
        <SiHtml5 key="html5" className="text-orange-500" title="HTML5" />, 
        <SiCss3 key="css3" className="text-blue-500" title="CSS3" />, 
        <SiTailwindcss key="tailwind" className="text-blue-400" title="Tailwind CSS" />
      ],
      link: 'https://khosta.netfly.app',
      githubLink: 'https://github.com/aquiliviomaria/khotsa',
    },
    {
      title: { pt: 'Portfólio Pessoal', en: 'Personal Portfolio' },
      description: {
        pt: `Website pessoal mostrando meus projetos, habilidades e experiência. Desenvolvido com Next.js e Tailwind CSS.`,
        en: `Personal website showcasing my projects, skills and experience. Built with Next.js and Tailwind CSS.`,
      },
      image: 'portfolio.png',
      technologies: [
        <SiNextdotjs key="nextjs" className="text-black dark:text-white" title="Next.js" />,
        <SiReact key="react" className="text-cyan-400" title="React" />,
        <SiTailwindcss key="tailwind" className="text-blue-400" title="Tailwind CSS" />,
        <SiTypescript key="typescript" className="text-blue-600" title="TypeScript" />
      ],
      link: '#',
      githubLink: '#',
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="project"
      className={`min-h-screen py-12 px-4 sm:px-6 ${
        darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className={`text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 ${
            darkMode ? 'text-teal-400' : 'text-blue-600'
          }`}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          {currentLanguage === 'pt' ? 'Meus Projetos' : 'My Projects'}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`rounded-xl overflow-hidden shadow-lg border ${
                darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-48 sm:h-56 overflow-hidden">
                <img
                  src={`/images/${project.image}`}
                  alt={project.title[currentLanguage]}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-5 sm:p-6">
                <h3 className={`text-xl sm:text-2xl font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title[currentLanguage]}
                </h3>
                
                <p className={`text-sm sm:text-base mb-4 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {project.description[currentLanguage]}
                </p>

                <div className="mb-4">
                  <h4 className={`text-sm sm:text-base font-medium mb-2 ${
                    darkMode ? 'text-teal-300' : 'text-blue-700'
                  }`}>
                    {currentLanguage === 'pt' ? 'Tecnologias:' : 'Technologies:'}
                  </h4>
                  <div className="flex flex-wrap gap-3 text-2xl sm:text-3xl">
                    {project.technologies.map((techIcon, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="cursor-default"
                      >
                        {techIcon}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-xs sm:text-sm font-medium ${
                        darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </motion.a>
                  )}
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-xs sm:text-sm font-medium ${
                        darkMode ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      <span>{currentLanguage === 'pt' ? 'Ver Site' : 'Live Site'}</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;