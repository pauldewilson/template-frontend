# Modern React Template with Vite and MUI

A modern, production-ready template for React applications using Vite as the build tool and Material-UI (MUI) for the component library. This template includes a preconfigured theme system with dark/light mode support, authentication, form management, storage utilities, and more.

## Features

- ⚡️ **Vite** - Lightning fast build tool with instant server start
- 🎨 **Material-UI v6** - Premium React component library with custom theming
- 🌓 **Dark/Light Mode** - Built-in theme switcher with localStorage persistence
- 🔒 **Authentication** - Mock auth system with protected routes
- 📝 **Form Management** - Reducer-based form state management
- 💾 **Storage Utility** - Prefixed localStorage management
- 🎯 **Environment Variables** - Type-safe environment variable validation
- 📏 **ESLint** - Preconfigured linting setup
- ♻️ **React 18** - Latest React features including Strict Mode
- 🔄 **Hot Module Replacement** - Instant feedback during development

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/pauldewilson/template-frontend
cd template-frontend
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env.development` file with required variables:
```env
VITE_ENV=development
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=React Template
VITE_APP_STORAGE_PREFIX=template
```

4. Start the development server:
```bash
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
template-frontend/
├── src/
│   ├── components/           # Reusable components
│   │   ├── buttons/         # Button components
│   │   └── ProtectedRoute   # Auth protection component
│   ├── contexts/            # React contexts
│   ├── data/               # Mock data and constants
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Application pages
│   ├── providers/          # Context providers
│   ├── reducers/           # State management
│   ├── theme/              # Theme configuration
│   │   ├── colors.js       # Color palette definitions
│   │   ├── components.js   # Component style overrides
│   │   ├── theme.js       # Theme creation and configuration
│   │   └── themeContext.jsx # Theme context and provider
│   └── utils/              # Utility functions
├── .env.development        # Development environment variables
├── .gitignore
├── eslint.config.js        # ESLint configuration
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md
```

## Features Overview

### Theme System
- Comprehensive dark/light mode support
- Persistent theme preference
- Custom component styling
- Material Design color system

### Authentication
- Mock authentication system
- Protected routes
- Persistent sessions
- Role-based user system

### Form Management
- Reducer-based form state
- Error handling
- Loading states
- Form validation

### Storage Utility
- Prefixed localStorage management
- Type-safe storage operations
- Error handling
- Automatic serialization

### Style Showcase
Visit `/styles` route to see all styled components:
- Typography variants
- Button variations
- Form elements
- Alerts
- Cards
- Paper variants
- And more...

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## Dependencies

### Core
- React 18.3.1
- Vite 6.0.1
- Material-UI 6.1.9
- React Router DOM 7.0.1
- Emotion (MUI styling engine)

### Development
- ESLint 9.15.0
- Various ESLint plugins for React
- TypeScript types for React

## License

Proprietry. Not for reuse.