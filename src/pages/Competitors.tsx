
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import TimeSelector from '@/components/dashboard/TimeSelector';
import CompetitorCard from '@/components/dashboard/CompetitorCard';
import MetricCard from '@/components/dashboard/MetricCard';
import { TrendingUp, Users, Star, Award } from 'lucide-react';

const Competitors = () => {
  const [timeRange, setTimeRange] = useState<string>('30d');

  // Mock competitors data
  const competitorsData = [
    { id: '1', name: 'FitTrack Pro', icon: 'https://via.placeholder.com/48', ranking: 1, change: 0, rating: 4.8 },
    { id: '2', name: 'GymBuddy', icon: 'https://via.placeholder.com/48', ranking: 2, change: 1, rating: 4.7 },
    { id: '3', name: 'WorkoutPal', icon: 'https://via.placeholder.com/48', ranking: 3, change: -1, rating: 4.6 },
    { id: '4', name: 'FitJourney', icon: 'https://via.placeholder.com/48', ranking: 6, change: 2, rating: 4.5 },
    { id: '5', name: 'HealthTracker', icon: 'https://via.placeholder.com/48', ranking: 8, change: 1, rating: 4.4 },
    { id: '6', name: 'FitnessPro', icon: 'https://via.placeholder.com/48', ranking: 10, change: -2, rating: 4.3 },
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

  return (
    <Layout title="Competitors" subtitle="Analyze your competition in the market">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-slab font-bold">Competitor Analysis</h2>
        <TimeSelector onChange={setTimeRange} selectedRange={timeRange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Market Position"
          value="#4"
          change={1}
          trend="up"
          description="Your position in category ranking"
          icon={<Award className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="Market Share"
          value="12%"
          change={2.3}
          trend="up"
          description="Percentage of category downloads"
          icon={<TrendingUp className="h-5 w-5 text-redbox-red" />}
        />
        <MetricCard
          title="Rating Comparison"
          value="4.6"
          change={0.2}
          trend="up"
          description="Your rating vs avg. competitor (4.4)"
          icon={<Star className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="User Base"
          value="285K"
          change={8.7}
          trend="up"
          description="Estimated monthly active users"
          icon={<Users className="h-5 w-5 text-redbox-indigo" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-slab font-bold mb-4">Top Competitors</h3>
          <div className="space-y-4">
            {competitorsData.slice(0, 4).map((competitor) => (
              <CompetitorCard key={competitor.id} competitor={competitor} />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-slab font-bold mb-4">Rising Competitors</h3>
          <div className="space-y-4">
            {competitorsData.slice(4, 6).map((competitor) => (
              <CompetitorCard key={competitor.id} competitor={competitor} />
            ))}
          </div>
          
          <div className="mt-6 bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-slab font-bold mb-4">Competitive Gap Analysis</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">UI/UX Design</span>
                  <span className="text-sm font-medium">+8%</span>
                </div>
                <div className="w-full bg-redbox-light-grey rounded-full h-2">
                  <div className="bg-redbox-purple h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Feature Set</span>
                  <span className="text-sm font-medium">+5%</span>
                </div>
                <div className="w-full bg-redbox-light-grey rounded-full h-2">
                  <div className="bg-redbox-red h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">User Reviews</span>
                  <span className="text-sm font-medium">+12%</span>
                </div>
                <div className="w-full bg-redbox-light-grey rounded-full h-2">
                  <div className="bg-redbox-orange h-2 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">App Performance</span>
                  <span className="text-sm font-medium">-3%</span>
                </div>
                <div className="w-full bg-redbox-light-grey rounded-full h-2">
                  <div className="bg-redbox-indigo h-2 rounded-full" style={{ width: '57%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Competitors;
