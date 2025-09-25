'use client';

import { Topic } from '@/lib/types';

interface TopicCardProps {
  topic: Topic;
  isActive: boolean;
  onClick: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, isActive, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-4 rounded-lg transition-all ${
        isActive 
          ? 'bg-blue-50 border-2 border-blue-500' 
          : 'bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md'
      }`}
    >
      <h3 className="font-semibold text-lg mb-1">{topic.title}</h3>
      {topic.duration && (
        <span className="text-sm text-gray-500">Duration: {topic.duration}</span>
      )}
    </div>
  );
};

export default TopicCard;