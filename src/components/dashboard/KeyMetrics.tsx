import React from 'react';
import { TrendingUp, TrendingDown, Clock, Users, UserPlus, Percent } from 'lucide-react';

const KeyMetrics = () => {
  const metrics = [
    {
      id: 1,
      name: "Avg. Session Duration",
      value: "7:32",
      change: 12,
      icon: <Clock className="h-4 w-4 text-blue-500" />
    },
    {
      id: 2,
      name: "User Retention (30d)",
      value: "31%",
      change: -2,
      icon: <Users className="h-4 w-4 text-green-500" />
    },
    {
      id: 3,
      name: "Conversion Rate",
      value: "8.4%",
      change: 3.2,
      icon: <Percent className="h-4 w-4 text-amber-500" />
    },
    {
      id: 4,
      name: "New Users (w/w)",
      value: "4,871",
      change: 22,
      icon: <UserPlus className="h-4 w-4 text-purple-500" />
    }
  ];

  return (
    <div className="h-full overflow-hidden flex flex-col">
      <div className="p-4 border-b">
        <h3 className="text-sm font-medium">Key Performance Metrics</h3>
      </div>
      <div className="overflow-y-auto flex-grow">
        <div className="p-4 grid grid-cols-1 gap-4">
          {metrics.map((metric) => (
            <div key={metric.id} className="p-4 border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="p-2 bg-gray-100 rounded-lg mr-3">
                    {metric.icon}
                  </div>
                  <span className="text-sm text-gray-500">{metric.name}</span>
                </div>
                {metric.change > 0 ? (
                  <div className="flex items-center text-emerald-600 text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+{metric.change}%</span>
                  </div>
                ) : (
                  <div className="flex items-center text-red-600 text-xs">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    <span>{metric.change}%</span>
                  </div>
                )}
              </div>
              <div className="text-lg font-semibold">{metric.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyMetrics; 