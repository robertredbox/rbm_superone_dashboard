
import React from 'react';
import { Star, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Competitor {
  id: string;
  name: string;
  icon: string;
  ranking: number;
  change: number;
  rating: number;
}

interface CompetitorCardProps {
  competitor: Competitor;
  className?: string;
}

const CompetitorCard: React.FC<CompetitorCardProps> = ({ competitor, className }) => {
  return (
    <div className={cn('aso-card p-4 flex items-center space-x-4', className)}>
      <div className="flex-shrink-0 h-12 w-12 rounded-xl overflow-hidden border border-border">
        <img src={competitor.icon} alt={competitor.name} className="h-full w-full object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{competitor.name}</p>
        <div className="mt-1 flex items-center">
          <div className="flex items-center">
            <Star className="h-3 w-3 text-redbox-orange fill-redbox-orange" />
            <span className="ml-1 text-xs">{competitor.rating.toFixed(1)}</span>
          </div>
          <span className="mx-2 text-muted-foreground">•</span>
          <div className="flex items-center">
            <span className="text-xs text-muted-foreground">Rank:</span>
            <span className="ml-1 text-xs font-medium">#{competitor.ranking}</span>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0">
        {competitor.change > 0 ? (
          <span className="aso-trend-up inline-flex items-center space-x-1">
            <TrendingUp className="h-3 w-3" />
            <span>+{competitor.change}</span>
          </span>
        ) : competitor.change < 0 ? (
          <span className="aso-trend-down inline-flex items-center space-x-1">
            <TrendingDown className="h-3 w-3" />
            <span>{competitor.change}</span>
          </span>
        ) : (
          <span className="aso-trend-neutral inline-flex items-center space-x-1">
            <Minus className="h-3 w-3" />
            <span>0</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default CompetitorCard;
