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

// Process the SuperOne app data for our visualization
const processAppTweakData = () => {
  // Mock data based on the SuperOne iOS analysis
  // Create dates from Dec 18, 2024 to Mar 17, 2025 (90 days)
  const startDate = new Date('2024-12-18');
  const endDate = new Date('2025-03-17');
  
  // Daily downloads from analysis (adjusted to have 90 days of data)
  // Note that we've mapped the weekly pattern from analysis to generate a realistic daily pattern
  const dailyDownloads = [
    // December (starting from 18th)
    11, 14, 17, 9, 21, 13, 16, // Week 1
    12, 15, 18, 10, 22, 14, 17, // Week 2
    
    // January
    18, 22, 27, 14, 32, 19, 24, // Week 3
    35, 43, 52, 29, 67, 40, 49, // Week 4
    88, 109, 132, 73, 170, 102, 126, // Week 5
    
    // February
    125, 155, 187, 104, 241, 145, 179, // Week 6
    114, 141, 170, 95, 220, 132, 163, // Week 7
    107, 132, 160, 89, 206, 124, 153, // Week 8
    
    // March (up to 17th)
    83, 103, 124, 69, 160, 96, 119, // Week 9
    47, 58, 70, 39, 90, 54, 67, // Week 10
    32, 40, 48, 27, 62, 37, 46  // Week 11+
  ];
  
  // Calculate cumulative downloads
  const cumulativeDownloads = [];
  let runningTotal = 0;
  for (const downloads of dailyDownloads) {
    runningTotal += downloads;
    cumulativeDownloads.push(runningTotal);
  }
  
  // Create chart data with weekly intervals to avoid overcrowding
  const chartData = [];
  for (let i = 0; i < dailyDownloads.length; i += 7) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    
    // Format date as 'MMM D' (e.g., 'Dec 18')
    const formattedDate = `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
    
    // Weekly downloads (using 7-day total to show overall trend)
    const weeklyDownloads = dailyDownloads.slice(i, i + 7).reduce((sum, val) => sum + val, 0);
    
    // Simulated ranking - start around 120 and improve to about 65
    const progress = i / dailyDownloads.length;
    const ranking = Math.round(120 - (55 * progress));
    
    chartData.push({
      date: formattedDate,
      downloads: weeklyDownloads,
      ranking
    });
  }
  
  // Get sum of all downloads
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
  const peakDate = new Date(startDate);
  peakDate.setDate(peakDate.getDate() + maxDownloadsIndex);
  const peakDateFormatted = `${peakDate.toLocaleString('en-US', { month: 'short' })} ${peakDate.getDate()}`;
  
  return {
    chartData,
    totalDownloads: formattedTotalDownloads,
    avgDailyDownloads,
    peakDownloads: maxDownloads,
    peakDownloadsDate: peakDateFormatted
  };
};

const Performance = () => {
  const [timeRange, setTimeRange] = useState<string>('90d');
  const [performanceData, setPerformanceData] = useState({
    chartData: [],
    totalDownloads: '0',
    avgDailyDownloads: 0,
    peakDownloads: 0,
    peakDownloadsDate: ''
  });

  useEffect(() => {
    // Process data when component mounts or time range changes
    const data = processAppTweakData();
    setPerformanceData(data);
  }, [timeRange]);

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
        <TimeSelector onChange={setTimeRange} selectedRange={timeRange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Downloads"
          value={performanceData.totalDownloads}
          change={49.2}
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
          value="49.2%"
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