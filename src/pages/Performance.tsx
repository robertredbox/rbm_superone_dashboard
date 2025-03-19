import React, { useState, useEffect } from 'react';
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

// SuperOne app data processing to handle different time ranges
const processAppTweakData = (timeRange: string) => {
  // Create dates from Dec 19, 2024 to Mar 18, 2025 (90 days)
  const startDate = new Date('2024-12-19');
  const endDate = new Date('2025-03-18');
  
  // Daily downloads from the actual iOS data screenshots
  const fullDailyDownloads = [
    // December (starting from 19th)
    14, // Dec 19, 2024
    8,  // Dec 20, 2024
    17, // Dec 21, 2024
    21, // Dec 22, 2024
    14, // Dec 23, 2024
    5,  // Dec 24, 2024
    17, // Dec 25, 2024
    10, // Dec 26, 2024
    17, // Dec 27, 2024
    8,  // Dec 28, 2024
    7,  // Dec 29, 2024
    7,  // Dec 30, 2024
    18, // Dec 31, 2024
    
    // January 2025
    13, // Jan 1, 2025
    13, // Jan 2, 2025
    10, // Jan 3, 2025
    7,  // Jan 4, 2025
    8,  // Jan 5, 2025
    20, // Jan 6, 2025
    11, // Jan 7, 2025
    18, // Jan 8, 2025
    15, // Jan 9, 2025
    15, // Jan 10, 2025
    11, // Jan 11, 2025
    18, // Jan 12, 2025
    17, // Jan 13, 2025
    22, // Jan 14, 2025
    22, // Jan 15, 2025
    27, // Jan 16, 2025
    39, // Jan 17, 2025
    40, // Jan 18, 2025
    27, // Jan 19, 2025
    68, // Jan 20, 2025
    62, // Jan 21, 2025
    43, // Jan 22, 2025
    24, // Jan 23, 2025
    41, // Jan 24, 2025
    13, // Jan 25, 2025
    27, // Jan 26, 2025
    41, // Jan 27, 2025
    27, // Jan 28, 2025
    22, // Jan 29, 2025
    170, // Jan 30, 2025
    186, // Jan 31, 2025
    
    // February 2025
    98, // Feb 1, 2025
    70, // Feb 2, 2025
    87, // Feb 3, 2025
    68, // Feb 4, 2025
    43, // Feb 5, 2025
    48, // Feb 6, 2025
    81, // Feb 7, 2025
    45, // Feb 8, 2025
    43, // Feb 9, 2025
    51, // Feb 10, 2025
    29, // Feb 11, 2025
    28, // Feb 12, 2025
    29, // Feb 13, 2025
    20, // Feb 14, 2025
    19, // Feb 15, 2025
    26, // Feb 16, 2025
    22, // Feb 17, 2025
    29, // Feb 18, 2025
    14, // Feb 19, 2025
    22, // Feb 20, 2025
    27, // Feb 21, 2025
    29, // Feb 22, 2025
    20, // Feb 23, 2025
    26, // Feb 24, 2025
    14, // Feb 25, 2025
    22, // Feb 26, 2025
    14, // Feb 27, 2025
    18, // Feb 28, 2025
    
    // March 2025 (through March 18)
    31, // Mar 1, 2025
    17, // Mar 2, 2025
    33, // Mar 3, 2025
    25, // Mar 4, 2025
    28, // Mar 5, 2025
    25, // Mar 6, 2025
    35, // Mar 7, 2025
    25, // Mar 8, 2025
    43, // Mar 9, 2025
    50, // Mar 10, 2025
    40, // Mar 11, 2025
    49, // Mar 12, 2025
    68, // Mar 13, 2025
    45, // Mar 14, 2025
    80, // Mar 15, 2025
    82, // Mar 16, 2025
    87, // Mar 17, 2025
    74  // Mar 18, 2025
  ];
  
  // Filter data based on selected time range
  let dailyDownloads = [...fullDailyDownloads];
  
  if (timeRange === '30d') {
    dailyDownloads = fullDailyDownloads.slice(-30);
  } else if (timeRange === '7d') {
    dailyDownloads = fullDailyDownloads.slice(-7);
  }
  
  // Calculate time-adjusted start date
  let timeAdjustedStartDate = new Date(startDate);
  if (timeRange === '30d') {
    // For 30 days, start from Feb 17, 2025 (30 days before Mar 18, 2025)
    timeAdjustedStartDate = new Date('2025-02-17');
  } else if (timeRange === '7d') {
    // For 7 days, start from Mar 12, 2025 (7 days before Mar 18, 2025)
    timeAdjustedStartDate = new Date('2025-03-12');
  }
  
  // Calculate cumulative downloads for the selected period
  const cumulativeDownloads = [];
  let runningTotal = 0;
  for (const downloads of dailyDownloads) {
    runningTotal += downloads;
    cumulativeDownloads.push(runningTotal);
  }
  
  // Create chart data with appropriate intervals to avoid overcrowding
  const chartData = [];
  const interval = timeRange === '7d' ? 1 : timeRange === '30d' ? 3 : 7;
  
  for (let i = 0; i < dailyDownloads.length; i += interval) {
    // Create date for this data point
    const date = new Date(timeAdjustedStartDate);
    date.setDate(timeAdjustedStartDate.getDate() + i);
    
    // Format date as 'MMM D' (e.g., 'Dec 19')
    const formattedDate = `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
    
    // Calculate downloads for this interval (daily, every 3 days, or weekly)
    const intervalDownloads = dailyDownloads.slice(i, Math.min(i + interval, dailyDownloads.length)).reduce((sum, val) => sum + val, 0);
    
    // Simulated ranking - calculate based on progress through the selected period
    const baseRanking = timeRange === '7d' ? 70 : timeRange === '30d' ? 80 : 120;
    const rankingImprovement = timeRange === '7d' ? 10 : timeRange === '30d' ? 25 : 55;
    const progress = i / dailyDownloads.length;
    const ranking = Math.round(baseRanking - (rankingImprovement * progress));
    
    chartData.push({
      date: formattedDate,
      downloads: intervalDownloads,
      ranking
    });
  }
  
  // Get sum of all downloads for the period - from screenshot: 3,088 total
  const totalDownloadsSum = dailyDownloads.reduce((sum, val) => sum + val, 0);
  
  // Format with appropriate suffix
  const formattedTotalDownloads = totalDownloadsSum > 1000 
    ? `${(totalDownloadsSum / 1000).toFixed(1)}K` 
    : totalDownloadsSum.toString();
  
  // Calculate average daily downloads
  const avgDailyDownloads = Math.round(totalDownloadsSum / dailyDownloads.length);
  
  // Find peak download day
  const maxDownloads = Math.max(...dailyDownloads);
  const maxDownloadsIndex = dailyDownloads.indexOf(maxDownloads);
  
  // Calculate date of peak downloads
  const peakDate = new Date(timeAdjustedStartDate);
  peakDate.setDate(timeAdjustedStartDate.getDate() + maxDownloadsIndex);
  const peakDateFormatted = `${peakDate.toLocaleString('en-US', { month: 'short' })} ${peakDate.getDate()}`;
  
  // Calculate growth rate based on first half vs second half of the period
  const halfwayPoint = Math.floor(dailyDownloads.length / 2);
  const firstHalfDownloads = dailyDownloads.slice(0, halfwayPoint).reduce((sum, val) => sum + val, 0);
  const secondHalfDownloads = dailyDownloads.slice(halfwayPoint).reduce((sum, val) => sum + val, 0);
  const growthRate = firstHalfDownloads > 0 
    ? ((secondHalfDownloads - firstHalfDownloads) / firstHalfDownloads) * 100 
    : 0;
  
  return {
    chartData,
    totalDownloads: formattedTotalDownloads,
    avgDailyDownloads,
    peakDownloads: maxDownloads,
    peakDownloadsDate: peakDateFormatted,
    growthRate: growthRate.toFixed(1)
  };
};

const Performance = () => {
  const [timeRange, setTimeRange] = useState<string>('90d');
  const [performanceData, setPerformanceData] = useState({
    chartData: [],
    totalDownloads: '0',
    avgDailyDownloads: 0,
    peakDownloads: 0,
    peakDownloadsDate: '',
    growthRate: '0'
  });

  useEffect(() => {
    // Process data when component mounts or time range changes
    const data = processAppTweakData(timeRange);
    setPerformanceData(data);
  }, [timeRange]);
  
  // Handle time range change
  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
  };

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
        return 'Last 90 days';
    }
  };

  return (
    <Layout title="Performance" subtitle="Analyze your app's performance metrics">
      <FontLinks />
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-slab font-medium">Performance Metrics</h2>
        <TimeSelector onChange={handleTimeRangeChange} selectedRange={timeRange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Downloads"
          value={performanceData.totalDownloads}
          change={parseFloat(performanceData.growthRate)}
          trend="up"
          description={`Total downloads for ${getTimeRangeDisplay().toLowerCase()}`}
          icon={<Download className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="App Ranking"
          value="#65"
          change={55}
          trend="up"
          description="Current Games category ranking"
          icon={<BarChart3 className="h-5 w-5 text-redbox-red" />}
        />
        <MetricCard
          title="Active Markets"
          value="67"
          change={8}
          trend="up"
          description="Countries with active users"
          icon={<ArrowUpRight className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="Growth Rate"
          value={`${performanceData.growthRate}%`}
          change={12.5}
          trend="up"
          description="Second half vs first half"
          icon={<Eye className="h-5 w-5 text-redbox-indigo" />}
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <PerformanceChart 
          data={performanceData.chartData} 
          timeRange={getTimeRangeDisplay()}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-medium mb-4">Performance Summary</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Avg. Daily Downloads</span>
              <span className="font-sans font-medium">{performanceData.avgDailyDownloads.toLocaleString()}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Peak Download Day</span>
              <span className="font-sans font-medium">{performanceData.peakDownloadsDate} ({performanceData.peakDownloads.toLocaleString()})</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Top Market</span>
              <span className="font-sans font-medium">Germany (21.0%)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Peak Download Period</span>
              <span className="font-sans font-medium text-green-500">Late Jan to Early Feb</span>
            </li>
          </ul>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-medium mb-4">Market Insights</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Top Region</span>
              <span className="font-sans font-medium">Europe (45.8%)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Emerging Region</span>
              <span className="font-sans font-medium">Africa (15.2%)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Download Days</span>
              <span className="font-sans font-medium text-green-500">Fri, Sat, Mon</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Top 3 Countries</span>
              <span className="font-sans font-medium">Germany, Côte d'Ivoire, Japan</span>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Performance;