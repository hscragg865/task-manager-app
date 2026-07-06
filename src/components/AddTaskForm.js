// ══════════════════════════════════════════════════════
// COMPONENT: AddTaskForm
// PURPOSE: Displays a controlled form that allows the user
// to create new tasks. This component only owns the text
// currently being typed. The actual task list belongs to
// TaskBoard and is updated through a callback.
// TYPE: Client Component — uses useState and form events.
// PROPS:
// onAdd - callback function from TaskBoard that receives
// the new task title.
// ══════════════════════════════════════════════════════

"use client";

import { useState } from "react";

export default function AddTaskForm({ onAdd }) {
  // STATE: title stores the current text inside the input box.
  // This state belongs here because only this component needs
  // to know what the user is currently typing.
  const [title, setTitle] = useState("");

  // HANDLER: Runs when the form is submitted.
  function handleSubmit(event) {
    // Prevent the browser from refreshing the page.
    event.preventDefault();

    // Prevent empty or whitespace-only tasks.
    if (!title.trim()) {
      return;
    }

    // Send the cleaned task title back to TaskBoard.
    // TaskBoard owns the task array, so this component
    // simply reports the user's input upward.
    onAdd(title.trim());

    // Reset the input after successfully adding a task.
    setTitle("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-3 sm:grid-cols-[1fr_auto]"
    >
      {/* Hidden label improves accessibility for screen readers */}
      <label htmlFor="task-title" className="sr-only">
        Task Title
      </label>

      <input
        id="task-title"
        type="text"
        placeholder="Enter a new task..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-4 text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300"
      />

      <button
        type="submit"
        className="rounded-2xl bg-cyan-300 px-6 py-4 font-bold text-slate-950 transition hover:bg-cyan-200"
      >
        Add Task
      </button>
    </form>
  );
}