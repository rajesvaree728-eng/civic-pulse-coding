
import { Search, RotateCcw, Filter } from "lucide-react";

function ProjectFilters({
  search,
  setSearch,
  status,
  setStatus,
  category,
  setCategory,
  onReset,
  categories = []
}) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">

      <div className="flex items-center gap-2 mb-4">
        <Filter size={18} className="text-blue-600" />

        <h3 className="font-semibold text-gray-800">
          Filter Projects
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

        {/* Search */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-2">
            Search Projects
          </label>

          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <Search size={17} className="text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name or location..."
              className="w-full outline-none text-sm"
            />
          </div>
        </div>

        {/* Status */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-2">
            Project Status
          </label>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Statuses</option>
            <option value="On Track">On Track</option>
            <option value="In Progress">In Progress</option>
            <option value="Delayed">Delayed</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-2">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Categories</option>

            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Reset */}
        <div className="flex items-end">
          <button
            type="button"
            onClick={onReset}
            className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <RotateCcw size={16} />
            Reset Filters
          </button>
        </div>

      </div>

    </div>
  );
}

export default ProjectFilters;
