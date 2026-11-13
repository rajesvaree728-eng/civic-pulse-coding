import { Link } from "react-router-dom";
import { AlertCircle, Home } from "lucide-react";

function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <AlertCircle size={64} className="text-red-500" />

      <h1 className="mt-5 text-5xl font-bold text-gray-900">
        404
      </h1>

      <h2 className="mt-3 text-xl font-semibold text-gray-800">
        Page Not Found
      </h2>

      <p className="mt-2 max-w-md text-gray-500">
        The page you're looking for doesn't exist or may have been moved.
      </p>

      <Link
        to="/"
        className="mt-6 flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
      >
        <Home size={18} />
        Back to Dashboard
      </Link>
    </div>
  );
}

export default NotFound;