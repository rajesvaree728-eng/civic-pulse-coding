function calculateProgress(completedTasks, totalTasks) {
  const completed = Number(completedTasks);
  const total = Number(totalTasks);

  if (
    !Number.isFinite(completed) ||
    !Number.isFinite(total) ||
    total <= 0
  ) {
    return 0;
  }

  const percentage = (completed / total) * 100;

  return Math.round(Math.min(100, Math.max(0, percentage)));
}

export default calculateProgress;