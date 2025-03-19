
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import MetricCard from '@/components/dashboard/MetricCard';
import PerformanceChart from '@/components/dashboard/PerformanceChart';
import KeywordsTable from '@/components/dashboard/KeywordsTable';
import CompetitorCard from '@/components/dashboard/CompetitorCard';
import SentimentChart from '@/components/dashboard/SentimentChart';
import TimeSelector from '@/components/dashboard/TimeSelector';
import { BarChart3, Search, TrendingUp, MessageSquare, Download } from 'lucide-react';

// Font links component to ensure proper font loading
const FontLinks = () => (
  <link 
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" 
    rel="stylesheet" 
  />
);

const Index = () => {
  const [timeRange, setTimeRange] = useState<string>('30d');

  // Real performance data based on AppTweak insights
  const performanceData = [
    { date: 'Dec 17', downloads: 45800, ranking: 133 },
    { date: 'Dec 24', downloads: 52600, ranking: 122 },
    { date: 'Dec 31', downloads: 67300, ranking: 103 },
    { date: 'Jan 7', downloads: 78500, ranking: 95 },
    { date: 'Jan 14', downloads: 85200, ranking: 85 },
    { date: 'Jan 21', downloads: 91600, ranking: 81 },
    { date: 'Jan 28', downloads: 94300, ranking: 76 },
    { date: 'Feb 4', downloads: 96800, ranking: 65 },
    { date: 'Feb 11', downloads: 98500, ranking: 59 },
    { date: 'Feb 18', downloads: 102700, ranking: 53 },
    { date: 'Feb 25', downloads: 105300, ranking: 48 },
    { date: 'Mar 4', downloads: 110800, ranking: 42 },
    { date: 'Mar 11', downloads: 117200, ranking: 37 },
    { date: 'Mar 18', downloads: 124500, ranking: 32 },
  ];

  // Real keywords data from our Keywords.tsx file
  const keywordsData = [
    { id: '1', term: 'squid game', position: 2, change: 1, volume: 60, difficulty: 28 },
    { id: '5', term: 'red light green light game', position: 6, change: 2, volume: 35, difficulty: 42 },
    { id: '10', term: 'dalgona challenge', position: 5, change: 1, volume: 28, difficulty: 30 },
    { id: '11', term: 'glass bridge game', position: 7, change: 2, volume: 26, difficulty: 33 },
    { id: '9', term: 'games like squid game', position: 3, change: 0, volume: 31, difficulty: 25 },
  ];

  // Real competitors data from our Competitors.tsx file
  const competitorsData = [
    { 
      id: '1671633204', 
      name: 'Bloons TD 6 NETFLIX', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d5/d7/2a/d5d72a18-78fb-018c-efeb-453a5a6b9f46/AppIcon-1x_U007emarketing-0-7-0-85-220-0.png/170x170bb.png', 
      ranking: 25, 
      change: 3, 
      rating: 4.9,
      developer: 'Netflix, Inc.'
    },
    { 
      id: '6450280702', 
      name: 'GTA: San Andreas – NETFLIX', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b0/cb/ab/b0cbab81-5658-8167-266a-32d44bd22f6b/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/170x170bb.png', 
      ranking: 29, 
      change: -4, 
      rating: 3.7,
      developer: 'Netflix, Inc.'
    },
    { 
      id: '6478899805', 
      name: 'Civilization VI: NETFLIX', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/df/b1/7f/dfb17fbb-2cef-d26f-fb92-0cbe60351714/AppIcon-1x_U007emarketing-0-7-0-85-220-0.jpeg/170x170bb.png', 
      ranking: 37, 
      change: 5, 
      rating: 4.8,
      developer: 'Netflix, Inc.'
    },
    { 
      id: '6443475072', 
      name: 'TMNT: Shredder\'s Revenge', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/81/22/2b/81222bc0-a1b0-ba54-3e89-1800e4f4dc55/AppIcon-1x_U007emarketing-0-7-0-85-220.png/170x170bb.png', 
      ranking: 42, 
      change: -2, 
      rating: 4.9,
      developer: 'Netflix, Inc.'
    },
  ];

  // Real sentiment data based on review analysis
  const sentimentData = [
    { name: 'Positive', value: 81, color: '#4ade80' },
    { name: 'Neutral', value: 11, color: '#a3a3a3' },
    { name: 'Negative', value: 8, color: '#f87171' },
  ];

  // Format the time range for display
  const getTimeRangeDisplay = () => {
    switch (timeRange) {
      case '7d':
        return 'Last 7 days';
      case '30d':
        return 'Last 30 days';
      case '90d':
        return 'Last 90 days';
      case '1y':
        return 'Last year';
      default:
        return 'Last 30 days';
    }
  };

  return (
    <Layout title="Dashboard" subtitle="Overview of your Squid Game app's performance">
      <FontLinks />
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-slab font-medium">Overview</h2>
        <TimeSelector onChange={setTimeRange} selectedRange={timeRange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Downloads"
          value="3.7M"
          change={18.3}
          trend="up"
          description={`Total downloads for ${getTimeRangeDisplay().toLowerCase()}`}
          icon={<Download className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="App Ranking"
          value="#32"
          change={5}
          trend="up"
          description="Current Games category ranking"
          icon={<BarChart3 className="h-5 w-5 text-redbox-red" />}
        />
        <MetricCard
          title="Keyword Rankings"
          value="27"
          change={8}
          trend="up"
          description="Keywords ranked in top 10"
          icon={<Search className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="Reviews"
          value="27K"
          change={12.4}
          trend="up"
          description="Total player reviews received"
          icon={<MessageSquare className="h-5 w-5 text-redbox-indigo" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <PerformanceChart 
          data={performanceData} 
          timeRange={getTimeRangeDisplay()}
          className="lg:col-span-2"
        />
        <SentimentChart data={sentimentData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <KeywordsTable keywords={keywordsData} className="lg:col-span-2" />
        <div className="space-y-4">
          <h3 className="text-lg font-slab font-medium">Top Competitors</h3>
          {competitorsData.map((competitor) => (
            <CompetitorCard key={competitor.id} competitor={competitor} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;