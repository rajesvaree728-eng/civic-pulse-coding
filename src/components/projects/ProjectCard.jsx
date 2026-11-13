
import {
  MapPin,
  CalendarDays,
  Wallet,
  ArrowUpRight
} from "lucide-react";

import ProjectProgress from "./ProjectProgress";

const statusStyles = {
  "On Track": "bg-blue-100 text-blue-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  "Delayed": "bg-red-100 text-red-700",
  "Completed": "bg-green-100 text-green-700"
};

function ProjectCard({ project, onViewDetails }) {
  if (!project) return null;

  const {
    id,
    name,
    category,
    location,
    progress,
    budget,
    status,
    deadline
  } = project;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">

      {/* Header */}
      <div className="flex justify-between items-start gap-3">

        <div>
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
            {category}
          </span>

          <h3 className="text-lg font-semibold text-gray-800 mt-3">
            {name}
          </h3>
        </div>

        <button
          onClick={() => onViewDetails?.(id)}
          aria-label={`View ${name}`}
          className="text-gray-400 hover:text-blue-600"
        >
          <ArrowUpRight size={20} />
        </button>

      </div>

      {/* Location */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
        <MapPin size={16} />
        {location}
      </div>

      {/* Progress */}
      <div className="mt-5">
        <ProjectProgress progress={progress} />
      </div>

      {/* Budget and Deadline */}
      <div className="grid grid-cols-2 gap-3 mt-5">

        <div>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <Wallet size={14} />
            Budget
          </div>

          <p className="text-sm font-semibold text-gray-800 mt-1">
            {budget}
          </p>
        </div>

        <div>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <CalendarDays size={14} />
            Deadline
          </div>

          <p className="text-sm font-semibold text-gray-800 mt-1">
            {deadline || "Not specified"}
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-5">

        <span className={`text-xs font-medium px-3 py-1 rounded-full ${
          statusStyles[status] || "bg-gray-100 text-gray-600"
        }`}>
          {status || "Unknown"}
        </span>

        <button
          onClick={() => onViewDetails?.(id)}
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View Details
        </button>

      </div>

    </div>
  );
}

export default ProjectCard;
