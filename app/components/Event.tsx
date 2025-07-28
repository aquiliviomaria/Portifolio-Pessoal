// app/components/Event.tsx
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
  image?: string; // Optional path to event image
  registrationLink?: string;
  whatsappGroupLink?: string;
  zoomLink?: string;
  zoomMeetingId?: string;
  zoomPasscode?: string;
  partners?: string[]; // E.g., ['UMUM']
  speakers?: string[]; // E.g., ['Jean Marie John', 'Alex Jeremias Alfai']
  type: 'workshop' | 'webinar' | 'talk'; // Helps categorize
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
      date: '30 de Julho',
      time: '20h00',
      location: 'Online via Google Meet',
      description: `Descubra como iniciar na Ciência de Dados do zero e ganhar dinheiro através da Zindi, a maior plataforma africana de competições de dados. Aprenda sobre competições, estratégias para ganhar prémios e casos reais de sucesso.`,
      image: '/images/zindi-webinar.png', // Placeholder image
      registrationLink: 'https://lu.ma/jcbhhjrn', // Assuming this is the correct registration link from your text
      speakers: ['Jean Marie John', 'Alex Jeremias Alfai'],
      type: 'webinar',
    },
    {
      title: 'Workshop Zindi: Resolve o Teu 1º Desafio de Dados!',
      date: '06 de Setembro',
      time: '10h às 13h',
      location: 'Campus de Cambine / Morrumbene (Híbrido)',
      description: `Aprenda a resolver desafios reais de ciência de dados, do zero! Presencial ou à distância, tu escolhes. Mesmo sem programação, você sairá deste workshop com novas habilidades.`,
      image: '/images/zindi-workshop.png', // Placeholder image
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
      date: 'Sábado, 12 de abril',
      time: '9:00 – 13:00',
      location: 'Extensão da UMUM em Chicuque, Maxixe, Província de Inhambane',
      description: `Evento totalmente gratuito e aberto a estudantes, profissionais e entusiastas que queiram aprender mais sobre o impacto da Ciência de Dados no mundo atual. Uma iniciativa da Faculdade de Engenharia e Tecnologia (FET) da UMUM em parceria com a Zindi.`,
      image: '/images/zindi-intro-event.png', // Placeholder image
      registrationLink: 'https://lu.ma/jezx4jx7',
      partners: ['Faculdade de Engenharia e Tecnologia (FET) da UMUM', 'Zindi', 'Universidade Metodista Unida de Moçambique (UMUM)'],
      type: 'talk',
    },
    {
      title: 'Por que navegamos "gratuitamente" com VPNs?',
      date: '15 de Fevereiro',
      time: '21:00 (Horário de Maputo)',
      location: 'Online',
      description: `Desvendar os mitos por trás das VPNs gratuitas e pagas, explorando os prós e contras. Um bate-papo para entender como essas ferramentas funcionam, os riscos e benefícios, e como elas impactam nossa experiência na internet.`,
      image: '/images/devcode-vpn.png', // Placeholder image
      registrationLink: 'https://lnkd.in/dHMrWpsK',
      partners: ['Dev Code - Comunidade'],
      type: 'talk',
    },
    // Add other events here
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
      id="event"
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
          {currentLanguage === 'pt' ? 'Eventos & Palestras' : 'Events & Talks'}
        </h2>

        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg p-5 shadow-lg flex flex-col
                          border border-gray-200 dark:border-gray-700 transform transition-all duration-300
                          hover:shadow-xl dark:hover:shadow-2xl hover:scale-[1.01]`}
              variants={itemVariants}
            >
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-md mb-4 shadow-sm"
                />
              )}
              <div className="flex-grow">
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {event.title}
                </h3>
                <p className={`text-sm flex items-center mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <FaCalendarAlt className="mr-2 text-base" /> {event.date} &bull; {event.time}
                </p>
                <p className={`text-sm flex items-center mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <FaMapMarkerAlt className="mr-2 text-base" /> {event.location}
                </p>
                <p className={`text-base mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {event.description}
                </p>

                {event.partners && event.partners.length > 0 && (
                    <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span className="font-semibold">{currentLanguage === 'pt' ? 'Em parceria com:' : 'In partnership with:'}</span> {event.partners.join(', ')}
                    </p>
                )}
                {event.speakers && event.speakers.length > 0 && (
                    <p className={`text-sm mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span className="font-semibold">{currentLanguage === 'pt' ? 'Oradores:' : 'Speakers:'}</span> {event.speakers.join(', ')}
                    </p>
                )}


                <div className="flex flex-wrap gap-3 mt-4">
                  {event.registrationLink && (
                    <motion.a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-md font-medium text-sm
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
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-md font-medium text-sm
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
                      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-md font-medium text-sm
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
                    <div className={`flex items-center space-x-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-2`}>
                        {event.zoomMeetingId && <span>ID: {event.zoomMeetingId}</span>}
                        {event.zoomMeetingId && event.zoomPasscode && <span>&bull;</span>}
                        {event.zoomPasscode && <span>Passcode: {event.zoomPasscode}</span>}
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