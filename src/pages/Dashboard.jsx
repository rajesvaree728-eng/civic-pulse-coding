import OverviewCards from "../components/dashboard/OverviewCards";
import ProjectChart from "../components/projects/ProjectCard";
import RecentProjects from "../components/dashboard/RecentProjects";

function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Dashboard
        </h1>
        <p className="mt-1 text-gray-500">
          Overview of municipal projects and performance.
        </p>
      </div>

      <OverviewCards />

      <div className="grid grid-cols-1 gap-6">
        <ProjectChart />
      </div>

      <RecentProjects />
    </div>
  );
}

export default Dashboard;