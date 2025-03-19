
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { cn } from '@/lib/utils';

interface SentimentData {
  name: string;
  value: number;
  color: string;
}

interface SentimentChartProps {
  data: SentimentData[];
  className?: string;
}

const SentimentChart: React.FC<SentimentChartProps> = ({ data, className }) => {
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
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => [`${value}%`, 'Percentage']}
              contentStyle={{
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                padding: '8px',
              }}
            />
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              iconSize={10}
              formatter={(value: string) => (
                <span className="text-sm">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-center">
        {data.map((item) => (
          <div key={item.name} className="text-xs">
            <div className="font-medium">{item.name}</div>
            <div className="text-muted-foreground">{item.value}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SentimentChart;
