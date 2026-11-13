
import { ArrowRight, MapPin } from "lucide-react";

const recentProjects = [
  {
    id: 1,
    name: "Downtown Road Renovation",
    category: "Infrastructure",
    location: "Central District",
    progress: 85,
    budget: "$250,000",
    status: "On Track"
  },
  {
    id: 2,
    name: "Community Park Development",
    category: "Public Spaces",
    location: "North District",
    progress: 60,
    budget: "$180,000",
    status: "In Progress"
  },
  {
    id: 3,
    name: "Water Pipeline Upgrade",
    category: "Water Supply",
    location: "East District",
    progress: 35,
    budget: "$320,000",
    status: "Delayed"
  },
  {
    id: 4,
    name: "Smart Street Lighting",
    category: "Smart City",
    location: "West District",
    progress: 100,
    budget: "$95,000",
    status: "Completed"
  },
  {
    id: 5,
    name: "Public Library Renovation",
    category: "Education",
    location: "South District",
    progress: 72,
    budget: "$150,000",
    status: "In Progress"
  }
];

const statusStyles = {
  "On Track": "bg-blue-100 text-blue-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  "Delayed": "bg-red-100 text-red-700",
  "Completed": "bg-green-100 text-green-700"
};

function RecentProjects({ onViewAll }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

      {/* Header */}
      <div className="p-6 flex items-center justify-between">

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Projects
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Latest municipal project updates
          </p>
        </div>

        <button
          onClick={onViewAll}
          className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View All
          <ArrowRight size={16} />
        </button>

      </div>

      {/* Table */}
      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead className="bg-gray-50 border-y border-gray-200">
            <tr>
              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                Project
              </th>

              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                Progress
              </th>

              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                Budget
              </th>

              <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">

            {recentProjects.map((project) => (

              <tr
                key={project.id}
                className="hover:bg-gray-50 transition-colors"
              >

                {/* Project Details */}
                <td className="px-6 py-4">

                  <p className="text-sm font-semibold text-gray-800">
                    {project.name}
                  </p>

                  <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                    <MapPin size={12} />
                    {project.location}
                  </div>

                  <p className="text-xs text-gray-400 mt-1">
                    {project.category}
                  </p>

                </td>

                {/* Progress */}
                <td className="px-6 py-4 min-w-44">

                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-gray-500">
                      Progress
                    </span>

                    <span className="text-xs font-semibold text-gray-700">
                      {project.progress}%
                    </span>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>

                </td>

                {/* Budget */}
                <td className="px-6 py-4 text-sm font-medium text-gray-700">
                  {project.budget}
                </td>

                {/* Status */}
                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                      statusStyles[project.status]
                    }`}
                  >
                    {project.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-100 text-xs text-gray-500">
        Showing {recentProjects.length} demonstration projects
      </div>

    </div>
  );
}

export default RecentProjects;
