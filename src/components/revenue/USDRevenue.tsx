import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import RevenueForecasting from './RevenueForecasting';

const USDRevenue = () => {
  const [activeView, setActiveView] = useState('weekly');
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  
  // Transaction history from the App Store Connect (Dec 19, 2024 - Mar 18, 2025)
  const salesData = [
    { date: "Mar 18, 2025", ios: 17 },
    { date: "Mar 17, 2025", ios: 10 },
    { date: "Mar 16, 2025", ios: 14 },
    { date: "Mar 15, 2025", ios: 5 },
    { date: "Mar 14, 2025", ios: 12 },
    { date: "Mar 13, 2025", ios: 11 },
    { date: "Mar 12, 2025", ios: 16 },
    { date: "Mar 11, 2025", ios: 14 },
    { date: "Mar 10, 2025", ios: 8 },
    { date: "Mar 9, 2025", ios: 8 },
    { date: "Mar 8, 2025", ios: 3 },
    { date: "Mar 7, 2025", ios: 4 },
    { date: "Mar 6, 2025", ios: 12 },
    { date: "Mar 5, 2025", ios: 2 },
    { date: "Mar 4, 2025", ios: 3 },
    { date: "Mar 3, 2025", ios: 5 },
    { date: "Mar 2, 2025", ios: 22 },
    { date: "Mar 1, 2025", ios: 4 },
    { date: "Feb 28, 2025", ios: 10 },
    { date: "Feb 27, 2025", ios: 11 },
    { date: "Feb 26, 2025", ios: 13 },
    { date: "Feb 25, 2025", ios: 6 },
    { date: "Feb 24, 2025", ios: 4 },
    { date: "Feb 23, 2025", ios: 11 },
    { date: "Feb 22, 2025", ios: 9 },
    { date: "Feb 21, 2025", ios: 11 },
    { date: "Feb 20, 2025", ios: 5 },
    { date: "Feb 19, 2025", ios: 9 },
    { date: "Feb 18, 2025", ios: 5 },
    { date: "Feb 17, 2025", ios: 4 },
    { date: "Feb 16, 2025", ios: 6 },
    { date: "Feb 15, 2025", ios: 6 },
    { date: "Feb 14, 2025", ios: 4 },
    { date: "Feb 13, 2025", ios: 6 },
    { date: "Feb 12, 2025", ios: 16 },
    { date: "Feb 11, 2025", ios: 7 },
    { date: "Feb 10, 2025", ios: 2 },
    { date: "Feb 9, 2025", ios: 14 },
    { date: "Feb 8, 2025", ios: 8 },
    { date: "Feb 7, 2025", ios: 13 },
    { date: "Feb 6, 2025", ios: 12 },
    { date: "Feb 5, 2025", ios: 8 },
    { date: "Feb 4, 2025", ios: 8 },
    { date: "Feb 3, 2025", ios: 3 },
    { date: "Feb 2, 2025", ios: 7 },
    { date: "Feb 1, 2025", ios: 10 },
    { date: "Jan 31, 2025", ios: 11 },
    { date: "Jan 30, 2025", ios: 5 },
    { date: "Jan 29, 2025", ios: 2 },
    { date: "Jan 28, 2025", ios: 0 },
    { date: "Jan 27, 2025", ios: 1 },
    { date: "Jan 26, 2025", ios: 0 },
    { date: "Jan 25, 2025", ios: 0 },
    { date: "Jan 24, 2025", ios: 0 },
    { date: "Jan 23, 2025", ios: 0 },
    { date: "Jan 22, 2025", ios: 0 },
    { date: "Jan 21, 2025", ios: 0 },
    { date: "Jan 20, 2025", ios: 0 },
    { date: "Jan 19, 2025", ios: 1 },
    { date: "Jan 18, 2025", ios: 0 },
    { date: "Jan 17, 2025", ios: 0 },
    { date: "Jan 16, 2025", ios: 0 },
    { date: "Jan 15, 2025", ios: 0 },
    { date: "Jan 14, 2025", ios: 0 },
    { date: "Jan 13, 2025", ios: 0 },
    { date: "Jan 12, 2025", ios: 0 },
    { date: "Jan 11, 2025", ios: 1 },
    { date: "Jan 10, 2025", ios: 0 },
    { date: "Jan 9, 2025", ios: 0 },
    { date: "Jan 8, 2025", ios: 0 },
    { date: "Jan 7, 2025", ios: 0 },
    { date: "Jan 6, 2025", ios: 0 },
    { date: "Jan 5, 2025", ios: 0 },
    { date: "Jan 4, 2025", ios: 0 },
    { date: "Jan 3, 2025", ios: 0 },
    { date: "Jan 2, 2025", ios: 1 },
    { date: "Jan 1, 2025", ios: 0 },
    { date: "Dec 31, 2024", ios: 0 },
    { date: "Dec 30, 2024", ios: 0 },
    { date: "Dec 29, 2024", ios: 0 },
    { date: "Dec 28, 2024", ios: 1 },
    { date: "Dec 27, 2024", ios: 0 },
    { date: "Dec 26, 2024", ios: 1 },
    { date: "Dec 25, 2024", ios: 1 },
    { date: "Dec 24, 2024", ios: 0 },
    { date: "Dec 23, 2024", ios: 0 },
    { date: "Dec 22, 2024", ios: 0 },
    { date: "Dec 21, 2024", ios: 0 },
    { date: "Dec 20, 2024", ios: 0 },
    { date: "Dec 19, 2024", ios: 0 }
  ];
  
  // Updated transaction history from screenshots (Dec 19, 2024 - Mar 18, 2025)
  const updatedSalesData = [
    { date: "Mar 18, 2025", ios: 17 },
    { date: "Mar 17, 2025", ios: 10 },
    { date: "Mar 16, 2025", ios: 14 },
    { date: "Mar 15, 2025", ios: 5 },
    { date: "Mar 14, 2025", ios: 12 },
    { date: "Mar 13, 2025", ios: 11 },
    { date: "Mar 12, 2025", ios: 16 },
    { date: "Mar 11, 2025", ios: 14 },
    { date: "Mar 10, 2025", ios: 8 },
    { date: "Mar 9, 2025", ios: 8 },
    { date: "Mar 8, 2025", ios: 3 },
    { date: "Mar 7, 2025", ios: 4 },
    { date: "Mar 6, 2025", ios: 12 },
    { date: "Mar 5, 2025", ios: 2 },
    { date: "Mar 4, 2025", ios: 3 },
    { date: "Mar 3, 2025", ios: 5 },
    { date: "Mar 2, 2025", ios: 22 },
    { date: "Mar 1, 2025", ios: 4 },
    { date: "Feb 28, 2025", ios: 10 },
    { date: "Feb 27, 2025", ios: 11 },
    { date: "Feb 26, 2025", ios: 13 },
    { date: "Feb 25, 2025", ios: 6 },
    { date: "Feb 24, 2025", ios: 4 },
    { date: "Feb 23, 2025", ios: 11 },
    { date: "Feb 22, 2025", ios: 9 },
    { date: "Feb 21, 2025", ios: 11 },
    { date: "Feb 20, 2025", ios: 5 },
    { date: "Feb 19, 2025", ios: 9 },
    { date: "Feb 18, 2025", ios: 5 },
    { date: "Feb 17, 2025", ios: 4 },
    { date: "Feb 16, 2025", ios: 6 },
    { date: "Feb 15, 2025", ios: 6 },
    { date: "Feb 14, 2025", ios: 4 },
    { date: "Feb 13, 2025", ios: 6 },
    { date: "Feb 12, 2025", ios: 16 },
    { date: "Feb 11, 2025", ios: 7 },
    { date: "Feb 10, 2025", ios: 2 },
    { date: "Feb 9, 2025", ios: 14 },
    { date: "Feb 8, 2025", ios: 8 },
    { date: "Feb 7, 2025", ios: 13 },
    { date: "Feb 6, 2025", ios: 12 },
    { date: "Feb 5, 2025", ios: 8 },
    { date: "Feb 4, 2025", ios: 8 },
    { date: "Feb 3, 2025", ios: 3 },
    { date: "Feb 2, 2025", ios: 7 },
    { date: "Feb 1, 2025", ios: 10 },
    { date: "Jan 31, 2025", ios: 11 },
    { date: "Jan 30, 2025", ios: 5 },
    { date: "Jan 29, 2025", ios: 2 },
    { date: "Jan 28, 2025", ios: 0 },
    { date: "Jan 27, 2025", ios: 1 },
    { date: "Jan 26, 2025", ios: 0 },
    { date: "Jan 25, 2025", ios: 0 },
    { date: "Jan 24, 2025", ios: 0 },
    { date: "Jan 23, 2025", ios: 0 },
    { date: "Jan 22, 2025", ios: 0 },
    { date: "Jan 21, 2025", ios: 0 },
    { date: "Jan 20, 2025", ios: 0 },
    { date: "Jan 19, 2025", ios: 1 },
    { date: "Jan 18, 2025", ios: 0 },
    { date: "Jan 17, 2025", ios: 0 },
    { date: "Jan 16, 2025", ios: 0 },
    { date: "Jan 15, 2025", ios: 0 },
    { date: "Jan 14, 2025", ios: 0 },
    { date: "Jan 13, 2025", ios: 0 },
    { date: "Jan 12, 2025", ios: 0 },
    { date: "Jan 11, 2025", ios: 1 },
    { date: "Jan 10, 2025", ios: 0 },
    { date: "Jan 9, 2025", ios: 0 },
    { date: "Jan 8, 2025", ios: 0 },
    { date: "Jan 7, 2025", ios: 0 },
    { date: "Jan 6, 2025", ios: 0 },
    { date: "Jan 5, 2025", ios: 0 },
    { date: "Jan 4, 2025", ios: 0 },
    { date: "Jan 3, 2025", ios: 0 },
    { date: "Jan 2, 2025", ios: 1 },
    { date: "Jan 1, 2025", ios: 0 },
    { date: "Dec 31, 2024", ios: 0 },
    { date: "Dec 30, 2024", ios: 0 },
    { date: "Dec 29, 2024", ios: 0 },
    { date: "Dec 28, 2024", ios: 1 },
    { date: "Dec 27, 2024", ios: 0 },
    { date: "Dec 26, 2024", ios: 1 },
    { date: "Dec 25, 2024", ios: 1 },
    { date: "Dec 24, 2024", ios: 0 },
    { date: "Dec 23, 2024", ios: 0 },
    { date: "Dec 22, 2024", ios: 0 },
    { date: "Dec 21, 2024", ios: 0 },
    { date: "Dec 20, 2024", ios: 0 },
    { date: "Dec 19, 2024", ios: 0 }
  ];
  
  // Calculate daily data with Android figures (estimated)
  const [dailyData, setDailyData] = useState<any[]>([]);
  const [weeklyData, setWeeklyData] = useState<any[]>([]);
  const [monthlyData, setMonthlyData] = useState<any[]>([]);
  const [revenueStats, setRevenueStats] = useState({
    ios: 0,
    android: 0,
    total: 0,
    iosPercentage: 0,
    androidPercentage: 0
  });
  const [platformDistribution, setPlatformDistribution] = useState([
    { name: "Android", value: 0, percentage: "0%", color: "#34D399" },
    { name: "iOS", value: 0, percentage: "0%", color: "#60A5FA" }
  ]);
  
  // Weekly revenue data defined from source
  const predefinedWeeklyData = [
    {week: "W1: Jan 30-Feb 5", shortWeek: "W1", displayWeek: "Week 1", android: 134.58, ios: 52, total: 186.58},
    {week: "W2: Feb 6-12", shortWeek: "W2", displayWeek: "Week 2", android: 132.01, ios: 72, total: 204.01},
    {week: "W3: Feb 13-19", shortWeek: "W3", displayWeek: "Week 3", android: 124.70, ios: 40, total: 164.70},
    {week: "W4: Feb 20-26", shortWeek: "W4", displayWeek: "Week 4", android: 159.51, ios: 59, total: 218.51},
    {week: "W5: Feb 27-Mar 5", shortWeek: "W5", displayWeek: "Week 5", android: 134.99, ios: 57, total: 191.99},
    {week: "W6: Mar 6-12", shortWeek: "W6", displayWeek: "Week 6", android: 153.25, ios: 65, total: 218.25},
    {week: "W7: Mar 13-15", shortWeek: "W7", displayWeek: "Week 7", android: 85.00, ios: 28, total: 113.00}
  ];
  
  // Daily data for selected points for better readability
  const predefinedDailyData = [
    {date: "Jan 30", shortDate: "Jan 30", android: 6.94, ios: 5, total: 11.94},
    {date: "Feb 3", shortDate: "Feb 3", android: 16.35, ios: 3, total: 19.35},
    {date: "Feb 7", shortDate: "Feb 7", android: 12.72, ios: 13, total: 25.72},
    {date: "Feb 11", shortDate: "Feb 11", android: 11.15, ios: 7, total: 18.15},
    {date: "Feb 15", shortDate: "Feb 15", android: 24.03, ios: 6, total: 30.03},
    {date: "Feb 19", shortDate: "Feb 19", android: 12.33, ios: 9, total: 21.33},
    {date: "Feb 23", shortDate: "Feb 23", android: 27.25, ios: 11, total: 38.25},
    {date: "Feb 27", shortDate: "Feb 27", android: 13.55, ios: 11, total: 24.55},
    {date: "Mar 3", shortDate: "Mar 3", android: 17.97, ios: 5, total: 22.97},
    {date: "Mar 7", shortDate: "Mar 7", android: 14.30, ios: 4, total: 18.30},
    {date: "Mar 11", shortDate: "Mar 11", android: 24.36, ios: 14, total: 38.36},
    {date: "Mar 15", shortDate: "Mar 15", android: 3.14, ios: 5, total: 8.14}
  ];
  
  // Predefined total revenue from the source data
  const predefinedTotalRevenue = {
    ios: 373.00,
    android: 924.04,
    total: 1297.04,
    iosPercentage: 28.8,
    androidPercentage: 71.2
  };
  
  // Predefined platform distribution
  const predefinedPlatformDistribution = [
    { name: "Android", value: 924.04, percentage: "71.2%", color: "#34D399" },
    { name: "iOS", value: 373.00, percentage: "28.8%", color: "#60A5FA" }
  ];
  
  // Norwegian data from screenshots
  const nokSalesData = [
    { date: "Mar 18, 2025", nokValue: 33.61 },
    { date: "Mar 17, 2025", nokValue: 343.51 },
    { date: "Mar 16, 2025", nokValue: 356.57 },
    { date: "Mar 15, 2025", nokValue: 328.62 },
    { date: "Mar 14, 2025", nokValue: 476.15 },
    { date: "Mar 13, 2025", nokValue: 383.55 },
    { date: "Mar 12, 2025", nokValue: 309.87 },
    { date: "Mar 11, 2025", nokValue: 255.81 },
    { date: "Mar 10, 2025", nokValue: 168.63 },
    { date: "Mar 9, 2025", nokValue: 162.88 },
    { date: "Mar 8, 2025", nokValue: 221.99 },
    { date: "Mar 7, 2025", nokValue: 150.18 },
    { date: "Mar 6, 2025", nokValue: 379.73 },
    { date: "Mar 5, 2025", nokValue: 212.04 },
    { date: "Mar 4, 2025", nokValue: 139.16 },
    { date: "Mar 3, 2025", nokValue: 188.72 },
    { date: "Mar 2, 2025", nokValue: 225.59 },
    { date: "Mar 1, 2025", nokValue: 336.17 },
    { date: "Feb 28, 2025", nokValue: 172.42 },
    { date: "Feb 27, 2025", nokValue: 142.27 },
    { date: "Feb 26, 2025", nokValue: 348.11 },
    { date: "Feb 25, 2025", nokValue: 204.02 },
    { date: "Feb 24, 2025", nokValue: 212.50 },
    { date: "Feb 23, 2025", nokValue: 286.10 },
    { date: "Feb 22, 2025", nokValue: 208.29 },
    { date: "Feb 21, 2025", nokValue: 169.57 },
    { date: "Feb 20, 2025", nokValue: 246.26 },
    { date: "Feb 19, 2025", nokValue: 129.49 },
    { date: "Feb 18, 2025", nokValue: 214.53 },
    { date: "Feb 17, 2025", nokValue: 47.30 },
    { date: "Feb 16, 2025", nokValue: 141.45 },
    { date: "Feb 15, 2025", nokValue: 252.31 },
    { date: "Feb 14, 2025", nokValue: 299.96 },
    { date: "Feb 13, 2025", nokValue: 214.28 },
    { date: "Feb 12, 2025", nokValue: 234.51 },
    { date: "Feb 11, 2025", nokValue: 137.09 },
    { date: "Feb 10, 2025", nokValue: 192.93 },
    { date: "Feb 9, 2025", nokValue: 190.93 },
    { date: "Feb 8, 2025", nokValue: 143.96 },
    { date: "Feb 7, 2025", nokValue: 133.99 },
    { date: "Feb 6, 2025", nokValue: 373.13 },
    { date: "Feb 5, 2025", nokValue: 171.00 },
    { date: "Feb 4, 2025", nokValue: 171.72 },
    { date: "Feb 3, 2025", nokValue: 171.65 },
    { date: "Feb 2, 2025", nokValue: 225.81 },
    { date: "Feb 1, 2025", nokValue: 400.73 },
    { date: "Jan 31, 2025", nokValue: 199.27 },
    { date: "Jan 30, 2025", nokValue: 72.83 },
    { date: "Jan 29, 2025", nokValue: 11.96 },
    { date: "Jan 28, 2025", nokValue: 12.81 },
    { date: "Jan 27, 2025", nokValue: 188.25 },
    { date: "Jan 26, 2025", nokValue: 62.18 },
    { date: "Jan 25, 2025", nokValue: 11.98 },
    { date: "Jan 24, 2025", nokValue: 88.05 },
    { date: "Jan 23, 2025", nokValue: 13.30 },
    { date: "Jan 22, 2025", nokValue: 38.40 },
    { date: "Jan 21, 2025", nokValue: 12.60 },
    { date: "Jan 20, 2025", nokValue: 38.34 },
    { date: "Jan 19, 2025", nokValue: 12.79 },
    { date: "Jan 18, 2025", nokValue: 89.59 },
    { date: "Jan 17, 2025", nokValue: 51.24 },
    { date: "Jan 16, 2025", nokValue: 38.40 },
    { date: "Jan 15, 2025", nokValue: 12.78 },
    { date: "Jan 14, 2025", nokValue: 51.16 },
    { date: "Jan 13, 2025", nokValue: 63.76 },
    { date: "Jan 12, 2025", nokValue: 38.52 },
    { date: "Jan 11, 2025", nokValue: 38.55 },
    { date: "Jan 10, 2025", nokValue: 38.31 },
    { date: "Jan 9, 2025", nokValue: 25.52 },
    { date: "Jan 8, 2025", nokValue: 63.75 },
    { date: "Jan 7, 2025", nokValue: 38.55 },
    { date: "Jan 6, 2025", nokValue: 38.55 },
    { date: "Jan 5, 2025", nokValue: 38.73 },
    { date: "Jan 4, 2025", nokValue: 90.37 },
    { date: "Jan 3, 2025", nokValue: 103.28 },
    { date: "Jan 2, 2025", nokValue: 38.75 },
    { date: "Jan 1, 2025", nokValue: 38.75 },
    { date: "Dec 31, 2024", nokValue: 136.89 },
    { date: "Dec 30, 2024", nokValue: 102.35 },
    { date: "Dec 29, 2024", nokValue: 154.60 },
    { date: "Dec 28, 2024", nokValue: 141.63 },
    { date: "Dec 27, 2024", nokValue: 167.36 },
    { date: "Dec 26, 2024", nokValue: 77.42 },
    { date: "Dec 25, 2024", nokValue: 77.47 },
    { date: "Dec 24, 2024", nokValue: 0 },
    { date: "Dec 23, 2024", nokValue: 0 },
    { date: "Dec 22, 2024", nokValue: 0 },
    { date: "Dec 21, 2024", nokValue: 0 },
    { date: "Dec 20, 2024", nokValue: 0 },
    { date: "Dec 19, 2024", nokValue: 0 }
  ];

  useEffect(() => {
    // Process the real sales data from App Store
    const enrichedDaily = updatedSalesData.map((day) => {
      // Calculate estimated Android revenue based on the iOS:Android ratio (approximately 1:2.5)
      const androidRevenue = day.ios > 0 ? day.ios * 2.5 : 0;
      return {
        ...day,
        android: parseFloat(androidRevenue.toFixed(2)),
        total: parseFloat((day.ios + androidRevenue).toFixed(2)),
        // Add a shortDate format for display in charts
        shortDate: day.date.split(", ")[0]
      };
    });
    
    // Update view with predefined data for demonstration
    setDailyData(predefinedDailyData);
    setWeeklyData(predefinedWeeklyData);
    setRevenueStats(predefinedTotalRevenue);
    setPlatformDistribution(predefinedPlatformDistribution);
    
    // Simulate loading the full dataset
    setIsDataLoaded(true);
  }, []);
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      // Find full week label for tooltip if available
      let displayLabel = label;
      if (activeView === 'weekly') {
        const weekItem = weeklyData.find(item => item.shortWeek === label || item.week === label);
        if (weekItem) {
          displayLabel = weekItem.week;
        }
      }
      
      return (
        <div className="bg-white p-3 rounded shadow border border-gray-200">
          <p className="font-semibold">{displayLabel}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.stroke || entry.fill }}>
              {`${entry.name}: $${entry.value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };
  
  // Custom tooltip for NOK data
  const NOKTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded shadow border border-gray-200">
          <p className="font-semibold">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.stroke || entry.fill }}>
              {`${entry.name}: NOK ${entry.value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };
  
  // Pie chart custom label
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  if (!isDataLoaded) {
    return <div className="p-6 text-center">Loading revenue data...</div>;
  }

  // Calculate total NOK revenue
  const totalNOKRevenue = nokSalesData.reduce((sum, day) => sum + day.nokValue, 0);

  // Prepare NOK data for the line chart (last 30 days for better visibility)
  const last30DaysNOK = [...nokSalesData].slice(0, 30).map(item => ({
    date: item.date.split(", ")[0],
    nokValue: item.nokValue
  }));

  return (
    <div className="bg-card p-6 rounded-lg border border-border">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl mb-2 font-slab font-medium">
          Revenue Analysis
        </h2>
        <p className="text-muted-foreground font-sans font-normal">
          USD Revenue by Platform (Jan 30 - Mar 15, 2025)
        </p>
      </div>
      
      {/* Revenue Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-accent/20 p-4 rounded-lg">
          <h3 className="text-lg mb-2 font-slab font-medium">Total Revenue</h3>
          <p className="text-3xl font-medium font-sans">${revenueStats.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        </div>
        
        <div className="bg-accent/20 p-4 rounded-lg">
          <h3 className="text-lg mb-2 font-slab font-medium">Android Revenue</h3>
          <p className="text-3xl font-medium font-sans text-green-500">
            ${revenueStats.android.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} <span className="text-base text-muted-foreground">({revenueStats.androidPercentage}%)</span>
          </p>
        </div>
        
        <div className="bg-accent/20 p-4 rounded-lg">
          <h3 className="text-lg mb-2 font-slab font-medium">iOS Revenue</h3>
          <p className="text-3xl font-medium font-sans text-blue-500">
            ${revenueStats.ios.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} <span className="text-base text-muted-foreground">({revenueStats.iosPercentage}%)</span>
          </p>
        </div>
      </div>
      
      {/* View Selector */}
      <div className="flex space-x-2 mb-4">
        <button 
          className={`px-4 py-2 rounded ${activeView === 'weekly' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveView('weekly')}
        >
          Weekly View
        </button>
        <button 
          className={`px-4 py-2 rounded ${activeView === 'daily' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveView('daily')}
        >
          Daily View
        </button>
        <button 
          className={`px-4 py-2 rounded ${activeView === 'distribution' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveView('distribution')}
        >
          Platform Distribution
        </button>
        <button 
          className={`px-4 py-2 rounded ${activeView === 'nok' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveView('nok')}
        >
          NOK Revenue
        </button>
        <button 
          className={`px-4 py-2 rounded ${activeView === 'forecasting' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveView('forecasting')}
        >
          Forecasting
        </button>
      </div>
      
      {/* Charts */}
      <div className="bg-accent/20 p-4 rounded-lg">
        {activeView === 'weekly' && (
          <div>
            <h3 className="text-lg mb-4 font-slab font-medium">Weekly Revenue</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} margin={{ top: 5, right: 30, left: 20, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="shortWeek" 
                    tick={{ fontSize: 12 }} 
                    height={50}
                  />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="android" name="Android" fill="#34D399" />
                  <Bar dataKey="ios" name="iOS" fill="#60A5FA" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              W1: Jan 30-Feb 5 • W2: Feb 6-12 • W3: Feb 13-19 • W4: Feb 20-26 • W5: Feb 27-Mar 5 • W6: Mar 6-12 • W7: Mar 13-15
            </p>
          </div>
        )}
        
        {activeView === 'daily' && (
          <div>
            <h3 className="text-lg mb-4 font-slab font-medium">Daily Revenue Trends</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyData} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="shortDate" tick={{ fontSize: 11 }} />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="android" name="Android" stroke="#34D399" strokeWidth={2} />
                  <Line type="monotone" dataKey="ios" name="iOS" stroke="#60A5FA" strokeWidth={2} />
                  <Line type="monotone" dataKey="total" name="Total" stroke="#9333EA" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Note: This chart shows a subset of days for better readability.
            </p>
          </div>
        )}
        
        {activeView === 'distribution' && (
          <div>
            <h3 className="text-lg mb-4 font-slab font-medium">Revenue Distribution</h3>
            <div className="h-72 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {platformDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: any) => `$${value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
        
        {activeView === 'nok' && (
          <div>
            <h3 className="text-lg mb-4 font-slab font-medium">NOK Revenue (Norwegian Krone)</h3>
            <div className="mb-6 bg-accent/30 p-4 rounded-lg">
              <h4 className="font-slab font-medium mb-2">Total NOK Revenue</h4>
              <p className="text-3xl font-medium font-sans">NOK {totalNOKRevenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={last30DaysNOK} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tick={{ fontSize: 11 }} />
                  <YAxis />
                  <Tooltip content={<NOKTooltip />} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="nokValue" 
                    name="NOK Revenue" 
                    stroke="#8B5CF6" 
                    strokeWidth={2} 
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Note: Chart shows most recent 30 days of NOK revenue data.
            </p>
          </div>
        )}
        
        {activeView === 'forecasting' && (
          <div>
            <h3 className="text-lg mb-4 font-slab font-medium">Revenue Forecasting Tool</h3>
            <p className="mb-4 font-sans font-normal">
              Use the sliders below to forecast future revenue based on different media spend and user lifetime value assumptions.
            </p>
            <RevenueForecasting />
          </div>
        )}
      </div>
      
      {/* Revenue Insights */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-lg mb-2 font-slab font-medium text-blue-800">Revenue Insights</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li className="flex items-start gap-2">
            <div className="rounded-full bg-blue-500 w-1.5 h-1.5 mt-2 flex-shrink-0"></div>
            <span>Android revenue represents {revenueStats.androidPercentage}% of total sales with ${revenueStats.android.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}.</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-full bg-blue-500 w-1.5 h-1.5 mt-2 flex-shrink-0"></div>
            <span>Peak revenue was observed in Week 4 (Feb 20-26) and Week 6 (Mar 6-12) with over $218 in sales each week.</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-full bg-blue-500 w-1.5 h-1.5 mt-2 flex-shrink-0"></div>
            <span>iOS revenue accounts for {revenueStats.iosPercentage}% of total revenue at ${revenueStats.ios.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}.</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-full bg-blue-500 w-1.5 h-1.5 mt-2 flex-shrink-0"></div>
            <span>Total NOK revenue is {totalNOKRevenue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} NOK for the period, with strong performance in March.</span>
          </li>
        </ul>
      </div>
      
      {/* Revenue Forecasting Component (conditionally visible) */}
      {activeView !== 'forecasting' && (
        <div className="mt-6">
          <RevenueForecasting />
        </div>
      )}
    </div>
  );
};

export default USDRevenue; 