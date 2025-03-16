import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';
import Background3D from './components/Background3D';
import Chatbot from './components/Chatbot';
import ProjectPage from './pages/ProjectPage';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<'en' | 'id'>('en');
  const [isLoading, setIsLoading] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Simulate loading process
  useEffect(() => {
    // Replace this with actual loading logic (e.g., fetching data, loading assets, etc.)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  // Save user preferences to localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    localStorage.setItem('language', language);
  }, [darkMode, language]);

  // Load user preferences on initial render
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    const savedLanguage = localStorage.getItem('language');
    
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
    
    if (savedLanguage === 'en' || savedLanguage === 'id') {
      setLanguage(savedLanguage);
    }
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'bg-transparent text-white' : 'bg-purple-50 text-gray-900'}`}>
        <Background3D />
        <Navbar
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          language={language}
          setLanguage={setLanguage}
        />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage language={language} darkMode={darkMode} />} />
            <Route path="/about" element={<AboutPage language={language} darkMode={darkMode} />} />
            <Route path="/projects" element={<ProjectPage language={language} darkMode={darkMode} />} />
            <Route path="/experience" element={<ExperiencePage language={language} darkMode={darkMode} />} />
            <Route path="/education" element={<EducationPage language={language} darkMode={darkMode} />} />
            <Route path="/contact" element={<ContactPage language={language} darkMode={darkMode} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Chatbot language={language} darkMode={darkMode} />
        <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} py-8 mt-20`}>
          <div className="container mx-auto px-4 text-center">
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>© 2024 All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;