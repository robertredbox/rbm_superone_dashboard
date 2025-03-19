
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import TimeSelector from '@/components/dashboard/TimeSelector';
import KeywordsTable from '@/components/dashboard/KeywordsTable';
import { Search, TrendingUp, ArrowUp, BarChart3 } from 'lucide-react';
import MetricCard from '@/components/dashboard/MetricCard';

const Keywords = () => {
  const [timeRange, setTimeRange] = useState<string>('30d');

  // Mock keywords data for Squid Game app
  const keywordsData = [
    { id: '1', term: 'squid game', position: 1, change: 3, volume: 980, difficulty: 92 },
    { id: '2', term: 'netflix game', position: 3, change: 5, volume: 850, difficulty: 85 },
    { id: '3', term: 'honeycomb challenge', position: 2, change: 7, volume: 780, difficulty: 76 },
    { id: '4', term: 'tug of war game', position: 5, change: 12, volume: 720, difficulty: 68 },
    { id: '5', term: 'player 456', position: 4, change: 8, volume: 690, difficulty: 72 },
    { id: '6', term: 'marble game', position: 8, change: 4, volume: 650, difficulty: 65 },
    { id: '7', term: 'red light green light', position: 6, change: 3, volume: 620, difficulty: 70 },
    { id: '8', term: 'k-drama games', position: 10, change: 15, volume: 540, difficulty: 58 },
    { id: '9', term: 'survival game', position: 12, change: 8, volume: 510, difficulty: 82 },
    { id: '10', term: 'glass bridge game', position: 9, change: 5, volume: 480, difficulty: 63 },
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
          value="9"
          change={6}
          trend="up"
          description="Keywords ranked in top 10 positions"
          icon={<Search className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="Avg. Position"
          value="6.0"
          change={35.2}
          trend="up"
          description="Average keyword ranking position"
          icon={<BarChart3 className="h-5 w-5 text-redbox-red" />}
        />
        <MetricCard
          title="Improved Rankings"
          value="10"
          change={10}
          trend="up"
          description="Keywords with improved positions"
          icon={<ArrowUp className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="Visibility Score"
          value="92%"
          change={45.6}
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
              <span className="text-muted-foreground">dalgona challenge</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs bg-redbox-light-grey rounded px-2 py-0.5">Volume: 620</span>
                <span className="text-xs bg-yellow-100 text-yellow-800 rounded px-2 py-0.5">Medium</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-muted-foreground">masked man game</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs bg-redbox-light-grey rounded px-2 py-0.5">Volume: 580</span>
                <span className="text-xs bg-green-100 text-green-800 rounded px-2 py-0.5">Easy</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-muted-foreground">vips squid game</span>
              <div className="flex items-center space-x-2">
                <span className="text-xs bg-redbox-light-grey rounded px-2 py-0.5">Volume: 510</span>
                <span className="text-xs bg-green-100 text-green-800 rounded px-2 py-0.5">Easy</span>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-muted-foreground">triangle soldier</span>
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
              <span className="text-sm">Add "K-drama inspired games" to your app description for better category visibility</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Include "dalgona challenge" in your keywords to capture trending searches</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Create screenshots highlighting the "glass bridge" challenge to improve conversion</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowUp className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm">Update promotional text to include "player 456" to strengthen brand association</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Keywords;
