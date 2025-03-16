import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Languages } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  language: 'en' | 'id';
  setLanguage: (lang: 'en' | 'id') => void;
}

const Navbar = ({ darkMode, toggleTheme, language, setLanguage }: NavbarProps) => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = {
    en: {
      home: "Home",
      about: "About Me",
      project: "Project",
      experience: "Experience",
      education: "Education & Skills",
      contact: "Contact"
    },
    id: {
      home: "Beranda",
      about: "Tentang Saya",
      project: "Proyek",
      experience: "Pengalaman",
      education: "Pendidikan & Keahlian",
      contact: "Kontak"
    }
  };

  const navItems = [
    { path: '/', label: content[language].home },
    { path: '/about', label: content[language].about },
    { path: '/projects', label: content[language].project },
    { path: '/experience', label: content[language].experience },
    { path: '/education', label: content[language].education },
    { path: '/contact', label: content[language].contact }
  ];

  return (
    <nav className={`fixed w-full z-50 ${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-sm`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className={`block h-1 w-6 bg-current mb-1`} />
              <span className={`block h-1 w-6 bg-current mb-1`} />
              <span className={`block h-1 w-6 bg-current`} />
            </button>
            <div className="hidden md:flex space-x-8">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`relative hover:text-blue-400 transition-colors ${
                    location.pathname === path ? 'text-blue-400' : ''
                  }`}
                >
                  {label}
                  {location.pathname === path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
              className={`p-2 rounded-full ${
                darkMode ? 'bg-gray-800 text-blue-400' : 'bg-gray-100 text-gray-600'
              } hover:text-blue-300 transition-colors`}
            >
              <Languages size={20} />
            </button>
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-100 text-gray-600'
              } hover:text-blue-300 transition-colors`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-4 py-2 rounded-lg ${
                  location.pathname === path ? 'bg-blue-400 text-white' : 'hover:bg-gray-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
