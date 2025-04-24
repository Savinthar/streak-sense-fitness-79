
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
}

const StatsCard = ({ title, value, icon }: StatsCardProps) => {
  return (
    <Card className="p-6 backdrop-blur-lg bg-card border-primary/10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-200/80">{title}</p>
          <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
        </div>
        {icon && <div className="text-primary/80">{icon}</div>}
      </div>
    </Card>
  );
};

export default StatsCard;
