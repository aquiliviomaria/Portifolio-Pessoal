'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
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
  SiGithubpages,
  SiFlutter,
  SiRaspberrypi,
  SiPostgresql,
  SiFigma,
  SiNodered,
  SiLinux,
} from 'react-icons/si';
import { GiFarmTractor } from 'react-icons/gi';
import { FaLink } from 'react-icons/fa6';
import { IoCloudOutline } from 'react-icons/io5';

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
  loading?: boolean;
  category: 'developed' | 'development';
}

interface ProjectSectionProps {
  darkMode: boolean;
  language: 'pt' | 'en';
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ darkMode, language }) => {
  const currentLanguage = language ?? 'pt';

  const projects: Project[] = [
    {
      title: { pt: 'RandTeam: Sorteio de Temas', en: 'RandTeam: Topic Picker' },
      description: {
        pt: `O RandTeam é uma ferramenta intuitiva e eficiente para realizar sorteios de temas entre grupos. Projetado para facilitar a distribuição de temas de forma justa e organizada para trabalhos em equipe, apresentações ou qualquer atividade que exija divisão de tarefas.`,
        en: `RandTeam is an intuitive and efficient tool for random topic assignments among groups. Designed to facilitate the fair and organized distribution of topics for teamwork, presentations, or any activity requiring task division.`,
      },
      image: '/images/randteam.png', // Ensure this file exists in /public/images/
      technologies: [<SiJavascript key="javascript" className="text-yellow-400" title="JavaScript" />, <SiHtml5 key="html5" className="text-orange-500" title="HTML5" />, <SiCss3 key="css3" className="text-blue-500" title="CSS3"/>, <SiTailwindcss key="tailwind" className="text-blue-400" title="Tailwind CSS" />, <SiVercel key="vercel" className="text-gray-600 dark:text-gray-300" title="Vercel" />],
      link: 'https://randteam.vercel.app',
      githubLink: 'https://github.com/aquiliviomaria/RandTeam_Sorteio_Inteligente',
      category: 'developed',
    },
    {
      title: { pt: 'Txopela Tour: Guia de Turismo em Moçambique', en: 'Txopela Tour: Mozambique Tourism Guide' },
      description: {
        pt: `Txopela Tour é uma plataforma web desenvolvida com Django que promove e recomenda automaticamente pontos turísticos em Moçambique. Utilizando um algoritmo de recomendação, o sistema sugere locais com base em avaliações e interações de visitantes autenticados.`,
        en: `Txopela Tour is a web platform developed with Django that automatically promotes and recommends tourist spots in Mozambique, suggesting locations based on visitor ratings and interactions.`,
      },
      image: '/images/txopela-tour.png', // Ensure this file exists in /public/images/
      technologies: [<SiPython key="python" className="text-blue-500" title="Python" />, <SiDjango key="django" className="text-green-700" title="Django" />, <SiBootstrap key="bootstrap" className="text-purple-500" title="Bootstrap" />, <SiMysql key="mysql" className="text-blue-600" title="MySQL/SQLite" />],
      link: '#',
      githubLink: 'https://github.com/aquiliviomaria/txopela-tour',
      category: 'developed',
    },
    {
      title: { pt: 'KHOSTA: Sistema de Gestão Penal', en: 'KHOSTA: Prison Management System' },
      description: {
        pt: `KHOSTA Penal é um sistema web criado como projeto académico para facilitar a administração de estabelecimentos prisionais, centralizando informações de reclusos, visitantes e relatórios administrativos.`,
        en: `KHOSTA Penal is a web system created as an academic project to facilitate the administration of prison facilities, centralizing inmate, visitor, and administrative reports.`,
      },
      image: '/images/khotsa.png', // Ensure this file exists in /public/images/
      technologies: [<SiJavascript key="javascript" className="text-yellow-400" title="JavaScript" />, <SiHtml5 key="html5" className="text-orange-500" title="HTML5" />, <SiCss3 key="css3" className="text-blue-500" title="CSS3" />, <SiTailwindcss key="tailwind" className="text-blue-400" title="Tailwind CSS" />, <SiVercel key="vercel" className="text-gray-600 dark:text-gray-300" title="Vercel" />],
      link: 'https://khotsa.netlify.app',
      githubLink: 'https://github.com/aquiliviomaria/khotsa',
      category: 'developed',
    },
    {
      title: { pt: 'Sistema de Votação Eletrónica (Django)', en: 'Electronic Voting System (Django)' },
      description: {
        pt: `Um sistema de votação eletrónica robusto e seguro, desenvolvido com Django, que garante a integridade, privacidade e acessibilidade do processo eleitoral. Ideal para gerir votações de forma eficiente e transparente.`,
        en: `A robust and secure electronic voting system, developed with Django, ensuring the integrity, privacy, and accessibility of the electoral process. Ideal for managing votes efficiently and transparently.`,
      },
      image: '/images/secure-vote.png', // Ensure this file exists in /public/images/
      technologies: [<SiPython key="python" className="text-blue-500" title="Python" />, <SiDjango key="django" className="text-green-700" title="Django" />, <SiHtml5 key="html5" className="text-orange-500" title="HTML5" />, <SiCss3 key="css3" className="text-blue-500" title="CSS3" />, <SiJavascript key="javascript" className="text-yellow-400" title="JavaScript" />],
      link: '#',
      githubLink: 'https://github.com/aquiliviomaria/secure-vote',
      category: 'developed',
    },
    {
      title: { pt: 'MozDevz Inhambane – Website da Comunidade', en: 'MozDevz Inhambane – Community Website' },
      description: {
        pt: `Este é o site da comunidade MozDevz Inhambane, desenvolvido para representar e divulgar as atividades, eventos e equipa da comunidade de desenvolvedores da Universidade Metodista Unida de Moçambique (UMUM).`,
        en: `This is the MozDevz Inhambane community website, developed to represent and publicize the activities, events, and team of the developer community at the United Methodist University of Mozambique (UMUM).`,
      },
      image: '/images/mozdevz-website.png', // This image is displaying correctly
      technologies: [<SiHtml5 key="html5" className="text-orange-500" title="HTML5" />, <SiCss3 key="css3" className="text-blue-500" title="CSS3" />, <SiJavascript key="javascript" className="text-yellow-400" title="JavaScript" />, <SiBootstrap key="bootstrap" className="text-purple-500" title="Bootstrap" />, <SiGithubpages key="githubpages" className="text-gray-600 dark:text-gray-300" title="GitHub Pages" />],
      link: 'https://aquiliviomaria.github.io/MozDev_Inhambane/',
      githubLink: 'https://github.com/aquiliviomaria/MozDev_Inhambane',
      category: 'developed',
    },
    {
      title: { pt: 'Portfólio Pessoal', en: 'Personal Portfolio' },
      description: {
        pt: `Um portfólio pessoal em desenvolvimento que apresenta meus projetos, habilidades e permite contato direto por meio de um formulário com suporte a envio de emails. Inclui design responsivo e modo claro/escuro.`,
        en: `A personal portfolio under development showcasing my projects, skills, and enabling direct contact through a form with email support. Features responsive design and light/dark mode.`,
      },
      image: '/images/portfolio-pessoal.png', 
      technologies: [
        <SiReact key="react" className="text-cyan-400" title="React" />,
        <SiNextdotjs key="nextjs" className="text-black dark:text-white" title="Next.js" />,
        <SiTailwindcss key="tailwind" className="text-blue-400" title="Tailwind CSS" />,
        <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }} key="framer" className="text-purple-500" title="Framer Motion" />,
        <SiVercel key="vercel" className="text-gray-600 dark:text-gray-300" title="Vercel" />,
      ],
      link: 'https://aquiliviomaria.vercel.app/',
      githubLink: 'https://github.com/aquiliviomaria/Portifolio-Pessoal',
      loading: true,
      category: 'development',
    },
    {
      title: { pt: 'Minhas Tarefas App: Lista de Tarefas Simples', en: 'Minhas Tarefas App: Simple Todo List' },
      description: {
        pt: `Um aplicativo simples de lista de tarefas, onde você pode adicionar, editar, excluir e filtrar suas tarefas. Oferece funcionalidade de modo claro/escuro e armazena tarefas no armazenamento local do navegador para persistência.`,
        en: `A simple to-do list application where you can add, edit, delete, and filter your tasks. It offers light/dark mode functionality and stores tasks in the browser's local storage for persistence.`,
      },
      image: '/images/minhas-tarefas.png', // Ensure this file exists in /public/images/
      technologies: [<SiJavascript key="javascript" className="text-yellow-400" title="JavaScript" />, <SiHtml5 key="html5" className="text-orange-500" title="HTML5" />, <SiCss3 key="css3" className="text-blue-500" title="CSS3" />],
      link: 'https://minhastarefasaqui.netlify.app/',
      githubLink: 'https://github.com/aquiliviomaria/minhas-tarefas-TodoList-Js',
      category: 'developed',
    },
    {
      title: { pt: 'iAgroMoz – Ecossistema Agrícola Inteligente', en: 'iAgroMoz – Smart Agricultural Ecosystem' },
      description: {
        pt: `Um ecossistema digital que usa tecnologia para cultivar esperança na agricultura moçambicana. Inclui um assistente IA (iAgroBot), recomendações inteligentes, comunidade agrícola e um marketplace de produtos locais. Visão: "Tecnologia que cultiva esperança."`,
        en: `A digital ecosystem using technology to foster hope in Mozambican agriculture. Includes an AI assistant (iAgroBot), smart recommendations, an agricultural community, and a local product marketplace. Vision: "Technology that cultivates hope."`,
      },
      image: '', 
      technologies: [
        <GiFarmTractor key="iagromoz-icon" className="text-green-600" title="Agriculture" />,
        <SiPython key="python" className="text-blue-500" title="Python" />,
        <SiReact key="react" className="text-cyan-400" title="React" />,
        <SiDjango key="django" className="text-green-700" title="Django" />,
        <SiPostgresql key="postgresql" className="text-blue-700" title="PostgreSQL" />,
        <SiFigma key="figma" className="text-purple-500" title="Figma (Design)" />,
      ],
      githubLink: 'https://github.com/aquiliviomaria/iAgroMoz',
      loading: true,
      category: 'development',
    },
    {
      title: { pt: 'Linkoma – Liga-te ao que precisas, onde estiveres.', en: 'Linkoma – Connect to what you need, wherever you are.' },
      description: {
        pt: `Uma plataforma digital multifuncional que conecta pessoas, produtos e serviços em Moçambique. Permite encontrar profissionais locais, comprar produtos de vendedores comunitários e obter sugestões personalizadas. Slogan: "Liga-te ao que precisas, onde estiveres."`,
        en: `A multifunctional digital platform connecting people, products, and services in Mozambique. It allows finding local professionals, buying products from community sellers, and getting personalized suggestions. Slogan: "Connect to what you need, wherever you are."`,
      },
      image: '/images/linkoma-logo.png', // This image is displaying correctly
      technologies: [
        <FaLink key="linkoma-icon" className="text-pink-500" title="Connect" />,
        <SiDjango key="django" className="text-green-700" title="Django" />,
        <SiPostgresql key="postgresql" className="text-blue-700" title="PostgreSQL" />,
        <SiTailwindcss key="tailwind" className="text-blue-400" title="Tailwind CSS" />,
        <SiFlutter key="flutter" className="text-blue-600" title="Flutter" />,
        <SiReact key="react" className="text-cyan-400" title="React" />,
      ],
      loading: true,
      category: 'development',
    },
    {
      title: { pt: 'TivaNet – Visibilidade de Rede Local', en: 'TivaNet – Local Network Visibility' },
      description: {
        pt: `Transforma a monitorização de redes tornando-a acessível para escolas, centros comunitários e pequenas organizações. Recopila dados em tempo real, visualiza o desempenho da rede de forma acessível e gera alertas automáticos em caso de falhas. "Ouve a rede e deixa-a falar por si mesma."`,
        en: `Transforms network monitoring by making it accessible for schools, community centers, and small organizations. Gathers real-time data, visualizes network performance accessibly, and generates automatic alerts for failures. "Listen to the network and let it speak for itself."`,
      },
      image: '/images/tivanet-logo.png', // This image is displaying correctly
      technologies: [
        <IoCloudOutline key="tivanet-icon" className="text-blue-400" title="Network Monitoring" />,
        <SiPython key="python" className="text-blue-500" title="Python" />,
        <SiRaspberrypi key="raspberrypi" className="text-red-500" title="Raspberry Pi" />,
        <SiNodered key="nodered" className="text-green-600" title="Node-RED" />,
        <SiLinux key="linux" className="text-gray-500" title="Linux" />,
      ],
      loading: true,
      category: 'development',
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.15,
      },
    },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.5
      } 
    },
    hover: {
      scale: 1.03,
      boxShadow: darkMode
        ? "0 8px 20px rgba(0, 255, 255, 0.3)"
        : "0 8px 20px rgba(0, 0, 255, 0.2)",
      transition: { duration: 0.2 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 12,
        duration: 0.5
      }
    }
  };

  // Fallback image for missing images
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = '/images/placeholder.png'; // Ensure placeholder.png exists in /public/images/
  };

  return (
    <section
      id="project"
      className={`min-h-screen py-20 px-6 sm:px-8 md:px-12 lg:px-16 ${
        darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'
      } transition-colors duration-300 flex flex-col items-center justify-center`}
    >
      <motion.div
        className="max-w-6xl mx-auto w-full"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.h2
          className={`text-4xl md:text-5xl font-bold text-center mb-12 ${
            darkMode ? 'text-teal-400' : 'text-blue-600'
          }`}
          variants={titleVariants}
        >
          {currentLanguage === 'pt' ? 'Meus Projetos' : 'My Projects'}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700
                         flex flex-col h-full transform transition-all duration-300 relative`}
              variants={projectCardVariants}
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              {project.loading && (
                <div className="absolute top-3 right-3 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full opacity-90">
                  {currentLanguage === 'pt' ? 'Em Desenvolvimento' : 'In Development'}
                </div>
              )}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title.pt || 'Project Image'}
                  className="w-full h-48 object-cover rounded-md mb-4 shadow-sm"
                  onError={handleImageError}
                />
              ) : (
                <div className="w-full h-48 mb-4" /> // Empty placeholder for no image
              )}
              <h3
                className={`text-2xl font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                {currentLanguage === 'pt' ? project.title.pt : project.title.en}
              </h3>
              <p className={`text-base mb-4 flex-grow ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {currentLanguage === 'pt' ? project.description.pt : project.description.en}
              </p>

              {project.technologies && project.technologies.length > 0 && (
                <div className="mb-4">
                  <h4 className={`text-md font-semibold mb-2 ${darkMode ? 'text-teal-300' : 'text-blue-700'}`}>
                    {currentLanguage === 'pt' ? 'Tecnologias:' : 'Technologies:'}
                  </h4>
                  <div className="flex flex-wrap gap-3 text-3xl">
                    {project.technologies.map((techIcon, techIndex) => (
                      <span key={techIndex} className="transition-transform duration-200">
                        {techIcon}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto flex justify-end space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium text-sm
                               ${darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                               transition-colors duration-200`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-lg" />
                    <span>GitHub</span>
                  </motion.a>
                )}
                {project.link && project.link !== '#' && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium text-sm
                               ${darkMode ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-blue-600 text-white hover:bg-blue-700'}
                               transition-colors duration-200`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>{currentLanguage === 'pt' ? 'Ver Site' : 'Live Site'}</span>
                  </motion.a>
                )}
                {(!project.link || project.link === '#') && !project.githubLink && (
                  <motion.button
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium text-sm
                               ${darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                               cursor-not-allowed`}
                    disabled
                  >
                    <span>{currentLanguage === 'pt' ? 'Em Breve' : 'Coming Soon'}</span>
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;