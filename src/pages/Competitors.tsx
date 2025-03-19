
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

  // Real competitors data for Squid Game: Unleashed from AppTweak
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
    { 
      id: '1495162677', 
      name: 'Auto Brawl Chess:Battle Royale', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/76/68/4e/76684e08-7298-d0be-4f22-de3c199bff84/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/170x170bb.png', 
      ranking: 45, 
      change: 6, 
      rating: 4.6,
      developer: 'Panoramik Games'
    },
    { 
      id: '1459402952', 
      name: 'Zooba: Zoo Battle Royale Games', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/af/61/cd/af61cd75-45be-9888-d945-a079c3bb07c9/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/170x170bb.png', 
      ranking: 51, 
      change: 8, 
      rating: 4.7,
      developer: 'Wildlife Studios'
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

  // Real market analysis data based on AppTweak insights
  const marketPosition = 39; // Current rank in Games & Action categories
  const marketShare = 9.2; // Estimated percentage based on Netflix games portfolio
  const avgCompetitorRating = 4.6; // Average from competitors
  const userBase = 3.7; // Millions of users, calculated from download data

  // Competitive Gap Analysis based on real data
  const gapAnalysisData = [
    {
      name: "IP Recognition",
      value: 95,
      change: 18,
      color: "bg-redbox-purple"
    },
    {
      name: "Gameplay Mechanics",
      value: 82,
      change: 7,
      color: "bg-redbox-red"
    },
    {
      name: "User Interface",
      value: 78,
      change: 10,
      color: "bg-redbox-orange"
    },
    {
      name: "Retention Rate",
      value: 72,
      change: 12,
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
          change={8}
          trend="up"
          description="Your position in Games & Action categories"
          icon={<Award className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="Market Share"
          value={`${marketShare}%`}
          change={1.5}
          trend="up"
          description="Share of Netflix games downloads"
          icon={<TrendingUp className="h-5 w-5 text-redbox-red" />}
        />
        <MetricCard
          title="Rating Comparison"
          value="4.8"
          change={0.2}
          trend="up"
          description={`Your rating vs avg. competitor (${avgCompetitorRating})`}
          icon={<Star className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="User Base"
          value={`${userBase}M`}
          change={0.6}
          trend="up"
          description="Monthly active users (estimates)"
          icon={<Users className="h-5 w-5 text-redbox-indigo" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-slab font-medium mb-4">Top Netflix Competitors</h3>
          <div className="space-y-4">
            {competitorsData.slice(0, 4).map((competitor) => (
              <CompetitorCard key={competitor.id} competitor={competitor} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-slab font-medium mb-4">Other Battle Royale Games</h3>
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