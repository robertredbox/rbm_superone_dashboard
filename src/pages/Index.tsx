import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import MetricCard from '@/components/dashboard/MetricCard';
import PerformanceChart from '@/components/dashboard/PerformanceChart';
import KeywordsTable from '@/components/dashboard/KeywordsTable';
import CompetitorCard from '@/components/dashboard/CompetitorCard';
import SentimentChart from '@/components/dashboard/SentimentChart';
import { BarChart3, Search, TrendingUp, MessageSquare, Download, ArrowUp, ArrowUpRight, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RecentReviews from '@/components/dashboard/RecentReviews';
import TopKeywords from '@/components/dashboard/TopKeywords';
import TopCompetitors from '@/components/dashboard/TopCompetitors';
import KeyMetrics from '@/components/dashboard/KeyMetrics';

// Font links component to ensure proper font loading
const FontLinks = () => (
  <link 
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" 
    rel="stylesheet" 
  />
);

const Index = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('combined');
  
  // Platform-specific performance data
  const performanceData = {
    ios: {
      downloads: {
        value: '1.8K',
        change: '+28.4%',
        period: 'last 90 days'
      },
      weeklyTrend: {
        value: '+45.2%',
        change: '+45.2%',
        period: 'Change in weekly averages'
      },
      activeMarkets: {
        value: '42',
        change: '+12%',
        period: 'Countries with active users'
      },
      growthRate: {
        value: '27.5%',
        change: '+8.3%',
        period: 'Second half vs first half'
      }
    },
    android: {
      downloads: {
        value: '1.3K',
        change: '+38.7%',
        period: 'last 90 days'
      },
      weeklyTrend: {
        value: '+47.3%',
        change: '+47.3%',
        period: 'Change in weekly averages'
      },
      activeMarkets: {
        value: '25',
        change: '+6%',
        period: 'Countries with active users'
      },
      growthRate: {
        value: '38.6%',
        change: '+16.2%',
        period: 'Second half vs first half'
      }
    },
    combined: {
      downloads: {
        value: '3.1K',
        change: '+33.1%',
        period: 'last 90 days'
      },
      weeklyTrend: {
        value: '+92.1%',
        change: '+92.1%',
        period: 'Change in weekly averages'
      },
      activeMarkets: {
        value: '67',
        change: '+8%',
        period: 'Countries with active users'
      },
      growthRate: {
        value: '33.1%',
        change: '+12.5%',
        period: 'Second half vs first half'
      }
    }
  };

  // Get current metrics based on selected platform
  const currentMetrics = performanceData[selectedPlatform as keyof typeof performanceData];

  // Use existing download data
  const downloadsData = [
    { date: 'Dec 19', ios: 123, android: 150 },
    { date: 'Dec 26', ios: 145, android: 132 },
    { date: 'Jan 2', ios: 139, android: 145 },
    { date: 'Jan 9', ios: 162, android: 140 },
    { date: 'Jan 16', ios: 187, android: 152 },
    { date: 'Jan 23', ios: 196, android: 165 },
    { date: 'Jan 30', ios: 327, android: 215 },
    { date: 'Feb 6', ios: 246, android: 267 },
    { date: 'Feb 13', ios: 167, android: 198 },
    { date: 'Feb 20', ios: 171, android: 187 },
    { date: 'Feb 27', ios: 189, android: 242 },
    { date: 'Mar 6', ios: 256, android: 210 },
    { date: 'Mar 13', ios: 312, android: 198 },
  ];

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
    { name: 'Positive', value: 772, color: '#4ade80' },
    { name: 'Neutral', value: 0, color: '#60a5fa' },
    { name: 'Negative', value: 73, color: '#f87171' },
  ];

  // Handler for platform selection in the chart
  const handlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform.toLowerCase());
  };

  return (
    <Layout title="Dashboard" subtitle="Overview of your SuperOne app's performance">
      <FontLinks />
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-slab font-medium">Dashboard</h2>
          <p className="text-muted-foreground text-sm mt-1">SuperOne Fan Battle performance overview.</p>
        </div>

        <div>
          <h3 className="text-xl font-slab font-medium mb-4">Performance Metrics</h3>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-sans font-medium text-muted-foreground">Downloads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-3xl font-sans font-bold">{currentMetrics.downloads.value}</div>
                    <div className="flex items-center mt-1 text-emerald-600 text-xs font-sans">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      {currentMetrics.downloads.change}
                    </div>
                  </div>
                  <Download className="h-8 w-8 text-slate-300" />
                </div>
                <div className="text-xs text-muted-foreground mt-2 font-sans">
                  Total downloads for {currentMetrics.downloads.period}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-sans font-medium text-muted-foreground">Weekly Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-3xl font-sans font-bold">{currentMetrics.weeklyTrend.value}</div>
                    <div className="flex items-center mt-1 text-emerald-600 text-xs font-sans">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      {currentMetrics.weeklyTrend.change}
                    </div>
                  </div>
                  <TrendingUp className="h-8 w-8 text-slate-300" />
                </div>
                <div className="text-xs text-muted-foreground mt-2 font-sans">
                  {currentMetrics.weeklyTrend.period}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-sans font-medium text-muted-foreground">Active Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-3xl font-sans font-bold">{currentMetrics.activeMarkets.value}</div>
                    <div className="flex items-center mt-1 text-emerald-600 text-xs font-sans">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      {currentMetrics.activeMarkets.change}
                    </div>
                  </div>
                  <Globe className="h-8 w-8 text-slate-300" />
                </div>
                <div className="text-xs text-muted-foreground mt-2 font-sans">
                  {currentMetrics.activeMarkets.period}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-sans font-medium text-muted-foreground">Growth Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-3xl font-sans font-bold">{currentMetrics.growthRate.value}</div>
                    <div className="flex items-center mt-1 text-emerald-600 text-xs font-sans">
                      <ArrowUp className="h-3 w-3 mr-1" />
                      {currentMetrics.growthRate.change}
                    </div>
                  </div>
                  <ArrowUpRight className="h-8 w-8 text-slate-300" />
                </div>
                <div className="text-xs text-muted-foreground mt-2 font-sans">
                  {currentMetrics.growthRate.period}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-slab font-medium mb-4">Download Trends</h3>
          <Card>
            <CardContent className="pt-6">
              <PerformanceChart data={downloadsData} onPlatformChange={handlePlatformChange} />
            </CardContent>
          </Card>
          <div className="text-xs text-muted-foreground mt-2 text-center">
            <span className="text-amber-500">Note:</span> Android data (store listing acquisitions) covers Dec 13, 2024 to Mar 12, 2025, while iOS data spans Dec 19, 2024 to Mar 18, 2025. The different date ranges may affect direct comparisons.
          </div>
        </div>
        
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-slab font-medium mb-4">Sentiment Analysis</h3>
            <Card className="h-[350px]">
              <CardContent className="pt-6">
                <SentimentChart data={sentimentData} />
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-xl font-slab font-medium mb-4">Recent Reviews</h3>
            <Card className="h-[350px]">
              <CardContent className="p-0">
                <RecentReviews />
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-slab font-medium mb-4">Top Keywords</h3>
            <Card className="h-[400px]">
              <CardContent className="p-0">
                <TopKeywords />
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-xl font-slab font-medium mb-4">Top Competitors</h3>
            <Card className="h-[400px]">
              <CardContent className="p-0">
                <TopCompetitors />
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-xl font-slab font-medium mb-4">Key Metrics</h3>
            <Card className="h-[400px]">
              <CardContent className="p-0">
                <KeyMetrics />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;