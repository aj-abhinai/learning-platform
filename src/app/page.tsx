'use client';

import { useState, useEffect } from 'react';
import SubjectCard from '@/components/SubjectCard';
import SearchBar from '@/components/SearchBar';
import { LearningHubData } from '@/lib/types';

export default function Home() {
  const [data, setData] = useState<LearningHubData | null>(null);
  const [filteredSubjects, setFilteredSubjects] = useState<LearningHubData['subjects']>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // For local development
      const response = await fetch('/data/learningHub.json');
      // For production with GitHub raw link
      // const response = await fetch('https://raw.githubusercontent.com/yourusername/yourrepo/main/learningHub.json');

      const jsonData: LearningHubData = await response.json();
      setData(jsonData);
      setFilteredSubjects(jsonData.subjects);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (query: string) => {
    if (!data) return;
    
    const filtered = data.subjects.filter(subject =>
      subject.name.toLowerCase().includes(query.toLowerCase()) ||
      subject.description?.toLowerCase().includes(query.toLowerCase()) ||
      subject.topics.some(topic => 
        topic.title.toLowerCase().includes(query.toLowerCase())
      )
    );
    
    setFilteredSubjects(filtered);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to Learning Hub
        </h1>
        <p className="text-gray-600 text-lg">
          Explore subjects, watch videos, and expand your knowledge
        </p>
      </div>

      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSubjects.map(subject => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>

      {filteredSubjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No subjects found matching your search.</p>
        </div>
      )}
    </div>
  );
}