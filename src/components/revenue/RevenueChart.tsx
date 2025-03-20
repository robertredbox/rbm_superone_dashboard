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
    { date: "Mar 18, 2025", ios: 17, android: 3.39 }, // NOK 33.61
    { date: "Mar 17, 2025", ios: 10, android: 34.53 }, // NOK 345.31
    { date: "Mar 16, 2025", ios: 14, android: 35.67 }, // NOK 356.57
    { date: "Mar 15, 2025", ios: 5, android: 32.86 }, // NOK 328.62
    { date: "Mar 14, 2025", ios: 12, android: 47.62 }, // NOK 476.15
    { date: "Mar 13, 2025", ios: 11, android: 38.34 }, // NOK 383.35
    { date: "Mar 12, 2025", ios: 16, android: 30.99 }, // NOK 309.87
    { date: "Mar 11, 2025", ios: 14, android: 25.58 }, // NOK 255.81
    { date: "Mar 10, 2025", ios: 8, android: 16.88 }, // NOK 168.83
    { date: "Mar 9, 2025", ios: 8, android: 16.29 }, // NOK 162.88
    { date: "Mar 8, 2025", ios: 3, android: 22.19 }, // NOK 221.99
    { date: "Mar 7, 2025", ios: 4, android: 15.02 }, // NOK 150.18
    { date: "Mar 6, 2025", ios: 12, android: 37.97 }, // NOK 379.73
    { date: "Mar 5, 2025", ios: 2, android: 21.20 }, // NOK 212.04
    { date: "Mar 4, 2025", ios: 3, android: 13.92 }, // NOK 139.16
    { date: "Mar 3, 2025", ios: 5, android: 18.87 }, // NOK 188.72
    { date: "Mar 2, 2025", ios: 22, android: 22.86 }, // NOK 228.59
    { date: "Mar 1, 2025", ios: 4, android: 33.62 }, // NOK 336.17
    { date: "Feb 28, 2025", ios: 10, android: 17.24 }, // NOK 172.42
    { date: "Feb 27, 2025", ios: 11, android: 14.27 }, // NOK 142.27
    { date: "Feb 26, 2025", ios: 13, android: 34.81 }, // NOK 348.11
    { date: "Feb 25, 2025", ios: 6, android: 20.40 }, // NOK 204.02
    { date: "Feb 24, 2025", ios: 4, android: 21.25 }, // NOK 212.50
    { date: "Feb 23, 2025", ios: 11, android: 28.61 }, // NOK 286.10
    { date: "Feb 22, 2025", ios: 9, android: 20.83 }, // NOK 208.29
    { date: "Feb 21, 2025", ios: 11, android: 16.94 }, // NOK 169.37
    { date: "Feb 20, 2025", ios: 5, android: 24.63 }, // NOK 246.26
    { date: "Feb 19, 2025", ios: 9, android: 12.95 }, // NOK 129.49
    { date: "Feb 18, 2025", ios: 5, android: 21.49 }, // NOK 214.83
    { date: "Feb 17, 2025", ios: 4, android: 4.73 }, // NOK 47.30
    { date: "Feb 16, 2025", ios: 6, android: 16.15 }, // NOK 161.45
    { date: "Feb 15, 2025", ios: 6, android: 25.23 }, // NOK 252.31
    { date: "Feb 14, 2025", ios: 4, android: 29.71 }, // NOK 297.06
    { date: "Feb 13, 2025", ios: 6, android: 21.48 }, // NOK 214.78
    { date: "Feb 12, 2025", ios: 16, android: 23.41 }, // NOK 234.11
    { date: "Feb 11, 2025", ios: 7, android: 13.77 }, // NOK 137.79
    { date: "Feb 10, 2025", ios: 2, android: 19.29 }, // NOK 192.93
    { date: "Feb 9, 2025", ios: 14, android: 19.03 }, // NOK 190.33
    { date: "Feb 8, 2025", ios: 8, android: 14.40 }, // NOK 143.96
    { date: "Feb 7, 2025", ios: 13, android: 13.40 }, // NOK 133.99
    { date: "Feb 6, 2025", ios: 12, android: 37.32 }, // NOK 373.13
    { date: "Feb 5, 2025", ios: 8, android: 17.10 }, // NOK 171.00
    { date: "Feb 4, 2025", ios: 8, android: 17.17 }, // NOK 171.72
    { date: "Feb 3, 2025", ios: 3, android: 40.07 }, // NOK 400.73
    { date: "Feb 2, 2025", ios: 7, android: 22.59 }, // NOK 225.81
    { date: "Feb 1, 2025", ios: 10, android: 17.17 }, // NOK 171.65
    { date: "Jan 31, 2025", ios: 11, android: 19.92 }, // NOK 199.27
    { date: "Jan 30, 2025", ios: 5, android: 7.28 }, // NOK 72.83
    { date: "Jan 29, 2025", ios: 2, android: 1.20 }, // NOK 11.96
    { date: "Jan 28, 2025", ios: 0, android: 0 },
    { date: "Jan 27, 2025", ios: 1, android: 3.84 }, // NOK 38.40
    { date: "Jan 26, 2025", ios: 0, android: 0 },
    { date: "Jan 25, 2025", ios: 0, android: 1.29 }, // NOK 12.81
    { date: "Jan 24, 2025", ios: 0, android: 0 },
    { date: "Jan 23, 2025", ios: 0, android: 0 },
    { date: "Jan 22, 2025", ios: 0, android: 6.22 }, // NOK 62.18
    { date: "Jan 21, 2025", ios: 0, android: 0 },
    { date: "Jan 20, 2025", ios: 0, android: 3.37 }, // NOK 33.66
    { date: "Jan 19, 2025", ios: 1, android: 8.88 }, // NOK 88.86
    { date: "Jan 18, 2025", ios: 0, android: 0 },
    { date: "Jan 17, 2025", ios: 0, android: 0 },
    { date: "Jan 16, 2025", ios: 0, android: 0 },
    { date: "Jan 15, 2025", ios: 0, android: 0 },
    { date: "Jan 14, 2025", ios: 0, android: 3.88 }, // NOK 38.84
    { date: "Jan 13, 2025", ios: 0, android: 2.28 }, // NOK 22.79
    { date: "Jan 12, 2025", ios: 0, android: 0 },
    { date: "Jan 11, 2025", ios: 1, android: 5.14 }, // NOK 51.24
    { date: "Jan 10, 2025", ios: 0, android: 3.84 }, // NOK 38.40
    { date: "Jan 9, 2025", ios: 0, android: 0 },
    { date: "Jan 8, 2025", ios: 0, android: 0 },
    { date: "Jan 7, 2025", ios: 0, android: 0 },
    { date: "Jan 6, 2025", ios: 0, android: 0 },
    { date: "Jan 5, 2025", ios: 0, android: 8.94 }, // NOK 89.43
    { date: "Jan 4, 2025", ios: 0, android: 8.83 }, // NOK 88.31
    { date: "Jan 3, 2025", ios: 0, android: 2.52 }, // NOK 25.52
    { date: "Jan 2, 2025", ios: 1, android: 6.38 }, // NOK 63.76
    { date: "Jan 1, 2025", ios: 0, android: 3.85 }, // NOK 38.52
    { date: "Dec 31, 2024", ios: 0, android: 3.86 }, // NOK 38.55
    { date: "Dec 30, 2024", ios: 0, android: 3.87 }, // NOK 38.73
    { date: "Dec 29, 2024", ios: 0, android: 9.04 }, // NOK 90.37
    { date: "Dec 28, 2024", ios: 1, android: 10.33 }, // NOK 103.28
    { date: "Dec 27, 2024", ios: 0, android: 3.88 }, // NOK 38.75
    { date: "Dec 26, 2024", ios: 1, android: 13.69 }, // NOK 136.89
    { date: "Dec 25, 2024", ios: 1, android: 10.26 }, // NOK 102.35
    { date: "Dec 24, 2024", ios: 0, android: 15.40 }, // NOK 154.00
    { date: "Dec 23, 2024", ios: 0, android: 14.16 }, // NOK 141.63
    { date: "Dec 22, 2024", ios: 0, android: 16.76 }, // NOK 167.56
    { date: "Dec 21, 2024", ios: 0, android: 5.15 }, // NOK 51.48
    { date: "Dec 20, 2024", ios: 0, android: 7.74 }, // NOK 77.42
    { date: "Dec 19, 2024", ios: 0, android: 7.75 } // NOK 77.47
  ];
  
  // Helper function to format date ranges
  const formatDateRange = (startDate: string, endDate: string) => {
    const formatDate = (dateStr: string) => {
      const parts = dateStr.split(" ");
      return `${parts[0]} ${parts[1]}`;
    };
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  useEffect(() => {
    // Process the real sales data from App Store
    const enrichedDaily = salesData.map((day) => {
      // Parse the date to create a more readable format
      const dateParts = day.date.split(" ");
      const month = dateParts[0];
      const dayOfMonth = dateParts[1].replace(",", "");
      
      return {
        ...day,
        total: day.ios + day.android, // Total is iOS + Android
        shortDate: `${month} ${dayOfMonth}`,
        displayDate: day.date
      };
    });
    
    // Create daily data for chart display (90 days of data)
    // Make sure the data is in chronological order for display (oldest to newest)
    const last90DaysData = enrichedDaily.slice(0, 90).reverse();
    setDailyData(last90DaysData);
    
    // Create weekly data with actual date ranges instead of W1, W2, etc.
    const weeks = [];
    for (let i = 0; i < enrichedDaily.length; i += 7) {
      const weekSlice = enrichedDaily.slice(i, Math.min(i + 7, enrichedDaily.length));
      if (weekSlice.length > 0) {
        const weekStart = weekSlice[weekSlice.length - 1].date;
        const weekEnd = weekSlice[0].date;
        
        // Format the date range for display
        const dateRange = formatDateRange(weekStart, weekEnd);
        
        const weekData = {
          week: dateRange,
          shortWeek: dateRange,
          displayWeek: dateRange,
          ios: weekSlice.reduce((sum, day) => sum + day.ios, 0),
          android: weekSlice.reduce((sum, day) => sum + day.android, 0),
          total: weekSlice.reduce((sum, day) => sum + day.ios + day.android, 0)
        };
        weeks.push(weekData);
      }
    }
    
    // Reverse the weeks array to show in chronological order
    setWeeklyData(weeks.reverse());
    
    // Calculate total revenue (iOS + Android)
    const totalIOS = enrichedDaily.reduce((sum, day) => sum + day.ios, 0);
    const totalAndroid = enrichedDaily.reduce((sum, day) => sum + day.android, 0);
    const totalRevenue = totalIOS + totalAndroid;
    
    setRevenueStats({
      ios: totalIOS,
      android: totalAndroid,
      total: totalRevenue,
      iosPercentage: (totalIOS / totalRevenue) * 100,
      androidPercentage: (totalAndroid / totalRevenue) * 100
    });
    
    // Update platform distribution for pie chart
    setPlatformDistribution([
      { name: "Android", value: totalAndroid, percentage: ((totalAndroid / totalRevenue) * 100).toFixed(2) + "%", color: "#34D399" },
      { name: "iOS", value: totalIOS, percentage: ((totalIOS / totalRevenue) * 100).toFixed(2) + "%", color: "#60A5FA" }
    ]);
    
    // Create monthly data
    const monthsOrder = ['Dec', 'Jan', 'Feb', 'Mar'];
    const monthlyMap = new Map();
    
    // Initialize map with all months to ensure correct order
    monthsOrder.forEach(month => {
      monthlyMap.set(month, { month, ios: 0, android: 0, total: 0 });
    });
    
    // Populate with actual data
    enrichedDaily.forEach(day => {
      const month = day.date.split(" ")[0];
      const monthData = monthlyMap.get(month);
      if (monthData) {
        monthData.ios += day.ios;
        monthData.android += day.android;
        monthData.total += day.ios + day.android;
      }
    });
    
    // Convert to array in specified order
    const monthlyDataArray = monthsOrder.map(month => monthlyMap.get(month));
    setMonthlyData(monthlyDataArray);
    
    setIsDataLoaded(true);
  }, []);
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded shadow border border-gray-200">
          <p className="font-semibold">{label}</p>
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
          <h3 className="text-lg mb-2 font-slab font-medium">Total Revenue</h3>
          <p className="text-3xl font-medium font-sans">${revenueStats.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
          <div className="flex justify-between mt-2 text-sm">
            <span>iOS: ${revenueStats.ios.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
            <span>Android: ${revenueStats.android.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
          </div>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <h3 className="text-lg mb-2 font-slab font-medium">Daily Average</h3>
          <p className="text-3xl font-medium font-sans text-green-500">
            ${(revenueStats.total / salesData.filter(d => d.ios > 0 || d.android > 0).length).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
          </p>
        </div>
        
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
          <h3 className="text-lg mb-2 font-slab font-medium">Peak Day</h3>
          <p className="text-3xl font-medium font-sans text-blue-500">
            ${Math.max(...salesData.map(d => d.ios + d.android)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
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
                    tick={{ fontSize: 10 }} 
                    height={70}
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                  />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Bar dataKey="ios" name="iOS" fill="#60A5FA" />
                  <Bar dataKey="android" name="Android" fill="#34D399" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
        
        {activeView === 'daily' && (
          <div>
            <h3 className="text-lg mb-4 font-slab font-medium">Daily Revenue Trends</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyData} margin={{ top: 5, right: 30, left: 20, bottom: 25 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="shortDate" 
                    tick={{ fontSize: 10 }}
                    interval={3}
                  />
                  <YAxis />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line type="monotone" dataKey="ios" name="iOS" stroke="#60A5FA" strokeWidth={2} dot={{ r: 1 }} />
                  <Line type="monotone" dataKey="android" name="Android" stroke="#34D399" strokeWidth={2} dot={{ r: 1 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Note: Chart shows 90 days of daily revenue data.
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
                  <Bar dataKey="android" name="Android" fill="#34D399" />
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
              Note: Currently showing only iOS and Android data.
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
            <span>iOS revenue shows significant growth starting from late January 2025, with ${revenueStats.ios.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} total.</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-full bg-green-500 w-1.5 h-1.5 mt-2 flex-shrink-0"></div>
            <span>Android revenue is ${revenueStats.android.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}, accounting for {revenueStats.androidPercentage.toFixed(1)}% of total revenue.</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-full bg-blue-500 w-1.5 h-1.5 mt-2 flex-shrink-0"></div>
            <span>Peak combined revenue day was on {salesData.reduce((max, day) => (day.ios + day.android) > (max.ios + max.android) ? day : max, salesData[0]).date} with ${Math.max(...salesData.map(d => d.ios + d.android)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}.</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="rounded-full bg-blue-500 w-1.5 h-1.5 mt-2 flex-shrink-0"></div>
            <span>February and March show the strongest revenue for both platforms with consistent growth patterns.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RevenueChart; 