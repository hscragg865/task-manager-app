// ══════════════════════════════════════════════════════
// COMPONENT: TaskCard
// PURPOSE: Displays one task with its completion status,
// a button to toggle completion, and a button to delete
// the task. It does not own state—it simply displays the
// task and reports user actions back to TaskBoard.
// TYPE: Client Component — uses click events.
// PROPS:
// id - unique task identifier
// title - task title
// done - whether the task is complete
// onToggle - callback from TaskBoard
// onDelete - callback from TaskBoard
// ══════════════════════════════════════════════════════

"use client";

export default function TaskCard({
  id,
  title,
  done,
  onToggle,
  onDelete,
}) {
  // DERIVED VALUE: statusText depends entirely on the done property.
  // It does not need to be state because it can always be recalculated.
  const statusText = done ? "Completed" : "Active";

  // DERIVED VALUE: Different card styling depending on completion.
  // This satisfies the requirement that completed tasks have a
  // visually different appearance.
  const cardClasses = done
    ? "border-emerald-400/30 bg-emerald-400/10"
    : "border-slate-700 bg-slate-950";

  // DERIVED VALUE: Completed tasks appear with a line-through.
  const titleClasses = done
    ? "line-through text-slate-500"
    : "text-white";

  return (
    <article
      className={`grid gap-4 rounded-3xl border p-4 transition sm:grid-cols-[1fr_auto] sm:items-center ${cardClasses}`}
    >
      <div>
        <div className="mb-2">
          <span
            className={
              done
                ? "rounded-full bg-emerald-300 px-3 py-1 text-xs font-bold uppercase text-slate-950"
                : "rounded-full bg-amber-300 px-3 py-1 text-xs font-bold uppercase text-slate-950"
            }
          >
            {statusText}
          </span>
        </div>

        <p className={`text-lg font-bold ${titleClasses}`}>
          {title}
        </p>
      </div>

      <div className="flex gap-2">
        {/* Callback prop: sends this task's id back to TaskBoard so
        TaskBoard can update the shared task state. */}
        <button
          onClick={() => onToggle(id)}
          className="rounded-2xl bg-slate-800 px-4 py-3 text-sm font-bold text-white hover:bg-slate-700"
        >
          {done ? "Undo" : "Done"}
        </button>

        {/* Callback prop: asks TaskBoard to remove this task. */}
        <button
          onClick={() => onDelete(id)}
          className="rounded-2xl bg-rose-500/20 px-4 py-3 text-sm font-bold text-rose-300 hover:bg-rose-500/30"
        >
          Delete
        </button>
      </div>
    </article>
  );
}