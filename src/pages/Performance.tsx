
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PerformanceChart from '@/components/dashboard/PerformanceChart';
import TimeSelector from '@/components/dashboard/TimeSelector';
import MetricCard from '@/components/dashboard/MetricCard';
import { BarChart3, ArrowUpRight, Download, Eye } from 'lucide-react';

const Performance = () => {
  const [timeRange, setTimeRange] = useState<string>('30d');

  // Mock performance data showing viral growth pattern
  const performanceData = [
    { date: 'Sep 17', downloads: 2500, ranking: 152 },
    { date: 'Sep 19', downloads: 12800, ranking: 86 },
    { date: 'Sep 21', downloads: 58400, ranking: 45 },
    { date: 'Sep 23', downloads: 186000, ranking: 22 },
    { date: 'Sep 25', downloads: 425000, ranking: 12 },
    { date: 'Sep 27', downloads: 820000, ranking: 8 },
    { date: 'Sep 29', downloads: 1240000, ranking: 6 },
    { date: 'Oct 1', downloads: 1680000, ranking: 4 },
    { date: 'Oct 3', downloads: 2150000, ranking: 3 },
    { date: 'Oct 5', downloads: 2480000, ranking: 3 },
    { date: 'Oct 7', downloads: 2640000, ranking: 3 },
    { date: 'Oct 9', downloads: 2780000, ranking: 3 },
    { date: 'Oct 11', downloads: 2950000, ranking: 3 },
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
          value="22.5M"
          change={1452.8}
          trend="up"
          description={`Total downloads for ${getTimeRangeDisplay().toLowerCase()}`}
          icon={<Download className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="App Ranking"
          value="#3"
          change={149}
          trend="up"
          description="Current Entertainment category ranking"
          icon={<BarChart3 className="h-5 w-5 text-redbox-red" />}
        />
        <MetricCard
          title="Conversion Rate"
          value="42.6%"
          change={31.2}
          trend="up"
          description="Page view to download conversion"
          icon={<ArrowUpRight className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="Impressions"
          value="58.2M"
          change={826.9}
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
              <span className="font-medium">748,342</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Peak Download Day</span>
              <span className="font-medium">Oct 3 (912,587)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Ranking Improvement</span>
              <span className="font-medium text-green-500">+149 positions</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Conversion Rate Increase</span>
              <span className="font-medium text-green-500">+31.2%</span>
            </li>
          </ul>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-bold mb-4">Viral Insights</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-muted-foreground">Viral Coefficient</span>
              <span className="font-medium">3.8 (Excellent)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Market Share</span>
              <span className="font-medium">15%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Growth vs. Category</span>
              <span className="font-medium text-green-500">+1240%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Social Media Mentions</span>
              <span className="font-medium">4.2M</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Performance;
