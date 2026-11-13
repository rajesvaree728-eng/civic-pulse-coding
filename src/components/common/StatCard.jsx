
import { TrendingUp, TrendingDown } from "lucide-react";

function StatCard({
  title,
  value,
  icon: Icon,
  change,
  trend = "up",
  description,
  color = "blue"
}) {

  const colors = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    orange: "bg-orange-100 text-orange-600",
    red: "bg-red-100 text-red-600",
    purple: "bg-purple-100 text-purple-600"
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-500 font-medium">
            {title}
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-2">
            {value}
          </h2>
        </div>

        {Icon && (
          <div className={`p-3 rounded-xl ${colors[color] || colors.blue}`}>
            <Icon size={23} />
          </div>
        )}

      </div>

      <div className="flex items-center gap-2 mt-4 text-xs">

        {change && (
          <span className={`flex items-center gap-1 font-semibold ${
            trend === "up" ? "text-green-600" : "text-red-600"
          }`}>
            {trend === "up" ? (
              <TrendingUp size={15} />
            ) : (
              <TrendingDown size={15} />
            )}

            {change}
          </span>
        )}

        <span className="text-gray-500">
          {description}
        </span>

      </div>

    </div>
  );
}

export default StatCard;
