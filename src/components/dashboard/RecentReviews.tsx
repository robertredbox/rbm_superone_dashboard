import React from 'react';
import { StarIcon } from 'lucide-react';

const recentReviewsData = [
  {
    id: 1,
    author: "Bernie Rice",
    rating: 5,
    text: "What I love best about this app is that your winnings are paid out in real time to your wallet.",
    date: "Feb 15, 2025"
  },
  {
    id: 2,
    author: "Glenn Mc Ferran",
    rating: 5,
    text: "Brilliant game with challenging questions where you can win a lot of money.",
    date: "Feb 25, 2025"
  },
  {
    id: 3,
    author: "Mark",
    rating: 1,
    text: "SCAM STAY AWAY. This is a complete scam. Invested money and never got anything back.",
    date: "Feb 5, 2025"
  },
  {
    id: 4,
    author: "Noleen Quinn",
    rating: 5,
    text: "Beautiful graphics, I find this game fast, fun and it's perfect for football fans.",
    date: "Feb 22, 2025"
  }
];

const RecentReviews = () => {
  // Function to render star rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <StarIcon 
        key={i} 
        className={`h-3 w-3 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="h-full overflow-hidden flex flex-col">
      <div className="p-4 border-b">
        <h3 className="text-sm font-medium">Recent User Reviews</h3>
      </div>
      <div className="overflow-y-auto flex-grow">
        {recentReviewsData.map((review) => (
          <div key={review.id} className="p-4 border-b last:border-0">
            <div className="flex justify-between items-start mb-1">
              <span className="font-medium text-sm">{review.author}</span>
              <span className="text-xs text-muted-foreground">{review.date}</span>
            </div>
            <div className="flex items-center mb-2">
              {renderStars(review.rating)}
            </div>
            <p className="text-xs text-muted-foreground">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentReviews; 