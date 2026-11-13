
import { Eye, MapPin } from "lucide-react";
import ProjectProgress from "./ProjectProgress";

const statusStyles = {
  "On Track": "bg-blue-100 text-blue-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  "Delayed": "bg-red-100 text-red-700",
  "Completed": "bg-green-100 text-green-700"
};

function ProjectTable({ projects = [], onViewDetails }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">

      <div className="overflow-x-auto">
        <table className="w-full text-left">

          {/* Table Header */}
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {[
                "Project",
                "Category",
                "Progress",
                "Budget",
                "Status",
                "Action"
              ].map((heading) => (
                <th
                  key={heading}
                  className="px-5 py-4 text-xs font-semibold text-gray-500 uppercase whitespace-nowrap"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-100">

            {projects.length > 0 ? (
              projects.map((project) => (
                <tr
                  key={project.id}
                  className="hover:bg-gray-50 transition-colors"
                >

                  {/* Project */}
                  <td className="px-5 py-4 min-w-56">
                    <p className="text-sm font-semibold text-gray-800">
                      {project.name}
                    </p>

                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <MapPin size={13} />
                      {project.location}
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-5 py-4 text-sm text-gray-600">
                    {project.category}
                  </td>

                  {/* Progress */}
                  <td className="px-5 py-4 min-w-40">
                    <ProjectProgress
                      progress={project.progress}
                      size="sm"
                    />
                  </td>

                  {/* Budget */}
                  <td className="px-5 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                    {project.budget}
                  </td>

                  {/* Status */}
                  <td className="px-5 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                        statusStyles[project.status] ||
                        "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {project.status || "Unknown"}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-5 py-4">
                    <button
                      onClick={() => onViewDetails?.(project.id)}
                      className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium"
                    >
                      <Eye size={16} />
                      View
                    </button>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-5 py-12 text-center text-sm text-gray-500"
                >
                  No projects found.
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-gray-100 text-xs text-gray-500">
        Showing {projects.length} projects
      </div>

    </div>
  );
}

export default ProjectTable;
