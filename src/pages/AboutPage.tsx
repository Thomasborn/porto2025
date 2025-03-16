import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Award, Briefcase, Target, Code, Database, Server, Layout, Cpu, BarChart, Eye, Zap, Shield, Users, BookOpen, Lightbulb, MessageCircle, Compass, HeartHandshake, Instagram } from 'lucide-react';

interface AboutPageProps {
  language: 'en' | 'id';
  darkMode: boolean;
}

export default function AboutPage({ language, darkMode }: AboutPageProps) {
  const content = {
    en: {
      title: "About Me",
      bio: "I am a dedicated software developer with a Bachelor's degree in Information Systems from Atma Jaya Yogyakarta University. I have experience in back-end development, software development, software quality assurance, and producing promotional videos. I am passionate about leveraging my skills to contribute to innovative projects and drive technological advancement.",
      location: "Based in Yogyakarta, Indonesia",
      connect: "Connect with me",
      experienceAndCerts: {
        title: "Professional Background",
        years: "2+ Years in Tech Industry",
        companies: "Worked with 5+ Companies",
        certifications: "Multiple Professional Certifications",
        description: "My journey spans roles as Software Developer, Backend Developer, Fullstack Developer, and QA across industries including banking, e-commerce, and IT services. I've collaborated with cross-functional teams and led data analysis and migration projects. My technical contributions have consistently delivered scalable and secure solutions.",
        achievements: [
          "Designed and developed application architecture ensuring scalability, performance, and security",
          "Maintained and managed 5+ Nginx and Apache servers in cloud environments",
          "Developed core ERP modules to streamline business processes",
          "Built authentication services and middleware to secure access across ERP clients",
          "Developed backend services using Java and Golang, focusing on API integration"
        ]
      },
      projects: {
        title: "Notable Projects",
        count: "Multiple Solutions Delivered",
        featured: [
          {
            name: "Application Architecture Development",
            description: "Designed and developed scalable application architecture at CV Omah IT, ensuring performance and security across all systems. Managed cloud servers and performed routine maintenance and updates.",
            tech: "Nginx, Apache, Cloud Infrastructure"
          },
          {
            name: "ERP System Development",
            description: "Developed core ERP modules (Sales, User, Gateway) at Mitra Inti Bersama to streamline business processes. Built authentication services and middleware to secure and manage access across all ERP clients.",
            tech: "Backend Technologies, API Development"
          },
          {
            "name": "Migration System",
            "description": "Developed backend services for Pt Teh Kartini Nasional, focusing on API integration and optimization. Built dynamic front-end applications with Vue.js and JavaScript, enhancing user interaction.",
            "tech": "Laravel, Python, Vue.js,Excel, SQL, Nginx"
          }
          
        ]
      },
      education: {
        title: "Education",
        degree: "Bachelor of Information System",
        university: "Universitas Atma Jaya Yogyakarta",
        period: "August 2020 - May 2024",
        gpa: "3.90/4.00",
        teaching: [
          "Assistant Lecture in Object Oriented Programming Class (Jul 2022 - Jan 2023)",
          "Assistant Lecture in Information System Web Class (Jan 2023 - Sep 2023)"
        ]
      },
      skills: {
        title: "Skills & Certifications",
        technical: [
          "Laravel 9",
          "JavaScript Programming",
          "Backend Development (NodeJS)",
          "Cloud Practitioner Essentials (AWS)",
          "SAP",
          "Design Thinking",
          "Digital Marketing"
        ],
        soft: [
          "English",
          "Team Management",
          "Communication",
          "Adaptability",
          "Leadership",
          "Creativity",
          "Problem Solving"
        ],
        achievements: [
          "Information Security Management Systems–ISO/IEC27001:2013 (2022)"
        ]
      },
      vision: {
        title: "Vision & Mission",
        vision: "To pioneer innovative technology solutions that solve complex business challenges while transforming user experiences.",
        mission: "Building scalable, robust, and secure systems while continuously expanding my technical mastery across emerging technologies."
      }
    },
    id: {
      title: "Tentang Saya",
      bio: "Saya adalah pengembang perangkat lunak yang berdedikasi dengan gelar Sarjana Sistem Informasi dari Universitas Atma Jaya Yogyakarta. Saya memiliki pengalaman dalam pengembangan back-end, pengembangan perangkat lunak, jaminan kualitas perangkat lunak, dan pembuatan video promosi. Saya bersemangat untuk memanfaatkan keterampilan saya untuk berkontribusi pada proyek-proyek inovatif dan mendorong kemajuan teknologi.",
      location: "Berbasis di Yogyakarta, Indonesia",
      connect: "Hubungi saya",
      experienceAndCerts: {
        title: "Latar Belakang Profesional",
        years: "2+ Tahun di Industri Teknologi",
        companies: "Berkolaborasi dengan 5+ Perusahaan",
        certifications: "Beberapa Sertifikasi Profesional",
        description: "Perjalanan saya meliputi peran sebagai Pengembang Perangkat Lunak, Pengembang Backend, Pengembang Fullstack, dan QA di berbagai industri termasuk perbankan, e-commerce, dan layanan TI. Saya telah berkolaborasi dengan tim lintas fungsi dan memimpin proyek analisis dan migrasi data. Kontribusi teknis saya secara konsisten menghasilkan solusi yang skalabel dan aman.",
        achievements: [
          "Merancang dan mengembangkan arsitektur aplikasi yang memastikan skalabilitas, kinerja, dan keamanan",
          "Memelihara dan mengelola 5+ server Nginx dan Apache di lingkungan cloud",
          "Mengembangkan modul ERP inti untuk merampingkan proses bisnis",
          "Membangun layanan otentikasi dan middleware untuk mengamankan akses di seluruh klien ERP",
          "Mengembangkan layanan backend menggunakan Java dan Golang, berfokus pada integrasi API"
        ]
      },
      projects: {
        title: "Proyek Unggulan",
        count: "Beberapa Solusi Terkirim",
        featured: [
          {
            name: "Pengembangan Arsitektur Aplikasi",
            description: "Merancang dan mengembangkan arsitektur aplikasi yang skalabel di CV Omah IT, memastikan kinerja dan keamanan di semua sistem. Mengelola server cloud dan melakukan pemeliharaan dan pembaruan rutin.",
            tech: "Nginx, Apache, Infrastruktur Cloud"
          },
          {
            name: "Pengembangan Sistem ERP",
            description: "Mengembangkan modul ERP inti (Penjualan, Pengguna, Gateway) di Mitra Inti Bersama untuk merampingkan proses bisnis. Membangun layanan otentikasi dan middleware untuk mengamankan dan mengelola akses di seluruh klien ERP.",
            tech: "Teknologi Backend, Pengembangan API"
          },
          {
            name: "Pengembangan Layanan Perbankan",
            description: "Mengembangkan layanan backend untuk BTPN Syariah menggunakan Java dan Golang, berfokus pada integrasi dan optimasi API. Membangun aplikasi front-end dinamis dengan Vue.js dan JavaScript, meningkatkan interaksi pengguna.",
            tech: "Java, Golang, Vue.js, JavaScript, SQL, Git"
          }
        ]
      },
      education: {
        title: "Pendidikan",
        degree: "Sarjana Sistem Informasi",
        university: "Universitas Atma Jaya Yogyakarta",
        period: "Agustus 2020 - Mei 2024",
        gpa: "3.90/4.00",
        teaching: [
          "Asisten Dosen di Kelas Pemrograman Berorientasi Objek (Jul 2022 - Jan 2023)",
          "Asisten Dosen di Kelas Web Sistem Informasi (Jan 2023 - Sep 2023)"
        ]
      },
      skills: {
        title: "Keterampilan & Sertifikasi",
        technical: [
          "Laravel 9",
          "Pemrograman JavaScript",
          "Pengembangan Backend (NodeJS)",
          "Cloud Practitioner Essentials (AWS)",
          "SAP",
          "Design Thinking",
          "Digital Marketing"
        ],
        soft: [
          "Bahasa Inggris",
          "Manajemen Tim",
          "Komunikasi",
          "Adaptabilitas",
          "Kepemimpinan",
          "Kreativitas",
          "Pemecahan Masalah"
        ],
        achievements: [
          "Sistem Manajemen Keamanan Informasi–ISO/IEC27001:2013 (2022)"
        ]
      },
      vision: {
        title: "Visi & Misi",
        vision: "Menjadi pelopor solusi teknologi inovatif yang menyelesaikan tantangan bisnis kompleks sambil mengubah pengalaman pengguna.",
        mission: "Membangun sistem yang skalabel, tangguh, dan aman sambil terus memperluas penguasaan teknis di berbagai teknologi yang sedang berkembang."
      }
    }
  };

  // Theme-dependent styles
  const styles = {
    headingText: darkMode ? 'text-white' : 'text-gray-900',
    bioText: darkMode ? 'text-gray-200' : 'text-gray-700',
    cardBg: darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white/90 border border-gray-200/50',
    accentTitle: darkMode ? 'text-purple-400' : 'text-purple-600',
    subTitle: darkMode ? 'text-blue-300' : 'text-blue-600',
    locationText: darkMode ? 'text-blue-400' : 'text-blue-600',
    techSkillBg: darkMode ? 'bg-gray-800' : 'bg-blue-100',
    techSkillText: darkMode ? 'text-blue-300' : 'text-blue-700',
    softSkillBg: darkMode ? 'bg-gray-800' : 'bg-purple-100',
    softSkillText: darkMode ? 'text-purple-300' : 'text-purple-700',
    iconColor: darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500',
    imageContainerBg: darkMode ? 'bg-gray-900' : 'bg-white/50',
    projectCardBg: darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200',
    achievementBg: darkMode ? 'bg-gray-800/60' : 'bg-blue-50',
    highlightText: darkMode ? 'text-cyan-400' : 'text-cyan-600',
    statBg: darkMode ? 'bg-gray-800' : 'bg-white',
    statText: darkMode ? 'text-white' : 'text-gray-800',
    domainCardBg: darkMode ? 'bg-gray-800/80 hover:bg-gray-800' : 'bg-gray-50 hover:bg-white',
    domainCardBorder: darkMode ? 'border-gray-700' : 'border-gray-200',
    gradientText: 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600',
    sectionDivider: darkMode ? 'border-gray-700' : 'border-gray-300'
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center glitch">
            {content[language].title}
          </h1>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                <div className={`relative rounded-lg overflow-hidden ${styles.imageContainerBg} p-4`}>
                  <img
                    src="https://media.licdn.com/dms/image/v2/D5603AQFRyv2oupiAfA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692603108910?e=1747267200&v=beta&t=UMramLKqlOxKb-w-sF1s-77mulMD4H5vl_aAV4QF2NI"
                    alt="Profile"
                    className="rounded-lg w-full h-[400px] object-cover"
                  />
                </div>
              </div>

              <div className={`space-y-4 ${styles.cardBg} p-6 rounded-lg backdrop-blur-sm`}>
                <h3 className={`text-xl font-semibold ${styles.accentTitle}`}>
                  {content[language].connect}
                </h3>
                <div className="flex space-x-6">
                <motion.a
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  href="https://github.com/Thomasborn"
  className={styles.iconColor}
  aria-label="GitHub Profile"
  target="_blank" // Open in new tab
  rel="noopener noreferrer" // Recommended for security
>
  <Github size={24} />
</motion.a>
<motion.a
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  href="https://www.linkedin.com/in/thomas-edwin-suryo-prayogo-02670a212/"
  className={styles.iconColor}
  aria-label="LinkedIn Profile"
  target="_blank" // Open in new tab
  rel="noopener noreferrer" // Recommended for security
>
  <Linkedin size={24} />
</motion.a>
<motion.a
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  href="mailto:thomasedwinsuryo@gmail.com"
  className={styles.iconColor}
  aria-label="Email Contact"
>
  <Mail size={24} />
</motion.a>
<motion.a
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  href="https://www.instagram.com/thomshuft/"
  className={styles.iconColor}
  aria-label="Instagram"
  target="_blank" // Open in new tab

>
  <Instagram size={24} />
</motion.a>

                </div>
              </div>

              <div className={`${styles.cardBg} p-6 rounded-lg backdrop-blur-sm`}>
                <p className={`text-lg leading-relaxed mb-4 ${styles.bioText}`}>
                  {content[language].bio}
                </p>
                <p className={`font-medium ${styles.locationText}`}>
                  {content[language].location}
                </p>
              </div>

              <div className={`${styles.cardBg} p-6 rounded-lg backdrop-blur-sm`}>
                <h2 className={`text-2xl font-semibold mb-6 ${styles.accentTitle}`}>
                  {content[language].vision.title}
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Target className={styles.highlightText} size={20} />
                      <h3 className={`font-medium ${styles.highlightText}`}>Vision</h3>
                    </div>
                    <p className={styles.bioText}>{content[language].vision.vision}</p>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Code className={styles.highlightText} size={20} />
                      <h3 className={`font-medium ${styles.highlightText}`}>Mission</h3>
                    </div>
                    <p className={styles.bioText}>{content[language].vision.mission}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className={`${styles.cardBg} p-6 rounded-lg backdrop-blur-sm`}>
                <h2 className={`text-2xl font-semibold mb-6 ${styles.accentTitle}`}>
                  {content[language].experienceAndCerts.title}
                </h2>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className={`${styles.statBg} p-4 rounded-lg flex flex-col items-center justify-center text-center`}>
                    <Briefcase className={styles.iconColor} size={28} />
                    <p className={`font-semibold mt-2 ${styles.statText}`}>{content[language].experienceAndCerts.years}</p>
                  </div>
                  <div className={`${styles.statBg} p-4 rounded-lg flex flex-col items-center justify-center text-center`}>
                    <Award className={styles.iconColor} size={28} />
                    <p className={`font-semibold mt-2 ${styles.statText}`}>{content[language].experienceAndCerts.certifications}</p>
                  </div>
                  <div className={`${styles.statBg} p-4 rounded-lg flex flex-col items-center justify-center text-center`}>
                    <Users className={styles.iconColor} size={28} />
                    <p className={`font-semibold mt-2 ${styles.statText}`}>{content[language].experienceAndCerts.companies}</p>
                  </div>
                </div>
                <p className={`${styles.bioText} mb-6`}>
                  {content[language].experienceAndCerts.description}
                </p>
                <h3 className={`text-lg font-medium mb-3 ${styles.subTitle}`}>Key Achievements</h3>
                <div className="space-y-2">
                  {content[language].experienceAndCerts.achievements.map((achievement, idx) => (
                    <div key={idx} className={`${styles.achievementBg} p-3 rounded-lg ${styles.bioText}`}>
                      • {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className={`${styles.cardBg} p-8 rounded-lg backdrop-blur-sm mb-16`}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className={`text-2xl font-bold ${styles.accentTitle}`}>
                {content[language].projects.title}
              </h2>
              <span className={`px-4 py-1 rounded-full ${styles.techSkillBg} ${styles.techSkillText}`}>
                {content[language].projects.count}
              </span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {content[language].projects.featured.map((project, index) => (
                <div 
                  key={index} 
                  className={`${styles.projectCardBg} border p-5 rounded-lg transition-all duration-300 hover:shadow-lg`}
                >
                  <h3 className={`text-lg font-semibold mb-2 ${styles.headingText}`}>{project.name}</h3>
                  <p className={`text-sm mb-4 ${styles.bioText}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((tech, i) => (
                      <span 
                        key={i} 
                        className={`text-xs px-2 py-1 ${styles.techSkillBg} rounded-full ${styles.techSkillText}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}