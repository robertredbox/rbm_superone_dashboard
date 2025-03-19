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
  
  // Real app details from AppTweak
  const appDetails = {
    id: 6498719476,
    title: "Squid Game: Unleashed",
    subtitle: "Multiplayer Battle Royale Fun",
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ae/0b/33/ae0b3341-fee7-b756-59e6-0ed43c2c3914/GiHunGrid1-0-0-1x_U007emarketing-0-7-0-85-220.png/1024x1024bb.jpg",
    developer: {
      name: "Netflix, Inc.",
      id: 363590054
    },
    price: {
      value: "0.00",
      is_free: true,
      currency: "usd"
    },
    size: 1889872896, // ~1.9 GB
    release_date: "2024-12-17T00:00:00.000Z",
    content_rating: "12+",
    genres: [6014, 7001, 7003], // Games, Action, Arcade
    description: "NO NETFLIX MEMBERSHIP REQUIRED.\n\nYou win some, you die some. Use skill and killer instinct to survive twisted competitions in this multiplayer action game inspired by the hit series.\n\nPrepare for fast, heart-pounding action and brutal competition in this multiplayer battle royale game. Play with friends (or enemies) online and see if you have what it takes to outlast and defeat all the other contestants in each twisted tournament. \n\nWith deadly challenges you'll recognize from \"Squid Game,\" the series, and more new games inspired by classic childhood activities, each round is a dark trip down memory lane. Can you make it through playtime alive?\n\nBRING \"SQUID GAME\" TO LIFE\n\n• Find out how long you'd survive as a \"Squid Game\" contestant by playing Red Light, Green Light or Glass Bridge, plus more iconic games from the series. \n\n• One wrong move in the arena, and you'll die a death even more twisted than the show's most brutal on-screen moments.\n\n• Choose the perfect character and express yourself in this online battle royale with a huge range of outfits, animations and emoji.\n\nNO-MERCY MULTIPLAYER MAYHEM\n \n• Play with your friends and team up against online opponents in each 32-player tournament — but always be prepared for betrayal.\n\n• Pick up weapons and power-up boosts to gain a crucial competitive edge in this brutal battle royale.\n\n• Die early, but want to see who survives? Spectator mode lets your ghostly presence stay and watch the chaos unfold.\n\nTHE ONLY WAY OUT IS UP\n\n• As you compete in multiplayer contests and complete missions, you'll advance to higher tiers and unlock new, more advanced games to play.\n\n• Cash in hard-won (virtual) prize money to collect new skins and more rewards that will let you strut your stuff in the arena.\n\nDIE ANYTIME, ANYWHERE\n\n• Whether you're a party royale pro, a \"Squid Game\" superfan or just looking for something fun to play with your friends, this action showdown is easy to enjoy in quick snippets on mobile.\n\n• Fast online multiplayer matchmaking brings you into each round of the battle royale in seconds.\n\n• Keep your survival skills sharp with unique weekly events inspired by whatever's new in the \"Squid Game\" universe.\n\n- Created by Boss Fight, a Netflix Game Studio.",
    versions: [
      {
        version: "0.0.8743",
        release_notes: "Fresh content updates! Netflix members can try out an exciting new gameplay experience.",
        release_date: "2025-03-07T00:00:00.000Z"
      },
      {
        version: "0.0.8489",
        release_notes: "Fresh content updates! Netflix members can try out an exciting new gameplay experience.",
        release_date: "2025-02-25T00:00:00.000Z"
      },
      {
        version: "0.0.8316",
        release_notes: "We've squashed bugs and made behind-the-scenes improvements to bring Netflix members the best possible gameplay experience.",
        release_date: "2025-02-08T00:00:00.000Z"
      },
      {
        version: "0.0.8247",
        release_notes: "Fresh content updates! Netflix members can try out an exciting new gameplay experience.",
        release_date: "2025-02-06T00:00:00.000Z"
      },
      {
        version: "0.0.8028",
        release_notes: "We've squashed bugs and made behind-the-scenes improvements to bring Netflix members the best possible gameplay experience.",
        release_date: "2025-01-21T00:00:00.000Z"
      }
    ],
    ratings: {
      current_version: {
        average: 4.812,
        count: 27035,
        star_count: {
          "1": 598,
          "2": 151,
          "3": 364,
          "4": 1497,
          "5": 24425
        }
      }
    },
    rankings: [
      {
        category_id: 7003, // Arcade
        type: "free",
        ranks: [61, 82, 95, 98, 101, 107, 96, 114, 157, 175, 186, 178, 168, 153, 161, 174, 200, 190, 188, 203, 135, 163, 222, 247, 254, 256, 263, 277, 278, 311]
      },
      {
        category_id: 6014, // Games
        type: "free",
        ranks: [133, 182, 223, 245, 246, 255, 232, 272, 363, 415, 427, 418, 375, 350, 366, 408, 481, 459, 459, 491, 327, 393]
      },
      {
        category_id: 7001, // Action
        type: "free",
        ranks: [25, 27, 34, 35, 41, 41, 39, 47, 61, 67, 70, 70, 67, 62, 66, 70, 84, 81, 85, 97, 61, 74, 94, 114, 117, 112, 117, 116, 112, 134]
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