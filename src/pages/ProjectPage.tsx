import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Search, Filter, Github, Twitter, Linkedin, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import GitHubProjectsSection from './GithubProjectSection';

interface Technology {
  name: string;
  icon: string;
  color: string;
}

interface Project {
  id: string;
  title: string;
  type: string;
  date: string;
  client: string;
  objective: {
    en: string;
    id: string;
  };
  description: {
    en: string;
    id: string;
  };
  technologies: Technology[];
  images: string[];
  github: string;
  demo: string;
  tags: string[];
}

interface PortfolioPageProps {
  language: 'en' | 'id';
  darkMode: boolean;
}

const showcaseCards = [
  {
    title: "Analytics Dashboard",
    image: "images/portfolio2.png",
    position: "left",
    rotate: -15
  },
  {
    title: "Social Media App",
    image: "https://thomshuft.web.app/img/app-project-3.ecedb16a.png",
    position: "left",
    rotate: 5
  },
  {
    title: "E-commerce Platform",
    image: "https://thomshuft.web.app/img/app-project-4-2.14578b97.png",
    position: "right",
    rotate: 15
  },
  {
    title: "Fashion",
    image: "images/portfolio1.png",
    position: "right",
    rotate: -5
  }
];

const techLogos = [
  { name: 'React', color: '#61DAFB', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'TypeScript', color: '#3178C6', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  { name: 'Next.js', color: '#00ADD8', image: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
  { name: 'Node.js', color: '#68A063', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'Python', color: '#3776AB', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'Docker', color: '#2496ED', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg' },
  { name: 'Vue.js', color: '#42B883', image: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
  { name: 'Go', color: '#00ADD8', image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg' },
  { name: 'Laravel', color: '#FF2D20', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg' },
  { name: 'Nginx', color: '#009639', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg' },
  { name: 'CodeIgniter', color: '#EE4623', image: 'https://www.exabytes.co.id/blog/wp-content/uploads/2023/08/codeigniter-adalah-540x641.png' },
  { name: 'jQuery', color: '#0769AD', image:'https://belajarapaaja.net/wp-content/uploads/2023/02/JQuery-Logo.wine_.png' }
];

const translations = {
  en: {
    projectShowcase: "Project Showcase",
    searchProjects: "Search projects...",
    softwareDeveloper: "Software Developer",
    buildingExperiences: "Building digital experiences that matter",
    client: "Client",
    type: "Type",
    objective: "Objective",
    description: "Description",
    technologies: "Technologies",
    viewCode: "View Code",
    liveDemo: "Live Demo",
    share: "Share",
    projectTypes: [
      'All',
      'Web Development',
      'Desktop Applications',
      'UI/UX Design',
      'Mobile Applications',
      'Data Engineering',
      'DevOps',
    ]
  },
  id: {
    projectShowcase: "Galeri Proyek",
    searchProjects: "Cari proyek...",
    softwareDeveloper: "Pengembang Perangkat Lunak",
    buildingExperiences: "Membangun pengalaman digital yang bermakna",
    client: "Klien",
    type: "Tipe",
    objective: "Tujuan",
    description: "Deskripsi",
    technologies: "Teknologi",
    viewCode: "Lihat Kode",
    liveDemo: "Demo Langsung",
    share: "Bagikan",
    projectTypes: [
      'Semua',
      'Pengembangan Web',
      'Aplikasi Desktop',
      'Desain UI/UX',
      'Aplikasi Mobile',
      'Teknik Data',
      'DevOps',
    ]
  }
};

const projects: Project[] = [
  {
    id: '1',
    title: 'Lori Lurik',
    type: 'Web Development',
    date: '2024-07',
    client: 'Local Brand Wear Lori Lurik',
    objective: {
      en: 'Develop a system to manage sales and inventory for Wear Lori Lurik.',
      id: 'Mengembangkan sistem untuk mengelola penjualan dan inventaris untuk Wear Lori Lurik.'
    },
    description: {
      en: 'A web-based management system for sales and inventory, utilizing a robust back-end to support transactions and data management.',
      id: 'Sistem manajemen berbasis web untuk penjualan dan inventaris, menggunakan back-end yang kuat untuk mendukung transaksi dan pengelolaan data.'
    },
    technologies: [
      { name: 'Vue', icon: 'vue', color: '#61DAFB' },
      { name: 'Node.js', icon: 'nodejs', color: '#42B883' },
      { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
    ],
    images: ['/images/lori1.png','images/lori2.png'],
    github: '-',
    demo: '-',
    tags: ['AI', 'Visualization', 'Web'],
  },
  {
    id: '2',
    title: 'Dandang POS',
    type: 'Web Development',
    date: '2024-05',
    client: 'PT.KARTINI TEH NASIONAL',
    objective: {
      en: 'Develop a point-of-sale (POS) system to streamline retail operations and transactions.',
      id: 'Mengembangkan sistem point-of-sale (POS) untuk mengoptimalkan operasi ritel dan transaksi.'
    },
    description: {
      en: 'A web-based POS system featuring sales management, transaction tracking, and reporting functionalities for efficient business operations.',
      id: 'Sistem POS berbasis web dengan fitur manajemen penjualan, pelacakan transaksi, dan fungsi pelaporan untuk operasi bisnis yang efisien.'
    },
    technologies: [
      { name: 'Vue', icon: 'vue', color: '#61DAFB' },
      { name: 'Laravel', icon: 'laravel', color: '#FF2D20' },
      { name: 'FastAPI', icon: 'fastapi', color: '#009688' },
    ],
    images: ['/images/dandang1.png'],
    github: '-',
    demo: '-',
    tags: ['Quantum', 'Dashboard', 'Analytics'],
  }, 
  {
    id: '3',
    title: 'Dandang ERP',
    type: 'Web Development',
    date: '2024-01',
    client: 'PT.KARTINI TEH NASIONAL',
    objective: {
      en: 'Build an enterprise resource planning (ERP) system to manage business operations efficiently.',
      id: 'Membangun sistem enterprise resource planning (ERP) untuk mengelola operasi bisnis secara efisien.'
    },
    description: {
      en: 'A comprehensive ERP system that integrates supply chain, finance, and human resources into a single platform.',
      id: 'Sistem ERP komprehensif yang mengintegrasikan rantai pasokan, keuangan, dan sumber daya manusia ke dalam satu platform.'
    },
    technologies: [
      { name: 'LiveWire', icon: 'livewire', color: '#61DAFB' },
      { name: 'Laravel', icon: 'laravel', color: '#FF2D20' },
      { name: 'Docker', icon: 'docker', color: '#2496ED' },
    ],
    images: ['/images/dandangerp.png'],
    github: '-',
    demo: '-',
    tags: ['Quantum', 'Dashboard', 'Analytics'],
  },
  {
    id: '4',
    title: 'Migration',
    type: 'Data Engineering',
    date: '2024-01',
    client: 'PT.KARTINI TEH NASIONAL',
    objective: {
      en: 'Migrate legacy data to a new system while ensuring data integrity and consistency.',
      id: 'Migrasi data lama ke sistem baru sambil memastikan integritas dan konsistensi data.'
    },
    description: {
      en: 'A data migration project utilizing Python and Excel for smooth transition from old databases to modern infrastructure.',
      id: 'Proyek migrasi data menggunakan Python dan Excel untuk transisi yang lancar dari database lama ke infrastruktur modern.'
    },
    technologies: [
      { name: 'Python', icon: 'python', color: '#61DAFB' },
      { name: 'Excel', icon: 'excel', color: '#F9A03C' },
      { name: 'Nginx', icon: 'nginx', color: '#009688' },
    ],
    images: [
      '/images/migration(1).jpg',
      '/images/migration(2).jpg',
    ],
    github: '-',
    demo: '-',
    tags: ['Quantum', 'Dashboard', 'Analytics'],
  },
  {
    id: '5',
    title: 'MerchSekai',
    type: 'UI/UX Design',
    date: '2024-01',
    client: 'Confidential',
    objective: {
      en: 'Design an intuitive and modern e-commerce interface for merchandising.',
      id: 'Merancang antarmuka e-commerce yang intuitif dan modern untuk merchandising.'
    },
    description: {
      en: 'MerchSekai is a UI/UX design project focused on creating an optimized shopping experience for users. The design emphasizes user-friendly navigation and aesthetic appeal.',
      id: 'MerchSekai adalah proyek desain UI/UX yang berfokus pada pembuatan pengalaman belanja yang optimal bagi pengguna. Desain ini menekankan navigasi yang mudah digunakan dan daya tarik estetika.'
    },
    technologies: [
      { name: 'Figma', icon: 'figma', color: '#F24E1E' },
      { name: 'Balsamiq', icon: 'balsamiq', color: '#F9A03C' },
    ],
    images: [
      'https://thomshuft.web.app/img/app-project-4-1.29c2c457.png',
      'https://thomshuft.web.app/img/app-project-4-2.14578b97.png',
      'https://thomshuft.web.app/img/app-project-4-3.332f5d5b.png',
    ],
    github: '-',
    demo: '-',
    tags: ['E-commerce', 'UI/UX', 'Prototyping'],
  },
  {
    id: '6',
    title: 'WAMS ERP',
    type: 'Web Development',
    date: '2024-01',
    client: 'MIB',
    objective: {
      en: 'Develop an ERP system for warehouse and inventory management.',
      id: 'Mengembangkan sistem ERP untuk manajemen gudang dan inventaris.'
    },
    description: {
      en: 'WAMS ERP is a web-based enterprise resource planning system aimed at optimizing warehouse management, inventory tracking, and business operations.',
      id: 'WAMS ERP adalah sistem perencanaan sumber daya perusahaan berbasis web yang bertujuan untuk mengoptimalkan manajemen gudang, pelacakan inventaris, dan operasi bisnis.'
    },
    technologies: [
      { name: 'Vue', icon: 'vue', color: '#42B883' },
      { name: 'Laravel', icon: 'laravel', color: '#FF2D20' },
      { name: 'Docker', icon: 'docker', color: '#2496ED' },
    ],
    images: [
      '/images/wams1.png',
      '/images/wams2.png',
    ],
    github: '-',
    demo: '-',
    tags: ['ERP', 'Inventory', 'Business Management'],
  },
  {
    id: '7',
    title: 'Gateway',
    type: 'Web Development',
    date: '2024-01',
    client: 'MIB',
    objective: {
      en: 'Develop a secure and scalable API gateway for enterprise applications.',
      id: 'Mengembangkan API gateway yang aman dan dapat diskalakan untuk aplikasi perusahaan.'
    },
    description: {
      en: 'Gateway is a backend solution designed to manage API requests, ensuring secure, reliable, and scalable access to services within the enterprise ecosystem.',
      id: 'Gateway adalah solusi backend yang dirancang untuk mengelola permintaan API, memastikan akses yang aman, andal, dan dapat diskalakan ke layanan dalam ekosistem perusahaan.'
    },
    technologies: [
      { name: 'Laravel', icon: 'laravel', color: '#FF2D20' },
      { name: 'Go', icon: 'go', color: '#00ADD8' },
      { name: 'Docker', icon: 'docker', color: '#2496ED' },
    ],
    images: [
      '/images/gateway (1).jpg',
      '/images/gateway (2).jpg',
    ],
    github: '-',
    demo: '-',
    tags: ['API', 'Security', 'Scalability'],
  },
  {
    id: '8',
    title: 'Smook',
    type: 'UI/UX Design',
    date: '2024-01',
    client: 'Confidential',
    objective: {
      en: 'Design a modern and engaging social networking platform.',
      id: 'Mendesain platform jejaring sosial yang modern dan menarik.'
    },
    description: {
      en: 'Smook is a UI/UX project focused on creating an interactive and visually appealing social media platform for user engagement and communication.',
      id: 'Smook adalah proyek UI/UX yang berfokus pada pembuatan platform media sosial yang interaktif dan menarik secara visual untuk keterlibatan dan komunikasi pengguna.'
    },
    technologies: [
      { name: 'Figma', icon: 'figma', color: '#F24E1E' },
    ],
    images: [
      'https://thomshuft.web.app/img/app-project-3.ecedb16a.png',
      'https://thomshuft.web.app/img/app-project-3-1.f55cc41e.png',
      'https://thomshuft.web.app/img/app-project-3-3.f58617fb.png',
    ],
    github: '-',
    demo: '-',
    tags: ['Social Media', 'UI/UX', 'Prototyping'],
  },
  {
    id: '9',
    title: 'UniqFashion',
    type: 'Desktop Applications',
    date: '2024-02',
    client: 'FashionHub',
    objective: {
      en: 'Develop a modern e-commerce platform for unique fashion items.',
      id: 'Mengembangkan platform e-commerce modern untuk item fashion yang unik.'
    },
    description: {
      en: 'UniqFashion is an online store offering a curated selection of unique and trendy fashion pieces.',
      id: 'UniqFashion adalah toko online yang menawarkan pilihan pakaian fashion yang unik dan trendi.'
    },
    technologies: [
      { name: 'Java', icon: 'java', color: '#61DAFB' },
      { name: 'Microsoft Access', icon: 'microsoftaccess', color: '#47A248' },
    ],
    images: [
      'https://thomshuft.web.app/img/app-project-1.43cd61ea.png',
      'https://thomshuft.web.app/img/app-project-1-3.3ab811cf.png',
    ],
    github: '-',
    demo: '-',
    tags: ['Fashion', 'E-commerce', 'Trendy'],
  },
  {
    id: '10',
    title: 'Dusun Cawan',
    type: 'Web Development',
    date: '2024-03',
    client: 'AgroVillage',
    objective: {
      en: 'Create a digital platform to promote and sell local agricultural products.',
      id: 'Membuat platform digital untuk mempromosikan dan menjual produk pertanian lokal.'
    },
    description: {
      en: 'Dusun Cawan is an initiative to support local farmers by providing an online marketplace for their fresh and organic produce.',
      id: 'Dusun Cawan adalah inisiatif untuk mendukung petani lokal dengan menyediakan pasar online untuk produk segar dan organik mereka.'
    },
    technologies: [
      { name: 'Vue', icon: 'vue', color: '#42B883' },
      { name: 'Firebase', icon: 'firebase', color: '#FFCA28' },
    ],
    images: [
      'https://thomshuft.web.app/img/web-project-2.9c15371b.png',
      'https://thomshuft.web.app/img/app-project-6-1.c295fbd5.png',
    ],
    github: '-',
    demo: '-',
    tags: ['Agriculture', 'Marketplace', 'Local Business'],
  },
  {
    id: '11',
    title: 'CI/CD POS',
    type: 'DevOps',
    date: '2024-01',
    client: 'Pt Teh Kartini',
    objective: {
      en: 'Implement a CI/CD pipeline for the POS system to streamline deployments and improve efficiency.',
      id: 'Mengimplementasikan pipeline CI/CD untuk sistem POS guna memperlancar deployment dan meningkatkan efisiensi.'
    },
    description: {
      en: 'A DevOps project focused on automating deployments and server configurations using GitHub Actions and Nginx.',
      id: 'Proyek DevOps yang berfokus pada otomatisasi deployment dan konfigurasi server menggunakan GitHub Actions dan Nginx.'
    },
    technologies: [
      { name: 'GitHub', icon: 'github-icon.svg', color: '#2496ED' },
      { name: 'Nginx', icon: 'nginx-icon.svg', color: '#009639' },
    ],
    images: [
      '/images/ci.jpg',
    ],
    github: '-',
    demo: '-',
    tags: ['CI/CD', 'DevOps', 'Automation'],
  },  
  {
    id: '12',
    title: 'Monitor & Log',
    type: 'DevOps',
    date: '2024-01',
    client: 'Pt Teh Kartini',
    objective: {
      en: 'Implement monitoring and logging system for DevOps infrastructure.',
      id: 'Mengimplementasikan sistem pemantauan dan pencatatan untuk infrastruktur DevOps.'
    },
    description: {
      en: 'A comprehensive solution using Prometheus, Python, and Nginx for real-time monitoring and logging.',
      id: 'Solusi komprehensif menggunakan Prometheus, Python, dan Nginx untuk pemantauan dan pencatatan real-time.'
    },
    technologies: [
      { name: 'Prometheus', icon: 'prometheus-icon.svg', color: '#E6522C' },
      { name: 'Python', icon: 'python-icon.svg', color: '#3776AB' },
      { name: 'Nginx', icon: 'nginx-icon.svg', color: '#009639' },
    ],
    images: [
      '/images/monitor.jpg',
      'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80',
    ],
    github: '-',
    demo: '-',
    tags: ['Monitoring', 'Logging', 'DevOps'],
  },  
  {
    id: '13',
    title: 'SIABRM',
    type: 'Web Development',
    date: '2024-01',
    client: 'Sri Ayu',
    objective: {
      en: 'Develop a comprehensive data management system for motorcycle rental business.',
      id: 'Mengembangkan sistem manajemen data komprehensif untuk bisnis penyewaan sepeda motor.'
    },
    description: {
      en: 'SIABRM is a motorbike rental website owned by Al Barokah Motorbike Rental. A website-based application is useful for handling administration related to recording, calculating, reporting, and estimating profits and losses from a business.',
      id: 'SIABRM adalah website penyewaan sepeda motor milik Al Barokah Motorbike Rental. Aplikasi berbasis website ini berguna untuk menangani administrasi terkait pencatatan, perhitungan, pelaporan, dan estimasi untung rugi dari suatu bisnis.'
    },
    technologies: [
      { name: 'Ci4', icon: 'ci4', color: '#EE4323' },
      { name: 'Tailwind', icon: 'tailwind', color: '#06B6D4' },
    ],    
    images: [
      'https://thomshuft.web.app/img/web-project-1.c914a3fa.png',
      'https://thomshuft.web.app/img/projects1.e0f527c5.png',
    ],
    github: '-',
    demo: '-',
    tags: ['Dashboard', 'Analytics'],
  },
];



const ShowcaseCard = ({ card, darkMode, language }: { card: typeof showcaseCards[0]; darkMode: boolean, language: 'en' | 'id' }) => {
  const { scrollY } = useScroll();
  
  // Calculate opacity and visibility based on scroll position
  const opacity = useTransform(scrollY, [0, 500, 1000], [1, 0.2, 0]);
  const yOffset = useTransform(scrollY, [0, 1000], [0, 100]);
  const rotation = useTransform(scrollY, [0, 1000], [card.rotate, card.rotate * -1]);

  return (
    <motion.div
      className={`w-48 h-72 rounded-xl overflow-hidden shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} relative`}
      style={{
        rotate: rotation,
        y: yOffset,
        opacity,
        transformStyle: "preserve-3d",
        perspective: "1000px",
        zIndex: 1,
        visibility: opacity.get() <= 0.2 ? 'hidden' : 'visible'
      }}
      whileHover={{
        scale: 1.05,
        rotateY: card.position === "left" ? -10 : 10,
        rotateX: 5,
        transition: { duration: 0.3 },
      }}
    >
      <div className="relative w-full h-full">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${darkMode ? 'from-gray-900 via-gray-900/20' : 'from-gray-100 via-gray-100/20'} to-transparent`}>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className={`${darkMode ? 'text-white' : 'text-gray-900'} text-xl font-bold`}>{card.title}</h3>
            <div className="w-12 h-1 bg-cyan-400 mt-2" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  language: 'en' | 'id';
  darkMode: boolean;
}

const ProjectCard = ({ project, onClick, language, darkMode }: ProjectCardProps) => (
  <motion.div
    className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300`}
    whileHover={{ scale: 1.02 }}
    onClick={onClick}
  >
    <div className="relative h-48">
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold text-cyan-400">{project.title}</h3>
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{project.date}</span>
      </div>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4`}>{project.objective[language]}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech.name}
            className="px-2 py-1 rounded-full text-xs"
            style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function PortfolioPage({ language = 'en', darkMode = true }: PortfolioPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedType, setSelectedType] = useState('All');
  const [rotation, setRotation] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const hideShowcaseCard = useTransform(scrollY, [0, 2000], [1, 0]);
  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    const animate = () => {
      setRotation(prev => (prev + 0.5) % 360);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  useEffect(() => {
    // Update selected type when language changes
    setSelectedType(language === 'en' ? 'All' : 'Semua');
  }, [language]);

  useEffect(() => {
    const filtered = projects.filter((project) => {
      const matchesType = selectedType === (language === 'en' ? 'All' : 'Semua') || project.type === selectedType;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesType && matchesSearch;
    });
    setFilteredProjects(filtered);
  }, [selectedType, searchQuery, language]);

  const handleShare = (platform: string) => {
    if (!selectedProject) return;
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(selectedProject.title);
    
    const shareUrls: Record<string, string> = {
      twitter: `https://x.com/intent/tweet?text=${title}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    if (platform in shareUrls) {
      window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div 
      className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} overflow-x-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
      {/* Hero Section */}
      <div className="relative h-screen md:h-screen overflow-hidden">
        {/* Showcase Cards */}
        <div className="hidden md:block">
          <div className="fixed left-2 md:left-2 top-1/2 -translate-y-1/2 space-y-4 md:space-y-8 z-10">
            {showcaseCards
              .filter(card => card.position === 'left')
              .map((card, index) => (
                <div key={`left-${index}`} style={{ opacity: hideShowcaseCard }}>
                  <ShowcaseCard card={card} darkMode={darkMode} language={language} />
                </div>
              ))}
          </div>
          <div className="fixed right-2 md:right-2 top-1/2 -translate-y-1/2 space-y-4 md:space-y-8 z-10">
            {showcaseCards
              .filter(card => card.position === 'right')
              .map((card, index) => (
                <div key={`right-${index}`} style={{ opacity: hideShowcaseCard }}>
                  <ShowcaseCard card={card} darkMode={darkMode} language={language} />
                </div>
              ))}
          </div>
        </div>

        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y: y1 }}
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 p-4 md:gap-8 md:p-8">
            {techLogos.map((logo, index) => (
              <div
                key={index}
                className="p-2 md:p-8 rounded-lg flex flex-col items-center justify-center text-white font-bold"
                style={{ backgroundColor: `${logo.color}40` }}
              >
                <img 
                  src={logo.image} 
                  alt={`${logo.name} logo`} 
                  className="h-8 w-8 md:h-16 md:w-16 mb-1 md:mb-2" 
                />
                <span className="text-xs md:text-base">{logo.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Centered Content */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="w-48 h-48 md:w-64 md:h-64 rounded-full relative"
            style={{
              background: 'linear-gradient(45deg, #001f3f 0%, #007bff 50%, #00c3ff 100%)',
              boxShadow: '0 0 50px rgba(0, 123, 255, 0.8), 0 0 100px rgba(0, 195, 255, 0.6)',
              textShadow: '5px 5px 20px rgba(0, 0, 0, 1), 2px 2px 15px rgba(0, 195, 255, 0.8)'
            }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-white opacity-20" />
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-8xl"
            >
              TS
            </motion.div>
          </motion.div>
        </div>

        {/* Intro Text */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center px-4">
          <motion.h1 
            className={`text-3xl sm:text-4xl md:text-6xl font-bold from-blue-400 to-purple-500 glitch ${darkMode ? 'text-white' : 'text-gray-900'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {t.softwareDeveloper}
          </motion.h1>
          <motion.p 
            className={`text-base sm:text-lg md:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {t.buildingExperiences}
          </motion.p>
        </div>
      </div>

      {/* Project Section */}
      <section className={`py-10 md:py-20 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-100/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
            {t.projectShowcase}
          </h2>

          {/* Filters */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder={t.searchProjects}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:ring-opacity-50`}
              />
            </div>
            <div className="relative sm:w-1/3 md:w-1/4 w-full max-w-xs">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className={`w-full pl-10 pr-8 py-2 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'} border rounded-lg focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:ring-opacity-50 appearance-none cursor-pointer`}
              >
                {t.projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    >
                    <ProjectCard 
                      project={project}
                      onClick={() => setSelectedProject(project)}
                      darkMode={darkMode}
                      language={language}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
 {/* GitHub Projects Section */}
 {/* GitHub Projects Section */}
<GitHubProjectsSection username="Thomasborn" darkMode={darkMode} language={language} />
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`${darkMode ? 'bg-[#16161f]' : 'bg-white'} rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto`}
              onClick={(e) => e.stopPropagation()}
            >   
              {/* Image Carousel */}
              <div className="relative h-64 md:h-96">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-50 bg-black/50 p-2 rounded-full text-gray-400 
                    hover:text-[#00ffff] hover:bg-black/70 transition-all duration-300"
                >
                  <X size={24} />
                </button>
                <img
                  src={selectedProject.images[currentImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) => 
                          prev === 0 ? selectedProject.images.length - 1 : prev - 1
                        );
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full
                        text-white hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex((prev) => 
                          prev === selectedProject.images.length - 1 ? 0 : prev + 1
                        );
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full
                        text-white hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-[#00ffff]' : 'text-cyan-600'} mb-2`}>
                      {selectedProject.title}
                    </h3>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{selectedProject.date}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-[#00ffff]' : 'text-cyan-600'} mb-2`}>{t.client}</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className={`text-lg font-semibold ${darkMode ? 'text-[#00ffff]' : 'text-cyan-600'} mb-2`}>{t.type}</h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{selectedProject.type}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-[#00ffff]' : 'text-cyan-600'} mb-2`}>{t.objective}</h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {selectedProject.objective[language as 'en' | 'id']}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-[#00ffff]' : 'text-cyan-600'} mb-2`}>{t.description}</h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {selectedProject.description[language as 'en' | 'id']}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-[#00ffff]' : 'text-cyan-600'} mb-2`}>{t.technologies}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 rounded-lg ${darkMode ? 'bg-[#1a1a2e]' : 'bg-gray-100'} 
                      ${darkMode ? 'text-[#00ffff]' : 'text-cyan-600'}
                      hover:bg-${darkMode ? '[#00ffff]' : 'cyan-600'} hover:text-${darkMode ? 'black' : 'white'} transition-colors`}
                  >
                    <Github size={20} className="mr-2" />
                    {t.viewCode}
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-4 py-2 rounded-lg ${darkMode ? 'bg-[#1a1a2e]' : 'bg-gray-100'} 
                      ${darkMode ? 'text-[#00ffff]' : 'text-cyan-600'}
                      hover:bg-${darkMode ? '[#00ffff]' : 'cyan-600'} hover:text-${darkMode ? 'black' : 'white'} transition-colors`}
                  >
                    <ExternalLink size={20} className="mr-2" />
                    {t.liveDemo}
                  </a>
                </div>

                <div>
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-[#00ffff]' : 'text-cyan-600'} mb-2`}>{t.share}</h4>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleShare('twitter')}
                      className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} hover:text-[#1DA1F2] transition-colors`}
                    >
                      <Twitter size={24} />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} hover:text-[#0A66C2] transition-colors`}
                    >
                      <Linkedin size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}