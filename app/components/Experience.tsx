"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
  image?: string;
}

interface ExperienceSectionProps {
  darkMode: boolean;
  language: "pt" | "en";
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  darkMode,
  language,
}) => {
  const currentLanguage = language ?? "pt";
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const experiences: ExperienceItem[] = [
    {
      title:
        currentLanguage === "pt"
          ? "Desenvolvedor de Software"
          : "Software Development",
      company: "BlueStringCo",
      duration: currentLanguage === "pt" ? "Jul de 2025" : "Jul 2025",
      description:
        currentLanguage === "pt"
          ? "Actuando como Estagiário de Desenvolvimento de Software, com foco na arquitetura, desenvolvimento e manutenção de aplicações web. Minha principal missão é traduzir conceitos em código, contribuindo para a construção de soluções robustas e intuitivas. Estou imerso em tecnologias modernas para desenvolver aplicações full-stack, aprimorando minhas habilidades em todo o ciclo de vida do software."
          : "Currently working as a Software Development Intern, focusing on the architecture, development, and maintenance of web applications. My primary mission is to translate concepts into code, contributing to the creation of robust and intuitive solutions. I am immersed in modern technologies to develop full-stack applications, enhancing my skills across the entire software development lifecycle.",
      image: "/images/bluestringco_logo.png",
    },
    {
      title:
        currentLanguage === "pt"
          ? "Mentor no Treinamento em Programação Web"
          : "Mentor at Web Programming Training",
      company: "MOZDEVZ Inhambane",
      duration: currentLanguage === "pt" ? "Mai de 2025" : "May 2025",
      description:
        currentLanguage === "pt"
          ? `Participei como mentor no Treinamento em Programação Web, uma iniciativa da MOZDEVZ Inhambane em parceria com a Universidade Metodista Unida de Moçambique (UMUM). Foram dias intensos de imersão total em desenvolvimento web com sessões online e uma sessão presencial memorável em Morrumbene, capacitando novos talentos com foco na criação de páginas web.`
          : `I participated as a mentor in the Web Programming Training, an initiative by MOZDEVZ Inhambane in partnership with the United Methodist University of Mozambique (UMUM). It was an intense few days of total immersion in web development with online sessions and a memorable in-person session in Morrumbene, empowering new talents with a focus on creating web pages.`,
      image: "/images/mentor-web-dev-banner.png",
    },
    {
      title:
        currentLanguage === "pt"
          ? "Orador e Embaixador da Zindi"
          : "Speaker and Zindi Ambassador",
      company: "Zindi",
      duration: currentLanguage === "pt" ? "Abr de 2025" : "Apr 2025",
      description:
        currentLanguage === "pt"
          ? `Subi ao palco como orador e Embaixador da Zindi ao lado do Eng. Jean Marie John, apresentando esta plataforma de inteligência artificial e ciência de dados. Expliquei como a Zindi conecta desafios africanos com o potencial de jovens, incentivando a resolução de problemas reais com dados.`
          : `I took the stage as a speaker and Zindi Ambassador alongside Eng. Jean Marie John, presenting this artificial intelligence and data science platform. I explained how Zindi connects African challenges with the potential of young people, encouraging the resolution of real problems with data.`,
      image: "/images/zindi-ambassador-speaker.png",
    },
    {
      title:
        currentLanguage === "pt"
          ? "Participante e Certificado de Mérito no Bootcamp de Programação Python"
          : "Participant and Merit Certificate in Python Programming Bootcamp",
      company: "MozDevz",
      duration:
        currentLanguage === "pt"
          ? "Final do 2º Semestre do 2º Ano (Eng. Informática)"
          : "End of 2nd Semester of 2nd Year (Comp. Eng.)",
      description:
        currentLanguage === "pt"
          ? `Tive meu primeiro contato com Python em um bootcamp da MozDevz, uma experiência que eu queria há muito tempo. A sintaxe do Python fluiu de forma natural, e saí de lá com dois certificados: um de participação e outro de mérito.`
          : `I had my first contact with Python at a MozDevz bootcamp, an experience I had long wanted. The Python syntax flowed naturally, and I left with two certificates: one for participation and one for merit.`,
      image: "/images/mozdevz-python-bootcamp.png",
    },
    {
      title:
        currentLanguage === "pt"
          ? "Coach no Django Girls Maxixe"
          : "Coach at Django Girls Maxixe",
      company: "Django Girls Moçambique",
      duration: currentLanguage === "pt" ? "Mar de 2025" : "Mar 2025",
      description:
        currentLanguage === "pt"
          ? `Participei como coach no Django Girls Maxixe, ajudando outras pessoas a dar os primeiros passos com Django. A experiência de ver o entusiasmo delas ao escrever as primeiras linhas de código foi simplesmente gratificante.`
          : `I participated as a coach at Django Girls Maxixe, helping others take their first steps with Django. The experience of seeing their enthusiasm as they wrote their first lines of code was simply gratifying.`,
      image: "/images/django-girls-maxixe.png",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="experience"
      className={`py-20 px-6 ${
        darkMode ? "bg-gray-950 text-gray-100" : "bg-gray-50 text-gray-900"
      } transition-colors duration-300 flex flex-col`}
    >
      <motion.div
        className="max-w-4xl mx-auto w-full"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={sectionVariants}
      >
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-12 ${
            darkMode ? "text-teal-400" : "text-blue-600"
          }`}
        >
          {currentLanguage === "pt" ? "Minhas Experiências" : "My Experiences"}
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
              <div className="flex-grow text-left">
                <h3
                  className={`text-xl font-semibold mb-1 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {exp.title}
                </h3>
                <p
                  className={`text-lg font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {exp.company}
                </p>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {exp.duration}
                </p>
                <p
                  className={`text-base mt-2 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
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
