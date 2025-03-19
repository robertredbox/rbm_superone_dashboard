import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const topKeywordsData = [
  { id: 1, term: "football quiz", position: 3, change: 2, volume: 9800 },
  { id: 2, term: "sports trivia", position: 5, change: -1, volume: 7400 },
  { id: 3, term: "trivia with money", position: 2, change: 3, volume: 5600 },
  { id: 4, term: "football trivia", position: 7, change: 0, volume: 4900 },
  { id: 5, term: "cash quiz app", position: 12, change: 4, volume: 3200 },
  { id: 6, term: "fan battle", position: 1, change: 0, volume: 2800 },
  { id: 7, term: "football knowledge", position: 15, change: 2, volume: 2300 }
];

const TopKeywords = () => {
  return (
    <div className="h-full overflow-hidden flex flex-col">
      <div className="p-4 border-b">
        <h3 className="text-sm font-medium">Top Performing Keywords</h3>
      </div>
      <div className="overflow-y-auto flex-grow">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-xs font-medium text-gray-500 px-4 py-2 text-left">Keyword</th>
              <th className="text-xs font-medium text-gray-500 px-4 py-2 text-center">Position</th>
              <th className="text-xs font-medium text-gray-500 px-4 py-2 text-center">Change</th>
              <th className="text-xs font-medium text-gray-500 px-4 py-2 text-right">Volume</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {topKeywordsData.map((keyword) => (
              <tr key={keyword.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-xs text-gray-900">{keyword.term}</td>
                <td className="px-4 py-3 text-xs text-center">#{keyword.position}</td>
                <td className="px-4 py-3 text-xs text-center">
                  {keyword.change > 0 && (
                    <div className="flex items-center justify-center text-green-600">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      <span>+{keyword.change}</span>
                    </div>
                  )}
                  {keyword.change < 0 && (
                    <div className="flex items-center justify-center text-red-600">
                      <TrendingDown className="h-3 w-3 mr-1" />
                      <span>{keyword.change}</span>
                    </div>
                  )}
                  {keyword.change === 0 && (
                    <div className="flex items-center justify-center text-gray-500">
                      <span>-</span>
                    </div>
                  )}
                </td>
                <td className="px-4 py-3 text-xs text-right text-gray-500">{keyword.volume.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopKeywords; 