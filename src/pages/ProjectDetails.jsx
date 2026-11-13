import { ArrowLeft, MapPin, Calendar, Wallet } from "lucide-react";
import ProjectProgress from "../components/projects/ProjectProgress";

function ProjectDetails({ project, onBack }) {
  if (!project) {
    return (
      <div className="rounded-xl bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-bold text-gray-800">
          Project not found
        </h2>

        <p className="mt-2 text-gray-500">
          The requested project could not be found.
        </p>

        <button
          onClick={onBack}
          className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  const statusColors = {
    Completed: "bg-green-100 text-green-700",
    Delayed: "bg-red-100 text-red-700",
    "In Progress": "bg-blue-100 text-blue-700",
    "On Track": "bg-emerald-100 text-emerald-700",
  };

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
      >
        <ArrowLeft size={18} />
        Back to Projects
      </button>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 sm:flex-row">
          <div>
            <p className="text-sm font-medium text-blue-600">
              {project.category}
            </p>

            <h1 className="mt-2 text-2xl font-bold text-gray-900">
              {project.name}
            </h1>

            <p className="mt-2 flex items-center gap-2 text-gray-500">
              <MapPin size={17} />
              {project.location}
            </p>
          </div>

          <div>
            <span
              className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${
                statusColors[project.status] ||
                "bg-gray-100 text-gray-700"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3 text-gray-500">
            <Wallet size={20} />
            <span className="text-sm">Project Budget</span>
          </div>

          <h2 className="mt-3 text-2xl font-bold text-gray-900">
            {project.budget}
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3 text-gray-500">
            <Calendar size={20} />
            <span className="text-sm">Deadline</span>
          </div>

          <h2 className="mt-3 text-xl font-bold text-gray-900">
            {project.deadline}
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Project Progress
          </p>

          <h2 className="mt-3 text-2xl font-bold text-gray-900">
            {project.progress}%
          </h2>

          <div className="mt-3">
            <ProjectProgress progress={project.progress} />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900">
          Project Overview
        </h2>

        <p className="mt-3 leading-7 text-gray-600">
          This section will contain the project description,
          implementation milestones, contractor information,
          budget breakdown, and verified progress updates.
        </p>
      </div>
    </div>
  );
}

export default ProjectDetails;