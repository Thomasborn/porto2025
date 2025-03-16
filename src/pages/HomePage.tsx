import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';
import React, { useState } from 'react';

interface HomePageProps {
  language: "en" | "id";
}

export default function HomePage({ language }: HomePageProps) {
  const content = {
    en: {
      title: "Software Developer",
      subtitle: "Full Stack Developer | Backend Specialist | Quality Assurance",
      description: "Creating innovative solutions with modern technologies",
      buttons: {
        downloadCv: "Download CV",
        viewProjects: "View Projects",
      },
    },
    id: {
      title: "Pengembang Perangkat Lunak",
      subtitle: "Full Stack Developer | Spesialis Backend | Quality Assurance",
      description: "Menciptakan solusi inovatif dengan teknologi modern",
      buttons: {
        downloadCv: "Unduh CV",
        viewProjects: "Lihat Proyek",
      },
    },
  };

  const sliceEffect = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: {
      clipPath: "inset(0 0 0 0)",
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  const buttonHoverEffect = {
    scale: 0.9,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(0, 255, 255)",
  };
    const [isLoading, setIsLoading] = useState(true);
  
    const handleLoad = () => {
      setIsLoading(false); // Mark loading as complete when Spline is ready
    };
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {isLoading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-800 to-purple-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <motion.div
              className="text-4xl font-bold text-white neon-text"
              animate={{
                textShadow: [
                  '0px 0px 10px rgba(0, 255, 255, 1)',
                  '0px 0px 20px rgba(0, 255, 255, 1)',
                  '0px 0px 30px rgba(0, 255, 255, 1)',
                ],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              Loading...
            </motion.div>
            <motion.div
              className="mt-5 w-24 h-24 border-4 border-t-blue-400 border-r-purple-500 rounded-full animate-spin"
            />
          </div>
        </motion.div>
      )}
      <Spline
        scene="https://prod.spline.design/84qEa4HszgQTUrAo/scene.splinecode"
        onLoad={handleLoad}
        className="absolute inset-0 z-0"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sliceEffect}
        className="slice-blade relative z-10 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 glitch"
        >
          Thomas Edwin Suryo Prayogo
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-2xl mt-4 text-white"
        >
          {content[language].title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-xl md:text-2xl text-blue-300 mb-4 custom-paragraph"
        >
          {content[language].subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-2xl mt-4 text-white"
        >
          {content[language].description}
        </motion.p>

        <div className="flex justify-center space-x-6 mt-6">
          {/* Download CV Button */}
          <motion.a
  whileHover={buttonHoverEffect}
  href="https://drive.google.com/file/d/1JwnvSLO-YrVX6uf5RoH1PBm0gCkiyFWC/view?usp=sharing"
  download
  target="_blank" // This will open the link in a new tab
  rel="noopener noreferrer" // This is a security measure
  className="px-6 py-3 border border-cyan-300 text-cyan-300 rounded-lg text-lg font-medium hover:bg-cyan-700 hover:text-white transition duration-300"
>
  {content[language].buttons.downloadCv}
</motion.a>


          {/* View Projects Button */}
          <motion.a
            whileHover={buttonHoverEffect}
            href="/projects"
            className="px-6 py-3 border border-purple-400 text-purple-400 rounded-lg text-lg font-medium hover:bg-purple-700 hover:text-white transition duration-300"
          >
            {content[language].buttons.viewProjects}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
