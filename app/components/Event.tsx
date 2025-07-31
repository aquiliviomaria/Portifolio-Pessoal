'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaWhatsapp, FaVideo } from 'react-icons/fa';

interface EventItem {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  registrationLink?: string;
  whatsappGroupLink?: string;
  zoomLink?: string;
  zoomMeetingId?: string;
  zoomPasscode?: string;
  partners?: string[];
  speakers?: string[];
  type: 'workshop' | 'webinar' | 'talk';
}

interface EventSectionProps {
  darkMode: boolean;
  language: 'pt' | 'en';
}

const EventSection: React.FC<EventSectionProps> = ({ darkMode, language }) => {
  const currentLanguage = language ?? 'pt';

  const events: EventItem[] = [
    {
      title: 'Webinário Gratuito – Como Começar na Ciência de Dados e Ganhar Dinheiro com a Zindi',
      date: '30 de Julho de 2024',
      time: '20h00',
      location: 'Online via Google Meet',
      description: `Descubra como iniciar na Ciência de Dados do zero e ganhar dinheiro através da Zindi, a maior plataforma africana de competições de dados. Aprenda sobre competições, estratégias para ganhar prémios e casos reais de sucesso.`,
      image: '/images/zindi-webinar.png',
      registrationLink: 'https://lu.ma/jcbhhjrn',
      speakers: ['Jean Marie John', 'Alex Jeremias Alfai'],
      type: 'webinar',
    },
    {
      title: 'Workshop Zindi: Resolve o Teu 1º Desafio de Dados!',
      date: '06 de Setembro de 2024',
      time: '10h às 13h',
      location: 'Campus de Cambine / Morrumbene (Híbrido)',
      description: `Aprenda a resolver desafios reais de ciência de dados, do zero! Presencial ou à distância, tu escolhes. Mesmo sem programação, você sairá deste workshop com novas habilidades.`,
      image: '/images/zindi-workshop.png',
      registrationLink: 'https://lu.ma/jcbhhjrn',
      whatsappGroupLink: 'https://lnkd.in/d7UUnGXE',
      zoomLink: 'https://lnkd.in/dNxxZRDb',
      zoomMeetingId: '850 7270 3839',
      zoomPasscode: '123456',
      partners: ['Universidade Metodista Unida de Moçambique (UMUM)'],
      type: 'workshop',
    },
    {
      title: 'Introdução ao Zindi e à Ciência de Dados',
      date: '12 de Abril de 2024',
      time: '9:00 – 13:00',
      location: 'Extensão da UMUM em Chicuque, Maxixe, Província de Inhambane',
      description: `Evento totalmente gratuito e aberto a estudantes, profissionais e entusiastas que queiram aprender mais sobre o impacto da Ciência de Dados no mundo atual. Uma iniciativa da Faculdade de Engenharia e Tecnologia (FET) da UMUM em parceria com a Zindi.`,
      image: '/images/zindi-intro-event.png',
      registrationLink: 'https://lu.ma/jezx4jx7',
      partners: ['Faculdade de Engenharia e Tecnologia (FET) da UMUM', 'Zindi', 'Universidade Metodista Unida de Moçambique (UMUM)'],
      type: 'talk',
    },
    {
      title: 'Por que navegamos "gratuitamente" com VPNs?',
      date: '15 de Fevereiro de 2024',
      time: '21:00 (Horário de Maputo)',
      location: 'Online',
      description: `Desvendar os mitos por trás das VPNs gratuitas e pagas, explorando os prós e contras. Um bate-papo para entender como essas ferramentas funcionam, os riscos e benefícios, e como elas impactam nossa experiência na internet.`,
      image: '/images/devcode-vpn.png',
      registrationLink: 'https://lnkd.in/dHMrWpsK',
      partners: ['Dev Code - Comunidade'],
      type: 'talk',
    },

    {
      title: 'Sessão de Mentoria: Fundamentos de Desenvolvimento Web',
      date: '20 de Março de 2023',
      time: '18h00',
      location: 'Online via Zoom',
      description: `Uma sessão interativa focada nos fundamentos do desenvolvimento web, cobrindo HTML, CSS e JavaScript. Ideal para iniciantes que desejam dar os primeiros passos na criação de websites.`,
      image: '/images/web-fundamentals-mentorship.png',
      partners: ['Comunidade Dev'],
      type: 'workshop',
    },
    {
      title: 'Hackathon: Soluções Tecnológicas para Desafios Comunitários',
      date: '10 de Dezembro de 2023',
      time: '09h00 - 17h00',
      location: 'Maxixe, Chambone-6',
      description: `Participação em um hackathon de um dia, desenvolvendo protótipos de soluções tecnológicas para problemas reais enfrentados pela comunidade local, com foco em educação e saúde.`,
      image: '/images/community-hackathon.png',
      partners: ['Governo Local'],
      type: 'workshop',
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
        ease: 'easeOut' as const,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const
      }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section
      id="event"
      className={`min-h-screen py-10 px-4 sm:px-6 md:px-8 lg:px-12 ${
        darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'
      } transition-colors duration-300 flex flex-col items-center justify-center`}
    >
      <motion.div
        className="max-w-4xl mx-auto w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2
          className={`text-3xl md:text-5xl font-bold text-center mb-8 ${ // Adjusted mb for smaller screens
            darkMode ? 'text-teal-400' : 'text-blue-600'
          }`}
        >
          {currentLanguage === 'pt' ? 'Eventos & Palestras' : 'Events & Talks'}
        </h2>

        {/* Grid responsivo para os eventos para melhor layout em telas maiores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"> {/* Smaller default gap */}
          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-5 shadow-lg flex flex-col // Adjusted padding
                             border border-gray-200 dark:border-gray-700 transform transition-all duration-300
                             hover:shadow-xl dark:hover:shadow-2xl`}
              variants={itemVariants}
              whileHover="hover"
              transition={{ delay: index * 0.1 }}
            >
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full object-cover rounded-md mb-3 shadow-sm" // Adjusted mb
                  style={{ maxHeight: '180px', width: 'auto', margin: '0 auto' }} // Slightly reduced max-height for images
                />
              )}
              <div className="flex-grow">
                <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}> {/* Adjusted font size */}
                  {event.title}
                </h3>
                <p className={`text-xs sm:text-sm flex items-center mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}> {/* Adjusted font size */}
                  <FaCalendarAlt className="mr-2 text-base" /> {event.date} &bull; {event.time}
                </p>
                <p className={`text-xs sm:text-sm flex items-center mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}> {/* Adjusted font size */}
                  <FaMapMarkerAlt className="mr-2 text-base" /> {event.location}
                </p>
                <p className={`text-sm sm:text-base mb-3 flex-grow ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}> {/* Adjusted font size and mb */}
                  {event.description}
                </p>

                {event.partners && event.partners.length > 0 && (
                    <p className={`text-xs sm:text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}> {/* Adjusted font size */}
                        <span className="font-semibold">{currentLanguage === 'pt' ? 'Em parceria com:' : 'In partnership with:'}</span> {event.partners.join(', ')}
                    </p>
                )}
                {event.speakers && event.speakers.length > 0 && (
                    <p className={`text-xs sm:text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}> {/* Adjusted font size */}
                        <span className="font-semibold">{currentLanguage === 'pt' ? 'Oradores:' : 'Speakers:'}</span> {event.speakers.join(', ')}
                    </p>
                )}


                <div className="flex flex-wrap gap-2 mt-3 justify-end"> {/* Adjusted gap and mt */}
                  {event.registrationLink && (
                    <motion.a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-md font-medium text-xs sm:text-sm // Adjusted padding and font size
                                         ${darkMode ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-blue-600 text-white hover:bg-blue-700'}
                                         transition-colors duration-200`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>{currentLanguage === 'pt' ? 'Inscreva-se' : 'Register'}</span>
                    </motion.a>
                  )}
                  {event.whatsappGroupLink && (
                    <motion.a
                      href={event.whatsappGroupLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-md font-medium text-xs sm:text-sm // Adjusted padding and font size
                                         ${darkMode ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-500 text-white hover:bg-green-600'}
                                         transition-colors duration-200`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaWhatsapp className="text-sm" />
                      <span>WhatsApp</span>
                    </motion.a>
                  )}
                  {event.zoomLink && (
                    <motion.a
                      href={event.zoomLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-md font-medium text-xs sm:text-sm // Adjusted padding and font size
                                         ${darkMode ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-blue-500 text-white hover:bg-blue-600'}
                                         transition-colors duration-200`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaVideo className="text-sm" />
                      <span>Zoom</span>
                    </motion.a>
                  )}
                  {(event.zoomMeetingId || event.zoomPasscode) && (
                    <div className={`flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 text-xs ${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-2 w-full justify-end`}> {/* Adjusted layout for smaller screens */}
                        {event.zoomMeetingId && <span className="whitespace-nowrap">ID: {event.zoomMeetingId}</span>}
                        {event.zoomMeetingId && event.zoomPasscode && <span className="hidden sm:inline whitespace-nowrap">&bull;</span>} {/* Hide bullet on very small screens if only one item */}
                        {event.zoomPasscode && <span className="whitespace-nowrap">Passcode: {event.zoomPasscode}</span>}
                    </div>
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

export default EventSection;