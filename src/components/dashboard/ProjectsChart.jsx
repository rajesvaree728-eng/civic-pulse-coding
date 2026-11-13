
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const projectData = [
  { month: "Jan", completed: 8, ongoing: 12 },
  { month: "Feb", completed: 12, ongoing: 15 },
  { month: "Mar", completed: 10, ongoing: 18 },
  { month: "Apr", completed: 15, ongoing: 14 },
  { month: "May", completed: 18, ongoing: 20 },
  { month: "Jun", completed: 22, ongoing: 16 }
];

function ProjectChart() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Project Overview
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Monthly project completion and activity
          </p>
        </div>

        <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500">
          <option>Last 6 months</option>
          <option>Last 3 months</option>
          <option>Last 12 months</option>
        </select>

      </div>

      {/* Chart */}
      <div className="w-full h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={projectData}
            margin={{ top: 10, right: 10, left: -15, bottom: 5 }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#6B7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#6B7280", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #E5E7EB"
              }}
            />

            <Legend />

            <Bar
              dataKey="completed"
              name="Completed"
              fill="#2563EB"
              radius={[5, 5, 0, 0]}
            />

            <Bar
              dataKey="ongoing"
              name="Ongoing"
              fill="#10B981"
              radius={[5, 5, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default ProjectChart;
