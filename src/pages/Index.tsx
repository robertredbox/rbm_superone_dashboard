
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import MetricCard from '@/components/dashboard/MetricCard';
import PerformanceChart from '@/components/dashboard/PerformanceChart';
import KeywordsTable from '@/components/dashboard/KeywordsTable';
import CompetitorCard from '@/components/dashboard/CompetitorCard';
import SentimentChart from '@/components/dashboard/SentimentChart';
import TimeSelector from '@/components/dashboard/TimeSelector';
import { BarChart3, Search, TrendingUp, MessageSquare, Download } from 'lucide-react';

const Index = () => {
  const [timeRange, setTimeRange] = useState<string>('30d');

  // Mock performance data
  const performanceData = [
    { date: 'Jan 1', downloads: 1500, ranking: 25 },
    { date: 'Jan 8', downloads: 1800, ranking: 23 },
    { date: 'Jan 15', downloads: 2100, ranking: 19 },
    { date: 'Jan 22', downloads: 2400, ranking: 15 },
    { date: 'Jan 29', downloads: 2300, ranking: 16 },
    { date: 'Feb 5', downloads: 2600, ranking: 14 },
    { date: 'Feb 12', downloads: 3000, ranking: 11 },
    { date: 'Feb 19', downloads: 3400, ranking: 9 },
    { date: 'Feb 26', downloads: 3200, ranking: 10 },
    { date: 'Mar 5', downloads: 3500, ranking: 8 },
    { date: 'Mar 12', downloads: 3800, ranking: 7 },
    { date: 'Mar 19', downloads: 4100, ranking: 5 },
    { date: 'Mar 26', downloads: 4500, ranking: 4 },
  ];

  // Mock keywords data
  const keywordsData = [
    { id: '1', term: 'fitness app', position: 3, change: 2, volume: 850, difficulty: 75 },
    { id: '2', term: 'workout tracker', position: 5, change: -1, volume: 620, difficulty: 68 },
    { id: '3', term: 'weight loss app', position: 8, change: 4, volume: 920, difficulty: 82 },
    { id: '4', term: 'gym workout planner', position: 12, change: 0, volume: 480, difficulty: 55 },
    { id: '5', term: 'exercise tracker', position: 7, change: 3, volume: 550, difficulty: 63 },
  ];

  // Mock competitors data
  const competitorsData = [
    { id: '1', name: 'FitTrack Pro', icon: 'https://via.placeholder.com/48', ranking: 1, change: 0, rating: 4.8 },
    { id: '2', name: 'GymBuddy', icon: 'https://via.placeholder.com/48', ranking: 2, change: 1, rating: 4.7 },
    { id: '3', name: 'WorkoutPal', icon: 'https://via.placeholder.com/48', ranking: 3, change: -1, rating: 4.6 },
    { id: '4', name: 'FitJourney', icon: 'https://via.placeholder.com/48', ranking: 6, change: 2, rating: 4.5 },
  ];

  // Mock sentiment data
  const sentimentData = [
    { name: 'Positive', value: 68, color: '#4ade80' },
    { name: 'Neutral', value: 24, color: '#a3a3a3' },
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
    <Layout title="Dashboard" subtitle="Overview of your app's performance">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-slab font-bold">Overview</h2>
        <TimeSelector onChange={setTimeRange} selectedRange={timeRange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Downloads"
          value="4,521"
          change={12.3}
          trend="up"
          description={`Total downloads for ${getTimeRangeDisplay().toLowerCase()}`}
          icon={<Download className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="App Ranking"
          value="#4"
          change={3}
          trend="up"
          description="Current category ranking position"
          icon={<BarChart3 className="h-5 w-5 text-redbox-red" />}
        />
        <MetricCard
          title="Keyword Rankings"
          value="32"
          change={-2}
          trend="down"
          description="Keywords ranked in top 10"
          icon={<Search className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="Reviews"
          value="856"
          change={8.7}
          trend="up"
          description="Total user reviews received"
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
          <h3 className="text-lg font-slab font-bold">Top Competitors</h3>
          {competitorsData.map((competitor) => (
            <CompetitorCard key={competitor.id} competitor={competitor} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
