# FocusForge Task Manager

## Project Description

FocusForge Task Manager is a Next.js task management app built with React and Tailwind CSS. It allows users to add, complete, delete, filter, clear, and save tasks in the browser using localStorage.

## Features

- Add tasks with a controlled form
- Reject blank tasks
- Toggle tasks complete or incomplete
- Delete individual tasks
- Filter by All, Active, and Done
- Show live total, active, and completed counts
- Clear all completed tasks
- Persist tasks after browser refresh using localStorage

## Design Direction

I chose a dark-mode dashboard design. The app uses a sidebar for stats and filters instead of placing everything in one vertical list. The design uses a slate background, cyan accent buttons, rounded cards, larger spacing, and status-based visual changes for completed tasks.

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS v4
- JavaScript

## Project Structure

```text
src/app/page.js
src/app/layout.js
src/app/globals.css
src/components/TaskBoard.js
src/components/TaskList.js
src/components/TaskCard.js
src/components/AddTaskForm.js
src/components/TaskStats.js
README.md
```

## Setup Instructions

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app:

```text
http://localhost:3000
```

## AI Usage Log

- I used AI to help break down the assignment requirements into the required Next.js file structure.
- I used AI to help explain React concepts such as state, derived values, callback props, immutable updates, and localStorage.
- I used AI to help debug project setup issues and improve code comments, but I reviewed and tested the code before submission.

## Author

Hayden Scragg