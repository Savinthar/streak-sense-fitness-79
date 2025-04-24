
import { Activity, ChartBarIncreasing, Medal, Timer } from "lucide-react";
import StatsCard from "@/components/stats/StatsCard";
import WorkoutHistory from "@/components/dashboard/WorkoutHistory";
import PersonalRecords from "@/components/dashboard/PersonalRecords";
import ProgressChart from "@/components/dashboard/ProgressChart";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white">Fitness Dashboard</h1>
          <p className="text-zinc-400 mt-2">Track your progress and achievements</p>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatsCard
            title="Workouts This Week"
            value="5"
            icon={<Activity size={24} />}
          />
          <StatsCard
            title="Total Minutes"
            value="245"
            icon={<Timer size={24} />}
          />
          <StatsCard
            title="Personal Records"
            value="12"
            icon={<Medal size={24} />}
          />
          <StatsCard
            title="Progress Score"
            value="8.5"
            icon={<ChartBarIncreasing size={24} />}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <WorkoutHistory />
            <PersonalRecords />
          </div>
          <ProgressChart />
        </div>
      </div>
    </div>
  );
};

export default Index;
