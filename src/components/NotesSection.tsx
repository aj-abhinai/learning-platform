'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface NotesSectionProps {
  notes?: string;
  externalNotesUrl?: string;
  notesFile?: string;
}

const NotesSection: React.FC<NotesSectionProps> = ({ 
  notes, 
  externalNotesUrl, 
  notesFile 
}) => {
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarkdownFile = async () => {
      if (!notesFile) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(notesFile);
        if (!response.ok) {
          throw new Error(`Failed to load notes: ${response.status}`);
        }
        const content = await response.text();
        setMarkdownContent(content);
      } catch (err) {
        console.error('Error fetching markdown file:', err);
        setError('Failed to load notes');
      } finally {
        setLoading(false);
      }
    };

    if (notesFile) {
      fetchMarkdownFile();
    }
  }, [notesFile]);

  // Don't render if no content
  if (!notes && !externalNotesUrl && !notesFile) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Notes &amp; Resources</h2>
      
      {/* Inline notes */}
      {notes && (
        <div className="prose prose-lg max-w-none mb-6">
          <ReactMarkdown>{notes}</ReactMarkdown>
        </div>
      )}
      
      {/* Local markdown file content */}
      {notesFile && (
        <div className="mb-6">
          {loading && (
            <div className="text-gray-500">Loading notes...</div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
              {error}
              <div className="text-sm mt-2">File path: {notesFile}</div>
            </div>
          )}
          
          {markdownContent && !loading && !error && (
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
          )}
          
          {/* Download link */}
          {!error && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              
              <a
                href={notesFile}
                download
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download notes as Markdown
              </a>
            </div>
          )}
        </div>
      )}
      
      {/* External notes link */}
      {externalNotesUrl && (
        <div className="mt-4">
          <a
            href={externalNotesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold"
          >
            <span>View additional resources</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export default NotesSection;