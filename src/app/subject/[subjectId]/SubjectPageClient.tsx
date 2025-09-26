'use client';

import { useState, useEffect } from 'react';
import VideoEmbed from '@/components/VideoEmbed';
import NotesSection from '@/components/NotesSection';
import TopicCard from '@/components/TopicCard';
import BackButton from '@/components/BackButton';
import { Subject, Topic } from '@/lib/types';

interface SubjectPageClientProps {
  subjectId: string;
}

export default function SubjectPageClient({ subjectId }: SubjectPageClientProps) {
  const [subject, setSubject] = useState<Subject | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (subjectId) {
      fetchSubjectData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subjectId]);

  const fetchSubjectData = async () => {
    try {
      const response = await fetch('/data/learningHub.json');
      const data = await response.json();
      const foundSubject = data.subjects.find((s: Subject) => s.id === subjectId);
      
      if (foundSubject) {
        setSubject(foundSubject);
        setSelectedTopic(foundSubject.topics[0] || null);
      }
    } catch (error) {
      console.error('Error fetching subject data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  if (!subject) {
    return (
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
        <BackButton />
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Subject not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
      <div className="mb-6">
        <BackButton />
      </div>

      <h1 className="text-3xl font-bold mb-2">{subject.name}</h1>
      {subject.description && (
        <p className="text-gray-600 mb-8">{subject.description}</p>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Topics</h2>
          <div className="space-y-3">
            {subject.topics.map(topic => (
              <TopicCard
                key={topic.id}
                topic={topic}
                isActive={selectedTopic?.id === topic.id}
                onClick={() => setSelectedTopic(topic)}
              />
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          {selectedTopic && (
            <>
              <h2 className="text-2xl font-bold mb-4">{selectedTopic.title}</h2>
              <VideoEmbed
                videoUrl={selectedTopic.videoUrl}
                title={selectedTopic.title}
              />
              <NotesSection
                notes={selectedTopic.notes}
                externalNotesUrl={selectedTopic.externalNotesUrl}
                notesFile={selectedTopic.notesFile}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}