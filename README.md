# FocusForge Task Manager

## Project Description

FocusForge Task Manager is a responsive task management application built with Next.js, React, JavaScript, and Tailwind CSS. It allows users to create, complete, delete, filter, and manage tasks through a clean dashboard interface. Tasks are automatically saved using localStorage so they remain available after the browser is refreshed.

## Features

- Add tasks with a controlled form
- Reject blank task submissions
- Mark tasks as complete or incomplete
- Delete individual tasks
- Filter tasks by All, Active, and Done
- Display live total, active, and completed task counts
- Clear all completed tasks
- Persist tasks using localStorage
- Responsive dashboard layout

## Design Direction

I chose a modern dark-mode dashboard layout instead of a traditional vertical task list. The interface uses a sidebar for task statistics and filtering, along with rounded cards, cyan accent colors, and clear visual indicators for completed tasks. The goal was to create an interface that feels organized, easy to navigate, and visually appealing.

## Technologies Used

- Next.js 16
- React 19
- JavaScript
- Tailwind CSS v4

## Project Structure

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
└── components/
    ├── AddTaskForm.js
    ├── TaskBoard.js
    ├── TaskCard.js
    ├── TaskList.js
    └── TaskStats.js

README.md
```

## How to Run the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

## What I Learned

Building this project improved my understanding of React component organization, state management, callback functions, immutable state updates, and browser storage with localStorage. I also gained experience using Next.js, structuring a larger project across multiple components, debugging application logic, and documenting a project for GitHub. This project helped me become more confident developing business applications that are both functional and user-friendly.

## AI Usage Log

- Used AI to help interpret the assignment requirements and organize the project structure.
- Used AI to better understand React concepts including state management, callback props, derived values, immutable updates, and localStorage.
- Used AI as a debugging assistant while developing the application.
- Reviewed, tested, and verified all generated suggestions before including them in the final project.

## Author

Hayden Scragg
