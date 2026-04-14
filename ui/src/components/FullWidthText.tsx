'use client';

interface FullWidthTextProps {
  children: React.ReactNode;
  id?: string;
}

const FullWidthText: React.FC<FullWidthTextProps> = ({ children, id }) => {
  return (
    <div
      className="relative w-full flex items-center justify-center text-center min-h-[200px]"
      id={id}
    >
      {children}
    </div>
  );
};

export default FullWidthText;
