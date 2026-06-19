# TaskMaster-React-Frontend

A modern, full-stack task management application built with React and powered by a Node.js backend. TaskMaster helps you organize, track, and manage your daily tasks efficiently with a clean, intuitive user interface.

## Features

- ✅ **Create Tasks** - Quickly add new tasks to your to-do list
- ✏️ **Mark Complete/Incomplete** - Toggle task status with a single click
- 🗑️ **Delete Tasks** - Remove tasks you no longer need
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 💾 **Persistent Storage** - All tasks are saved to a backend database
- ⚡ **Real-time Updates** - Instant feedback on all task operations

## Tech Stack

**Frontend:**
- React 19.2.6
- React Bootstrap 2.10.10
- Bootstrap 5.3.8
- Vite 8.0.12

**State Management:**
- React Context API
- Custom Hooks
- Immer 11.1.8 (immutable state updates)

**API Communication:**
- Axios 1.17.0

**Development Tools:**
- ESLint 9.39.4
- Prettier
- React Bootstrap Icons

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:DGashaw/TaskMaster-React-Frontend.git
cd taskMaster
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run development
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run development` - Start the development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code with Prettier
- `npm run preview` - Preview the production build

## Project Structure

```
src/
├── components/          # React components (Header, TaskInput, TaskList, etc.)
├── store/              # Context API setup and state management
├── hooks/              # Custom React hooks
├── hoc/                # Higher-order components
├── utility/            # Utility functions and API client
├── App.jsx             # Main App component
└── main.jsx            # Application entry point
```

## How It Works

TaskMaster uses React Context API for state management with a custom middleware pattern for handling async operations. The app communicates with a backend API to persist tasks in a database.

### Key Architecture Decisions:
- **Context API** - Centralized state management
- **Middleware Pattern** - Clean separation of concerns for API calls
- **Immer.js** - Safe immutable state updates
- **Bootstrap Components** - Consistent, professional UI

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.
