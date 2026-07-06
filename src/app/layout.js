// ══════════════════════════════════════════════════════
// COMPONENT: RootLayout
// PURPOSE: Provides the shared HTML shell for every page
// in the Next.js app. This wraps the page content with
// the <html> and <body> tags required by the App Router.
// TYPE: Server Component — no browser-only hooks or events.
// PROPS: children — the page or nested layout content that
// Next.js injects into this root layout.
// ══════════════════════════════════════════════════════

import "./globals.css";

export const metadata = {
  title: "FocusForge Task Manager",
  description: "A custom Next.js task manager with filters and persistence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}