'use client';

interface FullWidthTextProps {
  children: React.ReactNode;
  id?: string;
}

const FullWidthText: React.FC<FullWidthTextProps> = ({ children, id }) => {
  return (
    <div
      className="relative w-full px-6 md:px-0 flex items-center justify-center text-center min-h-[200px] py-10"
      id={id}
    >
      {children}
    </div>
  );
};

export default FullWidthText;
