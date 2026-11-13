import mockProjects from "../data/mockProjects";

// Temporary in-memory data store
let projects = [...mockProjects];

// Get all projects
export const getProjects = () => {
  return [...projects];
};

// Get one project by ID
export const getProjectById = (id) => {
  return projects.find((project) => project.id === Number(id)) || null;
};

// Add a new project
export const addProject = (newProject) => {
  const project = {
    ...newProject,
    id: Date.now(),
  };

  projects = [...projects, project];

  return project;
};

// Update an existing project
export const updateProject = (id, updatedData) => {
  const projectId = Number(id);

  const exists = projects.some((project) => project.id === projectId);

  if (!exists) {
    return null;
  }

  projects = projects.map((project) =>
    project.id === projectId
      ? { ...project, ...updatedData, id: projectId }
      : project
  );

  return getProjectById(projectId);
};

// Delete a project
export const deleteProject = (id) => {
  const projectId = Number(id);
  const exists = projects.some((project) => project.id === projectId);

  if (!exists) {
    return false;
  }

  projects = projects.filter((project) => project.id !== projectId);

  return true;
};