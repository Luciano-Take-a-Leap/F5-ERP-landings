import { cn } from '../lib/utils';
import { Badge } from './ui/badge';
interface TagProps {
  text: string;
  variant?: 'outline' | 'default';
  className?: string;
}

const Tag: React.FC<TagProps> = ({ text, variant = 'default', className }) => {
  return (
    <Badge
      className={cn(
        'p-4 text-xs font-semibold',
        variant === 'default'
          ? 'bg-primary text-primary-foreground '
          : 'border border-primary-dark text-primary bg-primary/5',
        className
      )}
      variant={variant}
    >
      {text}
    </Badge>
  );
};

export default Tag;
