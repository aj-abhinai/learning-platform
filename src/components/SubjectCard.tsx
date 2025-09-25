import Link from 'next/link';
import { Subject } from '@/lib/types';

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  return (
    <Link href={`/subject/${subject.id}`}>
      <div className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 relative">
          {subject.thumbnail && (
            <img 
              src={subject.thumbnail} 
              alt={subject.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          )}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
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