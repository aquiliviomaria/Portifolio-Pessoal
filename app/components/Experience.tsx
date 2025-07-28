// app/components/Experience.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
  image?: string; // Optional path to an image related to the experience
}

interface ExperienceSectionProps {
  darkMode: boolean;
  language: 'pt' | 'en';
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ darkMode, language }) => {
  const currentLanguage = language ?? 'pt';

  const experiences: ExperienceItem[] = [
    {
      title: 'Mentor no Treinamento em Programação Web',
      company: 'MOZDEVZ Inhambane',
      duration: 'Mai de 2025',
      description: `Participei como mentor no Treinamento em Programação Web, uma iniciativa da MOZDEVZ Inhambane em parceria com a Universidade Metodista Unida de Moçambique (UMUM). Foram dias intensos de imersão total em desenvolvimento web com sessões online e uma sessão presencial memorável em Morrumbene, capacitando novos talentos com foco na criação de páginas web.`,
      image: '/images/mentor-web-dev-banner.png', // Placeholder image
    },
    {
      title: 'Orador e Embaixador da Zindi',
      company: 'Zindi',
      duration: 'Abr de 2025', // Based on Zindi event date
      description: `Subi ao palco como orador e Embaixador da Zindi ao lado do Eng. Jean Marie John, apresentando esta plataforma de inteligência artificial e ciência de dados. Expliquei como a Zindi conecta desafios africanos com o potencial de jovens, incentivando a resolução de problemas reais com dados.`,
      image: '/images/zindi-ambassador-speaker.png', // Placeholder image
    },
    {
      title: 'Participante e Certificado de Mérito no Bootcamp de Programação Python',
      company: 'MozDevz',
      duration: 'Final do 2º Semestre do 2º Ano (Eng. Informática)', // Approximate duration
      description: `Tive meu primeiro contato com Python em um bootcamp da MozDevz, uma experiência que eu queria há muito tempo. A sintaxe do Python fluiu de forma natural, e saí de lá com dois certificados: um de participação e outro de mérito.`,
      image: '/images/python-bootcamp-experience.png', // Placeholder image
    },
    {
      title: 'Coach no Django Girls Maxixe',
      company: 'Django Girls Moçambique',
      duration: 'Mar de 2025',
      description: `Participei como coach no Django Girls Maxixe, ajudando outras pessoas a dar os primeiros passos com Django. A experiência de ver o entusiasmo delas ao escrever as primeiras linhas de código foi simplesmente gratificante.`,
      image: '/images/django-girls-maxixe.png', // Reusing an image if applicable
    }
    // Add other experiences here
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="experience"
      className={`min-h-screen py-20 px-6 ${
        darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'
      } transition-colors duration-300 flex flex-col items-center justify-center`}
    >
      <motion.div
        className="max-w-4xl mx-auto w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-12 ${
            darkMode ? 'text-teal-400' : 'text-blue-600'
          }`}
        >
          {currentLanguage === 'pt' ? 'Minhas Experiências' : 'My Experiences'}
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg p-5 shadow-lg flex flex-col sm:flex-row items-start sm:items-center
                          border border-gray-200 dark:border-gray-700 transform transition-all duration-300
                          hover:shadow-xl dark:hover:shadow-2xl hover:scale-[1.01]`}
              variants={itemVariants}
            >
              {exp.image && (
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-24 h-24 object-cover rounded-md sm:rounded-lg mr-0 sm:mr-4 mb-4 sm:mb-0 flex-shrink-0 self-center"
                />
              )}
              <div className="flex-grow text-center sm:text-left">
                <h3 className={`text-xl font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {exp.title}
                </h3>
                <p className={`text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {exp.company}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {exp.duration}
                </p>
                <p className={`text-base mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;