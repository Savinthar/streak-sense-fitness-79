
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const mockPRs = [
  { exercise: "Bench Press", value: "225 lbs", date: "2025-04-20" },
  { exercise: "Squat", value: "315 lbs", date: "2025-04-15" },
  { exercise: "Deadlift", value: "405 lbs", date: "2025-04-10" },
  { exercise: "Mile Run", value: "6:30", date: "2025-04-05" },
];

const PersonalRecords = () => {
  return (
    <Card className="p-6 backdrop-blur-lg bg-card border-primary/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Personal Records</h2>
        <Trophy className="text-secondary" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {mockPRs.map((pr, index) => (
          <div
            key={index}
            className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <p className="text-sm text-zinc-400">{pr.exercise}</p>
            <p className="text-lg font-semibold text-white mt-1">{pr.value}</p>
            <p className="text-xs text-zinc-500 mt-1">{pr.date}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PersonalRecords;
