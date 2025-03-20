import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import CompetitorCard from '@/components/dashboard/CompetitorCard';
import MetricCard from '@/components/dashboard/MetricCard';
import { TrendingUp, Users, Star, Award, Trophy, Zap, Target, BarChart2 } from 'lucide-react';

// Font links component to ensure proper font loading
const FontLinks = () => (
  <link 
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" 
    rel="stylesheet" 
  />
);

const Competitors = () => {
  const [platform, setPlatform] = useState<string>('ios');

  // SuperOne Fan Battle competitors data - iOS
  const iosCompetitorsData = [
    { 
      id: '1', 
      name: 'Footy Brains – Football Quiz', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/3b/f8/9f/3bf89f5e-d718-16ac-f07d-7fe0ec67a1b3/AppIcon-1x_U007emarketing-0-7-0-0-85-220-0.png/170x170bb.png', 
      ranking: 217, 
      change: -5, 
      rating: 4.8,
      developer: 'FootyBrains Ltd',
      featuredInfo: '1,994 ratings, real-time battles'
    },
    { 
      id: '2', 
      name: 'Football Quiz Trivia Questions', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/0b/d5/31/0bd53102-66a2-c4e0-4780-311b72cb9091/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/170x170bb.png', 
      ranking: 310, 
      change: 12, 
      rating: 4.2,
      developer: 'QuizMaster Inc',
      featuredInfo: 'Multiple choice questions, traditional format'
    },
    { 
      id: '3', 
      name: 'FUT 25 Card Creator', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/82/f8/1e/82f81e73-9f4a-46d5-efcc-1e0d0ff2393d/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/170x170bb.png', 
      ranking: 356, 
      change: -12, 
      rating: 4.7,
      developer: 'FUT Tools',
      featuredInfo: 'Card creation utility, player ratings'
    }
  ];

  // SuperOne Fan Battle competitors data - Android
  const androidCompetitorsData = [
    { 
      id: '4', 
      name: 'Football Quiz! Ultimate Trivia', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/6d/65/5f/6d655f59-b059-b583-f3ad-f4c0fa416c31/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/170x170bb.png', 
      ranking: 44, 
      change: 2, 
      rating: 4.7,
      developer: 'Football Quiz Inc',
      featuredInfo: '1M+ downloads, 5,000+ players in database'
    },
    { 
      id: '5', 
      name: 'Football Quiz - Soccer Trivia', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/c5/35/19/c535199a-b9fb-f3cd-5367-091818beefea/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/170x170bb.png', 
      ranking: 56, 
      change: -3, 
      rating: 4.3,
      developer: 'Soccer Quiz Developers',
      featuredInfo: '1M+ downloads, 18,068 ratings'
    },
    { 
      id: '6', 
      name: 'Guess Football Teams Quiz 2025', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/45/7b/1c/457b1c41-c678-af0d-ef3b-2c5eb9fb5a7c/AppIcon-1x_U007emarketing-0-7-0-85-220.png/170x170bb.png', 
      ranking: 73, 
      change: 8, 
      rating: 4.6,
      developer: 'Quiz Masters',
      featuredInfo: '1M+ downloads, team identification focus'
    },
    { 
      id: '7', 
      name: 'Guess The Football Player Quiz', 
      icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/45/7b/1c/457b1c41-c678-af0d-ef3b-2c5eb9fb5a7c/AppIcon-1x_U007emarketing-0-7-0-85-220.png/170x170bb.png', 
      ranking: 85, 
      change: -2, 
      rating: 4.2,
      developer: 'Football Fan Apps',
      featuredInfo: '1M+ downloads, player identification focus'
    }
  ];

  // SuperOne market analysis data - Updated
  const iosMarketPosition = 218; // Current rank in Trivia Games category (iOS)
  const androidMarketPosition = 115; // Estimated rank if properly categorized in GAME_TRIVIA
  const marketShare = 3.2; // Estimated percentage in football trivia game market
  const avgCompetitorRating = 4.5; // Average from competitors
  const userBase = 50; // Thousands of users, based on download data

  // SuperOne competitive advantage analysis - Updated based on analysis
  const gapAnalysisData = [
    {
      name: "Cash Prizes",
      value: 98,
      change: 25,
      color: "bg-redbox-purple"
    },
    {
      name: "Affiliate System",
      value: 95,
      change: 30,
      color: "bg-redbox-red"
    },
    {
      name: "Game Frequency",
      value: 90,
      change: 15,
      color: "bg-redbox-orange"
    },
    {
      name: "Rating Quality",
      value: 96,
      change: 10,
      color: "bg-redbox-indigo"
    }
  ];

  // Feature gap analysis - Areas where competitors are stronger
  const featureGapData = [
    {
      name: "Content Library",
      value: 45,
      change: -15,
      color: "bg-amber-500"
    },
    {
      name: "Multiplayer Modes",
      value: 30,
      change: -25,
      color: "bg-amber-500"
    },
    {
      name: "Quiz Format Variety",
      value: 40,
      change: -20,
      color: "bg-amber-500"
    },
    {
      name: "Daily Rewards",
      value: 50,
      change: -10,
      color: "bg-amber-500"
    }
  ];
  
  // Choose which competitors to display based on platform
  const competitorsData = platform === 'ios' ? iosCompetitorsData : androidCompetitorsData;
  const marketPosition = platform === 'ios' ? iosMarketPosition : androidMarketPosition;

  return (
    <Layout title="Competitors" subtitle="Analyze your competition in the market">
      <FontLinks />
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-slab font-medium">Competitor Analysis</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 mr-4">
            <button 
              className={`px-3 py-1 rounded-md text-sm font-medium ${platform === 'ios' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setPlatform('ios')}
            >
              iOS
            </button>
            <button 
              className={`px-3 py-1 rounded-md text-sm font-medium ${platform === 'android' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
              onClick={() => setPlatform('android')}
            >
              Android
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2 bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-slab font-medium mb-4">Key Competitive Insights</h3>
          <div className="space-y-4">
            <p className="text-sm">
              SuperOne Fan Battle competes primarily in the football trivia/quiz market with a unique true/false swipe
              gameplay mechanism and cash prize incentives. {platform === 'ios' 
              ? 'On iOS, main competitors like Footy Brains offer similar football-focused quizzes but with a traditional multiple-choice format.'
              : 'On Android, the landscape is filled with established competitors having 1M+ downloads and focused player identification mechanics.'}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <Target className="h-4 w-4 mr-2 text-redbox-purple" />
                  Primary Audience
                </h4>
                <ul className="text-xs space-y-1 text-slate-700">
                  <li>• Football/soccer fans aged 18-34</li>
                  <li>• Trivia and quiz enthusiasts</li>
                  <li>• Users interested in cash prizes</li>
                  <li>• Social, competitive gamers</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <Zap className="h-4 w-4 mr-2 text-redbox-red" />
                  Key Differentiators
                </h4>
                <ul className="text-xs space-y-1 text-slate-700">
                  <li>• True/false swipe mechanism</li>
                  <li>• Cash prize incentives</li>
                  <li>• Games every 5 minutes</li>
                  <li>• Affiliate program for earnings</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-sm font-medium mb-3 flex items-center">
              <BarChart2 className="h-4 w-4 mr-2 text-redbox-orange" />
              {platform === 'ios' ? 'iOS Market Distribution' : 'Android Category Positioning'}
            </h4>
            <p className="text-xs text-slate-700 mb-4">
              {platform === 'ios' 
                ? 'SuperOne currently sits in a relatively underpopulated niche (trivia-focused football games). 88.9% of similar apps are in Games category with only 5.6% specifically in the Trivia subcategory.' 
                : 'SuperOne is currently miscategorized as "BUSINESS" rather than "GAME_TRIVIA". This is causing significant visibility issues compared to direct competitors who are properly categorized.'}
            </p>
          </div>
        </div>
        
        <div className="md:col-span-1">
          <div className="bg-card p-6 rounded-lg border border-border h-full">
            <h3 className="text-lg font-slab font-medium mb-4">Strategic Opportunities</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-redbox-purple bg-opacity-10 text-redbox-purple text-xs font-medium mr-2 mt-0.5">1</span>
                <span>{platform === 'ios' 
                  ? 'Add multiplayer modes similar to Footy Brains' 
                  : 'Fix category misalignment from BUSINESS to GAME_TRIVIA'}</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-redbox-red bg-opacity-10 text-redbox-red text-xs font-medium mr-2 mt-0.5">2</span>
                <span>Implement varied quiz formats beyond true/false</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-redbox-orange bg-opacity-10 text-redbox-orange text-xs font-medium mr-2 mt-0.5">3</span>
                <span>Expand content library to match competition depth</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-redbox-indigo bg-opacity-10 text-redbox-indigo text-xs font-medium mr-2 mt-0.5">4</span>
                <span>Add daily rewards and progression systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-slab font-medium mb-4">
            {platform === 'ios' ? 'Top iOS Football Quiz Competitors' : 'Top Android Football Quiz Competitors'}
          </h3>
          <div className="space-y-4">
            {competitorsData.map((competitor) => (
              <CompetitorCard key={competitor.id} competitor={competitor} />
            ))}
          </div>
        </div>
        
        <div>
          <div className="bg-card p-6 rounded-lg border border-border mb-6">
            <h3 className="text-lg font-slab font-medium mb-4">Our Competitive Advantages</h3>
            <div className="space-y-4">
              {gapAnalysisData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-sans font-normal">{item.name}</span>
                    <span className="text-sm font-sans font-normal">{item.change > 0 ? `+${item.change}%` : `${item.change}%`}</span>
                  </div>
                  <div className="w-full bg-redbox-light-grey rounded-full h-2">
                    <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-lg font-slab font-medium mb-4">Areas for Improvement</h3>
            <div className="space-y-4">
              {featureGapData.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-sans font-normal">{item.name}</span>
                    <span className="text-sm font-sans font-normal text-red-500">{item.change}%</span>
                  </div>
                  <div className="w-full bg-redbox-light-grey rounded-full h-2">
                    <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Competitors;