import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface TimeSelectorProps {
  onChange: (range: string) => void;
  selectedRange: string;
  className?: string;
  customRanges?: { value: string; label: string }[];
}

const TimeSelector: React.FC<TimeSelectorProps> = ({ 
  onChange, 
  selectedRange, 
  className,
  customRanges 
}) => {
  const defaultTimeRanges = [
    { value: '7d', label: 'Last 7 days' },
    { value: '30d', label: 'Last 30 days' },
    { value: '90d', label: 'Last 90 days' },
  ];

  const timeRanges = customRanges || defaultTimeRanges;

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <div className="hidden sm:flex items-center space-x-2">
        {timeRanges.map((range) => (
          <Button
            key={range.value}
            variant={selectedRange === range.value ? 'default' : 'outline'}
            size="sm"
            onClick={() => onChange(range.value)}
            className={cn(
              selectedRange === range.value ? 'bg-redbox-purple text-white' : '',
              'px-3 py-1 h-8'
            )}
          >
            {range.label}
          </Button>
        ))}
      </div>
      <div className="sm:hidden">
        <Select value={selectedRange} onValueChange={onChange}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            {timeRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default TimeSelector;
