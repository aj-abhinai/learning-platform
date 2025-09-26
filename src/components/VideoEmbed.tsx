'use client';

interface VideoEmbedProps {
  videoUrl: string;
  title: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoUrl, title }) => {
  // Convert YouTube URL to embed format if needed
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  return (
    <div className="relative w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg mx-auto">
      <iframe
        src={getEmbedUrl(videoUrl)}
        title={title}
        className="absolute top-0 left-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoEmbed;