// src/pages/Keywords.tsx
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import TimeSelector from '@/components/dashboard/TimeSelector';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

// Font links component to ensure proper font loading
const FontLinks = () => (
  <link 
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Roboto+Slab:wght@500&display=swap" 
    rel="stylesheet" 
  />
);

const Keywords = () => {
  const [timeRange, setTimeRange] = useState<string>('30d');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [platform, setPlatform] = useState<string>('all');
  
  // SuperOne keywords data based on analysis
  const trackedKeywords = [
    { 
      id: '1', 
      term: 'dibz', 
      position: 6, 
      change: 2, 
      volume: 22, 
      difficulty: 2,
      chance: 98,
      platform: 'ios'
    },
    { 
      id: '2', 
      term: 'the 1 club game', 
      position: 50, 
      change: 4, 
      volume: 30, 
      difficulty: 32,
      chance: 68,
      platform: 'ios'
    },
    { 
      id: '3', 
      term: 'footy addicts', 
      position: 67, 
      change: -3, 
      volume: 38, 
      difficulty: 20,
      chance: 80,
      platform: 'ios'
    },
    { 
      id: '4', 
      term: 'the1 club', 
      position: 86, 
      change: 5, 
      volume: 17, 
      difficulty: 41,
      chance: 59,
      platform: 'ios'
    },
    { 
      id: '5', 
      term: 'super soccer', 
      position: 88, 
      change: -2, 
      volume: 18, 
      difficulty: 65,
      chance: 35,
      platform: 'ios'
    },
    { 
      id: '6', 
      term: 'the 1 club', 
      position: 92, 
      change: 3, 
      volume: 49, 
      difficulty: 43,
      chance: 57,
      platform: 'ios'
    },
    { 
      id: '7', 
      term: 'tiki', 
      position: 94, 
      change: -5, 
      volume: 15, 
      difficulty: 27,
      chance: 73,
      platform: 'ios'
    },
    { 
      id: '8', 
      term: 'guess the football player', 
      position: 31, 
      change: 8, 
      volume: 22, 
      difficulty: 14,
      chance: 86,
      platform: 'ios'
    },
    { 
      id: '9', 
      term: 'football quiz', 
      position: 103, 
      change: 12, 
      volume: 58, 
      difficulty: 45,
      chance: 55,
      platform: 'ios'
    },
    { 
      id: '10', 
      term: 'football trivia', 
      position: 98, 
      change: 15, 
      volume: 52, 
      difficulty: 38,
      chance: 62,
      platform: 'ios'
    },
    { 
      id: '11', 
      term: 'footy brains', 
      position: 76, 
      change: 6, 
      volume: 25, 
      difficulty: 18,
      chance: 82,
      platform: 'ios'
    },
    { 
      id: '12', 
      term: 'fan battle', 
      position: 43, 
      change: 7, 
      volume: 15, 
      difficulty: 12,
      chance: 88,
      platform: 'ios'
    },
    { 
      id: '13', 
      term: 'supering', 
      position: 32, 
      change: 0, 
      volume: 9, 
      difficulty: 1,
      chance: 99,
      platform: 'android'
    },
    { 
      id: '14', 
      term: 'superone', 
      position: 1, 
      change: 0, 
      volume: 8, 
      difficulty: 5,
      chance: 95,
      platform: 'both'
    },
    { 
      id: '15', 
      term: 'guess the football player', 
      position: 45, 
      change: 10, 
      volume: 19, 
      difficulty: 1,
      chance: 99,
      platform: 'android'
    },
    { 
      id: '16', 
      term: 'football quiz', 
      position: 112, 
      change: 22, 
      volume: 45, 
      difficulty: 35,
      chance: 65,
      platform: 'android'
    },
    { 
      id: '17', 
      term: 'football trivia game', 
      position: 135, 
      change: 18, 
      volume: 38, 
      difficulty: 25,
      chance: 75,
      platform: 'android'
    },
    { 
      id: '18', 
      term: 'footy quiz', 
      position: 108, 
      change: 15, 
      volume: 26, 
      difficulty: 18,
      chance: 82,
      platform: 'android'
    },
    { 
      id: '19', 
      term: 'true false quiz game', 
      position: 56, 
      change: 12, 
      volume: 24, 
      difficulty: 28,
      chance: 72,
      platform: 'both'
    },
    { 
      id: '20', 
      term: 'cash rewards trivia', 
      position: 75, 
      change: 8, 
      volume: 33, 
      difficulty: 32,
      chance: 68,
      platform: 'both'
    },
    { 
      id: '21', 
      term: 'affiliate program games', 
      position: 28, 
      change: 14, 
      volume: 17, 
      difficulty: 22,
      chance: 78,
      platform: 'both'
    },
    { 
      id: '22', 
      term: 'trivia battle', 
      position: 65, 
      change: 9, 
      volume: 28, 
      difficulty: 30,
      chance: 70,
      platform: 'both'
    },
    { 
      id: '23', 
      term: 'swipe trivia game', 
      position: 42, 
      change: 11, 
      volume: 15, 
      difficulty: 8,
      chance: 92,
      platform: 'both'
    },
    { 
      id: '24', 
      term: 'the ultimate trivia game', 
      position: 37, 
      change: 6, 
      volume: 22, 
      difficulty: 26,
      chance: 74,
      platform: 'both'
    },
  ];

  // Filter keywords based on search term and platform
  const filteredKeywords = trackedKeywords.filter(keyword => 
    keyword.term.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (platform === 'all' || keyword.platform === platform || keyword.platform === 'both')
  );

  // Format the time range for display
  const getTimeRangeDisplay = () => {
    switch (timeRange) {
      case '7d': return 'Last 7 days';
      case '30d': return 'Last 30 days';
      case '90d': return 'Last 90 days';
      case '1y': return 'Last year';
      default: return 'Last 30 days';
    }
  };

  // Get trend icon based on change value
  const getTrendIcon = (change: number) => {
    if (change > 0) return <ArrowUpRight className="h-4 w-4 text-green-500" />;
    if (change < 0) return <ArrowDownRight className="h-4 w-4 text-red-500" />;
    return <Minus className="h-4 w-4 text-gray-500" />;
  };

  // Get difficulty color based on value
  const getDifficultyColor = (difficulty: number) => {
    if (difficulty >= 80) return 'bg-red-100 text-red-800';
    if (difficulty >= 60) return 'bg-orange-100 text-orange-800';
    if (difficulty >= 40) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  // Get platform display text
  const getPlatformDisplay = (platform: string) => {
    switch (platform) {
      case 'ios': return 'iOS';
      case 'android': return 'Android';
      case 'both': return 'iOS & Android';
      default: return '';
    }
  };

  return (
    <Layout title="Keywords" subtitle="Track and analyze your keyword performance">
      <FontLinks />
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-slab font-medium">SuperOne Fan Battle Keywords</h2>
        <div className="flex gap-4">
          <select 
            className="rounded-md border p-2 text-sm" 
            value={platform} 
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="all">All Platforms</option>
            <option value="ios">iOS</option>
            <option value="android">Android</option>
            <option value="both">Cross-Platform</option>
          </select>
          <TimeSelector onChange={setTimeRange} selectedRange={timeRange} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-slab font-medium">Top 5 Keywords</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {filteredKeywords
                .sort((a, b) => a.position - b.position)
                .slice(0, 5)
                .map((keyword, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm font-sans font-normal">{keyword.term}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{getPlatformDisplay(keyword.platform)}</span>
                      <Badge variant="outline">#{keyword.position}</Badge>
                    </div>
                  </div>
                ))
              }
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-slab font-medium">Keyword Volume Leaders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {filteredKeywords
                .sort((a, b) => b.volume - a.volume)
                .slice(0, 5)
                .map((keyword, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm font-sans font-normal">{keyword.term}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{getPlatformDisplay(keyword.platform)}</span>
                      <Badge className="bg-redbox-purple">{keyword.volume}</Badge>
                    </div>
                  </div>
                ))
              }
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-slab font-medium">Recent Improvements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {filteredKeywords
                .filter(k => k.change > 0)
                .sort((a, b) => b.change - a.change)
                .slice(0, 5)
                .map((keyword, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm font-sans font-normal">{keyword.term}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{getPlatformDisplay(keyword.platform)}</span>
                      <Badge className="bg-green-600">+{keyword.change}</Badge>
                    </div>
                  </div>
                ))
              }
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search keywords..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button 
            variant="outline" 
            size="icon"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-slab font-medium">Keyword</TableHead>
                <TableHead className="text-center font-slab font-medium">Platform</TableHead>
                <TableHead className="text-right font-slab font-medium">Position</TableHead>
                <TableHead className="text-right font-slab font-medium">Change</TableHead>
                <TableHead className="text-right font-slab font-medium">Volume</TableHead>
                <TableHead className="text-right font-slab font-medium">Difficulty</TableHead>
                <TableHead className="text-right font-slab font-medium">Opportunity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredKeywords.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center font-sans font-normal">
                    No keywords found. Try clearing your search filter.
                  </TableCell>
                </TableRow>
              ) : (
                filteredKeywords.map((keyword) => (
                  <TableRow key={keyword.id}>
                    <TableCell className="font-sans font-normal">{keyword.term}</TableCell>
                    <TableCell className="text-center font-sans font-normal">
                      {getPlatformDisplay(keyword.platform)}
                    </TableCell>
                    <TableCell className="text-right font-sans font-normal">
                      {keyword.position !== null ? `#${keyword.position}` : 'N/A'}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-1">
                        {getTrendIcon(keyword.change)}
                        <span className={`font-sans font-normal ${
                          keyword.change > 0 
                            ? 'text-green-500' 
                            : keyword.change < 0 
                              ? 'text-red-500' 
                              : 'text-gray-500'
                        }`}>
                          {keyword.change > 0 ? `+${keyword.change}` : keyword.change}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-sans font-normal">{keyword.volume}</TableCell>
                    <TableCell className="text-right">
                      <Badge className={getDifficultyColor(keyword.difficulty)}>
                        {keyword.difficulty}/100
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-sans font-normal">
                      {keyword.chance}%
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </Card>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-slab font-medium">iOS Keyword Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Focus on football-related terms with low difficulty</li>
              <li>• Improve rankings for "the 1 club" (Volume: 49)</li>
              <li>• Capitalize on "guess the football player" ranking (#31)</li>
              <li>• Add more specific football trivia keywords</li>
              <li>• Leverage position for "dibz" (Ranking #6)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-slab font-medium">Android Keyword Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li>• Complete keyword overhaul needed with only 1 ranking term</li>
              <li>• Target "guess the football player" (Difficulty: 1)</li>
              <li>• Implement successful iOS keywords</li>
              <li>• Consider changing category from "BUSINESS" to "GAMES"</li>
              <li>• Focus on football quiz and trivia terms specifically</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Keywords;