import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import MetricCard from '@/components/dashboard/MetricCard';
import PerformanceChart from '@/components/dashboard/PerformanceChart';
import KeywordsTable from '@/components/dashboard/KeywordsTable';
import CompetitorCard from '@/components/dashboard/CompetitorCard';
import SentimentChart from '@/components/dashboard/SentimentChart';
import { BarChart3, Search, TrendingUp, MessageSquare, Download } from 'lucide-react';

// Font links component to ensure proper font loading
const FontLinks = () => (
  <link 
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" 
    rel="stylesheet" 
  />
);

const Index = () => {
  // SuperOne performance data
  const performanceData = [
    { date: 'Dec 17', downloads: 3800, ranking: 215 },
    { date: 'Dec 24', downloads: 4200, ranking: 203 },
    { date: 'Dec 31', downloads: 5100, ranking: 189 },
    { date: 'Jan 7', downloads: 5600, ranking: 175 },
    { date: 'Jan 14', downloads: 6300, ranking: 162 },
    { date: 'Jan 21', downloads: 7200, ranking: 145 },
    { date: 'Jan 28', downloads: 7900, ranking: 130 },
    { date: 'Feb 4', downloads: 8300, ranking: 120 },
    { date: 'Feb 11', downloads: 8900, ranking: 110 },
    { date: 'Feb 18', downloads: 9500, ranking: 95 },
    { date: 'Feb 25', downloads: 10300, ranking: 88 },
    { date: 'Mar 4', downloads: 11200, ranking: 78 },
    { date: 'Mar 11', downloads: 12100, ranking: 65 },
    { date: 'Mar 18', downloads: 13000, ranking: 55 },
  ];

  // SuperOne keywords data
  const keywordsData = [
    { id: '1', term: 'trivia game', position: 3, change: 2, volume: 55, difficulty: 32 },
    { id: '5', term: 'trivia battle', position: 2, change: 1, volume: 40, difficulty: 28 },
    { id: '10', term: 'fan battle', position: 1, change: 0, volume: 25, difficulty: 15 },
    { id: '11', term: 'quiz cash prizes', position: 5, change: 2, volume: 30, difficulty: 38 },
    { id: '9', term: 'football trivia', position: 4, change: -1, volume: 45, difficulty: 30 },
  ];

  // SuperOne competitors data
  const competitorsData = [
    { 
      id: '1596342438', 
      name: 'QuizDuel - Multiplayer Quiz', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/3b/f8/9f/3bf89f5e-d718-16ac-f07d-7fe0ec67a1b3/AppIcon-1x_U007emarketing-0-7-0-0-85-220-0.png/170x170bb.png', 
      ranking: 32, 
      change: -1, 
      rating: 4.7,
      developer: 'MAG Interactive'
    },
    { 
      id: '1442114861', 
      name: 'Trivia Royale', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0b/d5/31/0bd53102-66a2-c4e0-4780-311b72cb9091/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/170x170bb.png', 
      ranking: 45, 
      change: 2, 
      rating: 4.5,
      developer: 'Teatime Games'
    },
    { 
      id: '1486449576', 
      name: 'Cash Trivia', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/82/f8/1e/82f81e73-9f4a-46d5-efcc-1e0d0ff2393d/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/170x170bb.png', 
      ranking: 51, 
      change: -3, 
      rating: 4.2,
      developer: 'Cash Quiz Inc.'
    },
    { 
      id: '1574405904', 
      name: 'HQ - Live Trivia Game Show', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/6d/65/5f/6d655f59-b059-b583-f3ad-f4c0fa416c31/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/170x170bb.png', 
      ranking: 58, 
      change: 5, 
      rating: 4.6,
      developer: 'HQ Trivia'
    },
  ];

  // SuperOne sentiment data based on review analysis
  const sentimentData = [
    { name: 'Positive', value: 79, color: '#4ade80' },
    { name: 'Neutral', value: 8, color: '#a3a3a3' },
    { name: 'Negative', value: 13, color: '#f87171' },
  ];

  return (
    <Layout title="Dashboard" subtitle="Overview of your SuperOne app's performance">
      <FontLinks />
      <div className="mb-6">
        <h2 className="text-2xl font-slab font-medium">Overview</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Downloads"
          value="3.7M"
          change={18.3}
          trend="up"
          description="Total downloads"
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
          timeRange="Last 30 days"
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