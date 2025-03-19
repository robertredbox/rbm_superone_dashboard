
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import TimeSelector from '@/components/dashboard/TimeSelector';
import KeywordsTable from '@/components/dashboard/KeywordsTable';
import { Search, TrendingUp, ArrowUp, BarChart3 } from 'lucide-react';
import MetricCard from '@/components/dashboard/MetricCard';

const Keywords = () => {
  const [timeRange, setTimeRange] = useState<string>('30d');

  // Mock keywords data
  const keywordsData = [
    { id: '1', term: 'fitness app', position: 3, change: 2, volume: 850, difficulty: 75 },
    { id: '2', term: 'workout tracker', position: 5, change: -1, volume: 620, difficulty: 68 },
    { id: '3', term: 'weight loss app', position: 8, change: 4, volume: 920, difficulty: 82 },
    { id: '4', term: 'gym workout planner', position: 12, change: 0, volume: 480, difficulty: 55 },
    { id: '5', term: 'exercise tracker', position: 7, change: 3, volume: 550, difficulty: 63 },
    { id: '6', term: 'fitness tracker app', position: 10, change: 1, volume: 780, difficulty: 71 },
    { id: '7', term: 'personal trainer app', position: 15, change: -2, volume: 420, difficulty: 59 },
    { id: '8', term: 'health and fitness', position: 6, change: 2, volume: 1200, difficulty: 88 },
    { id: '9', term: 'nutrition tracker', position: 9, change: 5, volume: 600, difficulty: 65 },
    { id: '10', term: 'workout plan app', position: 4, change: 1, volume: 750, difficulty: 70 },
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
    <Layout title="Keywords" subtitle="Track and optimize your keyword rankings">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-slab font-bold">Keyword Performance</h2>
        <TimeSelector onChange={setTimeRange} selectedRange={timeRange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Top 10 Keywords"
          value="8"
          change={2}
          trend="up"
          description="Keywords ranked in top 10 positions"
          icon={<Search className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="Avg. Position"
          value="7.9"
          change={1.3}
          trend="up"
          description="Average keyword ranking position"
          icon={<BarChart3 className="h-5 w-5 text-redbox-red" />}
        />
        <MetricCard
          title="Improved Rankings"
          value="6"
          change={3}
          trend="up"
          description="Keywords with improved positions"
          icon={<ArrowUp className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="Visibility Score"
          value="68%"
          change={5.2}
          trend="up"
          description="Overall keyword visibility score"
          icon={<TrendingUp className="h-5 w-5 text-redbox-indigo" />}
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <KeywordsTable keywords={keywordsData} className="w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-bold mb-4">Suggested Keywords</h3>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <span className="text-muted-foreground">mobile fitness tracker</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs bg-redbox-light-grey rounded px-2 py-0.5">Volume: 630</span>
                <span className="text-xs bg-green-100 text-green-800 rounded px-2 py-0.5">Easy</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-muted-foreground">daily workout app</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs bg-redbox-light-grey rounded px-2 py-0.5">Volume: 820</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 rounded px-2 py-0.5">Medium</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-muted-foreground">home exercise planner</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs bg-redbox-light-grey rounded px-2 py-0.5">Volume: 540</span>
                <span className="text-xs bg-green-100 text-green-800 rounded px-2 py-0.5">Easy</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-muted-foreground">fitness progress tracker</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs bg-redbox-light-grey rounded px-2 py-0.5">Volume: 490</span>
                <span className="text-xs bg-green-100 text-green-800 rounded px-2 py-0.5">Easy</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-bold mb-4">Optimization Tips</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <ArrowUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Add "daily workout app" to your app title for better visibility</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Include "fitness progress" in your app description to improve ranking</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Consider creating screenshots that highlight "workout tracking" features</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Update subtitles to include "health and fitness" for better category ranking</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Keywords;
