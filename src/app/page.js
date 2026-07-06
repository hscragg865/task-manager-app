// ══════════════════════════════════════════════════════
// COMPONENT: HomePage
// PURPOSE: Renders the main page of the app. It does not
// own task state because TaskBoard needs browser features
// like localStorage and click handlers.
// TYPE: Server Component — renders layout only.
// PROPS: None.
// ══════════════════════════════════════════════════════

import TaskBoard from "../components/TaskBoard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <TaskBoard />
    </main>
  );
}