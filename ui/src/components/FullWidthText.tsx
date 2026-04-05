'use client';

interface FullWidthTextProps {
children: React.ReactNode
}

const FullWidthText: React.FC<FullWidthTextProps> = ({
children
}) => {
  return (
    <div className="relative w-full md:max-h-[340px] h-[40vh] flex items-center justify-center">
    {children}
    </div>
  );
};

export default FullWidthText;
