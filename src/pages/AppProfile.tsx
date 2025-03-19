// src/pages/AppProfile.tsx
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { StarIcon, Download, Users, Calendar, Tag } from 'lucide-react';

// Font links component to ensure proper font loading
const FontLinks = () => (
  <link 
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" 
    rel="stylesheet" 
  />
);

const AppProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // SuperOne Fan Battle app details
  const appDetails = {
    id: 1455333818,
    title: "SuperOne Fan Battle",
    subtitle: "The Ultimate Trivia Game",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7c/6a/f4/7c6af427-7e3a-623b-0d07-94149ea183da/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/1024x1024bb.jpg",
    developer: {
      name: "SuperOne Limited",
      id: 1455333817
    },
    price: {
      value: "0.00",
      is_free: true,
      currency: "usd"
    },
    size: 219807744, // ~220 MB
    release_date: "2019-03-10T00:00:00.000Z",
    content_rating: "12+",
    genres: [6014, 6000, 7018], // Games, Business, Trivia
    description: "Introducing SuperOne, the ultimate trivia battle! Prove yourself as the ultimate fan while competing for cash prizes in SuperOne's Battle Royale. Will you be the last fan standing? \n\n▶ HOW TO PLAY\n\n• Swipe your way through trivia; right for true and left for false.\n• The faster you answer correctly, the higher your score.\n• If you answer incorrectly four times, you are eliminated.\n• Cash prizes for the last fan standing and the runner-ups in second and third place.\n• With a new game every five minutes, the wait is never long.\n\n▶ FAN ECONOMY\n\nIn a world brimming with over 3 billion football enthusiasts along with billions more fans across various sports and entertainment genres, the absence of a unified platform to engage and monetize this colossal fan base is a blaring void.\n\n• Super.One bridging global fan engagement with financial opportunity via gaming.\n• With its trailblazing gaming and affiliate platform, Super.One is at the cusp of bridging this gap.\n• The aim is to unite millions of fans under a singular gaming experience, converting their enthusiasm into substantial financial opportunities. \n• SuperOne transcends being merely a game; it's a conduit for monetizing passion, assembling fans globally under a unified gameverse.\n\n▶ AFFILIATE \n\n• Super.One introduces an affiliate program designed to incentivize both active and passive engagements. \n• Affiliates can partake in real-time financial benefits through a tiered system of Lootboxes.\n• The platform's currency, Credits, facilitates transactions, and intertwines the gaming and affiliate ecosystems seamlessly.\n\n▶ BONUSES\n\n• The Affiliate Bonuses within the SuperOne platform are categorized into Stakeholder Bonuses and Affiliate Bonuses, catering to both passive and active engagement. \n• Super.One empowers affiliates with dynamic bonuses, igniting active performance and passive gains.\n\nStakeholder Bonuses: Passive Bonuses are earnings derived from holding or acquiring specific assets without the necessity of active engagement or recruitment. \nAffiliate Bonuses: Affiliate bonuses aim to incentivize engagement and performance on the SuperOne platform.\n\n▶ INSTANT PAYOUT\n\n• SuperOne's multi-platform architecture enables an efficient management of asset transactions, purchases, and real- time payments, \n• We offers this while promoting a community-centric environment. \n\nGet in the game!\n\n----------------------------------------------\n\n◆ Visit our Social Media\nhttps://x.com/superonelive\nhttps://www.facebook.com/superonenews\nhttps://medium.com/@superonenews\nhttps://t.me/superonenews\nhttps://www.linkedin.com/company/superonelimited/\n\n◆ Any Suggestions? \nContact us with issues or features suggestions on \"support@super.one\"\n\n◆ Privacy Policy: https://super.one/privacy-policy\n\nSuperOne is the sole sponsor of this contest with no involvement from other entities.\nApple Inc. is not a sponsor of this contest.",
    versions: [
      {
        version: "3.90",
        release_notes: "- Player Token Signup: Improved signup flow for a smoother experience.\n- API Enhancements: Upgraded for better performance.\n- Bug Fixes: Resolved issues for a seamless experience.\n- Performance: Optimised for speed and stability.",
        release_date: "2025-03-17T00:00:00.000Z"
      },
      {
        version: "3.89",
        release_notes: "- New hourly leaderboard to keep the competition exciting.\n- Improved support experience to make getting help easier.\n- Smoother UI and UX with multiple bug fixes.\n- Simpler way to invite others and grow your network effortlessly.",
        release_date: "2025-03-10T00:00:00.000Z"
      },
      {
        version: "3.88",
        release_notes: "Improved leaderboard performance for a smoother experience.\nFixed text rendering issues in certain languages.\nResolved layout and UI glitches in multiple screens.\nGeneral bug fixes and enhancements for better stability.",
        release_date: "2025-02-19T00:00:00.000Z"
      },
      {
        version: "3.87",
        release_notes: "- Leaderboard: Check your rank in the Game History.\n- Game Rewards: Revamped system for better prizes.\n- WhatsApp Signup: No number needed—signup made easy.\n- Arabic Support: Now available in Arabic.\n- Wallet Updates: Add/modify withdrawal wallet.\n- New Visuals: Fresh app icon and splash logo.\n- Game UI: Enhanced GamePass indicator.\n- Game Features: Dynamic prizes, referrals, leaderboard, and more in phases.\n- Performance: Optimized for smoother gameplay.",
        release_date: "2025-01-30T00:00:00.000Z"
      },
      {
        version: "3.86",
        release_notes: "Improvements and Bug fixes.",
        release_date: "2024-04-04T00:00:00.000Z"
      }
    ],
    ratings: {
      current_version: {
        average: 5.0,
        count: 15,
        star_count: {
          "1": 0,
          "2": 0,
          "3": 0,
          "4": 0,
          "5": 15
        }
      }
    },
    rankings: [
      {
        category_id: 7018, // Trivia
        type: "free",
        ranks: [55, 58, 62, 64, 67, 68, 64, 69, 72, 78, 82, 85, 88, 92, 95, 98, 102, 105, 110, 114, 108, 105, 102, 95, 88, 82, 75, 68, 62, 55]
      },
      {
        category_id: 6014, // Games
        type: "free",
        ranks: [188, 192, 195, 198, 200, 205, 208, 212, 215, 218, 220, 222, 218, 215, 210, 205, 200, 195, 190, 185, 180, 175, 170, 165, 160, 155, 150, 145, 140, 135]
      },
      {
        category_id: 6000, // Business
        type: "free",
        ranks: [120, 118, 115, 112, 110, 108, 105, 102, 100, 98, 95, 92, 90, 88, 85, 82, 80, 78, 75, 72, 70, 68, 65, 62, 60, 58, 55, 52, 50, 48]
      }
    ],
    reviews: [
      {
        title: "A Few Bugs, But Great Release",
        author: "Chasewintherace",
        date: "2025-01-02T06:20:44Z",
        rating: 5,
        body: "For a game that has just been released it's very fun. The abilities seem to be quite balanced. Of course, there is an aspect of RNG where you can't always win no matter how good you may be, but unlike most other games, it doesn't ruin the fun. There are of course a few bugs when it comes to the servers which is expected upon release. Sometimes the game may not register a jump which can cost you the contest unfortunately. You will visually see your character jump just to be teleported back to where you were and ultimately die. Other than that, I don't see anything wrong with the game! Keep the cosmetic items coming and everyone will be happy."
      },
      {
        title: "Fun",
        author: "oMickiio",
        date: "2024-12-24T01:52:51Z",
        rating: 5,
        body: "I been playing since the pre-order and the game is very fun but theres a few problems. The movement glitches out when jumping. The item targeting system wont allow you to target certain players at times. And the ranking system seems unfair. When you reach gold if you lose the first game you lose 8 trophies, lose the second game u lose 4 trophies, lose the third you gain 3, win you gain 8. The point system needs to change To -4 on the first round, +0 second round, +4 3rd round +8/+10 For the win. Because as of rn its hard to keep ranking up."
      },
      {
        title: "Fishing poles",
        author: "Uhhhh......:-|",
        date: "2025-02-11T22:46:40Z",
        rating: 2,
        body: "I have already written 2 reviews and they keep getting taken down so here goes 3, the glitches are annoying and can be pretty game breaking, not a huge deal for me, it's new. The game is a lot of fun, probably one of the best mobile games to release in a long time, no ads, no pay2win, skill based, it's seriously a blast. However, the addition of the fishing pole has completely ruined the fun, people just pull everyone into the finish line almost immediately and it makes the final prize pot very poor at best and kills the suspense of everyone trying to bat people out."
      }
    ]
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  // Format ratings into stars
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon 
        key={index} 
        className={`h-5 w-5 ${
          index < Math.floor(rating) 
            ? 'text-yellow-400 fill-yellow-400' 
            : index < rating 
              ? 'text-yellow-400 fill-yellow-400 opacity-50' 
              : 'text-gray-300'
        }`} 
      />
    ));
  };

  // Find overall ranking in specific categories
  const gamesRanking = appDetails.rankings.find(r => r.category_id === 6014)?.ranks.slice(-1)[0] || 'N/A';
  const actionRanking = appDetails.rankings.find(r => r.category_id === 7001)?.ranks.slice(-1)[0] || 'N/A';
  const arcadeRanking = appDetails.rankings.find(r => r.category_id === 7003)?.ranks.slice(-1)[0] || 'N/A';

  return (
    <Layout 
      title="App Profile" 
      subtitle="View detailed information about your app"
    >
      <FontLinks />
      <div className="flex flex-col space-y-6">
        {/* App Header */}
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 p-6 bg-card rounded-lg border border-border">
          <img 
            src={appDetails.icon} 
            alt={appDetails.title} 
            className="h-24 w-24 rounded-lg" 
          />
          <div className="space-y-2">
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
              <h2 className="text-2xl font-slab font-medium">{appDetails.title}</h2>
              <Badge variant="outline">{appDetails.price.is_free ? 'Free' : appDetails.price.value}</Badge>
            </div>
            <p className="text-muted-foreground font-sans font-normal">{appDetails.subtitle}</p>
            <div className="flex items-center space-x-1">
              {renderStars(appDetails.ratings.current_version.average)}
              <span className="text-sm text-muted-foreground ml-2 font-sans font-normal">
                ({appDetails.ratings.current_version.count.toLocaleString()} ratings)
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-sans font-normal">
              Developer: {appDetails.developer.name}
            </p>
          </div>
        </div>

        {/* App Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-slab font-medium">Overall Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-slab font-medium text-redbox-purple">
                  {appDetails.ratings.current_version.average.toFixed(1)}
                </div>
                <div className="flex mt-2">
                  {renderStars(appDetails.ratings.current_version.average)}
                </div>
                <p className="text-sm text-muted-foreground mt-2 font-sans font-normal">
                  out of 5 stars
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-slab font-medium">Rankings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-sans font-normal">Games</span>
                  <Badge variant="outline">
                    #{gamesRanking}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-sans font-normal">Action</span>
                  <Badge variant="outline">
                    #{actionRanking}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-sans font-normal">Arcade</span>
                  <Badge variant="outline">
                    #{arcadeRanking}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-slab font-medium">App Info</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-sans font-normal">
                    Released: {formatDate(appDetails.release_date)}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-sans font-normal">
                    Version: {appDetails.versions[0].version}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Download className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-sans font-normal">
                    Size: {(appDetails.size / 1024 / 1024 / 1024).toFixed(1)} GB
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-slab font-medium">Rating Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(appDetails.ratings.current_version.star_count)
                  .sort((a, b) => Number(b[0]) - Number(a[0]))
                  .map(([stars, count]) => (
                    <div key={stars} className="flex items-center space-x-2">
                      <span className="text-sm font-sans font-normal">{stars} stars</span>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-redbox-purple"
                          style={{ 
                            width: `${(count / appDetails.ratings.current_version.count) * 100}%` 
                          }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground font-sans font-normal">
                        {((count / appDetails.ratings.current_version.count) * 100).toFixed(1)}%
                      </span>
                    </div>
                  ))
                }
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Content */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="font-slab font-medium">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-slab font-medium mb-4">App Overview</h3>
                <div className="space-y-4 font-sans font-normal">
                  <p>
                    {appDetails.subtitle}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-slab font-medium">Genres</h4>
                      <div className="flex flex-wrap gap-2">
                        {appDetails.genres.map(genre => (
                          <Badge key={genre} variant="secondary">
                            {
                              genre === 6014 ? 'Games' :
                              genre === 7001 ? 'Action' :
                              genre === 7003 ? 'Arcade' :
                              genre === 6016 ? 'Entertainment' :
                              `Genre ${genre}`
                            }
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-slab font-medium">Content Rating</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">
                          {appDetails.content_rating}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-slab font-medium mb-2">First Released</h4>
                    <p>{formatDate(appDetails.release_date)}</p>
                  </div>
                  <div>
                    <h4 className="font-slab font-medium mb-2">Latest Update</h4>
                    <p>{formatDate(appDetails.versions[0].release_date)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-slab font-medium mb-4">App Description</h3>
                <div className="space-y-4 font-sans font-normal whitespace-pre-line">
                  {appDetails.description}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-slab font-medium mb-4">Recent Reviews</h3>
                <div className="space-y-4">
                  {appDetails.reviews.map((review, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-slab font-medium">{review.title}</h4>
                          <div className="flex items-center mt-1">
                            {renderStars(review.rating)}
                            <span className="text-sm text-muted-foreground ml-2 font-sans font-normal">
                              {new Date(review.date).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <Badge>{review.author}</Badge>
                      </div>
                      <p className="text-sm font-sans font-normal">{review.body}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="updates" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-slab font-medium mb-4">Version History</h3>
                <div className="space-y-6">
                  {appDetails.versions.map((version, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-slab font-medium">Version {version.version}</h4>
                        <Badge variant="outline">{formatDate(version.release_date)}</Badge>
                      </div>
                      <p className="text-sm whitespace-pre-line font-sans font-normal">
                        {version.release_notes || 'No release notes available.'}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AppProfile;