import { useState } from "react";
import { LayoutGrid, List } from "lucide-react";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectTable from "../components/projects/ProjectTable";
import ProjectFilters from "../components/projects/ProjectFilters";

const sampleProjects = [
  {
    id: 1,
    name: "Downtown Road Renovation",
    category: "Infrastructure",
    location: "Central District",
    progress: 85,
    budget: "$250,000",
    status: "On Track",
    deadline: "30 Dec 2026",
  },
  {
    id: 2,
    name: "Community Park Development",
    category: "Public Spaces",
    location: "North District",
    progress: 60,
    budget: "$180,000",
    status: "In Progress",
    deadline: "15 Jan 2027",
  },
  {
    id: 3,
    name: "Water Pipeline Upgrade",
    category: "Water Supply",
    location: "East District",
    progress: 35,
    budget: "$320,000",
    status: "Delayed",
    deadline: "20 Feb 2027",
  },
  {
    id: 4,
    name: "Smart Street Lighting",
    category: "Infrastructure",
    location: "West District",
    progress: 100,
    budget: "$95,000",
    status: "Completed",
    deadline: "10 Nov 2026",
  },
];

function Projects({ onViewDetails }) {
  const [projects] = useState(sampleProjects);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [category, setCategory] = useState("All");
  const [view, setView] = useState("grid");

  const categories = [
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects = projects.filter((project) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      project.name.toLowerCase().includes(searchText) ||
      project.location.toLowerCase().includes(searchText);

    const matchesStatus =
      status === "All" || project.status === status;

    const matchesCategory =
      category === "All" || project.category === category;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  const resetFilters = () => {
    setSearch("");
    setStatus("All");
    setCategory("All");
  };

  const handleViewDetails = (id) => {
    if (onViewDetails) {
      onViewDetails(id);
    } else {
      console.log("Selected project:", id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Municipal Projects
          </h1>
          <p className="mt-1 text-gray-500">
            Track projects, budgets, progress, and delays.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={`rounded-lg p-2 ${
              view === "grid"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            aria-label="Grid view"
          >
            <LayoutGrid size={20} />
          </button>

          <button
            onClick={() => setView("table")}
            className={`rounded-lg p-2 ${
              view === "table"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
            aria-label="Table view"
          >
            <List size={20} />
          </button>
        </div>
      </div>

      <ProjectFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        category={category}
        setCategory={setCategory}
        categories={categories}
        onReset={resetFilters}
      />

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-white p-10 text-center">
          <h3 className="font-semibold text-gray-700">
            No projects found
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Try changing your search or filters.
          </p>
        </div>
      ) : view === "grid" ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      ) : (
        <ProjectTable
          projects={filteredProjects}
          onViewDetails={handleViewDetails}
        />
      )}
    </div>
  );
}

export default Projects;