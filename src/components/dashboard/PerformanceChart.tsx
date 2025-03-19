import React from 'react';
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
              <span className={`h-2 w-2 rounded-full ${entry.name === 'iosDownloads' ? 'bg-blue-500' : entry.name === 'androidDownloads' ? 'bg-green-500' : 'bg-redbox-purple'} mr-2`}></span>
              <span className="text-muted-foreground mr-2">
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

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data, timeRange, className, platformData }) => {
  const [platform, setPlatform] = React.useState<'ios' | 'android' | 'combined'>('combined');
  
  // Use the appropriate data based on selected platform
  const displayData = platformData ? platformData[platform] : data;

  return (
    <div className={cn('aso-card p-6 h-[400px]', className)}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-slab font-bold">Download Trends</h3>
        <div className="flex items-center gap-4">
          {platformData && (
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setPlatform('ios')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  platform === 'ios' ? 'bg-white text-blue-500 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                iOS
              </button>
              <button
                onClick={() => setPlatform('android')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  platform === 'android' ? 'bg-white text-green-500 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Android
              </button>
              <button
                onClick={() => setPlatform('combined')}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  platform === 'combined' ? 'bg-white text-redbox-purple shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Combined
              </button>
            </div>
          )}
          <div className="text-sm text-muted-foreground">{timeRange}</div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={displayData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
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
            domain={['dataMin - 10', 'dataMax + 20']}
          />
          <Tooltip content={<CustomTooltip />} />
          {platform === 'combined' && platformData ? (
            <>
              <Line
                type="monotone"
                dataKey="iosDownloads"
                name="iosDownloads"
                stroke="#3b82f6" // blue-500
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
                activeDot={{ r: 6, strokeWidth: 0, fill: '#3b82f6' }}
              />
              <Line
                type="monotone"
                dataKey="androidDownloads"
                name="androidDownloads"
                stroke="#22c55e" // green-500
                strokeWidth={2}
                dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
                activeDot={{ r: 6, strokeWidth: 0, fill: '#22c55e' }}
              />
            </>
          ) : (
            <Line
              type="monotone"
              dataKey={platform === 'ios' ? 'iosDownloads' : platform === 'android' ? 'androidDownloads' : 'downloads'}
              stroke={platform === 'ios' ? '#3b82f6' : platform === 'android' ? '#22c55e' : '#8200FF'}
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
              activeDot={{ r: 6, strokeWidth: 0, fill: platform === 'ios' ? '#3b82f6' : platform === 'android' ? '#22c55e' : '#8200FF' }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
