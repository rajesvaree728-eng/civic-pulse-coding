
import {
  LayoutDashboard,
  FolderKanban,
  ChartNoAxesCombined,
  Settings,
  X,
  Building2
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "dashboard"
  },
  {
    name: "Projects",
    icon: FolderKanban,
    path: "projects"
  },
  {
    name: "Reports",
    icon: ChartNoAxesCombined,
    path: "reports"
  },
  {
    name: "Settings",
    icon: Settings,
    path: "settings"
  }
];

function Sidebar({
  activePage = "dashboard",
  onNavigate,
  isOpen = false,
  onClose
}) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-64 bg-slate-900 text-white
          transform transition-transform duration-300
          lg:translate-x-0 lg:static
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        {/* Logo */}
        <div className="h-16 px-6 flex items-center justify-between border-b border-slate-700">
          <div className="flex items-center gap-3">
            <Building2 size={25} className="text-blue-400" />

            <h1 className="text-xl font-bold">
              Civic<span className="text-blue-400">Pulse</span>
            </h1>
          </div>

          <button onClick={onClose} className="lg:hidden">
            <X size={21} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          <p className="text-xs uppercase tracking-wider text-slate-400 mb-4">
            Main Menu
          </p>

          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.path;

            return (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate?.(item.path);
                  onClose?.();
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-colors text-sm font-medium
                  ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }
                `}
              >
                <Icon size={19} />
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-5 left-5 right-5 text-xs text-slate-500">
          CivicPulse © 2026
          <p className="mt-1">Building transparent cities.</p>
        </div>

      </aside>
    </>
  );
}

export default Sidebar;
