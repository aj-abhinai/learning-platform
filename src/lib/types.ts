export interface Topic {
  id: string;
  title: string;
  videoUrl: string;
  notes?: string;
  notesFile?: string;
  externalNotesUrl?: string;
  thumbnail?: string;
  duration?: string;
}

export interface Subject {
  id: string;
  name: string;
  description?: string;
  thumbnail: string;
  topics: Topic[];
}

export interface LearningHubData {
  subjects: Subject[];
}