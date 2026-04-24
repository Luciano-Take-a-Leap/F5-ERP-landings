import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface TestimonialCardProps {
  rate: number;
  text: string;
  author: {
    avatar: string;
    name: string;
    role: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ rate, text, author }) => {
  return (
    <div className="w-full max-w-md h-full bg-card-dark-background rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              width="25"
              height="28"
              viewBox="0 0 25 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {index < rate ? (
                <path
                  d="M6.00781 22.75L7.58767 15.9201L2.28906 11.3264L9.28906 10.7187L12.0113 4.27778L14.7335 10.7187L21.7335 11.3264L16.4349 15.9201L18.0148 22.75L12.0113 19.1285L6.00781 22.75Z"
                  fill={'var(--primary)'}
                />
              ) : (
                <path
                  d="M8.94878 18.691L12.0113 16.8437L15.0738 18.7153L14.2717 15.2153L16.9696 12.8819L13.421 12.566L12.0113 9.26042L10.6016 12.5417L7.05295 12.8576L9.75087 15.2153L8.94878 18.691ZM6.00781 22.75L7.58767 15.9201L2.28906 11.3264L9.28906 10.7187L12.0113 4.27778L14.7335 10.7187L21.7335 11.3264L16.4349 15.9201L18.0148 22.75L12.0113 19.1285L6.00781 22.75Z"
                  fill={'var(--primary)'}
                />
              )}
            </svg>
          ))}
        </div>
      </div>
      <p className="text-white italic mb-4">{text}</p>
      <div className="flex items-center">
        <Avatar className="w-12 h-12 rounded-full mr-4">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-bold">{author.name}</p>
          <p className="text-sm text-gray-500">{author.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
