
import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  trend = 'neutral',
  description,
  icon,
  className,
}) => {
  return (
    <div className={cn('aso-card p-6 animate-fade-in-up', className)}>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className="mt-1 flex items-baseline space-x-2">
            <p className="aso-stats-value">{value}</p>
            {change !== undefined && (
              <span
                className={cn(
                  'inline-flex items-center space-x-1',
                  trend === 'up' ? 'aso-trend-up' : trend === 'down' ? 'aso-trend-down' : 'aso-trend-neutral'
                )}
              >
                {trend === 'up' ? (
                  <TrendingUp className="h-3 w-3" />
                ) : trend === 'down' ? (
                  <TrendingDown className="h-3 w-3" />
                ) : (
                  <Minus className="h-3 w-3" />
                )}
                <span>{change > 0 ? `+${change}%` : `${change}%`}</span>
              </span>
            )}
          </div>
        </div>
        {icon && <div className="rounded-md bg-redbox-light-grey p-2">{icon}</div>}
      </div>
      {description && <p className="mt-2 text-xs text-muted-foreground">{description}</p>}
    </div>
  );
};

export default MetricCard;
