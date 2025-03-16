import { useEffect, useState } from 'react';
import axios from 'axios';

interface GitHubActivityProps {
  username: string;
  language: 'en' | 'id';
  token?: string; // GitHub access token
  fallbackToMockData?: boolean; // Whether to use mock data when API fails
}

interface ContributionDay {
  date: string;
  count: number;
}

export default function GitHubActivity({ 
  username, 
  language, 
  token,
  fallbackToMockData = true
}: GitHubActivityProps) {
  const [contributionData, setContributionData] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [rateLimited, setRateLimited] = useState(false);

  const content = {
    en: {
      title: "GitHub Activity",
      contributions: "contributions in the last year",
      error: "Failed to load GitHub activity",
      rateLimited: "GitHub API rate limit exceeded. Please try again later or use an authentication token.",
      loading: "Loading activity...",
      months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      weekdays: ["", "Mon", "", "Wed", "", "Fri", ""],
      legend: {
        less: "Less",
        more: "More"
      },
      learnHow: "Learn how we count contributions",
      usingMockData: "Using simulated data due to API limitations"
    },
    id: {
      title: "Aktivitas GitHub",
      contributions: "kontribusi dalam setahun terakhir",
      error: "Gagal memuat aktivitas GitHub",
      rateLimited: "Batas rate API GitHub terlampaui. Silakan coba lagi nanti atau gunakan token autentikasi.",
      loading: "Memuat aktivitas...",
      months: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
      weekdays: ["", "Sen", "", "Rab", "", "Jum", ""],
      legend: {
        less: "Lebih sedikit",
        more: "Lebih banyak"
      },
      learnHow: "Pelajari cara kami menghitung kontribusi",
      usingMockData: "Menggunakan data simulasi karena keterbatasan API"
    }
  };

  // Function to generate realistic mock data
  const createMockData = () => {
    const data: ContributionDay[] = [];
    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setFullYear(startDate.getFullYear() - 1);
    
    // Generate dates for the entire year
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      // Weekends have higher chance of contributions for realism
      const isWeekend = d.getDay() === 0 || d.getDay() === 6;
      const randomValue = Math.random();
      
      // Simulate more active days for realistic patterns
      let contributionCount = 0;
      if (randomValue > 0.75) {
        contributionCount = isWeekend 
          ? Math.floor(Math.random() * 8) + 1 
          : Math.floor(Math.random() * 15) + 1;
      }
      
      data.push({
        date: d.toISOString().split('T')[0],
        count: contributionCount
      });
    }
    
    // Create some streaks of activity
    const streakStart = Math.floor(Math.random() * (data.length - 14));
    for (let i = 0; i < 14; i++) {
      if (data[streakStart + i].count === 0) {
        data[streakStart + i].count = Math.floor(Math.random() * 10) + 1;
      }
    }
    
    return data;
  };

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        if (!username) {
          throw new Error('Username is required');
        }
        
        // If we have a token, use GitHub's GraphQL API for better data
        if (token) {
          const query = `
            query {
              user(login: "${username}") {
                contributionsCollection {
                  contributionCalendar {
                    totalContributions
                    weeks {
                      contributionDays {
                        date
                        contributionCount
                        weekday
                      }
                    }
                  }
                }
              }
            }
          `;

          const response = await axios.post(
            'https://api.github.com/graphql',
            { query },
            { 
              headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
              }
            }
          );

          // Process GraphQL response
          const contributionCalendar = 
            response.data.data?.user?.contributionsCollection?.contributionCalendar;
          
          if (contributionCalendar) {
            const { totalContributions, weeks } = contributionCalendar;
            
            // Process weeks data
            const days: ContributionDay[] = [];
            weeks.forEach((week: any) => {
              week.contributionDays.forEach((day: any) => {
                days.push({
                  date: day.date,
                  count: day.contributionCount
                });
              });
            });
            
            setContributionData(days);
            setTotalContributions(totalContributions);
            setLoading(false);
            return;
          }
        } else {
          // Fallback to REST API if no token (prone to rate limiting)
          try {
            // Get user events - limited but better than nothing
            const eventsResponse = await axios.get(
              `https://api.github.com/users/${username}/events/public`
            );
            
            // Process events into contribution data
            const oneYearAgo = new Date();
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
            
            // Create empty calendar
            const days: Record<string, number> = {};
            const startDate = new Date(oneYearAgo);
            const endDate = new Date();
            
            for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
              const dateStr = d.toISOString().split('T')[0];
              days[dateStr] = 0;
            }
            
            // Count contributions from events
            eventsResponse.data.forEach((event: any) => {
              const date = event.created_at.split('T')[0];
              if (days[date] !== undefined) {
                days[date] += 1;
              }
            });
            
            // Convert to array
            const contributionData = Object.entries(days).map(([date, count]) => ({
              date,
              count
            }));
            
            const total = Object.values(days).reduce((sum, count) => sum + count, 0);
            
            setContributionData(contributionData);
            setTotalContributions(total);
            setLoading(false);
            return;
          } catch (restErr: any) {
            // Check if rate limited
            if (restErr.response?.status === 403 && 
                restErr.response?.data?.message?.includes('API rate limit exceeded')) {
              setRateLimited(true);
              throw new Error('Rate limited');
            } else {
              throw restErr;
            }
          }
        }
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        
        // If rate limited but fallback enabled, use mock data
        if (rateLimited && fallbackToMockData) {
          const mockData = createMockData();
          const total = mockData.reduce((sum, day) => sum + day.count, 0);
          
          setContributionData(mockData);
          setTotalContributions(total);
          setLoading(false);
        } else {
          setError(rateLimited ? content[language].rateLimited : content[language].error);
          setLoading(false);
        }
      }
    };

    fetchContributions();
  }, [username, language, token, rateLimited, fallbackToMockData]);

  if (loading) {
    return (
      <div className="text-center text-gray-400">
        {content[language].loading}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 p-4">
        <div>{error}</div>
        {rateLimited && (
          <div className="mt-2 text-sm">
            <a 
              href="https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Learn more about GitHub API rate limits
            </a>
          </div>
        )}
      </div>
    );
  }

  // Get visible months for display
  const getVisibleMonths = () => {
    const months: {label: string, index: number}[] = [];
    
    let currentMonth = -1;
    contributionData.forEach(day => {
      const date = new Date(day.date);
      const monthIndex = date.getMonth();
      
      if (monthIndex !== currentMonth) {
        currentMonth = monthIndex;
        months.push({
          label: content[language].months[monthIndex],
          index: monthIndex
        });
      }
    });
    
    // Filter to unique months
    return months.filter((month, index, self) => 
      self.findIndex(m => m.index === month.index) === index
    );
  };

  const getContributionColor = (count: number) => {
    if (count === 0) return 'bg-gray-800';
    if (count < 5) return 'bg-green-900';
    if (count < 10) return 'bg-green-700';
    if (count < 15) return 'bg-green-500';
    return 'bg-green-300';
  };

  // Create grid based on days of week
  const createCalendarGrid = () => {
    const grid = Array(7).fill(null).map(() => []);
    
    // Process contribution data to fill grid
    contributionData.forEach(day => {
      const date = new Date(day.date);
      const weekday = date.getDay();
      grid[weekday].push(day);
    });
    
    return grid;
  };

  const visibleMonths = getVisibleMonths();
  const calendarGrid = createCalendarGrid();

  return (
    <div className="bg-gray-900 rounded-lg p-4 w-full">
      <div className="flex justify-between items-center mb-3">
        <div className="text-white">
          {totalContributions} {content[language].contributions}
          {rateLimited && (
            <span className="text-xs text-gray-400 ml-2">
              ({content[language].usingMockData})
            </span>
          )}
        </div>
        <div className="text-gray-400 text-sm">
          Contribution settings ▼
        </div>
      </div>
      
      <div className="w-full">
        {/* Month labels */}
        <div className="grid grid-cols-12 gap-1 pl-6 mb-1">
          {visibleMonths.map((month, index) => (
            <div key={index} className="text-xs text-gray-400">
              {month.label}
            </div>
          ))}
        </div>
        
        {/* Calendar grid */}
        <div className="flex">
          {/* Weekday labels */}
          <div className="flex flex-col justify-between pr-2 py-1">
            {content[language].weekdays.map((day, index) => (
              <div key={index} className="text-xs text-gray-400 h-4">
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar squares */}
          <div className="flex-1">
            <div className="grid grid-rows-7 grid-flow-col gap-1">
              {calendarGrid.map((weekday, weekdayIndex) => (
                <div key={weekdayIndex} className="flex gap-1">
                  {weekday.map((day, dayIndex) => (
                    <div 
                      key={`${weekdayIndex}-${dayIndex}`}
                      className={`h-3 w-3 ${getContributionColor(day.count)}`}
                      title={`${day.count} contributions on ${day.date}`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4 text-xs">
        <div className="text-gray-400">
          {content[language].learnHow}
        </div>
        <div className="flex items-center">
          <span className="text-gray-400 mr-1">{content[language].legend.less}</span>
          <div className="bg-gray-800 h-3 w-3 mx-1"></div>
          <div className="bg-green-900 h-3 w-3 mx-1"></div>
          <div className="bg-green-700 h-3 w-3 mx-1"></div>
          <div className="bg-green-500 h-3 w-3 mx-1"></div>
          <div className="bg-green-300 h-3 w-3 mx-1"></div>
          <span className="text-gray-400 ml-1">{content[language].legend.more}</span>
        </div>
      </div>
    </div>
  );
}