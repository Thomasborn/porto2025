import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';

interface ExperiencePageProps {
  language: 'en' | 'id';
  darkMode: boolean;
}

export default function ExperiencePage({ language, darkMode }: ExperiencePageProps) {
  const content = {
    en: {
      title: "Professional Experience",
      description: "My journey in software development"
    },
    id: {
      title: "Pengalaman Profesional",
      description: "Perjalanan saya dalam pengembangan perangkat lunak"
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center glitch">
            {content[language].title}
          </h1>
          <p className="text-xl text-center text-blue-400 mb-12">
            {content[language].description}
          </p>
          
          <Timeline darkMode={darkMode} language={language} />
        </motion.div>
      </div>
    </div>
  );
}