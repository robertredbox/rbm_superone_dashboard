import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import TimeSelector from '@/components/dashboard/TimeSelector';
import SentimentChart from '@/components/dashboard/SentimentChart';
import MetricCard from '@/components/dashboard/MetricCard';
import { MessageSquare, ThumbsUp, ThumbsDown, TrendingUp, Star } from 'lucide-react';

const Reviews = () => {
  const [timeRange, setTimeRange] = useState<string>('30d');

  // Mock sentiment data
  const sentimentData = [
    { name: 'Positive', value: 68, color: '#4ade80' },
    { name: 'Neutral', value: 24, color: '#a3a3a3' },
    { name: 'Negative', value: 8, color: '#f87171' },
  ];

  // Mock reviews
  const reviews = [
    {
      id: '1',
      user: 'JohnDoe123',
      rating: 5,
      date: '2023-03-25',
      title: 'Best fitness app ever!',
      content: 'This app has completely transformed my workout routine. The interface is intuitive and the tracking features are excellent.',
      helpful: 24,
      sentiment: 'positive'
    },
    {
      id: '2',
      user: 'FitnessFan22',
      rating: 4,
      date: '2023-03-22',
      title: 'Great app, but could use more features',
      content: 'I really enjoy using this app for tracking my workouts. It would be nice to have more detailed nutrition tracking options though.',
      helpful: 18,
      sentiment: 'neutral'
    },
    {
      id: '3',
      user: 'WorkoutKing',
      rating: 5,
      date: '2023-03-20',
      title: 'Perfect for my needs',
      content: 'Exactly what I was looking for in a fitness tracker. The progress charts are motivating and the workout suggestions are spot on.',
      helpful: 32,
      sentiment: 'positive'
    },
    {
      id: '4',
      user: 'GymNewbie',
      rating: 2,
      date: '2023-03-18',
      title: 'Confusing interface',
      content: 'I found the app difficult to navigate. Too many options and not clear where to find basic features. Needs a better tutorial.',
      helpful: 7,
      sentiment: 'negative'
    },
    {
      id: '5',
      user: 'FitLifestyle',
      rating: 4,
      date: '2023-03-15',
      title: 'Good app with minor issues',
      content: 'Overall a solid fitness app. Occasionally crashes when trying to sync with my smart watch, but the developers are responsive to feedback.',
      helpful: 15,
      sentiment: 'neutral'
    }
  ];

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
        return 'Last 30 days';
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
          </svg>
        ))}
      </div>
    );
  };

  const getSentimentBadge = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Positive</span>;
      case 'neutral':
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Neutral</span>;
      case 'negative':
        return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Negative</span>;
      default:
        return null;
    }
  };

  return (
    <Layout title="Reviews" subtitle="Analyze user sentiment and feedback">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-slab font-bold">User Reviews</h2>
        <TimeSelector onChange={setTimeRange} selectedRange={timeRange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="Total Reviews"
          value="856"
          change={8.7}
          trend="up"
          description={`Reviews received in ${getTimeRangeDisplay().toLowerCase()}`}
          icon={<MessageSquare className="h-5 w-5 text-redbox-purple" />}
        />
        <MetricCard
          title="Average Rating"
          value="4.6"
          change={0.2}
          trend="up"
          description="Star rating out of 5"
          icon={<Star className="h-5 w-5 text-redbox-red" />}
        />
        <MetricCard
          title="Positive Sentiment"
          value="68%"
          change={5.2}
          trend="up"
          description="Reviews with positive tone"
          icon={<ThumbsUp className="h-5 w-5 text-redbox-orange" />}
        />
        <MetricCard
          title="Response Rate"
          value="92%"
          change={3.5}
          trend="up"
          description="Percentage of reviews you responded to"
          icon={<TrendingUp className="h-5 w-5 text-redbox-indigo" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <SentimentChart data={sentimentData} />
        
        <div className="lg:col-span-2 bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-bold mb-4">Common Themes</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">92%</div>
              <div className="text-sm text-green-800">User Interface</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">87%</div>
              <div className="text-sm text-green-800">Tracking Features</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">78%</div>
              <div className="text-sm text-green-800">Workout Plans</div>
            </div>
            <div className="bg-red-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">23%</div>
              <div className="text-sm text-red-800">Loading Speed</div>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="text-md font-medium mb-2">Keywords in Reviews</h4>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 text-sm rounded-full bg-redbox-light-grey text-redbox-indigo">easy to use</span>
              <span className="px-3 py-1.5 text-sm rounded-full bg-redbox-light-grey text-redbox-indigo">great interface</span>
              <span className="px-3 py-1.5 text-sm rounded-full bg-redbox-light-grey text-redbox-indigo">workout tracking</span>
              <span className="px-3 py-1.5 text-sm rounded-full bg-redbox-light-grey text-redbox-indigo">progress charts</span>
              <span className="px-3 py-1.5 text-sm rounded-full bg-redbox-light-grey text-redbox-indigo">customizable</span>
              <span className="px-3 py-1.5 text-sm rounded-full bg-redbox-light-grey text-redbox-indigo">motivating</span>
              <span className="px-3 py-1.5 text-sm rounded-full bg-redbox-light-grey text-redbox-red">slow loading</span>
              <span className="px-3 py-1.5 text-sm rounded-full bg-redbox-light-grey text-redbox-red">battery drain</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border">
        <div className="p-4 border-b border-border">
          <h3 className="text-lg font-slab font-bold">Recent Reviews</h3>
        </div>
        <div className="divide-y divide-border">
          {reviews.map((review) => (
            <div key={review.id} className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-medium">{review.user}</span>
                  <div className="flex items-center gap-2 mt-1">
                    {renderStars(review.rating)}
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                </div>
                {getSentimentBadge(review.sentiment)}
              </div>
              <h4 className="font-medium mt-2">{review.title}</h4>
              <p className="text-muted-foreground text-sm mt-1">{review.content}</p>
              <div className="flex items-center mt-2 text-xs text-muted-foreground">
                <ThumbsUp className="h-3.5 w-3.5 mr-1" /> 
                <span>{review.helpful} found this helpful</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
