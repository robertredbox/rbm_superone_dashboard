import React from 'react';
import { Star, Award, Users } from 'lucide-react';

const topCompetitorsData = [
  {
    id: 1,
    name: "Football Quiz Master",
    rating: 4.2,
    downloads: "1.5M+",
    icon: "https://placehold.co/40x40/3498db/FFFFFF.png?text=FQM"
  },
  {
    id: 2,
    name: "Trivia Champ",
    rating: 4.7,
    downloads: "4.2M+",
    icon: "https://placehold.co/40x40/9b59b6/FFFFFF.png?text=TC"
  },
  {
    id: 3,
    name: "Soccer IQ",
    rating: 4.1,
    downloads: "2.3M+",
    icon: "https://placehold.co/40x40/2ecc71/FFFFFF.png?text=SIQ"
  },
  {
    id: 4,
    name: "Quiz for Cash",
    rating: 3.9,
    downloads: "3.7M+",
    icon: "https://placehold.co/40x40/e74c3c/FFFFFF.png?text=Q$"
  }
];

const TopCompetitors = () => {
  return (
    <div className="h-full overflow-hidden flex flex-col">
      <div className="p-4 border-b">
        <h3 className="text-sm font-medium">Top Competitors</h3>
      </div>
      <div className="overflow-y-auto flex-grow">
        {topCompetitorsData.map((competitor) => (
          <div key={competitor.id} className="p-4 border-b flex items-center">
            <img
              src={competitor.icon}
              alt={competitor.name}
              className="w-10 h-10 rounded-xl mr-3"
            />
            <div className="flex-grow">
              <h4 className="text-sm font-medium">{competitor.name}</h4>
              <div className="flex items-center mt-1 space-x-4">
                <div className="flex items-center text-xs text-gray-500">
                  <Star className="h-3 w-3 text-amber-400 mr-1" />
                  <span>{competitor.rating}</span>
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Users className="h-3 w-3 text-blue-400 mr-1" />
                  <span>{competitor.downloads}</span>
                </div>
              </div>
            </div>
            <Award className="h-5 w-5 text-gray-300" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCompetitors; 