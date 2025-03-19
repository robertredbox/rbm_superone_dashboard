import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { cn } from '@/lib/utils';

interface SentimentData {
  name: string;
  value: number;
  color: string;
}

interface SentimentChartProps {
  data?: SentimentData[];
  className?: string;
}

const SentimentChart: React.FC<SentimentChartProps> = ({ data = defaultData, className }) => {
  return (
    <div className={cn('aso-card p-6', className)}>
      <h3 className="mb-4 text-lg font-slab font-bold">Review Sentiment</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value} (${((value as number) / data.reduce((sum, entry) => sum + entry.value, 0) * 100).toFixed(0)}%)`, name]}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        <div className="text-center">
          <div className="text-sm text-gray-500">Positive</div>
          <div className="text-xl font-semibold text-green-500">
            {((data.find(d => d.name === 'Positive')?.value || 0) / data.reduce((sum, entry) => sum + entry.value, 0) * 100).toFixed(0)}%
          </div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Neutral</div>
          <div className="text-xl font-semibold text-blue-500">
            {((data.find(d => d.name === 'Neutral')?.value || 0) / data.reduce((sum, entry) => sum + entry.value, 0) * 100).toFixed(0)}%
          </div>
        </div>
        <div className="text-center">
          <div className="text-sm text-gray-500">Negative</div>
          <div className="text-xl font-semibold text-red-500">
            {((data.find(d => d.name === 'Negative')?.value || 0) / data.reduce((sum, entry) => sum + entry.value, 0) * 100).toFixed(0)}%
          </div>
        </div>
      </div>
    </div>
  );
};

// Default data
const defaultData: SentimentData[] = [
  { name: 'Positive', value: 772, color: '#4ade80' },
  { name: 'Neutral', value: 0, color: '#60a5fa' },
  { name: 'Negative', value: 73, color: '#f87171' },
];

export default SentimentChart;
