import { HugeiconsIcon } from '@hugeicons/react';
import {
  Archive03Icon,
  Clock01Icon,
  TradeDownIcon,
  TrendingUp,
  User,
  Star,
} from '@hugeicons/core-free-icons';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'watch':
      return <HugeiconsIcon icon={Clock01Icon} />;
    case 'box':
      return <HugeiconsIcon icon={Archive03Icon} />;
    case 'trendingDown':
      return <HugeiconsIcon icon={TradeDownIcon} />;
    case 'trendingUp':
      return <HugeiconsIcon icon={TrendingUp} />;
    case 'user':
      return <HugeiconsIcon icon={User} />;
    case 'star':
      return <HugeiconsIcon icon={Star} />;
    default:
      return null;
  }
};

export default getIcon;
