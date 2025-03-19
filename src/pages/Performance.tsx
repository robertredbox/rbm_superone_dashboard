
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PerformanceChart from '@/components/dashboard/PerformanceChart';
import TimeSelector from '@/components/dashboard/TimeSelector';
import MetricCard from '@/components/dashboard/MetricCard';
import { BarChart3, ArrowUpRight, Download, Eye } from 'lucide-react';

const Performance = () => {
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
    <Layout title="Performance" subtitle="Analyze your app's performance metrics">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-slab font-bold">Performance Metrics</h2>
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
          title="Conversion Rate"
          value="3.2%"
          change={0.4}
          trend="up"
          description="Page view to download conversion"
          icon={<ArrowUpRight className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="Impressions"
          value="145,832"
          change={5.7}
          trend="up"
          description="Total store listing views"
          icon={<Eye className="h-5 w-5 text-redbox-indigo" />}
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <PerformanceChart 
          data={performanceData} 
          timeRange={getTimeRangeDisplay()}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-bold mb-4">Performance Summary</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-muted-foreground">Avg. Daily Downloads</span>
              <span className="font-medium">148</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Peak Download Day</span>
              <span className="font-medium">Mar 26 (287)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Ranking Improvement</span>
              <span className="font-medium text-green-500">+21 positions</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Conversion Rate Change</span>
              <span className="font-medium text-green-500">+0.4%</span>
            </li>
          </ul>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-bold mb-4">Market Insights</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-muted-foreground">Market Position</span>
              <span className="font-medium">Top 5 in Category</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Market Share</span>
              <span className="font-medium">12%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Growth vs. Market</span>
              <span className="font-medium text-green-500">+8%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Market Size</span>
              <span className="font-medium">4.2M Users</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Performance;
