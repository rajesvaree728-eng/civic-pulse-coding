
import {
  FolderKanban,
  CheckCircle,
  Clock,
  AlertTriangle
} from "lucide-react";

import StatCard from "../common/StatCard";

function OverviewCards() {
  const statistics = [
    {
      title: "Total Projects",
      value: "128",
      icon: FolderKanban,
      change: "+12%",
      trend: "up",
      description: "compared to last month",
      color: "blue"
    },
    {
      title: "Completed Projects",
      value: "76",
      icon: CheckCircle,
      change: "+8%",
      trend: "up",
      description: "compared to last month",
      color: "green"
    },
    {
      title: "Ongoing Projects",
      value: "38",
      icon: Clock,
      change: "+5%",
      trend: "up",
      description: "currently in progress",
      color: "orange"
    },
    {
      title: "Delayed Projects",
      value: "14",
      icon: AlertTriangle,
      change: "-3%",
      trend: "up",
      description: "compared to last month",
      color: "red"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

      {statistics.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          change={stat.change}
          trend={stat.trend}
          description={stat.description}
          color={stat.color}
        />
      ))}

    </div>
  );
}

export default OverviewCards;
