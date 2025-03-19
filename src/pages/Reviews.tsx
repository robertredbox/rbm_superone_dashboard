// src/pages/Reviews.tsx
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { StarIcon, Search, TrendingUp, MessageSquare } from 'lucide-react';

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

  // SuperOne trivia game reviews
  const reviewsData = [
    {
      id: "52134369583",
      title: "Addictive Trivia Game with Great Prizes",
      author: "TriviaKing27",
      date: "2025-03-10T14:20:44Z",
      rating: 5,
      body: "I've been playing SuperOne for a few months now and I'm absolutely hooked! The true/false trivia format is simple enough for anyone to understand but still challenging. What really sets this apart is the prize system - I've already won twice and got my payouts quickly. The affiliate program is also great for earning some extra credits. My only suggestion would be to add more diverse question categories. Overall, this is the best trivia app I've found with real cash prizes that actually pays out."
    },
    {
      id: "52098557739",
      title: "Great concept but needs more variety",
      author: "QuizMaster2025",
      date: "2025-02-18T11:52:51Z",
      rating: 4,
      body: "SuperOne has a fantastic concept with the true/false format and battle royale style eliminations. I love how fast-paced each game is, and the fact there's a new game every 5 minutes keeps me coming back. The affiliate system is also a nice touch for earning extra. My only complaint is that after playing for a couple of weeks, I'm starting to see the same questions repeated. They need to expand their question database. Otherwise, it's a great way to test your knowledge and potentially win some money."
    },
    {
      id: "52299848179",
      title: "Connection issues ruin the experience",
      author: "DisconnectedFan",
      date: "2025-03-05T08:46:40Z",
      rating: 2,
      body: "When it works, SuperOne is actually pretty fun. I enjoy the quick trivia format and the cash prizes are enticing. However, I constantly experience connection issues during games. There's nothing more frustrating than making it to the final round only to get disconnected and lose your progress. I've reached out to support multiple times but haven't received much help. Fix the server issues and this would be a 5-star app. Until then, I can't recommend it if you're serious about competing for prizes."
    },
    {
      id: "52171798473",
      title: "The best way to earn while having fun",
      author: "CashQuizzer",
      date: "2025-03-15T16:08:03Z",
      rating: 5,
      body: "SuperOne has completely changed my perspective on mobile games. The fact that you can actually earn real cash just by answering trivia questions correctly is amazing. I've been a big fan of quiz games for years, but this adds an extra layer of excitement. The swipe interface is smooth and intuitive, and the 4-lives system gives you a fair chance. I especially love the community aspect - playing against real people around the world adds to the thrill. Their customer service is also top-notch when I had an issue with a payout."
    },
    {
      id: "52264470751",
      title: "Fun but needs more payment options",
      author: "GlobalPlayer22",
      date: "2025-02-25T05:51:34Z",
      rating: 4,
      body: "I really enjoy SuperOne's gameplay and the challenge of competing against thousands of other players. The trivia questions are well-researched and cover a good range of topics. My main issue is with the limited payment options for withdrawing winnings. I'd like to see more options beyond the current ones, especially for international players. Also, the minimum withdrawal amount is a bit high for casual players. Otherwise, it's one of the better trivia games out there, and the lack of ads is refreshing!"
    },
    {
      id: "52430566122",
      title: "Amazing affiliate program",
      author: "ReferralKing",
      date: "2025-03-12T09:11:16Z",
      rating: 5,
      body: "I downloaded SuperOne initially for the trivia but stayed for the affiliate program! The game itself is fun with quick rounds and fair questions, but the ability to earn through referrals is a game-changer. I've referred several friends and the passive income from their activity is really adding up. The tiered bonus system rewards loyal players and creates a genuine ecosystem. The UI is clean and performance has been solid on my device. If you enjoy trivia and want to make some money on the side, this is definitely the app to try."
    },
    {
      id: "52169313113",
      title: "Needs more question categories",
      author: "SportsTriviaBuff",
      date: "2025-01-21T01:16:18Z",
      rating: 3,
      body: "SuperOne has potential, but it needs more diverse question categories. As a sports fan, I notice there are way too many general knowledge questions and not enough sports-specific ones. The game mechanics work well, and I like the true/false format, but after playing for a couple of weeks, you start seeing repeated questions. The prize structure is fair and I appreciate that they actually pay out, unlike some other apps. If they expanded their question database and added category-specific games, this would easily be a 5-star app for me."
    },
    {
      id: "52276540333",
      title: "Buggy on older devices",
      author: "OldPhoneUser",
      date: "2025-02-15T15:58:51Z",
      rating: 2,
      body: "I really want to enjoy SuperOne, but the experience on older phones is terrible. The app frequently crashes during gameplay, especially in the final rounds when the stakes are highest. It's incredibly frustrating to make it far only to have the app freeze and lose your progress. I've also had issues with the timer not syncing properly, which puts me at a disadvantage. The concept is great and when it works, it's fun, but the technical issues make it nearly unplayable on my device. Please optimize for older phones!"
    },
    {
      id: "52203509237",
      title: "Great for football fans",
      author: "FootballTrivia101",
      date: "2025-03-02T13:19:21Z",
      rating: 5,
      body: "As a football fanatic, SuperOne is exactly what I've been looking for! The football trivia questions are challenging but fair, and I love competing against other fans to prove my knowledge. The swipe interface makes answering quick and intuitive, and the progressive difficulty keeps things interesting. I've won a few smaller prizes so far and withdrawals were processed promptly. The community is growing and it's exciting to see how many people join each game. Definitely recommend for sports fans looking for a trivia challenge with actual rewards."
    },
    {
      id: "52119649151",
      title: "Smooth payment system",
      author: "PrizeCollector",
      date: "2025-03-08T13:34:16Z",
      rating: 4,
      body: "I've tried many trivia apps that claim to offer cash prizes, but SuperOne is one of the few that actually delivers. Their payment system is remarkably smooth - I received my winnings within 24 hours of request. The game itself is fun and addictive with its battle royale style elimination. My only complaint is that sometimes the questions can be a bit ambiguous for a true/false format. Also, I wish there were more games in specific categories. But overall, if you're looking for a legitimate trivia game that pays real money, this is definitely one to try."
    }
  ];

  // Filter reviews based on search term and rating filter
  const filteredReviews = reviewsData.filter(review => {
    const matchesSearch = 
      review.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      review.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRating = 
      filterRating === 'all' || 
      (filterRating === '5star' && review.rating === 5) ||
      (filterRating === '4star' && review.rating === 4) ||
      (filterRating === '3star' && review.rating === 3) ||
      (filterRating === '2star' && review.rating === 2) ||
      (filterRating === '1star' && review.rating === 1) ||
      (filterRating === 'positive' && review.rating >= 4) ||
      (filterRating === 'neutral' && review.rating === 3) ||
      (filterRating === 'negative' && review.rating <= 2);
    
    return matchesSearch && matchesRating;
  });

  // Sort reviews
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (sortBy === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    if (sortBy === 'highest') {
      return b.rating - a.rating;
    }
    if (sortBy === 'lowest') {
      return a.rating - b.rating;
    }
    return 0;
  });

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  // Render stars for a rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon 
        key={index} 
        className={`h-4 w-4 ${
          index < Math.floor(rating) 
            ? 'text-yellow-400 fill-yellow-400' 
            : index < rating 
              ? 'text-yellow-400 fill-yellow-400 opacity-50' 
              : 'text-gray-300'
        }`} 
      />
    ));
  };

  // Calculate rating statistics
  const totalReviews = reviewsData.length;
  const averageRating = reviewsData.reduce((sum, review) => sum + review.rating, 0) / totalReviews;
  
  const ratingCounts = {
    5: reviewsData.filter(r => r.rating === 5).length,
    4: reviewsData.filter(r => r.rating === 4).length,
    3: reviewsData.filter(r => r.rating === 3).length,
    2: reviewsData.filter(r => r.rating === 2).length,
    1: reviewsData.filter(r => r.rating === 1).length,
  };
  
  const ratingPercentages = {
    5: (ratingCounts[5] / totalReviews) * 100,
    4: (ratingCounts[4] / totalReviews) * 100,
    3: (ratingCounts[3] / totalReviews) * 100,
    2: (ratingCounts[2] / totalReviews) * 100,
    1: (ratingCounts[1] / totalReviews) * 100,
  };

  return (
    <Layout title="Reviews" subtitle="Analyze player feedback and sentiment">
      <FontLinks />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="font-slab font-medium">Rating Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-slab font-medium text-redbox-purple">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex mt-2">
                  {renderStars(averageRating)}
                </div>
                <p className="text-sm text-muted-foreground mt-2 font-sans font-normal">
                  Based on {totalReviews} reviews
                </p>
              </div>
              
              <div className="flex-1 space-y-2">
                {[5, 4, 3, 2, 1].map(rating => (
                  <div key={rating} className="flex items-center space-x-2">
                    <span className="text-sm font-sans font-normal">{rating} star</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-redbox-purple"
                        style={{ width: `${ratingPercentages[rating]}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground font-sans font-normal">
                      {ratingPercentages[rating].toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-slab font-medium">Review Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-sm font-sans font-medium">Common Positive Themes</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-green-500">Fun gameplay</Badge>
                  <Badge className="bg-green-500">No ads</Badge>
                  <Badge className="bg-green-500">No pay-to-win</Badge>
                  <Badge className="bg-green-500">Skill-based</Badge>
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="text-sm font-sans font-medium">Common Negative Themes</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-red-500">Connection issues</Badge>
                  <Badge className="bg-red-500">Lag/glitches</Badge>
                  <Badge className="bg-red-500">Ranking system</Badge>
                  <Badge className="bg-red-500">Game size</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="font-slab font-medium">Review Explorer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search reviews..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <Select value={filterRating} onValueChange={setFilterRating}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All ratings</SelectItem>
                  <SelectItem value="positive">Positive (4-5★)</SelectItem>
                  <SelectItem value="neutral">Neutral (3★)</SelectItem>
                  <SelectItem value="negative">Negative (1-2★)</SelectItem>
                  <SelectItem value="5star">5 stars</SelectItem>
                  <SelectItem value="4star">4 stars</SelectItem>
                  <SelectItem value="3star">3 stars</SelectItem>
                  <SelectItem value="2star">2 stars</SelectItem>
                  <SelectItem value="1star">1 star</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
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
                        <span className="text-sm text-muted-foreground ml-2 font-sans font-normal">
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