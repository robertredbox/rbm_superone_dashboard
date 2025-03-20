import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import MetricCard from '@/components/dashboard/MetricCard';
import PerformanceChart from '@/components/dashboard/PerformanceChart';
import KeywordsTable from '@/components/dashboard/KeywordsTable';
import CompetitorCard from '@/components/dashboard/CompetitorCard';
import SentimentChart from '@/components/dashboard/SentimentChart';
import { BarChart3, Search, TrendingUp, MessageSquare, Download, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Font links component to ensure proper font loading
const FontLinks = () => (
  <link 
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" 
    rel="stylesheet" 
  />
);

const Index = () => {
  // SuperOne performance data
  const performanceData = [
    { date: 'Dec 17', downloads: 3800, ranking: 215 },
    { date: 'Dec 24', downloads: 4200, ranking: 203 },
    { date: 'Dec 31', downloads: 5100, ranking: 189 },
    { date: 'Jan 7', downloads: 5600, ranking: 175 },
    { date: 'Jan 14', downloads: 6300, ranking: 162 },
    { date: 'Jan 21', downloads: 7200, ranking: 145 },
    { date: 'Jan 28', downloads: 7900, ranking: 130 },
    { date: 'Feb 4', downloads: 8300, ranking: 120 },
    { date: 'Feb 11', downloads: 8900, ranking: 110 },
    { date: 'Feb 18', downloads: 9500, ranking: 95 },
    { date: 'Feb 25', downloads: 10300, ranking: 88 },
    { date: 'Mar 4', downloads: 11200, ranking: 78 },
    { date: 'Mar 11', downloads: 12100, ranking: 65 },
    { date: 'Mar 18', downloads: 13000, ranking: 55 },
  ];

  // Revenue data
  const monthlyRevenueData = [
    { month: 'Dec', ios: 64, android: 134 },
    { month: 'Jan', ios: 23, android: 76 },
    { month: 'Feb', ios: 180, android: 284 },
    { month: 'Mar', ios: 156, android: 316 }
  ];

  const [totalRevenue, setTotalRevenue] = useState({ ios: 0, android: 0, total: 0 });
  
  useEffect(() => {
    const iosRevenue = monthlyRevenueData.reduce((sum, month) => sum + month.ios, 0);
    const androidRevenue = monthlyRevenueData.reduce((sum, month) => sum + month.android, 0);
    
    setTotalRevenue({
      ios: iosRevenue,
      android: androidRevenue,
      total: iosRevenue + androidRevenue
    });
  }, []);

  // SuperOne keywords data
  const keywordsData = [
    { id: '1', term: 'trivia game', position: 3, change: 2, volume: 55, difficulty: 32 },
    { id: '5', term: 'trivia battle', position: 2, change: 1, volume: 40, difficulty: 28 },
    { id: '10', term: 'fan battle', position: 1, change: 0, volume: 25, difficulty: 15 },
    { id: '11', term: 'quiz cash prizes', position: 5, change: 2, volume: 30, difficulty: 38 },
    { id: '9', term: 'football trivia', position: 4, change: -1, volume: 45, difficulty: 30 },
  ];

  // SuperOne competitors data
  const competitorsData = [
    { 
      id: '1596342438', 
      name: 'QuizDuel - Multiplayer Quiz', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/3b/f8/9f/3bf89f5e-d718-16ac-f07d-7fe0ec67a1b3/AppIcon-1x_U007emarketing-0-7-0-0-85-220-0.png/170x170bb.png', 
      ranking: 32, 
      change: -1, 
      rating: 4.7,
      developer: 'MAG Interactive'
    },
    { 
      id: '1442114861', 
      name: 'Trivia Royale', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0b/d5/31/0bd53102-66a2-c4e0-4780-311b72cb9091/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/170x170bb.png', 
      ranking: 45, 
      change: 2, 
      rating: 4.5,
      developer: 'Teatime Games'
    },
    { 
      id: '1486449576', 
      name: 'Cash Trivia', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/82/f8/1e/82f81e73-9f4a-46d5-efcc-1e0d0ff2393d/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/170x170bb.png', 
      ranking: 51, 
      change: -3, 
      rating: 4.2,
      developer: 'Cash Quiz Inc.'
    },
    { 
      id: '1574405904', 
      name: 'HQ - Live Trivia Game Show', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/6d/65/5f/6d655f59-b059-b583-f3ad-f4c0fa416c31/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/170x170bb.png', 
      ranking: 58, 
      change: 5, 
      rating: 4.6,
      developer: 'HQ Trivia'
    },
  ];

  // SuperOne sentiment data based on review analysis
  const sentimentData = [
    { name: 'Positive', value: 79, color: '#4ade80' },
    { name: 'Neutral', value: 8, color: '#a3a3a3' },
    { name: 'Negative', value: 13, color: '#f87171' },
  ];

  // Custom tooltip for revenue chart
  const RevenueTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 rounded shadow border border-gray-200 text-sm">
          <p className="font-semibold">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.stroke || entry.fill }}>
              {`${entry.name}: $${entry.value}`}
            </p>
          ))}
          <p className="font-medium">
            {`Total: $${payload.reduce((sum: number, entry: any) => sum + entry.value, 0)}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Layout title="Dashboard" subtitle="Overview of your SuperOne app's performance">
      <FontLinks />
      <div className="mb-6">
        <h2 className="text-2xl font-slab font-medium">Overview</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
        <MetricCard
          title="Revenue"
          value={`$${totalRevenue.total}`}
          change={24.3}
          trend="up"
          description="Total USD revenue"
          icon={<DollarSign className="h-5 w-5 text-green-500" />}
        />
        <MetricCard
          title="Downloads"
          value="3.7M"
          change={18.3}
          trend="up"
          description="Total downloads"
          icon={<Download className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="App Ranking"
          value="#32"
          change={5}
          trend="up"
          description="Current Games category ranking"
          icon={<BarChart3 className="h-5 w-5 text-redbox-red" />}
        />
        <MetricCard
          title="Keyword Rankings"
          value="27"
          change={8}
          trend="up"
          description="Keywords ranked in top 10"
          icon={<Search className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="Reviews"
          value="27K"
          change={12.4}
          trend="up"
          description="Total player reviews received"
          icon={<MessageSquare className="h-5 w-5 text-redbox-indigo" />}
        />
      </div>

      {/* Revenue Overview Section */}
      <div className="mb-6">
        <h2 className="text-xl font-slab font-medium mb-4">Revenue Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="text-lg mb-2 font-slab font-medium">Total Revenue</h3>
            <p className="text-3xl font-medium font-sans">${totalRevenue.total}</p>
            <div className="flex justify-between mt-2 text-sm">
              <span>iOS: ${totalRevenue.ios}</span>
              <span>Android: ${totalRevenue.android}</span>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-100 md:col-span-2">
            <h3 className="text-lg mb-2 font-slab font-medium">Revenue Insights</h3>
            <ul className="space-y-1 text-sm">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-blue-500 w-1.5 h-1.5 mt-1 flex-shrink-0"></div>
                <span>March has seen the highest combined revenue to date</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-green-500 w-1.5 h-1.5 mt-1 flex-shrink-0"></div>
                <span>Android revenue consistently outperforms iOS by {Math.round((totalRevenue.android / totalRevenue.total) * 100)}%</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-blue-500 w-1.5 h-1.5 mt-1 flex-shrink-0"></div>
                <span>February and March show strong revenue growth across both platforms</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <h3 className="text-lg mb-4 font-slab font-medium">Monthly Revenue Trends</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyRevenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<RevenueTooltip />} />
                <Legend />
                <Bar dataKey="ios" name="iOS" fill="#60A5FA" />
                <Bar dataKey="android" name="Android" fill="#34D399" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 text-xs text-center text-gray-500">
            <span>Note: Android values are converted from NOK. iOS data represents sales while Android data represents daily revenue.</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <PerformanceChart 
          data={performanceData} 
          timeRange="Last 30 days"
          className="lg:col-span-2"
        />
        <SentimentChart data={sentimentData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <KeywordsTable keywords={keywordsData} className="lg:col-span-2" />
        <div className="space-y-4">
          <h3 className="text-lg font-slab font-medium">Top Competitors</h3>
          {competitorsData.map((competitor) => (
            <CompetitorCard key={competitor.id} competitor={competitor} />
          ))}
        </div>
      </div>

      {/* Revenue Forecast */}
      <div className="mt-6 bg-white p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Revenue Forecast Highlights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="uppercase text-lg text-blue-800 font-medium mb-4">PROJECTED INSTALLS</h3>
            <div className="text-5xl font-semibold text-blue-900 mb-2">
              22,935
            </div>
            <div className="text-blue-600">
              Based on Avg CPI: $1.09
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="uppercase text-lg text-green-800 font-medium mb-4">PROJECTED REVENUE</h3>
            <div className="text-5xl font-semibold text-green-900 mb-2">
              $57,338
            </div>
            <div className="text-green-600">
              ROI: 229.4%
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-center text-gray-600">
          <p>Forecast based on current Media Spend ($25,000) and User Lifetime Value ($2.50)</p>
          <p className="mt-1">Visit the <a href="/revenue" className="text-blue-600 hover:underline">Revenue page</a> for detailed analysis and interactive forecasting</p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;