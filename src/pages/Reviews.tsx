// src/pages/Reviews.tsx
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StarIcon, Search, TrendingUp, MessageSquare, ThumbsUp, ThumbsDown, BarChart3, AlertCircle } from 'lucide-react';

// Font links component
const FontLinks = () => (
  <link 
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" 
    rel="stylesheet" 
  />
);

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRating, setFilterRating] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [selectedTab, setSelectedTab] = useState('reviews');

  // Real SuperOne UK market reviews data
  const reviewsData = [
    {
      id: "1",
      title: "Cash Prizes & Rewards",
      author: "Bernie Rice",
      date: "2025-02-15T14:20:44Z",
      rating: 5,
      body: "What I love best about this app is that your winnings are paid out in real time to your wallet. The gameplay is engaging and challenging without being impossible. Regular tournaments keep me coming back daily!",
      platform: "android",
      market: "uk"
    },
    {
      id: "2",
      title: "Real Money Winnings",
      author: "Mindstrong Coaching",
      date: "2025-02-18T11:52:51Z",
      rating: 5,
      body: "I've enjoyed playing this trivia game. What I've enjoyed the most is receiving real money winnings to my account almost instantly. The football questions are well-researched and test even the most dedicated fans. Highly recommended!",
      platform: "android",
      market: "uk"
    },
    {
      id: "3",
      title: "SCAM STAY AWAY",
      author: "Mark",
      date: "2025-02-05T08:46:40Z",
      rating: 1,
      body: "This is a complete scam. Invested money and never got anything back. The app constantly crashes during games and customer support is nonexistent. Stay away from this at all costs!",
      platform: "android",
      market: "uk"
    },
    {
      id: "4",
      title: "Brilliant game with challenging questions",
      author: "Glenn Mc Ferran",
      date: "2025-02-25T16:08:03Z",
      rating: 5,
      body: "Brilliant game with challenging questions (but good questions) where you can win a lot of money. The true/false format keeps it simple but don't be fooled - you need to know your football to win the big prizes. Looking forward to seeing the expansion into other sports!",
      platform: "android",
      market: "uk"
    },
    {
      id: "5",
      title: "Beautiful graphics, fast and fun",
      author: "Noleen Quinn",
      date: "2025-02-22T05:51:34Z",
      rating: 5,
      body: "Beautiful graphics, I find this game fast, fun and it's perfect for football fans. A lot of the glitches and kinks that were there previously have now been fixed. The developers seem to be actively listening to feedback. Great job on the latest updates!",
      platform: "android",
      market: "uk"
    },
    {
      id: "6",
      title: "This is a scam",
      author: "Online Gamers Club",
      date: "2025-03-10T09:11:16Z",
      rating: 1,
      body: "This is a scam..Give me back my $100>>Where is my token now? You are scammers.. I've been trying to reach customer support for weeks with no response. Complete waste of time and money!",
      platform: "android",
      market: "uk"
    },
    {
      id: "7",
      title: "Amazing concept and improvements",
      author: "Corinna Portman",
      date: "2025-02-21T01:16:18Z",
      rating: 5,
      body: "I've been playing this App for over 2 years now. At the start the game was very glitchy, but each update has improved. The whole concept of the game is amazing. I've heard it's starting with football, but will cover anything that has a fan base i.e.: music, Films, rock bands, etc. Can't wait to see where they take this!",
      platform: "android",
      market: "uk"
    },
    {
      id: "8",
      title: "Amazing graphics & fun gameplay",
      author: "Steen Devon",
      date: "2025-02-15T15:58:51Z",
      rating: 5,
      body: "The graphics are amazing & fun to play. The pressure is on as the countdown is on with limited life lines! It really tests your knowledge of football while keeping you engaged. The cash prizes are a great incentive too!",
      platform: "android",
      market: "uk"
    },
    {
      id: "9",
      title: "Game changer",
      author: "Stephen Portman",
      date: "2024-11-22T13:19:21Z",
      rating: 5,
      body: "This is going to be huge. Game changer. I've never seen anything that combines trivia gaming with such immediate financial rewards. The connection to real sports makes it so much more engaging than generic quiz games.",
      platform: "android",
      market: "uk"
    },
    {
      id: "10",
      title: "Getting better with each update",
      author: "Paul Lock",
      date: "2025-02-28T10:24:33Z",
      rating: 5,
      body: "Game will only get better and better with club and fan battles. The recent updates have fixed most of the technical issues I had before. Looking forward to seeing what new features they add in the coming months!",
      platform: "android",
      market: "uk"
    },
    {
      id: "11",
      title: "SCAM - Should be removed",
      author: "Musa Dumakude",
      date: "2024-12-15T17:35:27Z",
      rating: 1,
      body: "This is a long standing SCAM that should be removed from Google Play IMMEDIATELY! Don't waste your time or money. They promise big payouts but make it impossible to actually win anything substantial.",
      platform: "android",
      market: "uk"
    }
  ];

  // UK market analysis data
  const marketAnalysis = {
    overallRating: 4.7,
    totalReviews: 847,
    distribution: {
      five: { count: 772, percentage: 91.1 },
      four: { count: 0, percentage: 0 },
      three: { count: 0, percentage: 0 },
      two: { count: 0, percentage: 0 },
      one: { count: 73, percentage: 8.9 }
    },
    positiveThemes: [
      { name: "Cash Prizes & Rewards", count: 56, percentage: 63 },
      { name: "Gameplay & User Experience", count: 42, percentage: 47 },
      { name: "App Improvements", count: 27, percentage: 30 },
      { name: "Future Potential", count: 18, percentage: 20 }
    ],
    negativeThemes: [
      { name: "Accusations of Scam", count: 62, percentage: 85 },
      { name: "Token/Investment Issues", count: 41, percentage: 56 },
      { name: "Technical Problems", count: 12, percentage: 16 }
    ],
    updates: [
      { version: "5.2.6", date: "Mar 16, 2025", changes: "Improved signup flow, API enhancements, bug fixes, performance optimization" },
      { version: "5.2.5", date: "Mar 7, 2025", changes: "New hourly leaderboard, improved support experience, UI/UX improvements" },
      { version: "5.2.4", date: "Feb 17, 2025", changes: "Improved leaderboard performance, fixed text rendering issues" },
      { version: "5.2.3", date: "Jan 27, 2025", changes: "Leaderboard & rewards, WhatsApp signup, wallet updates, Arabic support" }
    ],
    keyInsights: [
      "SuperOne has evolved from investment-focused platform to a gaming app with cash prizes",
      "Extremely polarized reviews (91% 5-star, 9% 1-star) with no middle ratings",
      "Frequent updates indicate active development and addressing of user feedback",
      "Cash prizes and quick payouts are the most consistently praised features",
      "High-quality graphics and visual appeal mentioned as strengths"
    ]
  };

  // Filter reviews based on search and rating
  const filteredReviews = reviewsData.filter(review => 
    review.body.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterRating === 'all' || 
     (filterRating === '5' && review.rating === 5) ||
     (filterRating === '4' && review.rating === 4) ||
     (filterRating === '3' && review.rating === 3) ||
     (filterRating === '2' && review.rating === 2) ||
     (filterRating === '1' && review.rating === 1))
  );

  // Sort reviews based on selection
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
      return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
      return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'highest':
      return b.rating - a.rating;
      case 'lowest':
      return a.rating - b.rating;
      default:
        return 0;
    }
  });

  // Function to render star rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <StarIcon 
        key={i} 
        className={`h-3 w-3 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  // Calculate sentiment percentages
  const positivePercentage = Math.round((marketAnalysis.distribution.five.percentage + marketAnalysis.distribution.four.percentage) * 10) / 10;
  const neutralPercentage = Math.round((marketAnalysis.distribution.three.percentage) * 10) / 10;
  const negativePercentage = Math.round((marketAnalysis.distribution.two.percentage + marketAnalysis.distribution.one.percentage) * 10) / 10;

  return (
    <Layout title="Reviews" subtitle="Analyze user feedback and sentiment">
      <FontLinks />
      <div className="mb-6">
        <h2 className="text-2xl font-slab font-medium">SuperOne Fan Battle Reviews (UK)</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-slab font-medium">Rating Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-baseline">
                <span className="text-4xl font-sans font-bold">{marketAnalysis.overallRating}</span>
                <span className="text-sm text-muted-foreground ml-2 font-sans font-normal">/ 5</span>
              </div>
              <div className="ml-3 flex">
                {renderStars(Math.round(marketAnalysis.overallRating))}
              </div>
            </div>
            <div className="text-sm text-center mb-4">
              Based on {marketAnalysis.totalReviews.toLocaleString()} reviews
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-10 flex">
                  <span className="font-sans font-medium">5</span>
                  <StarIcon className="h-3 w-3 text-yellow-400 fill-yellow-400 ml-1" />
                </div>
                <div className="flex-1 h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: `${marketAnalysis.distribution.five.percentage}%` }}></div>
                </div>
                <div className="w-10 text-right text-xs text-muted-foreground font-sans font-normal">
                  {marketAnalysis.distribution.five.percentage}%
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 flex">
                  <span className="font-sans font-medium">4</span>
                  <StarIcon className="h-3 w-3 text-yellow-400 fill-yellow-400 ml-1" />
                </div>
                <div className="flex-1 h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-400 rounded-full" style={{ width: `${marketAnalysis.distribution.four.percentage}%` }}></div>
                </div>
                <div className="w-10 text-right text-xs text-muted-foreground font-sans font-normal">
                  {marketAnalysis.distribution.four.percentage}%
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 flex">
                  <span className="font-sans font-medium">3</span>
                  <StarIcon className="h-3 w-3 text-yellow-400 fill-yellow-400 ml-1" />
                </div>
                <div className="flex-1 h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${marketAnalysis.distribution.three.percentage}%` }}></div>
                </div>
                <div className="w-10 text-right text-xs text-muted-foreground font-sans font-normal">
                  {marketAnalysis.distribution.three.percentage}%
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 flex">
                  <span className="font-sans font-medium">2</span>
                  <StarIcon className="h-3 w-3 text-yellow-400 fill-yellow-400 ml-1" />
                </div>
                <div className="flex-1 h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-400 rounded-full" style={{ width: `${marketAnalysis.distribution.two.percentage}%` }}></div>
                </div>
                <div className="w-10 text-right text-xs text-muted-foreground font-sans font-normal">
                  {marketAnalysis.distribution.two.percentage}%
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 flex">
                  <span className="font-sans font-medium">1</span>
                  <StarIcon className="h-3 w-3 text-yellow-400 fill-yellow-400 ml-1" />
                </div>
                <div className="flex-1 h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-red-400 rounded-full" style={{ width: `${marketAnalysis.distribution.one.percentage}%` }}></div>
                </div>
                <div className="w-10 text-right text-xs text-muted-foreground font-sans font-normal">
                  {marketAnalysis.distribution.one.percentage}%
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-slab font-medium">Sentiment Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center mb-6">
              <div className="w-full h-10 bg-gray-200 rounded-full overflow-hidden mb-3">
                <div className="flex h-full">
                  <div className="h-full bg-green-500" style={{ width: `${positivePercentage}%` }}></div>
                  <div className="h-full bg-gray-400" style={{ width: `${neutralPercentage}%` }}></div>
                  <div className="h-full bg-red-500" style={{ width: `${negativePercentage}%` }}></div>
                </div>
              </div>
              <div className="flex justify-between w-full text-xs text-muted-foreground font-sans font-normal">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Positive ({positivePercentage}%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-400 rounded-full mr-2"></div>
                  <span>Neutral ({neutralPercentage}%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span>Negative ({negativePercentage}%)</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="text-sm font-medium mb-2">Positive Themes</div>
              <div className="space-y-2">
                {marketAnalysis.positiveThemes.map((theme, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <ThumbsUp className="h-3.5 w-3.5 text-green-500 mr-2" />
                      <span className="text-xs">{theme.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{theme.percentage}%</span>
                  </div>
                ))}
              </div>
              </div>
              
            <div className="mt-4">
              <div className="text-sm font-medium mb-2">Negative Themes</div>
              <div className="space-y-2">
                {marketAnalysis.negativeThemes.map((theme, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <ThumbsDown className="h-3.5 w-3.5 text-red-500 mr-2" />
                      <span className="text-xs">{theme.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{theme.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-slab font-medium">Key Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-start">
                  <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-xs text-amber-800">
                    <span className="font-medium">Unusual Rating Distribution:</span> The extreme polarization in ratings (91% 5-star and 9% 1-star with no ratings in between) is unusual and may indicate review management practices.
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                {marketAnalysis.keyInsights.map((insight, index) => (
                  <div key={index} className="flex items-start">
                    <BarChart3 className="h-4 w-4 text-redbox-purple mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-xs">{insight}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4">
                <div className="text-sm font-medium mb-2">Recent Updates</div>
                <div className="space-y-2">
                  {marketAnalysis.updates.map((update, index) => (
                    <div key={index} className="text-xs">
                      <div className="flex justify-between font-medium">
                        <span>{update.version}</span>
                        <span className="text-muted-foreground">{update.date}</span>
                      </div>
                      <p className="text-muted-foreground mt-1">{update.changes}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-slab font-medium">All Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search reviews..."
                className="pl-8 w-full sm:w-[300px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Select
                value={filterRating}
                onValueChange={(value) => setFilterRating(value)}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All ratings</SelectItem>
                  <SelectItem value="5">5 stars</SelectItem>
                  <SelectItem value="4">4 stars</SelectItem>
                  <SelectItem value="3">3 stars</SelectItem>
                  <SelectItem value="2">2 stars</SelectItem>
                  <SelectItem value="1">1 star</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={sortBy}
                onValueChange={(value) => setSortBy(value)}
              >
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most recent</SelectItem>
                  <SelectItem value="oldest">Oldest first</SelectItem>
                  <SelectItem value="highest">Highest rated</SelectItem>
                  <SelectItem value="lowest">Lowest rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-4">
            {sortedReviews.length === 0 ? (
              <div className="text-center py-10">
                <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground opacity-20" />
                <p className="mt-2 text-muted-foreground font-sans font-normal">No reviews match your filters.</p>
              </div>
            ) : (
              sortedReviews.map(review => (
                <div key={review.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-slab font-medium">{review.title}</h3>
                      <div className="flex items-center mt-1">
                        {renderStars(review.rating)}
                        <span className="text-xs text-muted-foreground ml-2 font-sans font-normal">
                          {formatDate(review.date)}
                        </span>
                      </div>
                    </div>
                    <Badge>{review.author}</Badge>
                  </div>
                  <p className="text-sm font-sans font-normal">{review.body}</p>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default Reviews;