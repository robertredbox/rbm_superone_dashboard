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
  // Create dates from Dec 18, 2024 to Mar 17, 2025 (90 days)
  const startDate = new Date('2024-12-18');
  const endDate = new Date('2025-03-17');
  
  // Daily downloads from analysis (full 90 days of data)
  // Note that we've mapped the weekly pattern from analysis to generate a realistic daily pattern
  const fullDailyDownloads = [
    // December (starting from 18th)
    11, 14, 17, 9, 21, 13, 16, // Week 1 (Dec 18-24)
    12, 15, 18, 10, 22, 14, 17, // Week 2 (Dec 25-31)
    
    // January
    18, 22, 27, 14, 32, 19, 24, // Week 3 (Jan 1-7)
    35, 43, 52, 29, 67, 40, 49, // Week 4 (Jan 8-14)
    88, 109, 132, 73, 170, 102, 126, // Week 5 (Jan 15-21)
    
    // February
    125, 155, 187, 104, 241, 145, 179, // Week 6 (Jan 22-28)
    114, 141, 170, 95, 220, 132, 163, // Week 7 (Jan 29-Feb 4)
    107, 132, 160, 89, 206, 124, 153, // Week 8 (Feb 5-11)
    
    // March (up to 17th)
    83, 103, 124, 69, 160, 96, 119, // Week 9 (Feb 12-18)
    47, 58, 70, 39, 90, 54, 67, // Week 10 (Feb 19-25)
    32, 40, 48, 27, 62, 37, 46, // Week 11 (Feb 26-Mar 4)
    28, 35, 42, 23, 54, 32, 40, // Week 12 (Mar 5-11)
    25, 31, 37, 21, 48, 29, 36  // Week 13 (Mar 12-17, partial week)
  ];
  
  // Filter data based on selected time range
  let dailyDownloads = [...fullDailyDownloads];
  
  if (timeRange === '30d') {
    dailyDownloads = fullDailyDownloads.slice(-30);
  } else if (timeRange === '7d') {
    dailyDownloads = fullDailyDownloads.slice(-7);
  }
  
  // Calculate time-adjusted date range
  const timeAdjustedStartDate = new Date(startDate);
  if (timeRange === '30d') {
    timeAdjustedStartDate.setDate(endDate.getDate() - 30 + 1);
  } else if (timeRange === '7d') {
    timeAdjustedStartDate.setDate(endDate.getDate() - 7 + 1);
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
    const date = new Date(timeAdjustedStartDate);
    date.setDate(date.getDate() + i);
    
    // Format date as 'MMM D' (e.g., 'Dec 18')
    const formattedDate = `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
    
    // Calculate downloads for this interval (daily, every 3 days, or weekly)
    const intervalDownloads = dailyDownloads.slice(i, i + interval).reduce((sum, val) => sum + val, 0);
    
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
  
  // Get sum of all downloads for the period
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
  peakDate.setDate(peakDate.getDate() + maxDownloadsIndex);
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
              <span className="font-sans font-medium">Germany (21.5%)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Peak Download Period</span>
              <span className="font-sans font-medium text-green-500">Mid-Jan to Mid-Feb</span>
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
              <span className="font-sans font-medium">Africa (10.4%)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Download Days</span>
              <span className="font-sans font-medium text-green-500">Mon, Thu, Fri</span>
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