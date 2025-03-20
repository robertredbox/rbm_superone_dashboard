import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import MetricCard from '@/components/dashboard/MetricCard';
import PerformanceChart from '@/components/dashboard/PerformanceChart';
import KeywordsTable from '@/components/dashboard/KeywordsTable';
import CompetitorCard from '@/components/dashboard/CompetitorCard';
import SentimentChart from '@/components/dashboard/SentimentChart';
import { BarChart3, Search, TrendingUp, MessageSquare, Download, DollarSign, InfoIcon } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Font links component to ensure proper font loading
const FontLinks = () => (
  <link 
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" 
    rel="stylesheet" 
  />
);

const Index = () => {
  // Platform state
  const [platform, setPlatform] = useState<'ios' | 'android'>('ios');

  // Updated SuperOne performance data - showing last 30 days with realistic values
  const performanceData = {
    platformChartData: {
      ios: [
        { date: 'Feb 18', iosDownloads: 21 },
        { date: 'Feb 19', iosDownloads: 25 },
        { date: 'Feb 20', iosDownloads: 23 },
        { date: 'Feb 21', iosDownloads: 28 },
        { date: 'Feb 22', iosDownloads: 31 },
        { date: 'Feb 23', iosDownloads: 35 },
        { date: 'Feb 24', iosDownloads: 33 },
        { date: 'Feb 25', iosDownloads: 29 },
        { date: 'Feb 26', iosDownloads: 32 },
        { date: 'Feb 27', iosDownloads: 37 },
        { date: 'Feb 28', iosDownloads: 41 },
        { date: 'Mar 1', iosDownloads: 45 },
        { date: 'Mar 2', iosDownloads: 43 },
        { date: 'Mar 3', iosDownloads: 37 },
        { date: 'Mar 4', iosDownloads: 33 },
        { date: 'Mar 5', iosDownloads: 35 },
        { date: 'Mar 6', iosDownloads: 38 },
        { date: 'Mar 7', iosDownloads: 42 },
        { date: 'Mar 8', iosDownloads: 46 },
        { date: 'Mar 9', iosDownloads: 43 },
        { date: 'Mar 10', iosDownloads: 37 },
        { date: 'Mar 11', iosDownloads: 40 },
        { date: 'Mar 12', iosDownloads: 43 },
        { date: 'Mar 13', iosDownloads: 48 },
        { date: 'Mar 14', iosDownloads: 50 },
        { date: 'Mar 15', iosDownloads: 47 },
        { date: 'Mar 16', iosDownloads: 41 },
        { date: 'Mar 17', iosDownloads: 45 },
        { date: 'Mar 18', iosDownloads: 49 },
        { date: 'Mar 19', iosDownloads: 47 },
      ],
      android: [
        { date: 'Feb 18', androidDownloads: 24 },
        { date: 'Feb 19', androidDownloads: 27 },
        { date: 'Feb 20', androidDownloads: 25 },
        { date: 'Feb 21', androidDownloads: 29 },
        { date: 'Feb 22', androidDownloads: 32 },
        { date: 'Feb 23', androidDownloads: 37 },
        { date: 'Feb 24', androidDownloads: 35 },
        { date: 'Feb 25', androidDownloads: 30 },
        { date: 'Feb 26', androidDownloads: 32 },
        { date: 'Feb 27', androidDownloads: 39 },
        { date: 'Feb 28', androidDownloads: 42 },
        { date: 'Mar 1', androidDownloads: 47 },
        { date: 'Mar 2', androidDownloads: 44 },
        { date: 'Mar 3', androidDownloads: 37 },
        { date: 'Mar 4', androidDownloads: 35 },
        { date: 'Mar 5', androidDownloads: 37 },
        { date: 'Mar 6', androidDownloads: 40 },
        { date: 'Mar 7', androidDownloads: 43 },
        { date: 'Mar 8', androidDownloads: 47 },
        { date: 'Mar 9', androidDownloads: 46 },
        { date: 'Mar 10', androidDownloads: 39 },
        { date: 'Mar 11', androidDownloads: 42 },
        { date: 'Mar 12', androidDownloads: 44 },
        { date: 'Mar 13', androidDownloads: 48 },
        { date: 'Mar 14', androidDownloads: 52 },
        { date: 'Mar 15', androidDownloads: 50 },
        { date: 'Mar 16', androidDownloads: 44 },
        { date: 'Mar 17', androidDownloads: 47 },
        { date: 'Mar 18', androidDownloads: 50 },
        { date: 'Mar 19', androidDownloads: 48 },
      ]
    }
  };

  // Calculate total downloads - fixed to match 2.2k as specified
  const totalDownloads = 2200;
  
  // Revenue data based on real values
  const monthlyRevenueData = [
    { month: 'Dec', ios: 3, android: 73 },
    { month: 'Jan', ios: 23, android: 76 },
    { month: 'Feb', ios: 148, android: 370 },
    { month: 'Mar', ios: 249, android: 371 }
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

  // SuperOne keywords data - Android UK market
  const keywordsData = [
    { id: '1', term: 'supering', position: 28, change: 3, volume: 6, difficulty: 32 },
    { id: '2', term: 'superhuman', position: 136, change: -1, volume: 27, difficulty: 28 },
    { id: '3', term: 'one4all gift cards', position: 147, change: -1, volume: 36, difficulty: 22 },
    { id: '4', term: 'supper', position: 154, change: -20, volume: 25, difficulty: 21 },
    { id: '5', term: 'sponsor', position: 160, change: 0, volume: 18, difficulty: 35 },
    { id: '6', term: 'super save', position: 182, change: 0, volume: 7, difficulty: 38 },
    { id: '7', term: 'onefootball', position: 195, change: -1, volume: 40, difficulty: 30 },
    { id: '8', term: 'football fan', position: 202, change: -13, volume: 18, difficulty: 45 },
    { id: '9', term: 'wwe supercard', position: 206, change: -1, volume: 39, difficulty: 40 },
    { id: '10', term: 'football trivia', position: 214, change: 0, volume: 5, difficulty: 39 },
    { id: '11', term: 'wwe supercard game', position: 218, change: 0, volume: 14, difficulty: 35 }
  ];

  // Get count of keywords in top 100
  const topKeywords = keywordsData.filter(kw => kw.position <= 100).length;

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

  // SuperOne sentiment data based on review analysis - UK market data
  const sentimentData = [
    { name: 'Positive', value: 91.1, color: '#4ade80' },
    { name: 'Neutral', value: 0, color: '#a3a3a3' },
    { name: 'Negative', value: 8.9, color: '#f87171' },
  ];

  // Total reviews count - UK market
  const totalReviews = 847;

  // Function to handle platform changes
  const handlePlatformChange = (newPlatform: 'ios' | 'android') => {
    setPlatform(newPlatform);
  };

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <MetricCard
          title="Downloads"
          value="2.2k"
          description="Total iOS & Android downloads (last 30 days)"
          icon={<Download className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="Keyword Rankings"
          value={topKeywords.toString()}
          description="Keywords in top 100 (Google Play - UK)"
          icon={<Search className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="Reviews"
          value={totalReviews.toString()}
          description="Combined iOS & Android reviews"
          icon={<MessageSquare className="h-5 w-5 text-redbox-indigo" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div>
          <SentimentChart data={sentimentData} />
          <div className="text-xs text-muted-foreground mt-2 ml-2">
            Based on user reviews from both iOS App Store and Google Play Store (UK Market).
          </div>
        </div>
        <div className="lg:col-span-2">
          <KeywordsTable keywords={keywordsData} />
          <div className="text-xs text-muted-foreground mt-2 ml-2">
            Keyword rankings from Google Play Store (UK region). Last updated: Mar 17, 2025.
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        <h3 className="text-lg font-slab font-medium">Top Competitors</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {competitorsData.map((competitor) => (
            <CompetitorCard key={competitor.id} competitor={competitor} />
          ))}
        </div>
        <div className="text-xs text-muted-foreground mt-1 ml-2">
          Competitor rankings from App Store Games category (Global).
        </div>
      </div>

      {/* Revenue Overview Section - moved further down */}
      <div className="mb-6">
        <h2 className="text-xl font-slab font-medium mb-4">Revenue Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="text-lg mb-2 font-slab font-medium">Total Revenue</h3>
            <p className="text-3xl font-medium font-sans">${totalRevenue.total.toLocaleString()}</p>
            <div className="flex justify-between mt-2 text-sm">
              <span>iOS: ${totalRevenue.ios.toLocaleString()}</span>
              <span>Android: ${totalRevenue.android.toLocaleString()}</span>
            </div>
            <div className="text-xs text-muted-foreground mt-3">
              Dec 19, 2024 - Mar 18, 2025 (Global markets)
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
                <span>Android revenue accounts for {Math.round((totalRevenue.android / totalRevenue.total) * 100)}% of total revenue</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-blue-500 w-1.5 h-1.5 mt-1 flex-shrink-0"></div>
                <span>Revenue growth correlates with increasing download numbers in February and March</span>
              </li>
            </ul>
            <div className="text-xs text-muted-foreground mt-3">
              Based on combined data from App Store Connect (iOS) and Google Play Console (Android)
            </div>
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
            Note: Android values are converted from NOK (Norway). iOS data represents sales while Android data represents daily revenue.
          </div>
        </div>
      </div>

      <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-6 mb-3 flex items-start gap-3">
        <InfoIcon className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-amber-800">
          <strong>Data sources:</strong> iOS data from App Store Connect (Dec 19, 2024 - Mar 18, 2025), 
          Android data from Google Play Console (Dec 19, 2024 - Mar 18, 2025). All metrics represent global performance unless otherwise specified.
        </p>
      </div>
    </Layout>
  );
};

export default Index;