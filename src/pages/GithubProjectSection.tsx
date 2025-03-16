import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork, BookOpen } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

interface GitHubProjectsProps {
  username: string;
  darkMode: boolean;
  language: 'en' | 'id';
}

const translations = {
  en: {
    title: "Project Archive",
    subtitle: "Open-source projects and contributions",
    viewProfile: "View GitHub Profile",
    loading: "Loading projects...",
    error: "Error loading projects",
    lastUpdated: "Last updated",
    viewProject: "View Project",
    viewDemo: "View Demo",
    noDescription: "No description available",
    filterByTech: "Filter by technology",
    all: "All",
    sortBy: "Sort by",
    newest: "Newest",
    stars: "Stars",
    noProjects: "No projects found"
  },
  id: {
    title: "Arsip Proyek",
    subtitle: "Proyek open-source dan kontribusi",
    viewProfile: "Lihat Profil GitHub",
    loading: "Memuat proyek...",
    error: "Gagal memuat proyek",
    lastUpdated: "Terakhir diperbarui",
    viewProject: "Lihat Proyek",
    viewDemo: "Lihat Demo",
    noDescription: "Deskripsi tidak tersedia",
    filterByTech: "Filter berdasarkan teknologi",
    all: "Semua",
    sortBy: "Urutkan berdasarkan",
    newest: "Terbaru",
    stars: "Bintang",
    noProjects: "Tidak ada proyek ditemukan"
  }
};

// Language color mapping
const languageColors: { [key: string]: string } = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5',
  Java: '#b07219',
  PHP: '#4F5D95',
  Go: '#00ADD8',
  Ruby: '#701516',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  Rust: '#dea584',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600'
};

const GitHubProjects: React.FC<GitHubProjectsProps> = ({ username, darkMode, language }) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [filteredRepos, setFilteredRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState('All');
  const [sortOption, setSortOption] = useState('newest');
  const [languages, setLanguages] = useState<string[]>(['All']);
  const t = translations[language];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repos');
        }
        
        const data = await response.json();
        setRepos(data);
        
        // Extract unique languages
        const uniqueLanguages = Array.from(new Set(data.map((repo: GitHubRepo) => repo.language).filter(Boolean)));
        setLanguages(['All', ...uniqueLanguages]);
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching repos:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  useEffect(() => {
    // Apply filters and sorting
    let result = [...repos];
    
    // Filter by language
    if (filter !== 'All') {
      result = result.filter(repo => repo.language === filter);
    }
    
    // Apply sorting
    if (sortOption === 'newest') {
      result.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
    } else if (sortOption === 'stars') {
      result.sort((a, b) => b.stargazers_count - a.stargazers_count);
    }
    
    setFilteredRepos(result);
  }, [repos, filter, sortOption]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language === 'en' ? 'en-US' : 'id-ID', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  if (loading) {
    return (
      <div className={`flex justify-center items-center py-16 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-cyan-400 mr-3"></div>
        <span className="text-lg">{t.loading}</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-center py-16 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
        <p className="text-xl">{t.error}</p>
      </div>
    );
  }

  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
            {t.title}
          </h2>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-lg`}>
            {t.subtitle}
          </p>
          <div className="w-20 h-1 bg-cyan-400 mt-4"></div>
         {/* GitHub Profile Link */}
         <a 
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 flex items-center gap-2 px-4 py-2 rounded-md ${
              darkMode 
                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            } transition-colors duration-300`}
          >
            <Github className="text-xl" />
            <span>{t.viewProfile}</span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-full sm:w-auto">
            <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.filterByTech}
            </label>
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-cyan-400`}
            >
              {languages.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
          
          <div className="w-full sm:w-auto">
            <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.sortBy}
            </label>
            <select 
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-900 border-gray-300'} border focus:outline-none focus:ring-2 focus:ring-cyan-400`}
            >
              <option value="newest">{t.newest}</option>
              <option value="stars">{t.stars}</option>
            </select>
          </div>
        </div>

        {filteredRepos.length === 0 ? (
          <div className={`text-center py-12 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <BookOpen size={48} className="mx-auto mb-4 opacity-50" />
            <p>{t.noProjects}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRepos.map(repo => (
              <div 
                key={repo.id}
                className={`rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-400/10 transition-all duration-300 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className={`text-xl font-semibold truncate ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                      {repo.name}
                    </h3>
                    <div 
                      className="px-2 py-1 rounded-full text-sm"
                      style={{ 
                        backgroundColor: repo.language ? `${languageColors[repo.language] || '#777777'}20` : '#77777720',
                        color: repo.language ? languageColors[repo.language] || '#777777' : '#777777'
                      }}
                    >
                      {repo.language || 'Unknown'}
                    </div>
                  </div>
                  
                  <p className={`mt-2 text-sm h-12 overflow-hidden ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {repo.description || t.noDescription}
                  </p>
                  
                  <div className="flex items-center mt-4 space-x-4">
                    <div className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <Star size={16} className="mr-1" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className={`flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <GitFork size={16} className="mr-1" />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                  
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {repo.topics.slice(0, 3).map(topic => (
                        <span 
                          key={topic}
                          className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <p className={`text-xs mt-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    {t.lastUpdated}: {formatDate(repo.updated_at)}
                  </p>
                  
                  <div className="mt-6 flex items-center space-x-4">
                    <a 
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-3 py-1 rounded-lg ${darkMode ? 'bg-gray-700 text-cyan-400 hover:bg-gray-600' : 'bg-gray-100 text-cyan-600 hover:bg-gray-200'} transition-colors`}
                    >
                      <Github size={16} className="mr-1" />
                      <span className="text-sm">{t.viewProject}</span>
                    </a>
                    
                    {repo.homepage && (
                      <a 
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-3 py-1 rounded-lg ${darkMode ? 'bg-cyan-900 text-cyan-400 hover:bg-cyan-800' : 'bg-cyan-100 text-cyan-600 hover:bg-cyan-200'} transition-colors`}
                      >
                        <ExternalLink size={16} className="mr-1" />
                        <span className="text-sm">{t.viewDemo}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default function GitHubProjectsSection({ username = "Thomasborn", darkMode = true, language = 'en' }) {
  return (
    <GitHubProjects 
      username={username} 
      darkMode={darkMode} 
      language={language} 
    />
  );
}