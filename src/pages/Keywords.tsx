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
  
  // Real keywords data from AppTweak
  const trackedKeywords = [
    { 
      id: '1', 
      term: 'squid game', 
      position: 2, 
      change: 1, 
      volume: 60, 
      difficulty: 28,
      chance: 72
    },
    { 
      id: '2', 
      term: 'battle royale', 
      position: 8, 
      change: -2, 
      volume: 48, 
      difficulty: 63,
      chance: 37
    },
    { 
      id: '3', 
      term: 'multiplayer games', 
      position: 11, 
      change: 3, 
      volume: 60, 
      difficulty: 64,
      chance: 36
    },
    { 
      id: '4', 
      term: 'netflix games', 
      position: 4, 
      change: 0, 
      volume: 53, 
      difficulty: 53,
      chance: 47
    },
    { 
      id: '5', 
      term: 'red light green light game', 
      position: 6, 
      change: 2, 
      volume: 35, 
      difficulty: 42,
      chance: 58
    },
    { 
      id: '6', 
      term: 'mobile games', 
      position: 17, 
      change: -1, 
      volume: 70, 
      difficulty: 82,
      chance: 18
    },
    { 
      id: '7', 
      term: 'survival games', 
      position: 9, 
      change: 4, 
      volume: 43, 
      difficulty: 61,
      chance: 39
    },
    { 
      id: '8', 
      term: 'free games', 
      position: 26, 
      change: -3, 
      volume: 75, 
      difficulty: 85,
      chance: 15
    },
    { 
      id: '9', 
      term: 'games like squid game', 
      position: 3, 
      change: 0, 
      volume: 31, 
      difficulty: 25,
      chance: 75
    },
    { 
      id: '10', 
      term: 'dalgona challenge', 
      position: 5, 
      change: 1, 
      volume: 28, 
      difficulty: 30,
      chance: 70
    },
    { 
      id: '11', 
      term: 'glass bridge game', 
      position: 7, 
      change: 2, 
      volume: 26, 
      difficulty: 33,
      chance: 67
    },
    { 
      id: '12', 
      term: 'casual games', 
      position: 31, 
      change: -5, 
      volume: 55, 
      difficulty: 75,
      chance: 25
    },
  ];

  // Filter keywords based on search term
  const filteredKeywords = trackedKeywords.filter(keyword => 
    keyword.term.toLowerCase().includes(searchTerm.toLowerCase())
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

  return (
    <Layout title="Keywords" subtitle="Track and analyze your keyword performance">
      <FontLinks />
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-slab font-medium">Keyword Rankings</h2>
        <TimeSelector onChange={setTimeRange} selectedRange={timeRange} />
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
                    <Badge variant="outline">#{keyword.position}</Badge>
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
                    <Badge className="bg-redbox-purple">{keyword.volume}</Badge>
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
                    <Badge className="bg-green-600">+{keyword.change}</Badge>
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
                  <TableCell colSpan={6} className="text-center font-sans font-normal">
                    No keywords found. Try clearing your search filter.
                  </TableCell>
                </TableRow>
              ) : (
                filteredKeywords.map((keyword) => (
                  <TableRow key={keyword.id}>
                    <TableCell className="font-sans font-normal">{keyword.term}</TableCell>
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
    </Layout>
  );
};

export default Keywords;