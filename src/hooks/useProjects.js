import { useCallback, useMemo, useState } from "react";

import {
  getProjects,
  addProject as addProjectService,
  updateProject as updateProjectService,
  deleteProject as deleteProjectService,
} from "../services/projectService";

function useProjects({
  search = "",
  status = "All",
  category = "All",
} = {}) {
  const [projects, setProjects] = useState(() => getProjects());

  const filteredProjects = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    return projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchText) ||
        project.location.toLowerCase().includes(searchText);

      const matchesStatus =
        status === "All" || project.status === status;

      const matchesCategory =
        category === "All" || project.category === category;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [projects, search, status, category]);

  const addProject = useCallback((newProject) => {
    const createdProject = addProjectService(newProject);
    setProjects(getProjects());
    return createdProject;
  }, []);

  const updateProject = useCallback((id, updatedData) => {
    const updatedProject = updateProjectService(id, updatedData);

    if (updatedProject) {
      setProjects(getProjects());
    }

    return updatedProject;
  }, []);

  const deleteProject = useCallback((id) => {
    const deleted = deleteProjectService(id);

    if (deleted) {
      setProjects(getProjects());
    }

    return deleted;
  }, []);

  const refreshProjects = useCallback(() => {
    setProjects(getProjects());
  }, []);

  return {
    projects,
    filteredProjects,
    addProject,
    updateProject,
    deleteProject,
    refreshProjects,
  };
}

export default useProjects;