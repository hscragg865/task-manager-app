// ══════════════════════════════════════════════════════
// COMPONENT: TaskBoard
// PURPOSE: This is the main controller for the app. It owns
// the task list and current filter, calculates the live stats,
// saves tasks to localStorage, and passes data/callbacks to
// smaller child components.
// TYPE: Client Component — uses useState, useEffect,
// localStorage, and browser click/form events.
// PROPS: None.
// ══════════════════════════════════════════════════════

"use client";

import { useEffect, useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";
import TaskStats from "./TaskStats";

export default function TaskBoard() {
  // STATE: tasks must be state because this is the main data that changes
  // when the user adds, toggles, deletes, or clears tasks. It cannot be
  // derived from another value, so TaskBoard owns it as the source of truth.
  const [tasks, setTasks] = useState(() => {
    // Next.js can render components before the browser exists, but
    // localStorage only exists in the browser. This guard prevents the app
    // from crashing during server rendering.
    if (typeof window === "undefined") {
      return [];
    }

    const savedTasks = localStorage.getItem("focusforge-tasks");

    // localStorage stores only strings, so JSON.parse converts the saved
    // string back into the array of task objects React needs.
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // STATE: filter is state because the user can change the current view
  // without changing the actual task list. It is separate from tasks because
  // viewing "active" or "done" should not edit the task data.
  const [filter, setFilter] = useState("all");

  // EFFECT: This syncs React state to the external browser storage system.
  // The dependency array is [tasks] because localStorage only needs to be
  // updated when the task list changes, not when the filter changes.
  useEffect(() => {
    localStorage.setItem("focusforge-tasks", JSON.stringify(tasks));
  }, [tasks]);

  // DERIVED VALUE: totalCount is calculated from tasks instead of stored in
  // state. If it were separate state, the count could accidentally become
  // different from the real array length.
  const totalCount = tasks.length;

  // DERIVED VALUE: activeCount is recalculated from tasks on each render.
  // It is not state because it is display information based on existing data.
  const activeCount = tasks.filter((task) => !task.done).length;

  // DERIVED VALUE: completedCount is also calculated from tasks. This avoids
  // duplicating the same information in multiple state variables.
  const completedCount = tasks.filter((task) => task.done).length;

  // DERIVED VALUE: visibleTasks is the filtered view of the task list.
  // It is intentionally not stored in state because it can always be rebuilt
  // from tasks + filter, which keeps the app simpler and less bug-prone.
  const visibleTasks =
    filter === "done"
      ? tasks.filter((task) => task.done)
      : filter === "active"
        ? tasks.filter((task) => !task.done)
        : tasks;

  // CALLBACK HANDLER: AddTaskForm owns the typing box, but TaskBoard owns
  // the actual task array. The child sends the finished title upward here.
  function handleAddTask(title) {
    // Immutable update: the spread operator creates a brand-new array.
    // React sees the new array reference and re-renders. Using push() would
    // mutate the existing state array directly, which React should not rely on.
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title,
        done: false,
      },
    ]);
  }

  // CALLBACK HANDLER: TaskCard sends a task id upward when the user clicks
  // the done/undo button. TaskBoard updates the matching task because it owns
  // the task data.
  function handleToggleTask(id) {
    // Immutable update: map() returns a new array. The matching task is copied
    // with spread and given the opposite done value; all other tasks are
    // returned unchanged.
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  // CALLBACK HANDLER: TaskCard sends the id of the task to delete. TaskBoard
  // removes it because deleting changes the shared task list.
  function handleDeleteTask(id) {
    // Immutable update: filter() creates a new array that excludes the
    // selected task. This avoids mutating the original array with splice().
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // CALLBACK HANDLER: TaskStats owns the clear button visually, but TaskBoard
  // owns the task list, so the clear action is handled here.
  function handleClearCompleted() {
    // Immutable update: filter() keeps only unfinished tasks and returns a new
    // array. This removes all completed tasks in one action.
    setTasks(tasks.filter((task) => !task.done));
  }

  return (
    <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[280px_1fr]">
      <aside className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          FocusForge
        </p>

        <h1 className="text-3xl font-black tracking-tight text-white">
          Task Command Center
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-400">
          A dark-mode productivity board with live stats, filters, and saved
          tasks.
        </p>

        <TaskStats
          totalCount={totalCount}
          activeCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={handleClearCompleted}
        />

        <div className="mt-6 grid gap-2">
          {["all", "active", "done"].map((buttonFilter) => (
            <button
              key={buttonFilter}
              onClick={() => setFilter(buttonFilter)}
              className={
                filter === buttonFilter
                  ? "rounded-2xl bg-cyan-300 px-4 py-3 text-left text-sm font-bold text-slate-950"
                  : "rounded-2xl bg-slate-800 px-4 py-3 text-left text-sm font-semibold text-slate-300 hover:bg-slate-700"
              }
            >
              {buttonFilter === "all"
                ? "All Tasks"
                : buttonFilter === "active"
                  ? "Active Tasks"
                  : "Done Tasks"}
            </button>
          ))}
        </div>
      </aside>

      <div className="rounded-3xl border border-slate-700 bg-slate-900 p-5 shadow-2xl shadow-black/30 sm:p-8">
        <AddTaskForm onAdd={handleAddTask} />

        <TaskList
          tasks={visibleTasks}
          filter={filter}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
      </div>
    </section>
  );
}