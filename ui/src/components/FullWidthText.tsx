'use client';

interface FullWidthTextProps {
children: React.ReactNode
}

const FullWidthText: React.FC<FullWidthTextProps> = ({
children
}) => {
  return (
    <div className="relative w-full flex items-center justify-center text-center">
    {children}
    </div>
  );
};

export default FullWidthText;
