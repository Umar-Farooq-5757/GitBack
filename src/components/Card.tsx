interface CardProps {
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  iconColor: string;
  iconBackground: string;
  title: string;
  value: string | number; 
  desc: string;
}

const Card = ({ Icon, iconColor, iconBackground, title, value, desc }:CardProps) => {
  return (
    <div className="flex border-2 items-center px-2 py-3 gap-3 rounded-md h-34">
      <div style={{backgroundColor:iconBackground}} className={`p-2 rounded-full`}>
        <Icon style={{ color: iconColor }} className={`size-7`} />
      </div>
      <div>
        <h3 className="font-extrabold text-black/60 text-[16px]">{title}</h3>
        <p className="text-[27px] font-extrabold">{value}</p>
        <p className="text-black/60 text-sm font-bold">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
