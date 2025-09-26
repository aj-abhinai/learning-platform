'use client';

import Link from 'next/link';
import { Subject } from '@/lib/types';
import { useState } from 'react';

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Link href={`/subject/${subject.id}`}>
      <div className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
        <div className="h-48 relative overflow-hidden">
          {subject.thumbnail && !imageError ? (
            <img 
              src={subject.thumbnail} 
              alt={subject.name}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div 
              className="w-full h-full flex items-center justify-center"
              style={{ background: 'linear-gradient(to bottom right, #60a5fa, #a855f7)' }}
            >
              <span className="text-white text-2xl font-bold">
                {subject.name}
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {subject.name}
          </h3>
          {subject.description && (
            <p className="text-gray-600 text-sm">{subject.description}</p>
          )}
          <div className="mt-4 text-sm text-gray-500">
            {subject.topics.length} {subject.topics.length === 1 ? 'topic' : 'topics'}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SubjectCard; 