'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Variants } from 'framer-motion';
import { FaExternalLinkAlt, FaDownload } from 'react-icons/fa';

interface Certificate {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string; // Optional for certificates with expiry
  credentialLink?: string; // Optional link to verify credential
  image?: string; // Optional path to certificate image in public/images/
  downloadLink?: string; // New: Optional path to downloadable PDF
}

interface CertificationSectionProps {
  darkMode: boolean;
  language: 'pt' | 'en';
}

const CertificationSection: React.FC<CertificationSectionProps> = ({ darkMode, language }) => {
  const currentLanguage = language ?? 'pt';

  const certificates: Certificate[] = [
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      issueDate: 'jul de 2025',
      credentialLink: 'https://www.credly.com/badges/your-cisco-credential-link',
      downloadLink: '/certificates/cisco-cybersecurity.pdf',
      image: '/images/cisco-cybersecurity.png',
    },
    {
      title: 'Certificate of Mentoring – Django Girls Maxixe',
      issuer: 'Django Girls Moçambique',
      issueDate: 'mar de 2025',
      expiryDate: 'mar de 2025',
      downloadLink: '/certificates/django-girls-maxixe.pdf',
      image: '/images/django-girls-maxixe.png',
    },
    {
      title: 'Imersão Cloud DevOps com o Google',
      issuer: 'Alura',
      issueDate: 'jul de 2025',
      downloadLink: '/certificates/alura-cloud-devops.pdf',
      image: '/images/alura-cloud-devops.png',
    },
    {
      title: 'Certificado de Reconhecimento – Mentor no Treinamento em Programação WEB',
      issuer: 'MozDevz',
      issueDate: 'mai de 2025',
      expiryDate: 'mai de 2025',
      downloadLink: '/certificates/mozdevz-mentor-web-dev.pdf',
      image: '/images/mozdevz-mentor-web-dev.png',
    },
    {
      title: 'Bootcamp de Programação em Python',
      issuer: 'MozDevz',
      issueDate: 'nov de 2024',
      downloadLink: '/certificates/mozdevz-python-bootcamp.pdf',
      image: '/images/mozdevz-python-bootcamp.png',
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  const handleDownload = (downloadLink: string, title: string) => {
    const link = document.createElement('a');
    link.href = downloadLink;
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="certification"
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
          {currentLanguage === 'pt' ? 'Licenças e Certificados' : 'Licenses & Certifications'}
        </h2>

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
                <h3 className={`text-xl font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {cert.title}
                </h3>
                <p className={`text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {cert.issuer}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {currentLanguage === 'pt' ? 'Verificação emitida em' : 'Issued on'}{' '}
                  {cert.issueDate}
                  {cert.expiryDate && (
                    <span>
                      {' '}
                      &bull;{' '}
                      {currentLanguage === 'pt' ? 'Expira em' : 'Expires on'}{' '}
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
                                   ${darkMode ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-blue-600 text-white hover:bg-blue-700'}
                                   transition-colors duration-200`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>{currentLanguage === 'pt' ? 'Exibir credencial' : 'Show credential'}</span>
                    </motion.a>
                  )}
                  {cert.downloadLink && (
                    <motion.button
                      onClick={() => handleDownload(cert.downloadLink!, cert.title)}
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-md font-medium text-sm
                                   ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}
                                   transition-colors duration-200`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaDownload className="text-sm" />
                      <span>{currentLanguage === 'pt' ? 'Baixar certificado' : 'Download certificate'}</span>
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