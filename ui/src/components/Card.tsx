export interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="rounded-2xl border border-card-from bg-gradient-to-br from-card-from via-card-from to-card-to p-8">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-icon-bg text-primary font-extrabold">
        {icon}
      </div>

      <h3 className="mb-4 text-xl font-bold text-white">{title}</h3>
      <p className="max-w-[260px] text-sm text-zinc-400">{description}</p>
    </div>
  );
};

export default Card;