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

  // Real reviews from AppTweak
  const reviewsData = [
    {
      id: "12134369583",
      title: "A Few Bugs, But Great Release",
      author: "Chasewintherace",
      date: "2025-01-02T06:20:44Z",
      rating: 5,
      body: "For a game that has just been released it's very fun. The abilities seem to be quite balanced. Of course, there is an aspect of RNG where you can't always win no matter how good you may be, but unlike most other games, it doesn't ruin the fun. There are of course a few bugs when it comes to the servers which is expected upon release. Sometimes the game may not register a jump which can cost you the contest unfortunately. You will visually see your character jump just to be teleported back to where you were and ultimately die. Other than that, I don't see anything wrong with the game! Keep the cosmetic items coming and everyone will be happy."
    },
    {
      id: "12098557739",
      title: "Fun",
      author: "oMickiio",
      date: "2024-12-24T01:52:51Z",
      rating: 5,
      body: "I been playing since the pre-order and the game is very fun but theres a few problems. The movement glitches out when jumping. The item targeting system wont allow you to target certain players at times. And the ranking system seems unfair. When you reach gold if you lose the first game you lose 8 trophies, lose the second game u lose 4 trophies, lose the third you gain 3, win you gain 8. The point system needs to change To -4 on the first round, +0 second round, +4 3rd round +8/+10 For the win. Because as of rn its hard to keep ranking up."
    },
    {
      id: "12299848179",
      title: "Fishing poles",
      author: "Uhhhh......:-|",
      date: "2025-02-11T22:46:40Z",
      rating: 2,
      body: "I have already written 2 reviews and they keep getting taken down so here goes 3, the glitches are annoying and can be pretty game breaking, not a huge deal for me, it's new. The game is a lot of fun, probably one of the best mobile games to release in a long time, no ads, no pay2win, skill based, it's seriously a blast. However, the addition of the fishing pole has completely ruined the fun, people just pull everyone into the finish line almost immediately and it makes the final prize pot very poor at best and kills the suspense of everyone trying to bat people out."
    },
    {
      id: "12171798473",
      title: "Started Great",
      author: "Pretty awesome chicky",
      date: "2025-01-11T16:08:03Z",
      rating: 1,
      body: "I really enjoyed this game to begin with, it's fun to play and I get engulfed by the game. But as I've played, I've had several glitches. My goal has been to get to the Front man rank (level 70), and by the time I joined, I had 7 days to do so. I played non stop the last several days to get to level 50 and now I'm stuck. The biggest issue is the amount of times I will be playing and suddenly it disconnects. Once disconnected, you lose your rank points regardless or what happened. I've even crossed the finish line and then it cuts out and I lose."
    },
    {
      id: "12264470751",
      title: "Fun game! But beware",
      author: "WinImpala67",
      date: "2025-02-03T05:51:34Z",
      rating: 4,
      body: "I try to download it doesn'twork Because it takes too much space and I have these apps like barely anything because I just want to play the game but Ikt doesn't work and also My Friend said it doesn't work for her and I believe her because last time I played it just kept kicking me out of the game. It said I survive zero games and I want to play with my friend because I,I have fun with her but this. Game takes too much spaceAnd kicks me out of the game but I do love this game but please fix it. You're a good creator and I support you, but please fix this"
    },
    {
      id: "12430566122",
      title: "Its good",
      author: "TheNoobSlayer101",
      date: "2025-03-17T09:11:16Z",
      rating: 5,
      body: "This game is ok its better than fall games and stumble guys this is very good since it has no microtransactions which is mostly play to win i understand they have to add more updates to make the game survive but the only problem with the game is the delay/lag and the glitches it has but overall the game design is pretty good a very simple and fun game to get into. This is a good game for the beginners and gamers too who want to find a good decent game now overall pretty good game with no other problems but that."
    },
    {
      id: "12169313113",
      title: "Fun game too many glitches timeouts and disadvantages",
      author: "Mateos playground",
      date: "2025-01-11T01:16:18Z",
      rating: 3,
      body: "Its a fun interaction game but for some reason it glitches out too much. Sometimes it leaves other playing characters floating on my lobby screen. When playing with another person on the party mode either one of the screens wont load as fast or kicks you out or the game will start for one and continue loading for the other. In one occasion my playmate was kicked out to to "photo image error" but when the other game started on the same match his character kept playing as if he was the one playing still."
    },
    {
      id: "12276540333",
      title: "Squid game unleash",
      author: "MFC101",
      date: "2025-02-06T05:58:51Z",
      rating: 1,
      body: "I gave this game the low rating because on my mobile app I get disconnected every 2 to 3 rounds and if the lag gets so crazy you can't even play at all plus the ladder / tier system whatever you wanna call it is terrible. If you can't get to level 50 you're not gonna get to level 70 because the developers need to fix the tier system where if you get to a tier you can't go below it so even though the game is fun I think all these issues make it not fun to play if you're trying to get to the highest tier"
    },
    {
      id: "12203509237",
      title: "Fun but has issues",
      author: "TheJekkle",
      date: "2025-01-19T13:19:21Z",
      rating: 4,
      body: "I've been playing since the game was first released and I think it's very fun to play & I've enjoyed it but lately I haven't been able to advance past rank 25 no matter what. The game will eliminate me even when I have already passed the finish line & it's very frustrating and annoying. I continue to play but I'm hoping this will stop happening so I can finally advance. Other than that…the game is very fun to play."
    },
    {
      id: "12119649151",
      title: "Make game better",
      author: "CEOofMovement",
      date: "2024-12-29T13:34:16Z",
      rating: 4,
      body: "Great game but I have some suggestions: 1) do not make the ranking system easier, if anything, make it harder. We should not be gaining points for not winning. If you make it to last game, unless you place top 3, I believe there should be no gain if you lose. 2) add a leaderboard. Once reaching rank 70 we get surplus trophies, but these mean nothing without a leaderboard. 3) more difficulty. The games are Childs play. 4) fix lag. Idk how to do this one but it feels like half of the players in my games are bots because of how bad they are lagging."
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