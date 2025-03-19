import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import TimeSelector from '@/components/dashboard/TimeSelector';
import CompetitorCard from '@/components/dashboard/CompetitorCard';
import MetricCard from '@/components/dashboard/MetricCard';
import { TrendingUp, Users, Star, Award } from 'lucide-react';

// Font links component to ensure proper font loading
const FontLinks = () => (
  <link 
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" 
    rel="stylesheet" 
  />
);

const Competitors = () => {
  const [timeRange, setTimeRange] = useState<string>('30d');

  // SuperOne trivia game competitors data
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
    { 
      id: '1461460292', 
      name: 'Trivia Star: Trivia Games Quiz', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/c5/35/19/c535199a-b9fb-f3cd-5367-091818beefea/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/170x170bb.png', 
      ranking: 65, 
      change: 8, 
      rating: 4.5,
      developer: 'Random Logic Games'
    },
    { 
      id: '1453950347', 
      name: 'Trivial Pursuit: Quizzes', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/45/7b/1c/457b1c41-c678-af0d-ef3b-2c5eb9fb5a7c/AppIcon-1x_U007emarketing-0-7-0-85-220.png/170x170bb.png', 
      ranking: 73, 
      change: -5, 
      rating: 4.8,
      developer: 'Ubisoft'
    },
  ];

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

  // SuperOne market analysis data
  const marketPosition = 55; // Current rank in Trivia Games category
  const marketShare = 5.8; // Estimated percentage in trivia game market
  const avgCompetitorRating = 4.5; // Average from competitors
  const userBase = 0.8; // Millions of users, calculated from download data

  // SuperOne competitive gap analysis
  const gapAnalysisData = [
    {
      name: "Prize Amount",
      value: 92,
      change: 15,
      color: "bg-redbox-purple"
    },
    {
      name: "Affiliate Program",
      value: 98,
      change: 20,
      color: "bg-redbox-red"
    },
    {
      name: "User Experience",
      value: 85,
      change: 8,
      color: "bg-redbox-orange"
    },
    {
      name: "Retention Rate",
      value: 78,
      change: 10,
      color: "bg-redbox-indigo"
    }
  ];

  return (
    <Layout title="Competitors" subtitle="Analyze your competition in the market">
      <FontLinks />
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-slab font-medium">Competitor Analysis</h2>
        <TimeSelector onChange={setTimeRange} selectedRange={timeRange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Market Position"
          value={`#${marketPosition}`}
          change={7}
          trend="up"
          description="Your position in Trivia Games category"
          icon={<Award className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="Market Share"
          value={`${marketShare}%`}
          change={1.2}
          trend="up"
          description="Share of trivia game downloads"
          icon={<TrendingUp className="h-5 w-5 text-redbox-red" />}
        />
        <MetricCard
          title="Rating Comparison"
          value="5.0"
          change={0.5}
          trend="up"
          description={`Your rating vs avg. competitor (${avgCompetitorRating})`}
          icon={<Star className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="User Base"
          value={`${userBase}M`}
          change={0.3}
          trend="up"
          description="Monthly active users (estimates)"
          icon={<Users className="h-5 w-5 text-redbox-indigo" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-slab font-medium mb-4">Top Trivia Competitors</h3>
          <div className="space-y-4">
            {competitorsData.slice(0, 4).map((competitor) => (
              <CompetitorCard key={competitor.id} competitor={competitor} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-slab font-medium mb-4">Other Quiz Games</h3>
          <div className="space-y-4">
            {competitorsData.slice(4, 6).map((competitor) => (
              <CompetitorCard key={competitor.id} competitor={competitor} />
            ))}
          </div>
          
          <div className="mt-6 bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-slab font-medium mb-4">Competitive Advantage Analysis</h3>
            <div className="space-y-4">
              {gapAnalysisData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-sans font-normal">{item.name}</span>
                    <span className="text-sm font-sans font-normal">{item.change > 0 ? `+${item.change}%` : `${item.change}%`}</span>
                  </div>
                  <div className="w-full bg-redbox-light-grey rounded-full h-2">
                    <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Competitors;