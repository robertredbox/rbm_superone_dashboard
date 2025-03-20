import React, { useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { cn } from '@/lib/utils';

interface ChartData {
  date: string;
  iosDownloads?: number;
  androidDownloads?: number;
  downloads?: number;
}

interface PerformanceChartProps {
  data: ChartData[];
  timeRange: string;
  className?: string;
  platformData?: {
    ios: ChartData[];
    android: ChartData[];
    combined: ChartData[];
  };
  selectedPlatform?: 'ios' | 'android' | 'combined';
  onPlatformChange?: (platform: 'ios' | 'android' | 'combined') => void;
}

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
        <p className="text-xs font-medium">{label}</p>
        <div className="mt-2 space-y-1">
          {payload.map((entry, index) => (
            <p key={index} className="text-xs flex items-center">
              <span 
                className="h-2 w-2 rounded-full mr-2" 
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className="text-gray-600 mr-2">
                {entry.name === 'iosDownloads' ? 'iOS:' : 
                 entry.name === 'androidDownloads' ? 'Android:' : 
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
  timeRange, 
  className, 
  platformData, 
  selectedPlatform = 'combined',
  onPlatformChange 
}) => {
  // If not controlled externally, use local state
  const [localPlatform, setLocalPlatform] = React.useState<'ios' | 'android' | 'combined'>('combined');
  
  // Use the appropriate platform based on whether we're controlled externally
  const platform = onPlatformChange ? selectedPlatform : localPlatform;
  
  // Handle platform changes
  const handlePlatformChange = (newPlatform: 'ios' | 'android' | 'combined') => {
    if (onPlatformChange) {
      onPlatformChange(newPlatform);
    } else {
      setLocalPlatform(newPlatform);
    }
  };
  
  // Simplified display data preparation - ensure we have a valid array
  const displayData = React.useMemo(() => {
    if (!platformData) return data || [];
    return platformData[platform] || [];
  }, [platform, platformData, data]);

  // Debug to console
  useEffect(() => {
    console.log('Current platform:', platform);
    console.log('Display data:', displayData);
  }, [platform, displayData]);

  return (
    <div className={cn('border rounded-lg bg-white p-6', className)} style={{ minHeight: '400px' }}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Download Trends</h3>
        <div className="flex items-center gap-4">
          {platformData && (
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
          )}
          <div className="text-sm text-gray-500">{timeRange}</div>
        </div>
      </div>
      
      <div style={{ width: '100%', height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={displayData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
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
            />
            <Tooltip content={<CustomTooltip />} />
            
            {platform === 'ios' && (
              <Line
                name="iosDownloads"
                type="monotone"
                dataKey="iosDownloads"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
                activeDot={{ r: 6, strokeWidth: 0, fill: '#3b82f6' }}
              />
            )}
            
            {platform === 'android' && (
              <Line
                name="androidDownloads"
                type="monotone"
                dataKey="androidDownloads"
                stroke="#22c55e"
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
                activeDot={{ r: 6, strokeWidth: 0, fill: '#22c55e' }}
              />
            )}
            
            {platform === 'combined' && (
              <Line
                name="downloads"
                type="monotone"
                dataKey="downloads"
                stroke="#8200FF"
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
                activeDot={{ r: 6, strokeWidth: 0, fill: '#8200FF' }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
