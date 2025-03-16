import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

interface AboutMeProps {
  language: 'en' | 'id';
}

export default function AboutMe({ language }: AboutMeProps) {
  const content = {
    en: {
      title: "About Me",
      bio: "I am a dedicated software developer with a Bachelor's degree in Information Systems from Atma Jaya Yogyakarta University. With experience in backend development, software development, and quality assurance, I'm passionate about creating innovative solutions that push technological boundaries.",
      location: "Based in Yogyakarta, Indonesia",
      connect: "Connect with me"
    },
    id: {
      title: "Tentang Saya",
      bio: "Saya adalah pengembang perangkat lunak dengan gelar Sarjana Sistem Informasi dari Universitas Atma Jaya Yogyakarta. Dengan pengalaman di pengembangan backend, pengembangan perangkat lunak, dan quality assurance, saya memiliki passion dalam menciptakan solusi inovatif yang mendorong batas teknologi.",
      location: "Berbasis di Yogyakarta, Indonesia",
      connect: "Hubungi saya"
    }
  };

  return (
    <section id="about" className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558470598-a5dda9640f68')] opacity-10 bg-cover bg-center" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center glitch">
          {content[language].title}
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
            <img
              src="https://images.unsplash.com/photo-1535223289827-42f1e9919769"
              alt="Profile"
              className="rounded-lg relative w-full h-[400px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              {content[language].bio}
            </p>
            
            <p className="text-blue-400 font-medium">
              {content[language].location}
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-400">
                {content[language].connect}
              </h3>
              <div className="flex space-x-6">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://linkedin.com/"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:your.email@example.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}