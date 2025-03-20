import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import RevenueForecasting from './RevenueForecasting';

const RevenueChart = () => {
  const [activeView, setActiveView] = useState('weekly');
  const [isDataLoaded, setIsDataLoaded] = useState(false);
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
  
  // Transaction history from the App Store Connect (Dec 19, 2024 - Mar 18, 2025) - Updated with exact values from screenshots
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
  
  useEffect(() => {
    // Process the real sales data from App Store
    const enrichedDaily = salesData.map((day) => {
      // For now, we're only calculating iOS data and not estimating Android
      return {
        ...day,
        android: 0, // We'll add these values later when Android data is provided
        total: day.ios, // Total is just iOS for now
        shortDate: day.date.split(" ")[0]
      };
    });
    
    // Create daily data for chart display (most recent 30 days)
    const last30DaysData = enrichedDaily.slice(0, 30).reverse();
    setDailyData(last30DaysData);
    
    // Create weekly data
    const weeks = [];
    for (let i = 0; i < enrichedDaily.length; i += 7) {
      const weekSlice = enrichedDaily.slice(i, Math.min(i + 7, enrichedDaily.length));
      if (weekSlice.length > 0) {
        const weekStart = weekSlice[weekSlice.length - 1].date;
        const weekEnd = weekSlice[0].date;
        const weekLabel = `W${Math.floor(i/7) + 1}: ${weekStart.split(" ")[0]} - ${weekEnd.split(" ")[0]}`;
        
        const weekData = {
          week: weekLabel,
          shortWeek: `W${Math.floor(i/7) + 1}`,
          displayWeek: `Week ${Math.floor(i/7) + 1}`,
          ios: weekSlice.reduce((sum, day) => sum + day.ios, 0),
          android: 0, // Placeholder for Android data
          total: weekSlice.reduce((sum, day) => sum + day.ios, 0) // Currently just iOS total
        };
        weeks.push(weekData);
      }
    }
    setWeeklyData(weeks);
    
    // Calculate total revenue (iOS only for now)
    const totalIOS = enrichedDaily.reduce((sum, day) => sum + day.ios, 0);
    
    setRevenueStats({
      ios: totalIOS,
      android: 0, // Placeholder for Android data
      total: totalIOS, // Currently just iOS total
      iosPercentage: 100, // 100% iOS since no Android data yet
      androidPercentage: 0 // 0% Android since no Android data yet
    });
    
    // Update platform distribution for pie chart
    setPlatformDistribution([
      { name: "Android", value: 0, percentage: "0%", color: "#34D399" },
      { name: "iOS", value: totalIOS, percentage: "100%", color: "#60A5FA" }
    ]);
    
    // Create monthly data
    const monthlyMap = new Map();
    enrichedDaily.forEach(day => {
      const month = day.date.split(" ")[0];
      if (!monthlyMap.has(month)) {
        monthlyMap.set(month, { month, ios: 0, android: 0, total: 0 });
      }
      const monthData = monthlyMap.get(month);
      monthData.ios += day.ios;
      monthData.total += day.ios; // Total is just iOS for now
    });
    setMonthlyData(Array.from(monthlyMap.values()));
    
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

  return (
    <div className="bg-card p-6 rounded-lg border border-border">
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl mb-2 font-slab font-medium">
          Revenue Analysis
        </h2>
        <p className="text-muted-foreground font-sans font-normal">
          USD Revenue Data (Dec 19, 2024 - Mar 18, 2025)
        </p>
      </div>
      
      {/* Revenue Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="text-lg mb-2 font-slab font-medium">Total Revenue (iOS)</h3>
          <p className="text-3xl font-medium font-sans">${revenueStats.ios.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <h3 className="text-lg mb-2 font-slab font-medium">Daily Average</h3>
          <p className="text-3xl font-medium font-sans text-green-500">
            ${(revenueStats.ios / salesData.filter(d => d.ios > 0).length).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
          </p>
        </div>
        
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
          <h3 className="text-lg mb-2 font-slab font-medium">Peak Day</h3>
          <p className="text-3xl font-medium font-sans text-blue-500">
            ${Math.max(...salesData.map(d => d.ios)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
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
          className={`px-4 py-2 rounded ${activeView === 'monthly' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveView('monthly')}
        >
          Monthly View
        </button>
        <button 
          className={`px-4 py-2 rounded ${activeView === 'distribution' ? 'bg-indigo-600 text-white' : 'bg-gray-50 text-gray-800'}`}
          onClick={() => setActiveView('distribution')}
        >
          Distribution
        </button>
      </div>
      
      {/* Charts */}
      <div className="bg-white p-4 rounded-lg border border-gray-200">
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
                  <Bar dataKey="ios" name="iOS" fill="#60A5FA" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {weeklyData.map(week => `${week.shortWeek}: ${week.week.split(": ")[1]}`).join(" • ")}
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
                  <Line type="monotone" dataKey="ios" name="iOS" stroke="#60A5FA" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Note: Chart shows most recent 30 days of daily revenue data.
            </p>
          </div>
        )}
        
        {activeView === 'monthly' && (
          <div>
            <h3 className="text-lg mb-4 font-slab font-medium">Monthly Revenue</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 30 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fontSize: 12 }} 
                    height={50}
                  />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="ios" name="iOS" fill="#60A5FA" />
                </BarChart>
              </ResponsiveContainer>
            </div>
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
            <p className="text-sm text-muted-foreground mt-2 text-center">
              Note: Currently showing only iOS data. Android data will be added soon.
            </p>
          </div>
        )}
      </div>
      
      {/* Revenue Insights */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-lg mb-2 font-slab font-medium text-blue-800">Revenue Insights</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li className="flex items-start gap-2">
            <div className="rounded-full bg-blue-500 w-1.5 h-1.5 mt-2 flex-shrink-0"></div>
            <span>iOS revenue shows significant growth starting from late January 2025.</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-full bg-blue-500 w-1.5 h-1.5 mt-2 flex-shrink-0"></div>
            <span>Peak revenue day was March 2nd with $22 in sales, suggesting a successful promotion or feature.</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-full bg-blue-500 w-1.5 h-1.5 mt-2 flex-shrink-0"></div>
            <span>February and March show stabilized revenue patterns.</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-full bg-blue-500 w-1.5 h-1.5 mt-2 flex-shrink-0"></div>
            <span>Total iOS revenue for the period is ${revenueStats.ios.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RevenueChart; 