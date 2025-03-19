import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, TooltipProps } from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';
import { cn } from '@/lib/utils';

interface ChartData {
  date: string;
  downloads: number;
}

interface PerformanceChartProps {
  data: ChartData[];
  timeRange: string;
  className?: string;
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
          <p className="text-xs flex items-center">
            <span className="h-2 w-2 rounded-full bg-redbox-purple mr-2"></span>
            <span className="text-muted-foreground mr-2">Downloads:</span>
            <span className="font-medium">{payload[0].value}</span>
          </p>
        </div>
      </div>
    );
  }

  return null;
};

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data, timeRange, className }) => {
  return (
    <div className={cn('aso-card p-6 h-[400px]', className)}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-slab font-bold">Download Trends</h3>
        <div className="text-sm text-muted-foreground">{timeRange}</div>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={data}
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
          <Line
            type="monotone"
            dataKey="downloads"
            stroke="#8200FF"
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2, fill: 'white' }}
            activeDot={{ r: 6, strokeWidth: 0, fill: '#8200FF' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;
