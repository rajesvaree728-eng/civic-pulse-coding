
import { Search, Bell, Menu, User } from "lucide-react";

function Navbar({ onMenuClick }) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between sticky top-0 z-40">

      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-600 hover:text-blue-600"
        >
          <Menu size={22} />
        </button>

        <h2 className="text-lg font-semibold text-gray-800">
          CivicPulse
        </h2>
      </div>

      {/* Search */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-80">
        <Search size={18} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search projects..."
          className="bg-transparent outline-none px-2 w-full text-sm"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">

        <button className="relative text-gray-600 hover:text-blue-600">
          <Bell size={21} />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
            <User size={19} className="text-blue-600" />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-800">
              Admin
            </p>
            <p className="text-xs text-gray-500">
              City Administrator
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
