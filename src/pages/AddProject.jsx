
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import useProjects from "../hooks/useProjects";

function AddProject() {
  const navigate = useNavigate();
  const { addProject } = useProjects();

  const [formData, setFormData] = useState({
    name: "",
    category: "Infrastructure",
    location: "",
    budget: "",
    deadline: "",
    status: "On Track",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      ...formData,
      progress: 0,
      budget: `$${Number(formData.budget).toLocaleString("en-US")}`,
    };

    addProject(newProject);
    navigate("/projects");
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <button
        onClick={() => navigate("/projects")}
        className="flex items-center gap-2 text-sm text-blue-600"
      >
        <ArrowLeft size={18} />
        Back to Projects
      </button>

      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Add New Project
        </h1>
        <p className="mt-1 text-gray-500">
          Enter the municipal project information.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-xl border bg-white p-6 shadow-sm"
      >
        <div>
          <label className="mb-2 block text-sm font-medium">
            Project Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter project name"
            className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-lg border p-3"
            >
              <option>Infrastructure</option>
              <option>Public Spaces</option>
              <option>Water Supply</option>
              <option>Public Services</option>
              <option>Transportation</option>
              <option>Housing</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Location
            </label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Enter district or location"
              className="w-full rounded-lg border p-3"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Budget (USD)
            </label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              min="1"
              required
              placeholder="250000"
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              required
              className="w-full rounded-lg border p-3"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Initial Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          >
            <option>On Track</option>
            <option>In Progress</option>
            <option>Delayed</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Project Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Describe the project..."
            className="w-full rounded-lg border p-3"
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
        >
          <Save size={18} />
          Save Project
        </button>
      </form>
    </div>
  );
}

export default AddProject;
