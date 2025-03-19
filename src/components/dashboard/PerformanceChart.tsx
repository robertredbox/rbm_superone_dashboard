import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { cn } from '@/lib/utils';

interface ChartData {
  date: string;
  ios?: number;
  android?: number;
  downloads?: number;
}

interface PerformanceChartProps {
  data: ChartData[];
  timeRange?: string;
  className?: string;
  platformData?: {
    ios: ChartData[];
    android: ChartData[];
    combined: ChartData[];
  };
  onPlatformChange?: (platform: string) => void;
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="glassmorphism p-3 rounded-lg shadow-lg border">
        <p className="text-xs font-medium">{label}</p>
        <div className="mt-2 space-y-1">
          {payload.map((entry, index) => (
            <p key={index} className="text-xs flex items-center">
              <span className={`h-2 w-2 rounded-full ${entry.name === 'ios' ? 'bg-blue-500' : entry.name === 'android' ? 'bg-green-500' : 'bg-redbox-purple'} mr-2`}></span>
              <span className="text-muted-foreground mr-2">
                {entry.name === 'ios' ? 'iOS:' : 
                 entry.name === 'android' ? 'Android:' : 
                 'Downloads:'}
              </span>
              <span className="font-medium">{entry.value}</span>
            </p>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

const PerformanceChart: React.FC<PerformanceChartProps> = ({ 
  data, 
  timeRange = "Last 90 days", 
  className, 
  platformData,
  onPlatformChange 
}) => {
  const [platform, setPlatform] = React.useState<'ios' | 'android' | 'combined'>('combined');
  
  // Handle platform change
  const handlePlatformChange = (newPlatform: 'ios' | 'android' | 'combined') => {
    setPlatform(newPlatform);
    if (onPlatformChange) {
      onPlatformChange(newPlatform);
    }
  };

  return (
    <div className={cn('h-[400px]', className)}>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">{timeRange}</div>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => handlePlatformChange('ios')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                platform === 'ios' ? 'bg-white text-blue-500 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              iOS
            </button>
            <button
              onClick={() => handlePlatformChange('android')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                platform === 'android' ? 'bg-white text-green-500 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Android
            </button>
            <button
              onClick={() => handlePlatformChange('combined')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                platform === 'combined' ? 'bg-white text-purple-500 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Combined
            </button>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: '#e5e7eb' }}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: '#e5e7eb' }}
            domain={['auto', 'auto']}
          />
          <Tooltip content={<CustomTooltip />} />
          {platform === 'combined' ? (
            <>
              <Line
                type="monotone"
                dataKey="ios"
                name="ios"
                stroke="#3b82f6" // blue-500
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
                activeDot={{ r: 6, strokeWidth: 0, fill: '#3b82f6' }}
              />
              <Line
                type="monotone"
                dataKey="android"
                name="android"
                stroke="#22c55e" // green-500
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
                activeDot={{ r: 6, strokeWidth: 0, fill: '#22c55e' }}
              />
            </>
          ) : (
            <Line
              type="monotone"
              dataKey={platform}
              stroke={platform === 'ios' ? '#3b82f6' : '#22c55e'}
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
              activeDot={{ r: 6, strokeWidth: 0, fill: platform === 'ios' ? '#3b82f6' : '#22c55e' }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
