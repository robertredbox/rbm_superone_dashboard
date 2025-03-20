import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import MetricCard from '@/components/dashboard/MetricCard';
import { DollarSign, CreditCard, TrendingUp, Calendar, ArrowUpRight, Users, ShoppingCart } from 'lucide-react';

// Font links component to ensure proper font loading
const FontLinks = () => (
  <link 
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" 
    rel="stylesheet" 
  />
);

const Revenue = () => {
  const [timeRange, setTimeRange] = useState('30d');
  const [platform, setPlatform] = useState('combined');
  
  // Sample revenue data (replace with actual API data in production)
  const revenueData = {
    totalRevenue: '$148,291',
    growthRate: 23.5,
    avgOrderValue: '$12.99',
    activeSubscribers: '11,842',
    conversionRate: '3.7%',
    churnRate: '1.9%',
    revenueBySource: [
      { source: 'In-App Purchases', amount: 89756, percentage: 60.5 },
      { source: 'Subscriptions', amount: 47453, percentage: 32 },
      { source: 'Ads Revenue', amount: 9274, percentage: 6.3 },
      { source: 'Affiliate Revenue', amount: 1808, percentage: 1.2 }
    ],
    monthlyRevenue: [
      { month: 'Jan', value: 8240 },
      { month: 'Feb', value: 8750 },
      { month: 'Mar', value: 9100 },
      { month: 'Apr', value: 9650 },
      { month: 'May', value: 10400 },
      { month: 'Jun', value: 11250 },
      { month: 'Jul', value: 12350 },
      { month: 'Aug', value: 11845 },
      { month: 'Sep', value: 12650 },
      { month: 'Oct', value: 14230 },
      { month: 'Nov', value: 15720 },
      { month: 'Dec', value: 17650 }
    ]
  };

  // Handle time range change
  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
  };

  // Handle platform change
  const handlePlatformChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPlatform(event.currentTarget.value);
  };

  return (
    <Layout title="Revenue" subtitle="Track your app's revenue and financial metrics">
      <FontLinks />
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-slab font-medium">Revenue Analysis</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 mr-4">
            <button 
              className={`px-3 py-1 rounded-md text-sm font-medium ${platform === 'ios' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={handlePlatformChange}
              value="ios"
            >
              iOS
            </button>
            <button 
              className={`px-3 py-1 rounded-md text-sm font-medium ${platform === 'android' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={handlePlatformChange}
              value="android"
            >
              Android
            </button>
            <button 
              className={`px-3 py-1 rounded-md text-sm font-medium ${platform === 'combined' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={handlePlatformChange}
              value="combined"
            >
              Combined
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Total Revenue"
          value={revenueData.totalRevenue}
          change={revenueData.growthRate}
          trend="up"
          description={`${timeRange === '30d' ? 'Last 30 days' : timeRange === '90d' ? 'Last 90 days' : 'Year to date'}`}
          icon={<DollarSign className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="Avg. Order Value"
          value={revenueData.avgOrderValue}
          change={7.2}
          trend="up"
          description="Per transaction average"
          icon={<ShoppingCart className="h-5 w-5 text-redbox-red" />}
        />
        <MetricCard
          title="Active Subscribers"
          value={revenueData.activeSubscribers}
          change={15.8}
          trend="up"
          description="Paying customers"
          icon={<Users className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="Conversion Rate"
          value={revenueData.conversionRate}
          change={0.5}
          trend="up"
          description="Free to paid users"
          icon={<TrendingUp className="h-5 w-5 text-redbox-indigo" />}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2 bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-medium mb-4">Revenue by Source</h3>
          <div className="space-y-4">
            {revenueData.revenueBySource.map((source, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-sans font-normal">{source.source}</span>
                  <span className="text-sm font-sans font-normal">${source.amount.toLocaleString()}</span>
                </div>
                <div className="w-full bg-redbox-light-grey rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      index === 0 ? "bg-redbox-purple" : 
                      index === 1 ? "bg-redbox-red" : 
                      index === 2 ? "bg-redbox-orange" : 
                      "bg-redbox-indigo"
                    }`} 
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-medium mb-4">Key Revenue Insights</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Annual Growth Rate</span>
              <span className="font-sans font-medium text-green-500">+24.3%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Monthly Recurring Revenue</span>
              <span className="font-sans font-medium">$41,250</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Revenue Per User</span>
              <span className="font-sans font-medium">$3.74</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Churn Rate</span>
              <span className="font-sans font-medium text-red-500">{revenueData.churnRate}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Best Selling IAP</span>
              <span className="font-sans font-medium">Premium Game Pack ($9.99)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-medium mb-4">iOS Revenue Breakdown</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Total iOS Revenue</span>
              <span className="font-sans font-medium">$88,975</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">IAP Revenue</span>
              <span className="font-sans font-medium">$53,385 (60%)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Subscription Revenue</span>
              <span className="font-sans font-medium">$31,141 (35%)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Ad Revenue</span>
              <span className="font-sans font-medium">$4,449 (5%)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">iOS Revenue Growth</span>
              <span className="font-sans font-medium text-green-500">+18.7%</span>
            </li>
          </ul>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-medium mb-4">Android Revenue Breakdown</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Total Android Revenue</span>
              <span className="font-sans font-medium">$59,316</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">IAP Revenue</span>
              <span className="font-sans font-medium">$36,371 (61%)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Subscription Revenue</span>
              <span className="font-sans font-medium">$16,312 (28%)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Ad Revenue</span>
              <span className="font-sans font-medium">$6,633 (11%)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground font-sans font-normal">Android Revenue Growth</span>
              <span className="font-sans font-medium text-green-500">+31.2%</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg mt-6 mb-6 flex items-start gap-3">
        <ArrowUpRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-800">
          <p className="font-medium">Revenue Opportunities:</p>
          <ul className="list-disc pl-5 mt-1 space-y-1">
            <li>Implementing seasonal promotions could increase IAP conversion by an estimated 15-20%</li>
            <li>Data suggests that offering a quarterly subscription option could reduce monthly churn by 7-10%</li>
            <li>Android users show higher engagement with rewarded ads - increasing ad frequency could boost revenue</li>
            <li>iOS subscription pricing optimization could yield up to 12% more revenue based on user spending patterns</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Revenue; 