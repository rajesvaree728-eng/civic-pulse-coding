
function ProjectProgress({
  progress = 0,
  showLabel = true,
  size = "md"
}) {
  const safeProgress = Math.min(
    100,
    Math.max(0, Number(progress) || 0)
  );

  const barSizes = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-3"
  };

  const getProgressColor = () => {
    if (safeProgress === 100) return "bg-green-500";
    if (safeProgress < 40) return "bg-orange-500";
    return "bg-blue-600";
  };

  return (
    <div className="w-full">

      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-500">
            Progress
          </span>

          <span className="text-xs font-semibold text-gray-700">
            {safeProgress}%
          </span>
        </div>
      )}

      <div
        className={`w-full bg-gray-100 rounded-full overflow-hidden ${barSizes[size] || barSizes.md}`}
      >
        <div
          className={`h-full rounded-full transition-all duration-500 ${getProgressColor()}`}
          style={{ width: `${safeProgress}%` }}
        />
      </div>

    </div>
  );
}

export default ProjectProgress;
