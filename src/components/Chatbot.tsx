import { useState, useCallback, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

// Content data would be imported in a real implementation
// This is a self-contained version with the data included
const content = {
  en: {
    title: "About Me",
    bio: "I am a dedicated software developer with a Bachelor's degree in Information Systems from Atma Jaya Yogyakarta University. I have experience in back-end development, software development, software quality assurance, and producing promotional videos. I am passionate about leveraging my skills to contribute to innovative projects and drive technological advancement.",
    location: "Based in Yogyakarta, Indonesia",
    connect: "Connect with me",
    experienceAndCerts: {
      title: "Professional Background",
      years: "2+ Years in Tech Industry",
      companies: "Collaborated with 5+ Companies",
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
          name: "Migration System",
          description: "Developed backend services for Pt Teh Kartini Nasional, focusing on API integration and optimization. Built dynamic front-end applications with Vue.js and JavaScript, enhancing user interaction.",
          tech: "Laravel, Python, Vue.js, Excel, SQL, Nginx"
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
      vision: "To pioneer innovative technology solutions that solve complex business challenges while transforming user experiences and establishing new industry standards.",
      mission: "Building scalable, robust, and secure systems while continuously expanding my technical mastery across emerging technologies."
    },
    personal: {
      interests: [
        "Open-source contribution",
        "Technology innovation",
        "Software architecture design",
        "Reading tech publications",
        "Learning new programming languages"
      ],
      hobbies: [
        "Photography",
        "Hiking in Indonesian mountains",
        "Playing chess",
        "Music production",
        "Community volunteering"
      ],
      philosophy: "I believe in continuous learning and improvement. Technology is constantly evolving, and I'm committed to growing alongside it. I value creating solutions that genuinely help people and businesses."
    },
    future: {
      plans: "I'm interested in expanding my expertise in cloud architecture, AI integration in business applications, and contributing to open-source projects that make technology more accessible.",
      goals: [
        "Becoming a certified cloud architect",
        "Leading development teams on enterprise-scale projects",
        "Contributing to educational initiatives in technology",
        "Launching a SaaS product in the next 2-3 years"
      ]
    }
  }
};

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
    }
  }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Thom Assista, your AI assistant. I can tell you anything about Thomas - just ask me any question about his skills, experience, projects, education, personal interests, or anything else you'd like to know!", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const language = 'en'; // Default language
  const [isTyping, setIsTyping] = useState(false);
  const [conversationContext, setConversationContext] = useState([]);
  const [interactionCount, setInteractionCount] = useState(0);

  // Function to scroll to the bottom of the messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced knowledge base with broader information categories
  const knowledgeBase = {
    greeting: {
      patterns: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
      responses: ["Hello! I'm here to help with any questions about Thomas. What would you like to know?", "Hi there! I can answer anything about Thomas. What are you curious about?", "Hey! I'm Thomas's AI assistant with unlimited knowledge about him. How can I help?"]
    },
    about: {
      patterns: ['about', 'bio', 'background', 'who is', 'tell me about', 'profile', 'summary'],
      response: content[language].bio
    },
    experience: {
      patterns: ['experience', 'work', 'job', 'career', 'employment', 'position', 'role', 'professional'],
      response: () => {
        const summary = content[language].experienceAndCerts.description;
        let expDetails = "Work History:\n\n";
        
        experiences.forEach((exp, index) => {
          expDetails += `${index+1}. ${exp[language].title} at ${exp[language].company} (${exp[language].date})\n`;
          expDetails += `   ${exp[language].description[0]}\n\n`;
        });
        
        return `${summary}\n\n${expDetails}Thomas has worked with over ${content[language].experienceAndCerts.companies} companies in the tech industry.`;
      }
    },
    projects: {
      patterns: ['project', 'portfolio', 'application', 'development', 'software', 'solution', 'product'],
      response: () => {
        const projectIntro = `Thomas has worked on ${content[language].projects.count}. Here are the details:`;
        let projectDetails = "";
        
        content[language].projects.featured.forEach((project, index) => {
          projectDetails += `\n\n${index+1}. ${project.name}\n`;
          projectDetails += `   ${project.description}\n`;
          projectDetails += `   Technologies: ${project.tech}`;
        });
        
        return `${projectIntro}${projectDetails}`;
      }
    },
    skills: {
      patterns: ['skill', 'technology', 'tech', 'tech stack', 'programming', 'expertise', 'proficiency', 'capability', 'competency'],
      response: () => {
        return `Technical Skills:\n• ${content[language].skills.technical.join('\n• ')}\n\nSoft Skills:\n• ${content[language].skills.soft.join('\n• ')}`;
      }
    },
    education: {
      patterns: ['education', 'degree', 'university', 'college', 'academic', 'study', 'qualification', 'school', 'graduated'],
      response: () => {
        const edu = content[language].education;
        const teachingExp = edu.teaching.map(t => `• ${t}`).join('\n');
        return `${edu.degree} from ${edu.university}\nPeriod: ${edu.period}\nGPA: ${edu.gpa}\n\nTeaching Experience:\n${teachingExp}`;
      }
    },
    achievements: {
      patterns: ['achievement', 'accomplishment', 'award', 'recognition', 'honor', 'success'],
      response: () => {
        const achievements = content[language].experienceAndCerts.achievements.map(a => `• ${a}`).join('\n');
        return `Key Professional Achievements:\n${achievements}`;
      }
    },
    certifications: {
      patterns: ['certification', 'certificate', 'credential', 'qualification', 'license'],
      response: () => {
        return `Certifications and Professional Qualifications:\n• ${content[language].skills.achievements.join('\n• ')}`;
      }
    },
    contact: {
      patterns: ['contact', 'email', 'connect', 'reach', 'message', 'get in touch', 'talk to'],
      response: `You can ${content[language].connect} through the contact section on this website. Thomas is always open to professional connections and project inquiries.`
    },
    location: {
      patterns: ['location', 'address', 'based', 'live', 'residence', 'where', 'city', 'country'],
      response: content[language].location
    },
    vision: {
      patterns: ['vision', 'mission', 'goal', 'objective', 'aim', 'purpose', 'aspiration', 'ambition'],
      response: `Vision: ${content[language].vision.vision}\n\nMission: ${content[language].vision.mission}`
    },
    languages: {
      patterns: ['speak', 'language', 'linguistic', 'bilingual', 'multilingual', 'english', 'indonesian'],
      response: "Thomas is proficient in English and Indonesian (Bahasa Indonesia)."
    },
    tools: {
      patterns: ['tool', 'framework', 'platform', 'software', 'application', 'environment', 'ide'],
      response: "Thomas works with various tools and frameworks including:\n• Laravel, Node.js for backend development\n• Vue.js, React for frontend development\n• AWS for cloud infrastructure\n• Nginx, Apache for server management\n• Git for version control\n• Postman, K6 for API testing"
    },
    workingStyle: {
      patterns: ['working style', 'approach', 'methodology', 'workflow', 'work ethic', 'collaboration'],
      response: "Thomas follows an agile methodology and emphasizes collaboration. He values clear communication, iterative development, and continuous learning. He adapts his approach based on project requirements while maintaining a focus on code quality and security."
    },
    teaching: {
      patterns: ['teach', 'teaching', 'instructor', 'lecture', 'mentor', 'professor', 'educational'],
      response: () => {
        return `Thomas has experience as an Assistant Lecturer at Atma Jaya Yogyakarta University:\n• ${content[language].education.teaching.join('\n• ')}\n\nHe has taught programming concepts and web development to over 120 students.`;
      }
    },
    technical: {
      patterns: ['backend', 'frontend', 'fullstack', 'web', 'mobile', 'cloud', 'server', 'database', 'api', 'infrastructure'],
      response: "Thomas is primarily a fullstack developer with strong backend expertise. He has experience with:\n• Backend: Java, Golang, PHP (Laravel), Node.js\n• Frontend: JavaScript, Vue.js, React\n• Infrastructure: Nginx, Apache, Cloud servers\n• Databases: SQL\n• Version Control: Git"
    },
    personal: {
      patterns: ['hobby', 'interest', 'personal', 'free time', 'pastime', 'leisure', 'enjoy', 'like', 'passion'],
      response: () => {
        return `Personal Interests:\n• ${content[language].personal.interests.join('\n• ')}\n\nHobbies:\n• ${content[language].personal.hobbies.join('\n• ')}\n\nPhilosophy: ${content[language].personal.philosophy}`;
      }
    },
    future: {
      patterns: ['future', 'plan', 'aspiration', 'goal', 'ambition', 'next step', 'upcoming', 'career goal'],
      response: () => {
        return `Future Plans: ${content[language].future.plans}\n\nProfessional Goals:\n• ${content[language].future.goals.join('\n• ')}`;
      }
    },
    personality: {
      patterns: ['personality', 'character', 'temperament', 'nature', 'demeanor', 'attitude', 'behavior'],
      response: "Thomas is known for his problem-solving mindset and analytical approach. He's collaborative, adaptable, and detail-oriented. He thrives in team environments while also being self-motivated when working independently. He values continuous learning and is passionate about creating meaningful solutions."
    },
    strengths: {
      patterns: ['strength', 'strong', 'best at', 'excel', 'good at'],
      response: "Thomas's key strengths include:\n• Technical versatility across frontend and backend development\n• Strong analytical and problem-solving skills\n• Excellent communication and collaboration abilities\n• Adaptability to new technologies and changing requirements\n• Attention to detail and focus on quality\n• Strong project management capabilities"
    },
    challenges: {
      patterns: ['challenge', 'difficulty', 'obstacle', 'struggle', 'weakness', 'improve', 'growth area'],
      response: "Thomas approaches challenges as growth opportunities. Areas he continuously works to develop include:\n• Balancing perfectionism with pragmatic delivery schedules\n• Expanding his knowledge in emerging technologies like AI and machine learning\n• Further developing team leadership and mentoring skills\n• Enhancing project estimation capabilities for complex implementations"
    },
    availability: {
      patterns: ['available', 'hire', 'freelance', 'contract', 'full-time', 'part-time', 'remote', 'relocate'],
      response: "Thomas is currently open to discussing exciting new opportunities, particularly in roles involving backend architecture, cloud infrastructure, or fullstack development. He's adaptable regarding work arrangements (remote, hybrid, or on-site) and is willing to consider relocation for the right opportunity."
    },
    portfolio: {
      patterns: ['portfolio', 'showcase', 'example', 'demo', 'sample', 'github', 'repository'],
      response: "Thomas maintains a professional portfolio showcasing his key projects and code samples. His repositories include examples of his work with Laravel, Node.js, Vue.js, and other technologies. For access to his portfolio and GitHub repositories, please connect with him through the contact section."
    },
    communication: {
      patterns: ['communicate', 'communication', 'teamwork', 'collaborate', 'work together', 'team player'],
      response: "Thomas values clear and efficient communication. He adapts his communication style to project needs and team dynamics. He's experienced in both technical and non-technical communications with stakeholders at all levels. He's comfortable with various collaboration tools and methodologies for remote and in-person teamwork."
    },
    management: {
      patterns: ['manage', 'management', 'lead', 'leadership', 'team lead', 'supervisor', 'project management'],
      response: "Thomas has leadership experience through project coordination and team guidance. He's led small development teams, mentored junior developers, and managed project workflows. His approach to leadership focuses on clear communication, setting achievable goals, and empowering team members to contribute their best work."
    },
    career: {
      patterns: ['career', 'career path', 'professional journey', 'progression', 'advancement', 'growth'],
      response: "Thomas's career has evolved from focused backend development to more comprehensive fullstack and architectural roles. He's strategically pursued experiences that expand his technical breadth while deepening his expertise in core areas. He values continuous learning and seeks opportunities that challenge him to grow professionally."
    },
    specificTech: {
      patterns: ['java', 'javascript', 'python', 'golang', 'php', 'laravel', 'vue', 'react', 'node', 'aws', 'nginx', 'apache', 'sql'],
      response: (match) => {
        const techInfo = {
          java: "Thomas has strong experience with Java for backend development, particularly in banking sector projects at BTPN Syariah. He's comfortable with Java frameworks and has implemented multiple production systems.",
          javascript: "JavaScript is one of Thomas's core skills, used in both frontend and backend development across multiple projects. He's proficient with modern ES6+ features and various JS frameworks and libraries.",
          python: "Thomas has used Python for data migration, analysis projects, and automation scripts. He's familiar with Python frameworks and libraries for web development and data processing.",
          golang: "Thomas has utilized Golang for backend services development, primarily for API integration and optimization. He appreciates Go's performance and simplicity for microservices.",
          php: "Thomas is highly proficient in PHP, particularly with the Laravel framework for web application development. He's built numerous production systems using PHP.",
          laravel: "Laravel is one of Thomas's primary frameworks for web development, with expertise in Laravel 9. He's implemented complete systems using Laravel's ecosystem of tools and packages.",
          vue: "Thomas has built dynamic front-end applications using Vue.js, enhancing user interaction and responsiveness. He's comfortable with Vue CLI, Vuex for state management, and Vue Router.",
          react: "Thomas has experience with React for creating interactive user interfaces, used in projects at Qwords. He understands React's component-based architecture and state management approaches.",
          node: "Thomas has backend development experience with Node.js for building API services. He's familiar with Express, authentication strategies, and database integration with Node.",
          aws: "Thomas has knowledge of AWS Cloud Practitioner Essentials for cloud infrastructure management. He's worked with EC2, S3, and other AWS services for application deployment.",
          nginx: "Thomas has extensive experience managing Nginx servers in cloud environments, handling configuration, optimization, and security hardening.",
          apache: "Thomas has experience managing Apache servers and performed routine maintenance, updates, and configuration optimizations.",
          sql: "Thomas has worked with SQL databases for data storage, retrieval, and management across various projects. He's comfortable with database design, optimization, and complex queries."
        };
        
        for (const tech in techInfo) {
          if (match.includes(tech)) {
            return techInfo[tech];
          }
        }
        
        return "Thomas has experience with various technologies including Laravel, JavaScript, Node.js, AWS, Vue.js, React, Java, Golang, and SQL databases.";
      }
    },
    salary: {
      patterns: ['salary', 'pay', 'compensation', 'earn', 'rate', 'money', 'income', 'wage'],
      response: "Thomas's compensation expectations are aligned with industry standards for his experience level and skillset. He values opportunities based on their overall fit, growth potential, and work environment in addition to compensation. For specific compensation discussions, please connect with Thomas directly."
    },
    family: {
      patterns: ['family', 'married', 'single', 'relationship', 'children', 'kids', 'wife', 'husband', 'partner'],
      response: "Thomas maintains a good work-life balance and values his personal time. He's adaptable to project needs while respecting personal boundaries. For more specific personal information, you can connect with Thomas directly."
    },
    recommendation: {
      patterns: ['recommend', 'recommendation', 'testimonial', 'reference', 'feedback', 'review'],
      response: "Thomas has received positive feedback from colleagues and clients throughout his career. His work is recognized for its quality, attention to detail, and alignment with business requirements. Previous employers have noted his problem-solving abilities, technical versatility, and collaborative approach."
    }
  };

  // Advanced NLP-like processing functions
  const nlpProcessor = {
    // Tokenize input into words and phrases
    tokenize: (input) => {
      return input.toLowerCase().split(/[\s,.?!;:()[\]{}'"]+/).filter(token => token.length > 0);
    },
    
    // Remove common words that don't add meaning
    removeStopWords: (tokens) => {
      const stopWords = ['a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'have', 'has', 'had', 'do', 'does', 'did', 'with', 'at', 'from', 'to', 'and', 'or', 'not', 'but', 'for', 'of', 'by', 'as', 'on', 'in'];
      return tokens.filter(token => !stopWords.includes(token));
    },
    
    // Extract key entities from the input
    extractEntities: (tokens) => {
      const entities = [];
      const knownEntities = [
        // Personal entities
        'thomas', 'developer', 'programmer', 'engineer', 'backend', 'frontend', 'fullstack',
        // Technology entities
        'java', 'javascript', 'python', 'golang', 'php', 'laravel', 'vue', 'react', 'node', 'aws', 'nginx', 'apache', 'sql',
        // Topic entities
        'education', 'experience', 'project', 'skill', 'job', 'work', 'career', 'achievement', 
        'certification', 'hobby', 'interest', 'location', 'vision', 'mission'
      ];
      
      tokens.forEach(token => {
        if (knownEntities.includes(token)) {
          entities.push(token);
        }
      });
      
      return entities;
    },
    
    // Identify intent from the input
    identifyIntent: (input) => {
      const questionWords = ['what', 'who', 'where', 'when', 'why', 'how', 'can', 'could', 'would', 'tell'];
      const questionStart = questionWords.some(word => input.toLowerCase().split(' ').slice(0, 3).includes(word));
      
      if (questionStart) {
        return 'question';
      }
      
      const greetingPatterns = ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'];
      const isGreeting = greetingPatterns.some(pattern => input.toLowerCase().includes(pattern));
      
      if (isGreeting) {
        return 'greeting';
      }
      
      return 'statement';
    },
    
    // Find similarity between strings (for typo and synonym handling)
    findSimilarity: (str1, str2) => {
      // Simple implementation of Levenshtein distance
      if (str1.length === 0) return str2.length;
      if (str2.length === 0) return str1.length;
      
      const matrix = [];
      
      // Initialize matrix
      for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
      }
      
      for (let i = 0; i <= str1.length; i++) {
        matrix[0][i] = i;
      }
      
      // Fill matrix
      for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
          if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(
              matrix[i - 1][j - 1] + 1, // substitution
              matrix[i][j - 1] + 1,     // insertion
              matrix[i - 1][j] + 1      // deletion
            );
          }
        }
      }
      
      const distance = matrix[str2.length][str1.length];
      const maxLength = Math.max(str1.length, str2.length);
      
      return 1 - (distance / maxLength);
    }
  };

  // Advanced response generation with fallback capabilities
  const generateAdvancedResponse = useCallback((userMessage) => {
    // Update conversation context
    setConversationContext(prevContext => [...prevContext, { role: 'user', content: userMessage }]);
    setInteractionCount(prevCount => prevCount + 1);
    
    // Process input with NLP-like functions
    const tokens = nlpProcessor.tokenize(userMessage);
    const meaningfulTokens = nlpProcessor.removeStopWords(tokens);
    const entities = nlpProcessor.extractEntities(meaningfulTokens);
    const intent = nlpProcessor.identifyIntent(userMessage);
    
    // Handle greetings first
    if (intent === 'greeting') {
      const randomIndex = Math.floor(Math.random() * knowledgeBase.greeting.responses.length);
      return knowledgeBase.greeting.responses[randomIndex];
    }
    
    // Check for specific tech questions
    for (const pattern of knowledgeBase.specificTech.patterns) {
      if (tokens.includes(pattern)) {
        return knowledgeBase.specificTech.response(userMessage);
      }
    }
    
    // Check against knowledge base using similarity matching
    let highestSimilarityScore = 0;
    let bestMatchCategory = null;
    
    // Find the best matching category based on pattern similarity
    for (const category in knowledgeBase) {
      if (category === 'greeting' || category === 'specificTech') continue;
      
      const categoryData = knowledgeBase[category];
      
      for (const pattern of categoryData.patterns) {
        for (const token of meaningfulTokens) {
          const similarity = nlpProcessor.findSimilarity(token, pattern);
          if (similarity > 0.7 && similarity > highestSimilarityScore) {
            highestSimilarityScore = similarity;
            bestMatchCategory = category;
          }
        }
      }
    }
    
    if (bestMatchCategory) {
      const responseData = knowledgeBase[bestMatchCategory];
      if (typeof responseData.response === 'function') {
        return responseData.response();
      }
      return responseData.response;
    }
    
    // Handle questions without direct knowledge base matches
    if (intent === 'question') {
      // If we found entities but no direct match, try to construct a response
      if (entities.length > 0) {
        // First check if any entity has a corresponding category
        for (const category in knowledgeBase) {
          if (category === 'greeting' || category === 'specificTech') continue;
          
          const categoryData = knowledgeBase[category];
          for (const entity of entities) {
            for (const pattern of categoryData.patterns) {
              if (entity === pattern) {
                if (typeof categoryData.response === 'function') {
                  return categoryData.response();
                }
                return categoryData.response;
              }
            }
          }
        }
      }
    }
    
    // Enhanced conversational fallbacks based on context
    if (interactionCount > 3) {
      // More// Enhanced conversational fallbacks based on context
      if (interactionCount > 3) {
        // More personalized responses after several interactions
        const fallbackResponses = [
          `I'd be happy to tell you more about Thomas's ${entities.length > 0 ? entities[0] : 'background'}. What specific aspect are you interested in?`,
          "I'm not sure I understood that correctly. Could you rephrase your question about Thomas?",
          "I have extensive knowledge about Thomas's professional experience and skills. What would you like to know specifically?",
          "I can share information about Thomas's projects, skills, education, or personal interests. Which area would you like to explore?"
        ];
        
        return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      }
      
      // General fallback for initial interactions
      return "I'm Thomas's AI assistant and can tell you about his experience, skills, projects, education, and interests. What would you like to know?";
    }
  }, [interactionCount]);

  // Function to handle user sending a message
  const handleSendMessage = useCallback(async () => {
    if (input.trim() === '') return;
    
    // Add user message to chat
    setMessages(prevMessages => [...prevMessages, { text: input, isBot: false }]);
    
    // Clear input and show loading indicator
    setInput('');
    setIsLoading(true);
    
    try {
      // Simulate typing effect
      setIsTyping(true);
      
      // Generate response with artificial delay for natural feeling
      const response = generateAdvancedResponse(input);
      
      // Wait for a short time to simulate thinking and typing
      await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));
      
      setIsTyping(false);
      
      // Add bot response to chat
      setMessages(prevMessages => [...prevMessages, { text: response, isBot: true }]);
      
      // Update conversation context
      setConversationContext(prevContext => [...prevContext, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages(prevMessages => [...prevMessages, { 
        text: "I'm having trouble processing that request. Please try again.", 
        isBot: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [input, generateAdvancedResponse]);

  // Function to handle pressing Enter key
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  // Function to handle clicking the toggle button
  const toggleChat = useCallback(() => {
    setIsOpen(prevState => !prevState);
  }, []);

  // Add context-aware suggestions based on conversation history
  const getSuggestions = useCallback(() => {
    if (messages.length <= 1) {
      return [
        "What's Thomas's background?",
        "Tell me about Thomas's skills",
        "What projects has Thomas worked on?"
      ];
    }
    
    const lastBotMessage = [...messages].reverse().find(m => m.isBot)?.text || '';
    const lastUserMessage = [...messages].reverse().find(m => !m.isBot)?.text || '';
    
    // Check if the last bot message mentioned specific categories
    if (lastBotMessage.includes('education')) {
      return [
        "What degree does Thomas have?",
        "What university did Thomas attend?",
        "Was Thomas a teaching assistant?"
      ];
    } else if (lastBotMessage.includes('experience') || lastBotMessage.includes('work')) {
      return [
        "What companies has Thomas worked for?",
        "What was Thomas's role at Omah IT?",
        "What technologies did Thomas use in his jobs?"
      ];
    } else if (lastBotMessage.includes('project')) {
      return [
        "Tell me more about Thomas's ERP project",
        "What was Thomas's role in the migration system?",
        "What technologies did Thomas use in his projects?"
      ];
    } else if (lastBotMessage.includes('skill') || lastBotMessage.includes('technolog')) {
      return [
        "Is Thomas proficient in React?",
        "What backend technologies does Thomas know?",
        "What are Thomas's soft skills?"
      ];
    }
    
    // Default suggestions
    return [
      "What are Thomas's career goals?",
      "What is Thomas's work philosophy?",
      "What technologies does Thomas specialize in?"
    ];
  }, [messages]);

  // Long-term memory simulation
  const getRelevantContextFromHistory = useCallback((userMessage) => {
    // Extract key topics from user message
    const userTopics = nlpProcessor.extractEntities(nlpProcessor.tokenize(userMessage));
    
    // Find related past exchanges
    const relevantExchanges = [];
    for (let i = 0; i < conversationContext.length - 1; i += 2) {
      if (conversationContext[i] && conversationContext[i+1]) {
        const userContent = conversationContext[i].content;
        const assistantContent = conversationContext[i+1].content;
        
        const exchangeTopics = nlpProcessor.extractEntities(nlpProcessor.tokenize(userContent));
        
        // Check if there's overlap between current user message topics and past exchange topics
        const hasOverlap = userTopics.some(topic => exchangeTopics.includes(topic));
        
        if (hasOverlap) {
          relevantExchanges.push({
            userQuestion: userContent,
            assistantResponse: assistantContent
          });
        }
      }
    }
    
    return relevantExchanges;
  }, [conversationContext]);

  // Add analytics functions
  const trackUserInteraction = useCallback((message) => {
    // This would connect to actual analytics in a production environment
    console.log('User interaction:', message);
    // Track topics of interest
    const topics = nlpProcessor.extractEntities(nlpProcessor.tokenize(message));
    console.log('Topics of interest:', topics);
  }, []);

  // Function to handle expanding on a previous response
  const expandOnResponse = useCallback((originalResponse, expansionRequest) => {
    // Get the topic from the expansion request
    const expansionTokens = nlpProcessor.tokenize(expansionRequest);
    const expansionEntities = nlpProcessor.extractEntities(expansionTokens);
    
    // Find the most relevant category based on the expansion request
    let bestCategory = null;
    let highestSimilarityScore = 0;
    
    for (const category in knowledgeBase) {
      if (category === 'greeting' || category === 'specificTech') continue;
      
      const categoryData = knowledgeBase[category];
      
      for (const pattern of categoryData.patterns) {
        for (const token of expansionTokens) {
          const similarity = nlpProcessor.findSimilarity(token, pattern);
          if (similarity > 0.7 && similarity > highestSimilarityScore) {
            highestSimilarityScore = similarity;
            bestCategory = category;
          }
        }
      }
    }
    
    if (bestCategory) {
      const responseData = knowledgeBase[bestCategory];
      if (typeof responseData.response === 'function') {
        return `${originalResponse}\n\nAdditionally, ${responseData.response()}`;
      }
      return `${originalResponse}\n\nAdditionally, ${responseData.response}`;
    }
    
    // If no specific category found, provide a general expansion
    return `${originalResponse}\n\nIs there anything specific about Thomas's background, skills, or experiences you'd like to know more about?`;
  }, []);

  // Add function to handle user feedback
  const handleFeedback = useCallback((feedback) => {
    console.log('User feedback:', feedback);
    // This would connect to actual feedback system in a production environment
    
    if (feedback === 'positive') {
      setMessages(prevMessages => [
        ...prevMessages, 
        { text: "Thanks for the positive feedback! I'm glad I could help.", isBot: true }
      ]);
    } else if (feedback === 'negative') {
      setMessages(prevMessages => [
        ...prevMessages, 
        { text: "I'm sorry my answer wasn't helpful. Could you tell me more about what you're looking for so I can provide better information?", isBot: true }
      ]);
    }
  }, []);

  // Function to handle asking for clarification
  const askForClarification = useCallback((userMessage) => {
    const tokens = nlpProcessor.tokenize(userMessage);
    const entities = nlpProcessor.extractEntities(tokens);
    
    if (entities.length === 0) {
      return "I'm not sure I understood what you're asking about Thomas. Could you provide more details or specify which aspect of his background, skills, or experience you're interested in?";
    }
    
    const possibleCategories = [];
    for (const entity of entities) {
      for (const category in knowledgeBase) {
        if (category === 'greeting' || category === 'specificTech') continue;
        
        if (knowledgeBase[category].patterns.includes(entity)) {
          possibleCategories.push(category);
        }
      }
    }
    
    if (possibleCategories.length > 0) {
      return `I see you're asking about Thomas's ${entities.join(', ')}. Could you specify which aspect you're most interested in?`;
    }
    
    return "I'm not sure I understood your question. Could you rephrase it or ask about a specific aspect of Thomas's background?";
  }, []);

  return (
    <div className="relative">
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-all z-50"
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-40 max-h-[500px]">
          {/* Chat header */}
          <div className="bg-blue-600 text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
            <h2 className="font-bold">Thom Assista</h2>
            <span className="text-xs bg-green-500 rounded-full px-2 py-1">Online</span>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-2 max-w-[80%]">
                  <span className="typing-indicator">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Suggestions */}
          {messages.length > 0 && !isTyping && (
            <div className="px-4 py-2 border-t border-gray-200 flex flex-wrap gap-2">
              {getSuggestions().map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setInput(suggestion);
                    setTimeout(() => handleSendMessage(), 100);
                  }}
                  className="text-xs bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-gray-800 transition"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
          
          {/* Chat input */}
          <div className="border-t border-gray-200 p-4">
  <div className="flex items-center space-x-2">
    <input
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Ask about Thomas..."
      className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500" // Changed text color
      disabled={isLoading}
    />

              <button
                onClick={handleSendMessage}
                disabled={isLoading || input.trim() === ''}
                className={`bg-blue-600 text-white rounded-full p-2 ${
                  isLoading || input.trim() === ''
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-blue-700'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}