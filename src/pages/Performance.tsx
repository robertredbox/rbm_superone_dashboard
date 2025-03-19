
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PerformanceChart from '@/components/dashboard/PerformanceChart';
import TimeSelector from '@/components/dashboard/TimeSelector';
import MetricCard from '@/components/dashboard/MetricCard';
import { BarChart3, ArrowUpRight, Download, Eye } from 'lucide-react';

// Font links component to ensure proper font loading
const FontLinks = () => (
  <link 
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" 
    rel="stylesheet" 
  />
);

const Performance = () => {
  const [timeRange, setTimeRange] = useState<string>('30d');

  // Real performance data based on Squid Game: Unleashed metrics
  const performanceData = [
    { date: 'Dec 17', downloads: 45800, ranking: 133 },
    { date: 'Dec 24', downloads: 52600, ranking: 122 },
    { date: 'Dec 31', downloads: 67300, ranking: 103 },
    { date: 'Jan 7', downloads: 78500, ranking: 95 },
    { date: 'Jan 14', downloads: 85200, ranking: 85 },
    { date: 'Jan 21', downloads: 91600, ranking: 81 },
    { date: 'Jan 28', downloads: 94300, ranking: 76 },
    { date: 'Feb 4', downloads: 96800, ranking: 65 },
    { date: 'Feb 11', downloads: 98500, ranking: 59 },
    { date: 'Feb 18', downloads: 102700, ranking: 53 },
    { date: 'Feb 25', downloads: 105300, ranking: 48 },
    { date: 'Mar 4', downloads: 110800, ranking: 42 },
    { date: 'Mar 11', downloads: 117200, ranking: 37 },
    { date: 'Mar 18', downloads: 124500, ranking: 32 },
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
      <FontLinks />
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-slab font-medium">Performance Metrics</h2>
        <TimeSelector onChange={setTimeRange} selectedRange={timeRange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Downloads"
          value="3.7M"
          change={18.3}
          trend="up"
          description={`Total downloads for ${getTimeRangeDisplay().toLowerCase()}`}
          icon={<Download className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="App Ranking"
          value="#32"
          change={101}
          trend="up"
          description="Current Games category ranking"
          icon={<BarChart3 className="h-5 w-5 text-redbox-red" />}
        />
        <MetricCard
          title="Conversion Rate"
          value="22.8%"
          change={4.7}
          trend="up"
          description="Page view to download conversion"
          icon={<ArrowUpRight className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="Impressions"
          value="16.2M"
          change={13.4}
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
