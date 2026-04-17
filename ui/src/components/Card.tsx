import getIcon from '../utils/getIcon';

export interface CardProps {
  icon?: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="rounded-2xl border border-primary/20 p-8 card-gradient z-10">
      {icon ? (
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-icon-bg text-primary font-extrabold">
          {getIcon(icon)}
        </div>
      ) : null}

      <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
      <p className="max-w-[260px] text-sm text-zinc-400">{description}</p>
    </div>
  );
};

export default Card;
