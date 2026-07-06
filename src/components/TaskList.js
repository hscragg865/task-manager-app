// ══════════════════════════════════════════════════════
// COMPONENT: TaskList
// PURPOSE: Displays the list of tasks that TaskBoard has
// already filtered. It does not own task state; it only
// receives task data and passes user actions down to
// TaskCard.
// TYPE: Client Component — renders interactive TaskCard
// components that use click handlers.
// PROPS:
// tasks - array of task objects currently visible
// filter - current filter name used for the heading
// onToggle - callback from TaskBoard for toggling done
// onDelete - callback from TaskBoard for deleting a task
// ══════════════════════════════════════════════════════

"use client";

import TaskCard from "./TaskCard";

export default function TaskList({ tasks, filter, onToggle, onDelete }) {
  // DERIVED VALUE: headingText is based on the selected filter.
  // It is not state because it can always be recalculated from filter.
  const headingText =
    filter === "all"
      ? "All Tasks"
      : filter === "active"
        ? "Active Tasks"
        : "Completed Tasks";

  return (
    <section className="mt-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="text-xl font-black text-white">{headingText}</h2>

        <span className="rounded-full bg-slate-800 px-3 py-1 text-sm font-bold text-slate-300">
          {tasks.length} shown
        </span>
      </div>

      {/* Conditional render: if the current filtered list has no tasks,
      the user sees an empty-state message instead of a blank page area. */}
      {tasks.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-950 p-8 text-center">
          <p className="text-lg font-bold text-slate-300">No tasks here.</p>
          <p className="mt-2 text-sm text-slate-500">
            Add a task or switch filters to view a different group.
          </p>
        </div>
      ) : (
        <div className="grid gap-3">
          {/* Immutable rendering pattern: map() creates one TaskCard for
          each task without changing the tasks array. The key helps React
          track each item correctly between renders. */}
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              done={task.done}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}