import Link from 'next/link';
import Image from 'next/image';
import { Subject } from '@/lib/types';

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
  return (
      <Link href={`/subject/${subject.id}`}>
        { }
        <a style={{ display: 'block' }}>
          <div className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            {subject.thumbnail && (
              <Image
                src={subject.thumbnail}
                alt={subject.name}
                fill
                className="object-cover"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 33vw"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
                priority
              />
            )}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
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
        </a>
      </Link>
    );
};

export default SubjectCard;