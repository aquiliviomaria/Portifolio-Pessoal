'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaSpinner } from 'react-icons/fa'; // Import FaSpinner for loading state

interface ContactSectionProps {
  darkMode: boolean;
  language: 'pt' | 'en';
}

const ContactSection: React.FC<ContactSectionProps> = ({ darkMode, language }) => {
  const currentLanguage = language ?? 'pt';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'' | 'success' | 'error' | 'invalid-email' | 'invalid-message'>('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear status messages when user starts typing again
    if (status !== '') {
        setStatus('');
        setErrorMessage('');
    }
  };

  const validateEmail = (email: string) => {
    // Regex for basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    setErrorMessage('');

    // Client-side validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      setErrorMessage(currentLanguage === 'pt' ? 'Por favor, preencha todos os campos.' : 'Please fill in all fields.');
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
        setStatus('invalid-email');
        setErrorMessage(currentLanguage === 'pt' ? 'Por favor, insira um endereço de e-mail válido.' : 'Please enter a valid email address.');
        setLoading(false);
        return;
    }

    if (formData.message.length < 10) {
        setStatus('invalid-message');
        setErrorMessage(currentLanguage === 'pt' ? 'A mensagem deve ter pelo menos 10 caracteres.' : 'Message must be at least 10 characters long.');
        setLoading(false);
        return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        const errorData = await response.json();
        setStatus('error');
        setErrorMessage(errorData.message || (currentLanguage === 'pt' ? 'Ocorreu um erro ao enviar a mensagem.' : 'An error occurred while sending the message.'));
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('error');
      setErrorMessage(currentLanguage === 'pt' ? 'Falha na comunicação com o servidor. Tente novamente.' : 'Failed to communicate with the server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const inputStyles = `w-full p-3 rounded-md border text-base ${
    darkMode
      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-teal-400'
      : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500'
  } focus:outline-none focus:ring-1 transition-all duration-200`;

  const buttonStyles = `w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-md font-semibold text-lg
                        ${darkMode ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-blue-600 text-white hover:bg-blue-700'}
                        transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
                        ${darkMode ? 'focus:ring-teal-400 focus:ring-offset-gray-950' : 'focus:ring-blue-400 focus:ring-offset-gray-50'}
                        ${loading ? 'opacity-70 cursor-not-allowed' : ''}`;

  return (
    <section
      id="contact"
      className={`min-h-screen py-20 px-6 ${
        darkMode ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'
      } transition-colors duration-300 flex flex-col items-center justify-center`}
    >
      <motion.div
        className="max-w-xl mx-auto w-full"
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
          {currentLanguage === 'pt' ? 'Entre em Contacto' : 'Get In Touch'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              {currentLanguage === 'pt' ? 'Seu Nome' : 'Your Name'}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={currentLanguage === 'pt' ? 'Seu Nome' : 'Your Name'}
              value={formData.name}
              onChange={handleChange}
              className={inputStyles}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              {currentLanguage === 'pt' ? 'Seu Email' : 'Your Email'}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={currentLanguage === 'pt' ? 'Seu Email' : 'Your Email'}
              value={formData.email}
              onChange={handleChange}
              className={inputStyles}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="subject" className="sr-only">
              {currentLanguage === 'pt' ? 'Assunto' : 'Subject'}
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder={currentLanguage === 'pt' ? 'Assunto' : 'Subject'}
              value={formData.subject}
              onChange={handleChange}
              className={inputStyles}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              {currentLanguage === 'pt' ? 'Sua Mensagem' : 'Your Message'}
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder={currentLanguage === 'pt' ? 'Sua Mensagem' : 'Your Message'}
              value={formData.message}
              onChange={handleChange}
              className={inputStyles}
              disabled={loading}
            ></textarea>
          </div>

          {status === 'success' && (
            <p className="text-green-500 text-center font-medium">
              {currentLanguage === 'pt' ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!'}
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-center font-medium">
              {errorMessage}
            </p>
          )}
          {status === 'invalid-email' && (
            <p className="text-red-500 text-center font-medium">
              {errorMessage}
            </p>
          )}
          {status === 'invalid-message' && (
            <p className="text-red-500 text-center font-medium">
              {errorMessage}
            </p>
          )}

          <motion.button
            type="submit"
            className={buttonStyles}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin mr-2" />
                <span>{currentLanguage === 'pt' ? 'Enviando...' : 'Sending...'}</span>
              </>
            ) : (
              <>
                <FaPaperPlane className="text-lg" />
                <span>{currentLanguage === 'pt' ? 'Enviar Mensagem' : 'Send Message'}</span>
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;