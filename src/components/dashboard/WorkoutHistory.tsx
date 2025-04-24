
import { Card } from "@/components/ui/card";
import { CalendarCheck, Medal } from "lucide-react";

const mockHistory = [
  {
    date: "2025-04-24",
    workout: "Upper Body",
    duration: "45 min",
    achievement: "New PR: Bench Press",
  },
  {
    date: "2025-04-23",
    workout: "Lower Body",
    duration: "50 min",
    achievement: null,
  },
  {
    date: "2025-04-21",
    workout: "Cardio",
    duration: "30 min",
    achievement: "Best Mile Time",
  },
];

const WorkoutHistory = () => {
  return (
    <Card className="p-6 backdrop-blur-lg bg-card border-primary/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Recent Workouts</h2>
        <CalendarCheck className="text-primary/80" />
      </div>
      <div className="space-y-4">
        {mockHistory.map((workout, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div>
              <p className="text-white font-medium">{workout.workout}</p>
              <p className="text-sm text-zinc-400">{workout.date}</p>
            </div>
            <div className="text-right">
              <p className="text-zinc-300">{workout.duration}</p>
              {workout.achievement && (
                <div className="flex items-center gap-1 text-secondary text-sm">
                  <Medal size={14} />
                  <span>{workout.achievement}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default WorkoutHistory;
