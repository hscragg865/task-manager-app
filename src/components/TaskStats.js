// ══════════════════════════════════════════════════════
// COMPONENT: TaskStats
// PURPOSE: Displays live statistics about the task list,
// including total, active, and completed tasks. It also
// provides the "Clear Completed" button. This component
// does not own task data—it only displays information
// received from TaskBoard.
// TYPE: Client Component — contains an interactive button.
// PROPS:
// totalCount - total number of tasks
// activeCount - number of unfinished tasks
// completedCount - number of completed tasks
// onClearCompleted - callback from TaskBoard
// ══════════════════════════════════════════════════════

"use client";

export default function TaskStats({
  totalCount,
  activeCount,
  completedCount,
  onClearCompleted,
}) {
  return (
    <section className="mt-6 space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-slate-800 p-4 text-center">
          <p className="text-2xl font-black text-white">{totalCount}</p>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Total
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800 p-4 text-center">
          <p className="text-2xl font-black text-amber-300">
            {activeCount}
          </p>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Active
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800 p-4 text-center">
          <p className="text-2xl font-black text-emerald-300">
            {completedCount}
          </p>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Done
          </p>
        </div>
      </div>

      {/* Conditional render: the clear button only appears when
      there is at least one completed task. This prevents showing
      an action that currently has nothing to do. */}
      {completedCount > 0 && (
        <button
          onClick={onClearCompleted}
          className="w-full rounded-2xl border border-rose-400/30 px-4 py-3 font-bold text-rose-300 transition hover:bg-rose-400/10"
        >
          Clear Completed Tasks
        </button>
      )}
    </section>
  );
}