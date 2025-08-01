"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt, FaEye } from "react-icons/fa";

interface Certificate {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialLink?: string;
  image?: string;
  previewLink?: string;
}

interface CertificationSectionProps {
  darkMode: boolean;
  language: "pt" | "en";
}

const CertificationSection: React.FC<CertificationSectionProps> = ({
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

  const certificates: Certificate[] = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      issueDate: "jul de 2025",
      credentialLink:
        "https://www.credly.com/badges/your-cisco-credential-link",
      previewLink: "/certificates/cisco-cybersecurity.pdf",
      image: "/images/cisco-cybersecurity.png",
    },
    {
      title: "Certificate of Mentoring – Django Girls Maxixe",
      issuer: "Django Girls Moçambique",
      issueDate: "mar de 2025",
      expiryDate: "mar de 2025",
      previewLink: "/certificates/django-girls-maxixe.pdf",
      image: "/images/django-girls-maxixe.png",
    },
    {
      title: "Imersão Cloud DevOps com o Google",
      issuer: "Alura",
      issueDate: "jul de 2025",
      previewLink: "/certificates/alura-cloud-devops.pdf",
      image: "/images/alura-cloud-devops.png",
    },
    {
      title:
        "Certificado de Reconhecimento – Mentor no Treinamento em Programação WEB",
      issuer: "MozDevz",
      issueDate: "mai de 2025",
      expiryDate: "mai de 2025",
      previewLink: "/certificates/mozdevz-mentor-web-dev.pdf",
      image: "/images/mozdevz-mentor-web-dev.png",
    },
    {
      title: "Bootcamp de Programação em Python",
      issuer: "MozDevz",
      issueDate: "nov de 2024",
      previewLink: "/certificates/mozdevz-python-bootcamp.pdf",
      image: "/images/mozdevz-python-bootcamp.png",
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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

  const openPreview = (previewLink: string) => {
    window.open(previewLink, "_blank");
  };

  return (
    <section
      id="certification"
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
        <motion.h2
          className={`text-4xl md:text-5xl font-bold text-center mb-12 ${
            darkMode ? "text-teal-400" : "text-blue-600"
          }`}
          variants={itemVariants}
        >
          {currentLanguage === "pt"
            ? "Licenças e Certificados"
            : "Licenses & Certifications"}
        </motion.h2>

        <div className="space-y-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg p-5 shadow-lg flex flex-col sm:flex-row items-start sm:items-center
                          border border-gray-200 dark:border-gray-700 transform transition-all duration-300
                          hover:shadow-xl dark:hover:shadow-2xl hover:scale-[1.01]`}
              variants={itemVariants}
            >
              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.issuer}
                  className="w-24 h-24 object-contain rounded-full sm:rounded-lg mr-0 sm:mr-4 mb-4 sm:mb-0 flex-shrink-0 self-center"
                />
              )}
              <div className="flex-grow text-center sm:text-left">
                <h3
                  className={`text-xl font-semibold mb-1 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {cert.title}
                </h3>
                <p
                  className={`text-lg font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {cert.issuer}
                </p>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {currentLanguage === "pt"
                    ? "Verificação emitida em"
                    : "Issued on"}{" "}
                  {cert.issueDate}
                  {cert.expiryDate && (
                    <span>
                      {" "}
                      &bull;{" "}
                      {currentLanguage === "pt"
                        ? "Expira em"
                        : "Expires on"}{" "}
                      {cert.expiryDate}
                    </span>
                  )}
                </p>
                <div className="flex flex-wrap gap-3 mt-3 justify-center sm:justify-start">
                  {cert.credentialLink && (
                    <motion.a
                      href={cert.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-md font-medium text-sm
                                   ${
                                     darkMode
                                       ? "bg-teal-600 text-white hover:bg-teal-700"
                                       : "bg-blue-600 text-white hover:bg-blue-700"
                                   }
                                   transition-colors duration-200`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>
                        {currentLanguage === "pt"
                          ? "Exibir credencial"
                          : "Show credential"}
                      </span>
                    </motion.a>
                  )}
                  {cert.previewLink && (
                    <motion.button
                      onClick={() => openPreview(cert.previewLink!)}
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-md font-medium text-sm
                                   ${
                                     darkMode
                                       ? "bg-gray-700 text-white hover:bg-gray-600"
                                       : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                                   }
                                   transition-colors duration-200`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaEye className="text-sm" />
                      <span>
                        {currentLanguage === "pt"
                          ? "Visualizar certificado"
                          : "View certificate"}
                      </span>
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CertificationSection;
