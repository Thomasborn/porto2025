import { motion } from 'framer-motion';
import { Book, Code, Award, ExternalLink, Calendar, Trophy, Briefcase, GraduationCap } from 'lucide-react';

interface EducationPageProps {
  language: 'en' | 'id';
  darkMode: boolean;
}

export default function EducationPage({ language, darkMode }: EducationPageProps) {
  const content = {
    en: {
      title: "Education & Professional Development",
      education: {
        title: "Academic",
        degree: "Bachelor of Information Systems",
        university: "Atma Jaya Yogyakarta University",
        period: "August 2020 - May 2024",
        gpa: "GPA: 3.90/4.00",
        description: "Specialized in Enterprise Information Systems with focus on software architecture and cloud infrastructure. Graduated with distinction in the top 5% of the class.",
        achievements: [
          {
            title: "Assistant Lecturer for Object Oriented Programming",
            period: "July 2022 - January 2023",
            description: "Led practical sessions for 65+ students, designed programming exercises, and provided detailed code reviews to improve student learning outcomes."
          },
          {
            title: "Assistant Lecturer for Information Systems Web Class",
            period: "January 2023 - September 2023",
            description: "Facilitated web development workshops, mentored 55+ students on modern web technologies, and evaluated project-based assignments."
          },
          
        ],
        courses: [
          "Advanced Database Systems",
          "System Architecture",
          "Enterprise Application Development",
          "Information Security Management",
          "Software Engineering Methodologies"
        ]
      },
      certifications: {
        title: "Professional Certifications & Achievements",
        list: [
          {
            name: "MySQL Certification",
            issuer: "TestDome",
            date: "March 2025",
            description: "Demonstrated proficiency in MySQL database management and advanced SQL queries.",
            link: "https://www.testdome.com/certificates/5996abf8f486473a921d7977f0c1b78a"
          },
          {
            name: "SQL (Advanced)",
            issuer: "HackerRank",
            date: "March 2025",
            description: "Advanced certification in complex SQL operations, optimization techniques, and database performance tuning.",
            link: "https://www.hackerrank.com/certificates/8df426c7ab63"
          },
          {
            name: "SQL (Intermediate)",
            issuer: "HackerRank",
            date: "March 2025", 
            description: "Certification in intermediate SQL concepts including joins, subqueries, and PL/SQL fundamentals.",
            link: "https://www.hackerrank.com/certificates/0e897f2bd06b"
          },
          {
            "name": "REST API",
            "issuer": "HackerRank",
            "date": "March 2025",
            "description": "This certificate validates the completion of the REST API course, demonstrating proficiency in designing and implementing RESTful web services.",
            "link": "https://www.hackerrank.com/certificates/iframe/76ffbf7d5337"
          },
          
          {
            name: "Problem Solving (Basic)",
            issuer: "HackerRank",
            date: "March 2025",
            description: "Certification demonstrating essential problem-solving and algorithmic skills.",
            link: "https://www.hackerrank.com/certificates/a4f76fe19676"
          },
          {
            name: "Laravel",
            issuer: "Coding Studio",
            date: "December 2024",
            description: "Comprehensive certification in Laravel framework covering MVC architecture, e-commerce implementation, localization, testing, and full-stack development practices.",
            link: "https://drive.google.com/file/d/13IASRSFGeb1_-bPkEvsSr0YuBBD1crvm/view"
          },
          {
            name: "English Score Core Skills",
            issuer: "British Council",
            date: "June 2024",
            description: "Certification validating professional English language proficiency and communication skills.",
            link: "https://drive.google.com/file/d/1NkvEwwC_XvRniD6I_LyrF8yuESceEkXt/view"
          },
          {
            name: "Kickstart Teamwork Journey",
            issuer: "Rakamin Academy",
            date: "January 2024",
            description: "Certification in effective teamwork principles and team management strategies.",
            link: "https://drive.google.com/file/d/1ZHGmCP3u3KJ9c_i-phBJP2ZDbbSyEUXC/view"
          },
          {
            name: "Kickstart Design Thinking",
            issuer: "Rakamin Academy",
            date: "January 2024",
            description: "Certification in has participated in Flexible Kickstart Design Thinking Journey organized by Rakamin Academy",
            link: "https://drive.google.com/file/d/1JK_B_gGsS4SygLOUbLN6aZnQlEGagL6V/view"
          },
          {
            name: "Cloud Practitioner Essentials (AWS Cloud)",
            issuer: "Dicoding Indonesia",
            date: "December 2023",
            description: "Foundational certification in AWS cloud services, infrastructure, security, and deployment models.",
            link: "https://www.dicoding.com/certificates/N9ZOO56YDZG5"
          },
          {
            name: "Fullstack Web Development Journey",
            issuer: "Rakamin Academy",
            date: "December 2023",
            description: "Comprehensive certification in full-stack web development methodologies and practices.",
            link: "https://drive.google.com/file/d/1t3peZnWBg8QsFppp2u6YHcrvfYolg1fU/view?usp=sharing"
          },
          {
            name: "Back-End Development for Beginners",
            issuer: "Dicoding Indonesia",
            date: "December 2023",
            description: "Certification in back-end development fundamentals including API development with Node.js, hapi.js, and Express.js.",
            link: "https://www.dicoding.com/certificates/2VX3O60QQZYQ"
          },
          {
            name: "JavaScript Programming Fundamentals",
            issuer: "Dicoding Indonesia",
            date: "December 2023",
            description: "Certification in JavaScript fundamentals including OOP and functional programming paradigms.",
            link: "https://www.dicoding.com/certificates/0LZ02Q9KNX65"
          },
          {
            name: "SAP01",
            issuer: "SAP",
            date: "July 2023",
            description: "Foundational certification in SAP ERP systems and business process integration.",
            link: "https://drive.google.com/file/d/1CepMvY6C_OopE1ZDuJXl12m0q5UaJYw7/view"
          },
          {
            name: "Information Security Management Systems–ISO/IEC27001:2013",
            issuer: "CBQA Global Indonesia",
            date: "December 2022",
            description: "Certification in implementing, maintaining, and auditing information security management systems according to international standards.",
            link: "https://drive.google.com/drive/folders/1NLQ_wM2D6zUP0H0_hIkBhHqLVbvn4BLr"
          }
        ]
      },
      skills: {
        title: "Technical Expertise & Competencies",
        categories: [
          {
            name: "Frontend Development",
            description: "Creating responsive, accessible, and performant user interfaces with modern frameworks and libraries.",
            skills: [
              { name: "React", proficiency: 90 },
              { name: "Vue.js", proficiency: 85 },
              { name: "JavaScript/TypeScript", proficiency: 95 },
              { name: "Tailwind CSS", proficiency: 90 },
              { name: "Next.js", proficiency: 80 },
              { name: "Responsive Design", proficiency: 95 }
            ]
          },
          {
            name: "Backend Development",
            description: "Building scalable, secure, and maintainable server-side applications and APIs.",
            skills: [
              { name: "Node.js", proficiency: 90 },
              { name: "Java", proficiency: 85 },
              { name: "Golang", proficiency: 80 },
              { name: "CodeIgniter 4", proficiency: 95 },
              { name: "Laravel", proficiency: 95 },
              { name: "RESTful API Design", proficiency: 90 },
              { name: "Python", proficiency: 90 }
            ]
          },
          {
            name: "DevOps & Infrastructure",
            description: "Implementing continuous integration/deployment pipelines and managing cloud infrastructure.",
            skills: [
              { name: "Nginx", proficiency: 85 },
              { name: "Apache", proficiency: 80 },
              { name: "Git/GitHub", proficiency: 95 },
              { name: "AWS", proficiency: 85 },
              { name: "Docker", proficiency: 90 },
              { name: "CI/CD Pipelines", proficiency: 85 },
              { name: "Linux Server Administration", proficiency: 80 }
            ]
          },
          {
            name: "Professional Competencies",
            description: "Complementary skills essential for effective collaboration and project delivery.",
            skills: [
              { name: "English Proficiency", proficiency: 95 },
              { name: "Team Leadership", proficiency: 90 },
              { name: "Technical Communication", proficiency: 95 },
              { name: "Project Management", proficiency: 85 },
              { name: "Problem Solving", proficiency: 95 },
              { name: "Agile Methodologies", proficiency: 90 },
              { name: "Technical Documentation", proficiency: 90 }
            ]
          }
        ]
      }
    },
    id: {
      title: "Pendidikan & Pengembangan Profesional",
      education: {
        title: "Keunggulan Akademis",
        degree: "Sarjana Sistem Informasi",
        university: "Universitas Atma Jaya Yogyakarta",
        period: "Agustus 2020 - Mei 2024",
        gpa: "IPK: 3.90/4.00",
        description: "Spesialisasi dalam Sistem Informasi Perusahaan dengan fokus pada arsitektur perangkat lunak dan infrastruktur cloud. Lulus dengan predikat cum laude dalam 5% terbaik di kelas.",
        achievements: [
          {
            title: "Asisten Dosen Pemrograman Berorientasi Objek",
            period: "Juli 2022 - Januari 2023",
            description: "Memimpin sesi praktikum untuk 65+ mahasiswa, merancang latihan pemrograman, dan memberikan ulasan kode yang detail untuk meningkatkan hasil belajar mahasiswa."
          },
          {
            title: "Asisten Dosen Kelas Web Sistem Informasi",
            period: "Januari 2023 - September 2023",
            description: "Memfasilitasi lokakarya pengembangan web, membimbing 55+ mahasiswa tentang teknologi web modern, dan mengevaluasi tugas berbasis proyek."
          },
          {
            title: "Dukungan Teknis & Bimbingan Akademis",
            description: "Mendukung 120+ mahasiswa dengan bimbingan teknis yang dipersonalisasi, mengembangkan materi pembelajaran tambahan, dan menyelenggarakan sesi tutorial tambahan untuk topik-topik yang menantang."
          }
        ],
        courses: [
          "Sistem Basis Data Lanjut",
          "Arsitektur Komputasi Awan",
          "Pengembangan Aplikasi Perusahaan",
          "Manajemen Keamanan Informasi",
          "Metodologi Rekayasa Perangkat Lunak"
        ]
      },
      certifications: {
        title: "Sertifikasi & Pencapaian Profesional",
list: [
{
name: "Sertifikasi MySQL",
issuer: "TestDome",
date: "Maret 2025",
description: "Menunjukkan kemahiran dalam manajemen database MySQL dan query SQL tingkat lanjut.",
link: "https://www.testdome.com/certificates/5996abf8f486473a921d7977f0c1b78a"
},
{
name: "SQL (Tingkat Lanjut)",
issuer: "HackerRank",
date: "Maret 2025",
description: "Sertifikasi tingkat lanjut dalam operasi SQL kompleks, teknik optimasi, dan penyetelan kinerja database.",
link: "https://www.hackerrank.com/certificates/8df426c7ab63"
},
{
name: "SQL (Menengah)",
issuer: "HackerRank",
date: "Maret 2025",
description: "Sertifikasi dalam konsep SQL tingkat menengah termasuk joins, subqueries, dan dasar-dasar PL/SQL.",
link: "https://www.hackerrank.com/certificates/0e897f2bd06b"
},
{
  "name": "REST API",
  "issuer": "HackerRank",
  "date": "Maret 2025",
  "description": "Sertifikat ini memvalidasi penyelesaian kursus REST API, menunjukkan kemampuan dalam merancang dan mengimplementasikan layanan web RESTful.",
  "link": "https://www.hackerrank.com/certificates/iframe/76ffbf7d5337"
}
,
{
name: "Pemecahan Masalah (Dasar)",
issuer: "HackerRank",
date: "Maret 2025",
description: "Sertifikasi yang menunjukkan keterampilan pemecahan masalah dan algoritma yang esensial.",
link: "https://www.hackerrank.com/certificates/a4f76fe19676"
},
{
name: "Laravel",
issuer: "Coding Studio",
date: "Desember 2024",
description: "Sertifikasi komprehensif dalam framework Laravel yang mencakup arsitektur MVC, implementasi e-commerce, lokalisasi, pengujian, dan praktik pengembangan full-stack.",
link: "https://drive.google.com/file/d/13IASRSFGeb1_-bPkEvsSr0YuBBD1crvm/view"
},
{
name: "English Score Core Skills",
issuer: "British Council",
date: "Juni 2024",
description: "Sertifikasi yang memvalidasi kemahiran bahasa Inggris profesional dan keterampilan komunikasi.",
link: "https://drive.google.com/file/d/1NkvEwwC_XvRniD6I_LyrF8yuESceEkXt/view"
},
{
name: "Kickstart Teamwork Journey",
issuer: "Rakamin Academy",
date: "Januari 2024",
description: "Sertifikasi dalam prinsip kerja tim yang efektif dan strategi manajemen tim.",
link: "https://drive.google.com/file/d/1ZHGmCP3u3KJ9c_i-phBJP2ZDbbSyEUXC/view"
},
{
name: "Kickstart Design Thinking",
issuer: "Rakamin Academy",
date: "Januari 2024",
description: "Sertifikasi telah berpartisipasi dalam Flexible Kickstart Design Thinking Journey yang diselenggarakan oleh Rakamin Academy",
link: "https://drive.google.com/file/d/1JK_B_gGsS4SygLOUbLN6aZnQlEGagL6V/view"
},
{
name: "Cloud Practitioner Essentials (AWS Cloud)",
issuer: "Dicoding Indonesia",
date: "Desember 2023",
description: "Sertifikasi dasar dalam layanan cloud AWS, infrastruktur, keamanan, dan model penerapan.",
link: "https://www.dicoding.com/certificates/N9ZOO56YDZG5"
},
{
name: "Fullstack Web Development Journey",
issuer: "Rakamin Academy",
date: "Desember 2023",
description: "Sertifikasi komprehensif dalam metodologi dan praktik pengembangan web full-stack.",
link: "https://drive.google.com/file/d/1t3peZnWBg8QsFppp2u6YHcrvfYolg1fU/view?usp=sharing"
},
{
name: "Pengembangan Back-End untuk Pemula",
issuer: "Dicoding Indonesia",
date: "Desember 2023",
description: "Sertifikasi dalam dasar-dasar pengembangan back-end termasuk pengembangan API dengan Node.js, hapi.js, dan Express.js.",
link: "https://www.dicoding.com/certificates/2VX3O60QQZYQ"
},
{
name: "Dasar-Dasar Pemrograman JavaScript",
issuer: "Dicoding Indonesia",
date: "Desember 2023",
description: "Sertifikasi dalam dasar-dasar JavaScript termasuk paradigma OOP dan pemrograman fungsional.",
link: "https://www.dicoding.com/certificates/0LZ02Q9KNX65"
},
{
name: "SAP01",
issuer: "SAP",
date: "Juli 2023",
description: "Sertifikasi dasar dalam sistem SAP ERP dan integrasi proses bisnis.",
link: "https://drive.google.com/file/d/1CepMvY6C_OopE1ZDuJXl12m0q5UaJYw7/view"
},
{
name: "Sistem Manajemen Keamanan Informasi–ISO/IEC27001:2013",
issuer: "CBQA Global Indonesia",
date: "Desember 2022",
description: "Sertifikasi dalam mengimplementasikan, memelihara, dan mengaudit sistem manajemen keamanan informasi sesuai dengan standar internasional.",
link: "https://drive.google.com/drive/folders/1NLQ_wM2D6zUP0H0_hIkBhHqLVbvn4BLr"
}
]
      },
      skills: {
        title: "Keahlian Teknis & Kompetensi",
        categories: [
          {
            name: "Pengembangan Frontend",
            description: "Membuat antarmuka pengguna yang responsif, aksesibel, dan berkinerja tinggi dengan framework dan library modern.",
            skills: [
              { name: "React", proficiency: 90 },
              { name: "Vue.js", proficiency: 85 },
              { name: "JavaScript/TypeScript", proficiency: 95 },
              { name: "Tailwind CSS", proficiency: 90 },
              { name: "Next.js", proficiency: 80 },
              { name: "Desain Responsif", proficiency: 95 }
            ]
          },
          {
            name: "Pengembangan Backend",
            description: "Membangun aplikasi dan API sisi server yang skalabel, aman, dan mudah dipelihara.",
            skills: [
              { name: "Node.js", proficiency: 90 },
              { name: "Java", proficiency: 85 },
              { name: "Golang", proficiency: 80 },
              { name: "CodeIgniter 4", proficiency: 95 },
              { name: "Laravel", proficiency: 95 },
              { name: "Desain API RESTful", proficiency: 90 },
              { name: "Python", proficiency: 90 }
            ]
          },
          {
            name: "DevOps & Infrastruktur",
            description: "Mengimplementasikan pipeline integrasi/deployment berkelanjutan dan mengelola infrastruktur cloud.",
            skills: [
              { name: "Nginx", proficiency: 85 },
              { name: "Apache", proficiency: 80 },
              { name: "Git/GitHub", proficiency: 95 },
              { name: "AWS", proficiency: 85 },
              { name: "Docker", proficiency: 90 },
              { name: "Pipeline CI/CD", proficiency: 85 },
              { name: "Administrasi Server Linux", proficiency: 80 }
            ]
          },
          {
            name: "Kompetensi Profesional",
            description: "Keterampilan pelengkap yang penting untuk kolaborasi dan pengiriman proyek yang efektif.",
            skills: [
              { name: "Kemampuan Bahasa Inggris", proficiency: 95 },
              { name: "Kepemimpinan Tim", proficiency: 90 },
              { name: "Komunikasi Teknis", proficiency: 95 },
              { name: "Manajemen Proyek", proficiency: 85 },
              { name: "Pemecahan Masalah", proficiency: 95 },
              { name: "Metodologi Agile", proficiency: 90 },
              { name: "Dokumentasi Teknis", proficiency: 90 }
            ]
          }
        ]
      }
    }
  };

  // Function to render skill bars
  const renderSkillBar = (proficiency: number) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
        <div 
          className="bg-blue-500 h-2.5 rounded-full" 
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className={`min-h-screen py-20 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center glitch">
            {content[language].title}
          </h1>
          
          <div className="text-center mb-16">
            <div className={`h-1 w-24 mx-auto ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} my-4`}></div>
            <p className="text-xl max-w-3xl mx-auto">
              {language === 'en' 
                ? "A comprehensive overview of my academic journey, professional certifications, and technical expertise"
                : "Gambaran komprehensif perjalanan akademis, sertifikasi profesional, dan keahlian teknis saya"}
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-16"
          >
            {/* Education Section */}
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/70' : 'bg-white'} shadow-xl border-t-4 border-blue-500`}
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`} size={32} />
                <h2 className={`text-3xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {content[language].education.title}
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold">{content[language].education.degree}</h3>
                  <p className={`text-xl ${darkMode ? 'text-blue-300' : 'text-blue-600'} font-medium`}>
                    {content[language].education.university}
                  </p>
                  
                  <div className="flex items-center gap-2 mt-2 text-gray-400">
                    <Calendar size={16} />
                    <p>{content[language].education.period}</p>
                  </div>
                  
                  <p className={`text-lg font-medium mt-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                    {content[language].education.gpa}
                  </p>
                  
                  <p className="mt-4 text-gray-400">
                    {content[language].education.description}
                  </p>
                </div>

                <div>
                  <h4 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                    {language === 'en' ? "Key Achievements" : "Pencapaian Utama"}
                  </h4>
                  
                  <div className="space-y-6">
                    {content[language].education.achievements.map((achievement, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="mt-1">
                          <Trophy size={20} className={`${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`} />
                        </div>
                        <div>
                          <h5 className="text-lg font-medium">{achievement.title}</h5>
                          {achievement.period && (
                            <p className="text-sm text-gray-400">{achievement.period}</p>
                          )}
                          <p className="mt-1">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                    {language === 'en' ? "Relevant Coursework" : "Mata Kuliah Relevan"}
                  </h4>
                  
                  <div className="flex flex-wrap gap-2">
                    {content[language].education.courses.map((course, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/70' : 'bg-white'} shadow-xl border-t-4 border-purple-500`}
            >
              <div className="flex items-center gap-3 mb-8">
                <Award className={`${darkMode ? 'text-purple-400' : 'text-purple-600'}`} size={32} />
                <h2 className={`text-3xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                  {content[language].certifications.title}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {content[language].certifications.list.map((cert, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-lg ${
                      darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
                    } transition-all`}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold">{cert.name}</h3>
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full hover:bg-opacity-10 ${
                          darkMode ? 'hover:bg-white' : 'hover:bg-gray-200'
                        }`}
                      >
                        <ExternalLink size={16} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                      <Briefcase size={14} />
                      <p>{cert.issuer}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                      <Calendar size={14} />
                      <p>{cert.date}</p>
                    </div>
                    
                    <p className="mt-3 text-sm">{cert.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/70' : 'bg-white'} shadow-xl border-t-4 border-green-500`}
            >
              <div className="flex items-center gap-3 mb-8">
                <Code className={`${darkMode ? 'text-green-400' : 'text-green-600'}`} size={32} />
                <h2 className={`text-3xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  {content[language].skills.title}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                {content[language].skills.categories.map((category, index) => (
                  <div key={index} className="space-y-5">
                    <div>
                      <h3 className={`text-xl font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">{category.description}</p>
                    </div>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-gray-400">{skill.proficiency}%</span>
                          </div>
                          {renderSkillBar(skill.proficiency)}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}