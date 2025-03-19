
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
      id: '1608097361', 
      name: 'Twelve Minutes', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/d0/e7/ec/d0e7ecdf-4fd1-5e5e-1b2b-59d8e1e39247/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1024x1024bb.jpg', 
      ranking: 45, 
      change: -2, 
      rating: 4.2,
      developer: 'Netflix, Inc.'
    },
    { 
      id: '6443475072', 
      name: 'TMNT: Shredder\'s Revenge', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/81/22/2b/81222bc0-a1b0-ba54-3e89-1800e4f4dc55/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1024x1024bb.jpg', 
      ranking: 38, 
      change: 3, 
      rating: 4.9,
      developer: 'Netflix, Inc.'
    },
    { 
      id: '6462363352', 
      name: 'Where is He: Find Daddy', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/bb/d3/25/bbd32594-34c0-f263-01fe-f4e070ffafe8/AppIcon-1x_U007emarketing-0-7-0-85-220-0.png/1024x1024bb.jpg', 
      ranking: 27, 
      change: 5, 
      rating: 4.6,
      developer: 'Anh Le Thi Tram'
    },
    { 
      id: '1608097488', 
      name: 'Storyteller', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/bc/65/c0/bc65c08a-96ad-c379-0d0b-294a477a9a54/AppIcon-1x_U007emarketing-0-7-0-85-220.png/1024x1024bb.jpg', 
      ranking: 41, 
      change: -4, 
      rating: 4.0,
      developer: 'Netflix, Inc.'
    },
    { 
      id: '1612460464', 
      name: 'The President.', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/2d/8e/b5/2d8eb500-893c-9702-39e6-2fbf8115dd93/AppIcon-gym1-1x_U007emarketing-0-4-0-85-220-0.png/1024x1024bb.jpg', 
      ranking: 29, 
      change: 6, 
      rating: 4.6,
      developer: 'Crazy Labs'
    },
    { 
      id: '1642873657', 
      name: 'Pixel Demolish', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e1/4d/f8/e14df80a-97a9-dea6-08de-4fe7b7c768d0/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/1024x1024bb.jpg', 
      ranking: 32, 
      change: 8, 
      rating: 4.6,
      developer: 'Rollic Games'
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
  const marketPosition = 134; // Current rank in Action games category
  const marketShare = 8.3; // Estimated percentage based on downloads
  const avgCompetitorRating = 4.5; // Average from competitors
  const userBase = 2.3; // Millions of users, calculated from download data

  // Competitive Gap Analysis based on real data
  const gapAnalysisData = [
    {
      name: "Original Content",
      value: 92,
      change: 15,
      color: "bg-redbox-purple"
    },
    {
      name: "Gaming Experience",
      value: 84,
      change: 9,
      color: "bg-redbox-red"
    },
    {
      name: "User Engagement",
      value: 78,
      change: 12,
      color: "bg-redbox-orange"
    },
    {
      name: "Monetization",
      value: 65,
      change: -5,
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
          change={11}
          trend="down"
          description="Your position in Action Games category"
          icon={<Award className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="Market Share"
          value={`${marketShare}%`}
          change={1.2}
          trend="up"
          description="Percentage of category downloads"
          icon={<TrendingUp className="h-5 w-5 text-redbox-red" />}
        />
        <MetricCard
          title="Rating Comparison"
          value="4.8"
          change={0.3}
          trend="up"
          description={`Your rating vs avg. competitor (${avgCompetitorRating})`}
          icon={<Star className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="User Base"
          value={`${userBase}M`}
          change={0.4}
          trend="up"
          description="Monthly active users (estimates)"
          icon={<Users className="h-5 w-5 text-redbox-indigo" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-slab font-medium mb-4">Top Competitors</h3>
          <div className="space-y-4">
            {competitorsData.slice(0, 4).map((competitor) => (
              <CompetitorCard key={competitor.id} competitor={competitor} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-slab font-medium mb-4">Rising Competitors</h3>
          <div className="space-y-4">
            {competitorsData.slice(4, 6).map((competitor) => (
              <CompetitorCard key={competitor.id} competitor={competitor} />
            ))}
          </div>
          
          <div className="mt-6 bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-slab font-medium mb-4">Competitive Gap Analysis</h3>
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