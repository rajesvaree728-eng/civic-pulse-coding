import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useNavigate,
} from "react-router-dom";
import "./App.css"
import DashboardLayout from "./layouts/DashboardLayout";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

import useProjects from "./hooks/useProjects";
function ProjectDetailsRoute() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { projects } = useProjects();

  const project = projects.find(
    (item) => item.id === Number(id)
  );

  return (
    <ProjectDetails
      project={project}
      onBack={() => navigate("/projects")}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />

          <Route path="/projects" element={<Projects />} />

          <Route
            path="/projects/:id"
            element={<ProjectDetailsRoute />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;