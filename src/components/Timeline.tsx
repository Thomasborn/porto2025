import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineProps {
  darkMode: boolean;
}

export default function Timeline({ darkMode, language = 'en' }: TimelineProps & { language: 'en' | 'id' }) {
 const experiences = [
  {
    en: {
      title: "Software Developer",
      company: "CV Omah IT - Yogyakarta",
      date: "Jan 2024 - Feb 2025",
      description: [
        "Designed and developed application architecture, ensuring scalability, performance, and security across all systems.",
        "Maintained, tested, and optimized applications, managing 5+ Nginx and Apache servers in cloud environments, performing routine maintenance and updates on a monthly basis.",
        "Collaborated with cross-functional teams, and led data analysis and migration of engineering data."
      ]
    },
    id: {
      title: "Pengembang Perangkat Lunak",
      company: "CV Omah IT - Yogyakarta",
      date: "Jan 2024 - Feb 2025",
      description: [
        "Merancang dan mengembangkan arsitektur aplikasi, memastikan skalabilitas, performa, dan keamanan di seluruh sistem.",
        "Memelihara, menguji, dan mengoptimalkan aplikasi, mengelola lebih dari 5 server Nginx dan Apache di lingkungan cloud, serta melakukan pemeliharaan dan pembaruan rutin setiap bulan.",
        "Berkolaborasi dengan tim lintas fungsi, serta memimpin analisis data dan migrasi data teknik."
      ]
    }
  },
  {
    en: {
      title: "Backend Developer Intern",
      company: "Mitra Inti Bersama - Jakarta",
      date: "Sep 2023 - Dec 2024",
      description: [
        "Developed core ERP modules (Sales, User, Gateway) to streamline business processes.",
        "Designed and implemented software architecture for high scalability and maintainability.",
        "Built authentication services and middleware to secure and manage access across all ERP clients."
      ]
    },
    id: {
      title: "Magang Backend Developer",
      company: "Mitra Inti Bersama - Jakarta",
      date: "Sep 2023 - Dec 2024",
      description: [
        "Mengembangkan modul inti ERP (Penjualan, Pengguna, Gateway) untuk menyederhanakan proses bisnis.",
        "Merancang dan mengimplementasikan arsitektur perangkat lunak agar dapat diskalakan dan mudah dipelihara.",
        "Membangun layanan autentikasi dan middleware untuk mengamankan serta mengelola akses di seluruh klien ERP."
      ]
    }
  },
  {
    en: {
      title: "QA Intern",
      company: "Evermos - Bandung",
      date: "Feb 2024",
      description: [
        "Gained hands-on experience with Version Control Systems (VCS) and implemented best practices for code collaboration and version tracking.",
        "Performed Performance, Load, and Web Automation Testing using tools like K6 and Postman, ensuring system scalability and reliable functionality."
      ]
    },
    id: {
      title: "Magang QA",
      company: "Evermos - Bandung",
      date: "Feb 2024",
      description: [
        "Mendapat pengalaman langsung dengan Sistem Kontrol Versi (VCS) dan menerapkan praktik terbaik untuk kolaborasi kode serta pelacakan versi.",
        "Melakukan pengujian Kinerja, Beban, dan Otomasi Web menggunakan alat seperti K6 dan Postman, memastikan skalabilitas sistem dan fungsi yang andal."
      ]
    }
  },
  {
    en: {
      title: "Project-Based Internship Fullstack Developer",
      company: "BTPN Syariah - Jakarta",
      date: "Jan 2024",
      description: [
        "Developed backend services using Java and Golang, focusing on API integration and optimization.",
        "Built dynamic front-end applications with Vue.js and JavaScript, enhancing user interaction and responsiveness.",
        "Managed SQL databases for data storage and retrieval, while using Git for efficient version control and team collaboration."
      ]
    },
    id: {
      title: "Magang Berbasis Proyek Fullstack Developer",
      company: "BTPN Syariah - Jakarta",
      date: "Jan 2024",
      description: [
        "Mengembangkan layanan backend menggunakan Java dan Golang, dengan fokus pada integrasi dan optimasi API.",
        "Membangun aplikasi front-end dinamis dengan Vue.js dan JavaScript, meningkatkan interaksi dan responsivitas pengguna.",
        "Mengelola basis data SQL untuk penyimpanan dan pengambilan data, serta menggunakan Git untuk pengelolaan versi dan kolaborasi tim yang efisien."
      ]
    }
  },
  {
    en: {
      title: "Project-Based Internship Fullstack Developer",
      company: "Qwords - Jakarta",
      date: "Nov 2023 - Dec 2023",
      description: [
        "Engaged in end-to-end development processes, utilizing CodeIgniter 4 for backend development and Vue.js/React for frontend development.",
        "Worked on frontend development using Vue.js and React to create dynamic and interactive user interfaces."
      ]
    },
    id: {
      title: "Magang Berbasis Proyek Fullstack Developer",
      company: "Qwords - Jakarta",
      date: "Nov 2023 - Des 2023",
      description: [
        "Terlibat dalam proses pengembangan dari awal hingga akhir, menggunakan CodeIgniter 4 untuk pengembangan backend dan Vue.js/React untuk pengembangan frontend.",
        "Bekerja dalam pengembangan frontend menggunakan Vue.js dan React untuk menciptakan antarmuka pengguna yang dinamis dan interaktif."
      ]
    }
  },
  {
    en: {
      title: "Programmer Intern",
      company: "CV Omah IT - Yogyakarta",
      date: "Sep 2023 - Jan 2024",
      description: [
        "Developed and maintained websites, handling planning, coding, testing, debugging, and updates to ensure reliability and security.",
        "Collaborated with teams to achieve project goals, leveraging the latest web technologies for efficient and relevant solutions."
      ]
    },
    id: {
      title: "Magang Programmer",
      company: "CV Omah IT - Yogyakarta",
      date: "Sep 2023 - Jan 2024",
      description: [
        "Mengembangkan dan memelihara situs web, menangani perencanaan, pengkodean, pengujian, debugging, dan pembaruan untuk memastikan keandalan dan keamanan.",
        "Berkolaborasi dengan tim untuk mencapai tujuan proyek, memanfaatkan teknologi web terbaru untuk solusi yang efisien dan relevan."
      ]
    }
  },
  {
    en: {
      title: "Assistant Lecturer in IS Web Class",
      company: "Atma Jaya Yogyakarta University - Yogyakarta",
      date: "Jan 2023 - Sep 2023",
      description: [
        "Assisted the course instructor in preparing course materials, syllabi, assignments, and projects for the Information System Web class.",
        "Provided guidance and support to 120 students, conducted regular office hours, and offered feedback on assignments and projects.",
        "Offered assistance in understanding course materials, clarifying concepts, and troubleshooting technical issues."
      ]
    },
    id: {
      title: "Asisten Dosen Kelas Sistem Informasi Web",
      company: "Universitas Atma Jaya Yogyakarta - Yogyakarta",
      date: "Jan 2023 - Sep 2023",
      description: [
        "Membantu dosen dalam menyiapkan materi kuliah, silabus, tugas, dan proyek untuk kelas Sistem Informasi Web.",
        "Memberikan bimbingan dan dukungan kepada 120 mahasiswa, mengadakan jam konsultasi rutin, serta memberikan umpan balik terhadap tugas dan proyek.",
        "Membantu mahasiswa dalam memahami materi kuliah, menjelaskan konsep, serta menyelesaikan masalah teknis."
      ]
    }
  },
  {
    en: {
      title: "Assistant Lecturer in OOP Class",
      company: "Atma Jaya Yogyakarta University - Yogyakarta",
      date: "Jul 2022 - Jan 2023",
      description: [
        "Collaborated with senior lecturers to develop the curriculum for the Object Oriented Programming course using Java.",
        "Delivered engaging lectures, conducted interactive discussions, and facilitated hands-on coding exercises to teach essential object-oriented programming concepts such as encapsulation, inheritance, polymorphism, and design patterns."
      ]
    },
    id: {
      title: "Asisten Dosen Kelas OOP",
      company: "Universitas Atma Jaya Yogyakarta - Yogyakarta",
      date: "Jul 2022 - Jan 2023",
      description: [
        "Berkolaborasi dengan dosen senior dalam mengembangkan kurikulum untuk mata kuliah Pemrograman Berorientasi Objek menggunakan Java.",
        "Menyampaikan kuliah interaktif, mengadakan diskusi, serta memfasilitasi latihan coding untuk mengajarkan konsep pemrograman berorientasi objek seperti enkapsulasi, pewarisan, polimorfisme, dan pola desain."
      ]
    }
  }
];

  
return (
  <VerticalTimeline lineColor={darkMode ? '#4B5563' : '#E5E7EB'}>
    {experiences.map((exp, index) => {
      const expData = exp[language]; // Select the correct language

      return (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element"
          contentStyle={{
            background: darkMode ? '#1F2937' : '#FFFFFF',
            color: darkMode ? '#FFFFFF' : '#1F2937',
            boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'
          }}
          contentArrowStyle={{
            borderRight: `7px solid ${darkMode ? '#1F2937' : '#FFFFFF'}`
          }}
          date={expData.date}
          iconStyle={{
            background: darkMode ? '#3B82F6' : '#2563EB',
            color: '#FFFFFF'
          }}
          icon={<Briefcase />} // Adjust this if you have different icons for education/work
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">
            {expData.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-blue-500 mt-2">
            {expData.company}
          </h4>
          <ul className="mt-4 list-disc list-inside">
            {expData.description.map((item, i) => (
              <li key={i} className="text-sm">{item}</li>
            ))}
          </ul>
        </VerticalTimelineElement>
      );
    })}
  </VerticalTimeline>
);
}