import SubjectPageClient from './SubjectPageClient';
import learningData from '../../../../public/data/learningHub.json';

export async function generateStaticParams() {
  return learningData.subjects.map((subject) => ({
    subjectId: subject.id,
  }));
}

export default async function SubjectPage({ 
  params 
}: { 
  params: Promise<{ subjectId: string }> 
}) {
  const { subjectId } = await params;
  return <SubjectPageClient subjectId={subjectId} />;
}