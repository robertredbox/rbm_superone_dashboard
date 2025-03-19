
import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Keyword {
  id: string;
  term: string;
  position: number;
  change: number;
  volume: number;
  difficulty: number;
}

interface KeywordsTableProps {
  keywords: Keyword[];
  className?: string;
}

const KeywordsTable: React.FC<KeywordsTableProps> = ({ keywords, className }) => {
  return (
    <div className={cn('aso-card overflow-hidden', className)}>
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-slab font-bold">Top Keywords</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/30 border-b border-border">
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Keyword
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Position
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Change
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Volume
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Difficulty
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {keywords.map((keyword) => (
              <tr key={keyword.id} className="hover:bg-muted/20 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium">{keyword.term}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">{keyword.position}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {keyword.change > 0 ? (
                      <span className="aso-trend-up inline-flex items-center space-x-1">
                        <TrendingUp className="h-3 w-3" />
                        <span>+{keyword.change}</span>
                      </span>
                    ) : keyword.change < 0 ? (
                      <span className="aso-trend-down inline-flex items-center space-x-1">
                        <TrendingDown className="h-3 w-3" />
                        <span>{keyword.change}</span>
                      </span>
                    ) : (
                      <span className="aso-trend-neutral inline-flex items-center space-x-1">
                        <Minus className="h-3 w-3" />
                        <span>0</span>
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-redbox-purple h-1.5 rounded-full"
                        style={{ width: `${Math.min(100, keyword.volume / 10)}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs">{keyword.volume}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className={cn(
                          "h-1.5 rounded-full",
                          keyword.difficulty > 70 ? "bg-redbox-red" : 
                          keyword.difficulty > 40 ? "bg-redbox-orange" : "bg-green-500"
                        )}
                        style={{ width: `${keyword.difficulty}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs">{keyword.difficulty}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default KeywordsTable;
