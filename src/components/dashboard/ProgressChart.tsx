
import { Card } from "@/components/ui/card";
import { BarChart } from "lucide-react";
import { BarChart as ReChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const mockData = [
  { name: "Week 1", weight: 185 },
  { name: "Week 2", weight: 183 },
  { name: "Week 3", weight: 181 },
  { name: "Week 4", weight: 179 },
  { name: "Week 5", weight: 178 },
  { name: "Week 6", weight: 176 },
];

const ProgressChart = () => {
  return (
    <Card className="p-6 backdrop-blur-lg bg-card border-primary/10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Weight Progress</h2>
        <BarChart className="text-primary/80" />
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ReChart data={mockData}>
            <XAxis
              dataKey="name"
              stroke="#ffffff40"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#ffffff40"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value} lbs`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1A1F2C",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Bar dataKey="weight" fill="#9b87f5" radius={[4, 4, 0, 0]} />
          </ReChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default ProgressChart;
