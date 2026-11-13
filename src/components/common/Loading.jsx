
import { LoaderCircle } from "lucide-react";

function Loading({
  message = "Loading...",
  fullScreen = false
}) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center gap-3
        ${fullScreen ? "min-h-screen" : "py-12"}
      `}
    >
      <LoaderCircle
        size={35}
        className="animate-spin text-blue-600"
      />

      <p className="text-sm text-gray-500 font-medium">
        {message}
      </p>
    </div>
  );
}

export default Loading;
