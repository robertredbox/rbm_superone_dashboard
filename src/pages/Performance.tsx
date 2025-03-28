import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import PerformanceChart from '@/components/dashboard/PerformanceChart';
import TimeSelector from '@/components/dashboard/TimeSelector';
import MetricCard from '@/components/dashboard/MetricCard';
import { Globe, ArrowUpRight, Download, TrendingUp, Users, Calendar, Activity, Clock, AlertCircle, Search, BarChart3, InfoIcon } from 'lucide-react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';

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
  
  // Android listing acquisitions (store listing views) from Dec 13, 2024 to Mar 12, 2025
  const androidListingAcquisitions = [
    // December 2024
    24, // Dec 13, 2024
    24, // Dec 14, 2024
    16, // Dec 15, 2024
    19, // Dec 16, 2024
    24, // Dec 17, 2024
    13, // Dec 18, 2024
    13, // Dec 19, 2024
    7,  // Dec 20, 2024
    15, // Dec 21, 2024
    19, // Dec 22, 2024
    13, // Dec 23, 2024
    15, // Dec 24, 2024
    11, // Dec 25, 2024
    4,  // Dec 26, 2024
    9,  // Dec 27, 2024
    7,  // Dec 28, 2024
    15, // Dec 29, 2024
    6,  // Dec 30, 2024
    5,  // Dec 31, 2024
    
    // January 2025
    20, // Jan 1, 2025
    17, // Jan 2, 2025
    10, // Jan 3, 2025
    11, // Jan 4, 2025
    14, // Jan 5, 2025
    11, // Jan 6, 2025
    8,  // Jan 7, 2025
    5,  // Jan 8, 2025
    10, // Jan 9, 2025
    10, // Jan 10, 2025
    8,  // Jan 11, 2025
    7,  // Jan 12, 2025
    7,  // Jan 13, 2025
    8,  // Jan 14, 2025
    7,  // Jan 15, 2025
    19, // Jan 16, 2025
    10, // Jan 17, 2025
    13, // Jan 18, 2025
    11, // Jan 19, 2025
    15, // Jan 20, 2025
    10, // Jan 21, 2025
    18, // Jan 22, 2025
    4,  // Jan 23, 2025
    14, // Jan 24, 2025
    11, // Jan 25, 2025
    9,  // Jan 26, 2025
    9,  // Jan 27, 2025
    18, // Jan 28, 2025
    81, // Jan 29, 2025
    66, // Jan 30, 2025
    
    // February 2025
    105, // Feb 1, 2025
    81, // Feb 2, 2025
    73, // Feb 3, 2025
    64, // Feb 4, 2025
    54, // Feb 5, 2025
    62, // Feb 6, 2025
    46, // Feb 7, 2025
    39, // Feb 8, 2025
    38, // Feb 9, 2025
    46, // Feb 10, 2025
    37, // Feb 11, 2025
    44, // Feb 12, 2025
    46, // Feb 13, 2025
    31, // Feb 14, 2025
    36, // Feb 15, 2025
    41, // Feb 16, 2025
    30, // Feb 17, 2025
    16, // Feb 18, 2025
    24, // Feb 19, 2025
    22, // Feb 20, 2025
    23, // Feb 21, 2025
    40, // Feb 22, 2025
    35, // Feb 23, 2025
    32, // Feb 24, 2025
    43, // Feb 25, 2025
    44, // Feb 26, 2025
    21, // Feb 27, 2025
    29, // Feb 28, 2025
    
    // March 2025
    46, // Mar 1, 2025
    58, // Mar 2, 2025
    37, // Mar 3, 2025
    45, // Mar 4, 2025
    38, // Mar 5, 2025
    41, // Mar 6, 2025
    39, // Mar 7, 2025
    43, // Mar 8, 2025
    45, // Mar 9, 2025
    61, // Mar 10, 2025
    42, // Mar 11, 2025
    54, // Mar 12, 2025
  ];
  
  // Daily Active Users data from Dec 19, 2024 to Mar 19, 2025
  const androidDAU = [
    2639, 2656, 2273, 2762, 2861, 2201, 3605, 3720, 2166, 3075, 3841, 3446, 3720, // Dec 19-31
    2311, 3950, 2133, 2337, 3485, 3637, 3551, 3480, 2067, 3850, 2422, 2962, 2763, 2951, 2851, 3104, 3400, 3278, 3951, 3831, 2226, // Jan 1-21
    3079, 3214, 3812, 2582, 2457, 3003, 2201, 3606, 2616, 2583, // Jan 22-31
    2258, 2847, 3064, 2431, 3932, 3943, 3561, 2951, 2144, 3405, 3445, 2502, 3078, 2775, 2584, 2333, 2794, 2424, 3999, 2237, 2241, 2765, 2414, 3604, 2480, 2511, 2109, 3658, // Feb 1-28
    3331, 3260, 2638, 2548, 2445, 2188, 2426, 2967, 3149, 2346, 3302, 2921, 3102, 3387, 3545, 2848, 2281, 3207, 2851 // Mar 1-19
  ];

  const iosDAU = [
    2207, 3584, 2073, 3757, 2831, 3473, 2378, 3490, 2886, 2613, 2804, 2301, 3965, // Dec 19-31
    2531, 3250, 2334, 3271, 3051, 2978, 2530, 3100, 3461, 2640, 2368, 2922, 3598, 3837, 3816, 3391, 3374, 3495, 2923, 3289, 2497, // Jan 1-21
    2678, 3471, 3235, 2725, 3583, 3435, 2824, 3742, 3255, 2113, // Jan 22-31
    2442, 3698, 3167, 2281, 2834, 2973, 2931, 2074, 3737, 3630, 3057, 3158, 3605, 2362, 2497, 3653, 3803, 2342, 3404, 2499, 2869, 2948, 2406, 2026, 3561, 2472, 2122, 2061, // Feb 1-28
    2086, 3157, 2599, 2927, 3066, 2611, 2103, 2057, 2716, 2978, 2439, 3605, 2725, 3124, 3474, 2908, 2440, 2009, 3929 // Mar 1-19
  ];
  
  const combinedDAU = androidDAU.map((val, idx) => val + iosDAU[idx]);
  
  // Filter data based on selected time range
  let dailyDownloads = [...fullDailyDownloads];
  let androidDownloads = [...androidListingAcquisitions];
  
  if (timeRange === '30d') {
    dailyDownloads = fullDailyDownloads.slice(-30);
    androidDownloads = androidListingAcquisitions.slice(-30);
  } else if (timeRange === '7d') {
    dailyDownloads = fullDailyDownloads.slice(-7);
    androidDownloads = androidListingAcquisitions.slice(-7);
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
  
  // Calculate Android time-adjusted start date (different date range)
  const androidStartDate = new Date('2024-12-13'); // Android data starts earlier
  let androidTimeAdjustedStartDate = new Date(androidStartDate);
  if (timeRange === '30d') {
    // For 30 days, start 30 days before the end of android data
    androidTimeAdjustedStartDate = new Date('2025-02-11');
  } else if (timeRange === '7d') {
    // For 7 days, start 7 days before the end of android data
    androidTimeAdjustedStartDate = new Date('2025-03-06');
  }
  
  // Create chart data with appropriate intervals to avoid overcrowding
  const interval = timeRange === '7d' ? 1 : timeRange === '30d' ? 3 : 7;
  
  // iOS chart data
  const iosChartData = [];
  for (let i = 0; i < dailyDownloads.length; i += interval) {
    // Create date for this data point
    const date = new Date(timeAdjustedStartDate);
    date.setDate(timeAdjustedStartDate.getDate() + i);
    
    // Format date as 'MMM D' (e.g., 'Dec 19')
    const formattedDate = `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
    
    // Calculate downloads for this interval (daily, every 3 days, or weekly)
    const intervalDownloads = dailyDownloads.slice(i, Math.min(i + interval, dailyDownloads.length)).reduce((sum, val) => sum + val, 0);
    
    iosChartData.push({
      date: formattedDate,
      iosDownloads: intervalDownloads
    });
  }
  
  // Android chart data
  const androidChartData = [];
  for (let i = 0; i < androidDownloads.length; i += interval) {
    // Create date for this data point
    const date = new Date(androidTimeAdjustedStartDate);
    date.setDate(androidTimeAdjustedStartDate.getDate() + i);
    
    // Format date as 'MMM D' (e.g., 'Dec 19')
    const formattedDate = `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
    
    // Calculate downloads for this interval
    const intervalDownloads = androidDownloads.slice(i, Math.min(i + interval, androidDownloads.length)).reduce((sum, val) => sum + val, 0);
    
    androidChartData.push({
      date: formattedDate,
      androidDownloads: intervalDownloads
    });
  }
  
  // Create combined chart data based on time range
  let combinedChartData = [];
  
  if (timeRange === '7d' || timeRange === '30d') {
    // For 7d and 30d, we can do date-based matching as dates might align better
    combinedChartData = iosChartData.map((iosPoint) => {
      // Find matching Android data point by date if possible
      const androidPoint = androidChartData.find(a => a.date === iosPoint.date);
      
      return {
        date: iosPoint.date,
        iosDownloads: iosPoint.iosDownloads,
        androidDownloads: androidPoint ? androidPoint.androidDownloads : 0
      };
    });
  } else {
    // For 90d view, we need a different approach as date ranges are different
    // Create a combined timeline that spans both datasets with proper proportions
    
    // Use index-based point matching for 90d view
    // This ensures Android data shows proper trend over the full range
    const totalPoints = Math.max(iosChartData.length, androidChartData.length);
    
    // Generate points with relative positions in the timeline
    for (let i = 0; i < totalPoints; i++) {
      // Calculate relative positions in each dataset
      const iosIndex = Math.min(Math.floor(i * iosChartData.length / totalPoints), iosChartData.length - 1);
      const androidIndex = Math.min(Math.floor(i * androidChartData.length / totalPoints), androidChartData.length - 1);
      
      // Get data from each dataset at calculated positions
      const iosPoint = iosChartData[iosIndex];
      const androidPoint = androidChartData[androidIndex];
      
      // Use iOS dates for consistency in the chart
      combinedChartData.push({
        date: iosPoint.date,
        iosDownloads: iosPoint.iosDownloads,
        androidDownloads: androidPoint.androidDownloads
      });
    }
  }
  
  // Legacy chart data format for backward compatibility
  const chartData = iosChartData.map(point => ({
    date: point.date,
    downloads: point.iosDownloads
  }));
  
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
  
  // Calculate total android downloads
  const totalAndroidDownloads = androidDownloads.reduce((sum, val) => sum + val, 0);
  const formattedAndroidDownloads = totalAndroidDownloads > 1000 
    ? `${(totalAndroidDownloads / 1000).toFixed(1)}K` 
    : totalAndroidDownloads.toString();
  const avgAndroidDownloads = Math.round(totalAndroidDownloads / androidDownloads.length);
  const maxAndroidDownloads = Math.max(...androidDownloads);
  const maxAndroidDownloadsIndex = androidDownloads.indexOf(maxAndroidDownloads);
  
  // Calculate combined downloads (iOS + Android)
  const combinedDownloadsTotal = totalDownloadsSum + totalAndroidDownloads;
  const formattedCombinedDownloads = combinedDownloadsTotal > 1000 
    ? `${(combinedDownloadsTotal / 1000).toFixed(1)}K` 
    : combinedDownloadsTotal.toString();
  
  // Android peak date calculation (different date range)
  const androidPeakDate = new Date(androidStartDate);
  androidPeakDate.setDate(androidStartDate.getDate() + maxAndroidDownloadsIndex);
  const androidPeakDateFormatted = `${androidPeakDate.toLocaleString('en-US', { month: 'short' })} ${androidPeakDate.getDate()}`;
  
  // Calculate growth rate based on first half vs second half of the period
  const halfwayPoint = Math.floor(dailyDownloads.length / 2);
  const firstHalfDownloads = dailyDownloads.slice(0, halfwayPoint).reduce((sum, val) => sum + val, 0);
  const secondHalfDownloads = dailyDownloads.slice(halfwayPoint).reduce((sum, val) => sum + val, 0);
  const growthRate = firstHalfDownloads > 0 
    ? ((secondHalfDownloads - firstHalfDownloads) / firstHalfDownloads) * 100 
    : 0;
  
  // Weekly average trend calculation
  const getWeeklyAverage = (data) => {
    const weeks = [];
    for (let i = 0; i < data.length; i += 7) {
      const weekData = data.slice(i, i + 7);
      const weekAvg = weekData.reduce((sum, val) => sum + val, 0) / weekData.length;
      weeks.push(Math.round(weekAvg));
    }
    return weeks;
  };
  
  const weeklyAverages = getWeeklyAverage(dailyDownloads);
  const recentWeek = weeklyAverages[weeklyAverages.length - 1];
  const previousWeek = weeklyAverages[weeklyAverages.length - 2] || 0;
  const weeklyTrend = previousWeek > 0 
    ? ((recentWeek - previousWeek) / previousWeek) * 100 
    : 0;
  
  // Calculate average DAU values
  const avgAndroidDAU = Math.round(androidDAU.reduce((sum, val) => sum + val, 0) / androidDAU.length);
  const avgIosDAU = Math.round(iosDAU.reduce((sum, val) => sum + val, 0) / iosDAU.length);
  const avgCombinedDAU = Math.round(combinedDAU.reduce((sum, val) => sum + val, 0) / combinedDAU.length);
  
  // Get max DAU values
  const maxAndroidDAU = Math.max(...androidDAU);
  const maxIosDAU = Math.max(...iosDAU);
  const maxCombinedDAU = Math.max(...combinedDAU);
  
  return {
    chartData,
    platformChartData: {
      ios: iosChartData,
      android: androidChartData,
      combined: combinedChartData
    },
    totalDownloads: formattedTotalDownloads,
    avgDailyDownloads,
    peakDownloads: maxDownloads,
    peakDownloadsDate: peakDateFormatted,
    growthRate: growthRate.toFixed(1),
    weeklyTrend: weeklyTrend.toFixed(1),
    activeMarkets: 67,
    // Android specific data
    totalAndroidDownloads: formattedAndroidDownloads,
    avgAndroidDownloads,
    maxAndroidDownloads,
    androidPeakDate: androidPeakDateFormatted,
    // Combined data
    combinedDownloads: formattedCombinedDownloads,
    // DAU data
    avgAndroidDAU,
    avgIosDAU,
    avgCombinedDAU,
    maxAndroidDAU,
    maxIosDAU,
    maxCombinedDAU,
    androidDAUTrend: -8.9,
    iosDAUTrend: -14.4
  };
};

const Performance = () => {
  const [timeRange, setTimeRange] = useState<string>('90d');
  const [platform, setPlatform] = useState<'ios' | 'android' | 'combined'>('combined');
  const [performanceData, setPerformanceData] = useState({
    chartData: [],
    platformChartData: {
      ios: [],
      android: [],
      combined: []
    },
    totalDownloads: '0',
    avgDailyDownloads: 0,
    peakDownloads: 0,
    peakDownloadsDate: '',
    growthRate: '0',
    weeklyTrend: '0',
    activeMarkets: 0,
    // Android specific data
    totalAndroidDownloads: '0',
    avgAndroidDownloads: 0,
    maxAndroidDownloads: 0,
    androidPeakDate: '',
    // Combined data
    combinedDownloads: '0',
    // DAU data
    avgAndroidDAU: 0,
    avgIosDAU: 0,
    avgCombinedDAU: 0,
    maxAndroidDAU: 0,
    maxIosDAU: 0,
    maxCombinedDAU: 0,
    androidDAUTrend: 0,
    iosDAUTrend: 0
  });

  // Custom time ranges for the performance page
  const customTimeRanges = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' },
  ];

  useEffect(() => {
    // Process data when component mounts or time range changes
    const data = processAppTweakData(timeRange);
    setPerformanceData(data);
    
    // Debug output
    console.log('Performance data updated:', {
      ios: data.platformChartData.ios.length,
      android: data.platformChartData.android.length,
      combined: data.platformChartData.combined.length
    });
  }, [timeRange]);
  
  // Handle time range change
  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
  };

  // Handle platform change
  const handlePlatformChange = (newPlatform: 'ios' | 'android' | 'combined') => {
    setPlatform(newPlatform);
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
      default:
        return 'Last 90 days';
    }
  };

  // Get platform-specific metrics for display
  const getMetricsByPlatform = () => {
    if (platform === 'ios') {
      return {
        downloads: performanceData.totalDownloads,
        growthRate: 33.1,
        weeklyTrend: 92.1,
        activeMarkets: 52,
        dau: performanceData.avgIosDAU.toLocaleString(),
        dauTrend: performanceData.iosDAUTrend
      };
    } else if (platform === 'android') {
      return {
        downloads: performanceData.totalAndroidDownloads,
        growthRate: 39.7,
        weeklyTrend: 101.3,
        activeMarkets: 58,
        dau: performanceData.avgAndroidDAU.toLocaleString(),
        dauTrend: performanceData.androidDAUTrend
      };
    } else {
      return {
        downloads: performanceData.combinedDownloads,
        growthRate: 33.1,
        weeklyTrend: 92.1,
        activeMarkets: 67,
        dau: performanceData.avgCombinedDAU.toLocaleString(),
        dauTrend: (performanceData.androidDAUTrend + performanceData.iosDAUTrend) / 2
      };
    }
  };

  const metrics = getMetricsByPlatform();

  return (
    <Layout title="Performance" subtitle="Analyze your app's performance metrics">
      <FontLinks />
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-slab font-medium">Performance Metrics</h2>
        <TimeSelector 
          onChange={handleTimeRangeChange} 
          selectedRange={timeRange} 
          customRanges={customTimeRanges}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
        <MetricCard
          title="Downloads"
          value={metrics.downloads}
          description={`Total ${platform === 'combined' ? '' : platform} downloads for ${getTimeRangeDisplay().toLowerCase()}`}
          icon={<Download className="h-5 w-5 text-redbox-purple" />}
          className={platform === 'ios' ? 'border-blue-300' : platform === 'android' ? 'border-green-300' : ''}
        />
        <MetricCard
          title="Active Markets"
          value={metrics.activeMarkets.toString()}
          description={`Countries with ${platform === 'combined' ? 'active' : platform} users`}
          icon={<Globe className="h-5 w-5 text-redbox-orange" />}
          className={platform === 'ios' ? 'border-blue-300' : platform === 'android' ? 'border-green-300' : ''}
        />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="border border-gray-200 rounded-lg bg-white p-6" style={{ height: "500px" }}>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-medium">Download Trends</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => handlePlatformChange('ios')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    platform === 'ios' ? 'bg-white text-blue-500 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  iOS
                </button>
                <button
                  onClick={() => handlePlatformChange('android')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    platform === 'android' ? 'bg-white text-green-500 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Android
                </button>
                <button
                  onClick={() => handlePlatformChange('combined')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    platform === 'combined' ? 'bg-white text-purple-500 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Combined
                </button>
              </div>
              <div className="text-sm text-gray-500">{getTimeRangeDisplay()}</div>
            </div>
          </div>
          <div style={{ height: "400px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={platform === 'combined' 
                  ? performanceData.platformChartData.combined.map(item => ({
                      date: item.date,
                      iosDownloads: item.iosDownloads || 0,
                      androidDownloads: item.androidDownloads || 0,
                      downloads: (item.iosDownloads || 0) + (item.androidDownloads || 0)
                    }))
                  : performanceData.platformChartData[platform] || []
                }
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={{ stroke: '#e5e7eb' }}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                  axisLine={{ stroke: '#e5e7eb' }}
                />
                <Tooltip />
                {platform === 'ios' && (
                  <Line
                    type="monotone"
                    dataKey="iosDownloads"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
                    activeDot={{ r: 6, strokeWidth: 0, fill: '#3b82f6' }}
                  />
                )}
                {platform === 'android' && (
                  <Line
                    type="monotone"
                    dataKey="androidDownloads"
                    stroke="#22c55e"
                    strokeWidth={2}
                    dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
                    activeDot={{ r: 6, strokeWidth: 0, fill: '#22c55e' }}
                  />
                )}
                {platform === 'combined' && (
                  <Line
                    type="monotone"
                    dataKey="downloads"
                    name="downloads"
                    stroke="#8200FF"
                    strokeWidth={2}
                    dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
                    activeDot={{ r: 6, strokeWidth: 0, fill: '#8200FF' }}
                  />
                )}
                {platform === 'combined' && (
                  <Line
                    type="monotone"
                    dataKey="iosDownloads"
                    name="iOS"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={false}
                    activeDot={false}
                  />
                )}
                {platform === 'combined' && (
                  <Line
                    type="monotone"
                    dataKey="androidDownloads"
                    name="Android"
                    stroke="#22c55e"
                    strokeWidth={2}
                    dot={false}
                    activeDot={false}
                  />
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-6 mb-3 flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800">
          <strong>Note:</strong> Android data (store listing acquisitions) covers Dec 13, 2024 to Mar 12, 2025, 
          while iOS data spans Dec 19, 2024 to Mar 18, 2025. The different date ranges may affect direct comparisons.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-6">
        {(platform === 'ios' || platform === 'combined') && (
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-slab font-medium mb-4">iOS-Only Downloads Summary</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-muted-foreground font-sans font-normal">Avg. Daily Downloads</span>
                <span className="font-sans font-medium">35</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground font-sans font-normal">Peak Download Day</span>
                <span className="font-sans font-medium">Jan 31 (186)</span>
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
        )}
        {(platform === 'android' || platform === 'combined') && (
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-slab font-medium mb-4">Android-Only Downloads Summary</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-muted-foreground font-sans font-normal">Avg. Daily Downloads</span>
                <span className="font-sans font-medium">28</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground font-sans font-normal">Peak Download Day</span>
                <span className="font-sans font-medium">Jan 31 (105)</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground font-sans font-normal">Top Market</span>
                <span className="font-sans font-medium">Côte d'Ivoire (26.5%)</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground font-sans font-normal">Peak Download Period</span>
                <span className="font-sans font-medium text-green-500">Jan 29 - Feb 6</span>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-slab font-medium">User Engagement</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Daily Active Users"
          value={metrics.dau}
          description={`${platform === 'combined' ? 'Average across platforms' : `${platform.charAt(0).toUpperCase() + platform.slice(1)} platform average`}`}
          icon={<Users className="h-5 w-5 text-redbox-purple" />}
          className={platform === 'ios' ? 'border-blue-300' : platform === 'android' ? 'border-green-300' : ''}
        />
        <MetricCard
          title="Android DAU"
          value={platform === 'android' ? metrics.dau : performanceData.avgAndroidDAU.toLocaleString()}
          description={platform === 'android' ? "Current platform" : "Month-over-month change"}
          icon={<Activity className="h-5 w-5 text-redbox-green" />}
          className={platform === 'android' ? 'border-green-300 bg-green-50/30' : ''}
        />
        <MetricCard
          title="iOS DAU"
          value={platform === 'ios' ? metrics.dau : performanceData.avgIosDAU.toLocaleString()}
          description={platform === 'ios' ? "Current platform" : "Month-over-month change"}
          icon={<Activity className="h-5 w-5 text-redbox-blue" />}
          className={platform === 'ios' ? 'border-blue-300 bg-blue-50/30' : ''}
        />
        <MetricCard
          title="Peak User Day"
          value="Dec 31, 2024"
          description={`${platform === 'combined' ? 'Holiday period increase' : `${platform.charAt(0).toUpperCase() + platform.slice(1)} holiday usage`}`}
          icon={<Calendar className="h-5 w-5 text-redbox-orange" />}
          className={platform === 'ios' ? 'border-blue-300' : platform === 'android' ? 'border-green-300' : ''}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-6">
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-medium mb-4">
            Overall Performance Summary (iOS + Android)
          </h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Avg. Daily Downloads</span>
              <span className="font-sans font-medium">31.5</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Peak Download Day</span>
              <span className="font-sans font-medium">Jan 30 (236)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Top Market</span>
              <span className="font-sans font-medium">Germany (19.8%)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Peak Download Period</span>
              <span className="font-sans font-medium text-green-500">Late Jan to Early Feb</span>
            </li>
          </ul>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-medium mb-4">
            Overall Market Insights (iOS + Android)
          </h3>
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

      <div className="mt-8 mb-6">
        <h2 className="text-2xl font-slab font-medium">Sessions Analysis</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Daily Sessions"
          value="14,545"
          description="Average across platforms"
          icon={<Clock className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="Android Sessions"
          value="7,271"
          description="Daily average"
          icon={<Activity className="h-5 w-5 text-redbox-green" />}
        />
        <MetricCard
          title="iOS Sessions"
          value="7,274"
          description="Daily average"
          icon={<Activity className="h-5 w-5 text-redbox-blue" />}
        />
        <MetricCard
          title="Sessions per DAU"
          value="2.5"
          description="Consistent across platforms"
          icon={<Calendar className="h-5 w-5 text-redbox-orange" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-6">
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-medium mb-4">Android-Only Sessions Insights</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Average Daily Sessions</span>
              <span className="font-sans font-medium">7,271 sessions/day</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Min/Max Sessions</span>
              <span className="font-sans font-medium">5,007 to 9,953 sessions</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Peak Days</span>
              <span className="font-sans font-medium text-green-500">Fri, Sat (avg: 8,204)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Lowest Days</span>
              <span className="font-sans font-medium text-amber-500">Tue (avg: 6,435)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Feb vs Mar</span>
              <span className="font-sans font-medium text-red-500">-11.5% in March</span>
            </li>
          </ul>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-medium mb-4">iOS-Only Sessions Insights</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Average Daily Sessions</span>
              <span className="font-sans font-medium">7,274 sessions/day</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Min/Max Sessions</span>
              <span className="font-sans font-medium">5,001 to 9,981 sessions</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Peak Sessions</span>
              <span className="font-sans font-medium text-green-500">Weekend (+18.4% vs weekday)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Peak Session Spikes</span>
              <span className="font-sans font-medium">Feb 8, 13, 19</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Sessions Pattern</span>
              <span className="font-sans font-medium">Short, frequent (mobile-friendly)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-6">
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-medium mb-4">Android-Only DAU Insights</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Peak DAU Day</span>
              <span className="font-sans font-medium">Sundays (Avg: 3,137)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Lowest DAU Day</span>
              <span className="font-sans font-medium">Tuesdays (Avg: 2,654)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">MoM Change (Jan-Mar)</span>
              <span className="font-sans font-medium text-red-500">-8.9%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Weekend vs Weekday</span>
              <span className="font-sans font-medium text-green-500">+13.8% on weekends</span>
            </li>
          </ul>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-medium mb-4">iOS-Only DAU Insights</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Peak DAU Day</span>
              <span className="font-sans font-medium">Fridays (Avg: 3,253)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Lowest DAU Day</span>
              <span className="font-sans font-medium">Mondays (Avg: 2,618)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">MoM Change (Jan-Mar)</span>
              <span className="font-sans font-medium text-red-500">-14.4%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">App Issues</span>
              <span className="font-sans font-medium text-amber-500">5 days below 2,100 DAU (late Feb)</span>
            </li>
          </ul>
        </div>
      </div>

    </Layout>
  );
};

export default Performance;