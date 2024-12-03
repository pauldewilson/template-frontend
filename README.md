# Modern React Template with Vite and MUI

A modern, production-ready template for React applications using Vite as the build tool and Material-UI (MUI) for the component library. This template includes a preconfigured theme system with dark/light mode support, authentication, form management, storage utilities, and more.

## Features

- ⚡️ **Vite** - Lightning fast build tool with instant server start
- 🎨 **Material-UI** - Premium React component library with custom theming
- 🌓 **Dark/Light Mode** - Built-in theme switcher with localStorage persistence
- 🖼️ **Media Management** - Centralized media asset system with theme-aware images
- 🔒 **Authentication** - Mock auth system with protected routes
- 📝 **Form Management** - Reducer-based form state management
- 💾 **Storage Utility** - Prefixed localStorage management
- 🎯 **Environment Variables** - Type-safe environment variable management
- 🐳 **Docker Ready** - Containerization support with Docker and docker-compose
- ♻️ **React** - Latest React features including Strict Mode
- 🔄 **Hot Module Replacement** - Instant feedback during development

## Getting Started

### Local Development

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
VITE_IS_DOCKER=none
VITE_APP_NAME="React Template"
VITE_APP_STORAGE_PREFIX=template
```

4. Start the development server:
```bash
yarn dev
```

### Docker Development

1. Build and run using docker-compose:
```bash
docker-compose up --build
```

The application will be available at `http://localhost:5173`

## Project Structure

```bash
template-frontend/
├── src/
│   ├── components/            # Reusable components
│   │   ├── buttons/           # Button components
│   │   ├── media/             # Media components
│   │   └── ProtectedRoute     # Auth protection component
│   ├── constants/             # Application constants
│   │   └── media.js           # Media path definitions
│   ├── contexts/              # React contexts
│   ├── data/                  # Mock data and constants
│   ├── hooks/                 # Custom React hooks
│   ├── pages/                 # Application pages
│   │   ├── Showcases.jsx      # Component showcases
│   │   ├── StylesShowcase.jsx # Style system showcase
│   │   ├── MediaShowcase.jsx  # Media assets showcase
│   │   └── ThemeShowcase.jsx  # Theme showcase
│   ├── providers/             # Context providers
│   ├── reducers/              # State management
│   ├── theme/                 # Theme configuration
│   │   ├── colors.js          # Color palette definitions
│   │   ├── components.js      # Component style overrides
│   │   ├── shadows.js         # Shadow definitions
│   │   ├── theme.js           # Theme creation and configuration
│   │   └── themeContext.jsx   # Theme context and provider
│   └── utils/                 # Utility functions
├── public/
│   └── assets/                # Static assets
│       └── images/            # Image assets
│           ├── logos/         # Application logos
│           ├── illustrations/ # SVG illustrations
│           └── placeholders/  # Placeholder images
├── .env.development           # Development environment variables
├── Dockerfile                 # Docker configuration
├── docker-compose.yml         # Docker Compose configuration
├── nginx.conf                 # Nginx configuration for Docker
└── README.md
```

## Style System

This template includes a comprehensive style system featuring:
- Complete dark/light theme support
- Customized MUI component styles
- Custom shadow configurations
- Consistent spacing system

Visit the following routes to explore the style system:
- `/showcases` - General component showcase
- `/styles` - Style system showcase
- `/theme` - Theme and color system showcase
- `/media` - Media assets showcase

## Media System

This template includes a comprehensive media management system featuring:
- Centralized media constants
- Theme-aware image handling (dark/light mode)
- Consistent error handling with fallbacks
- Reusable Image component with proper prop-types
- Organized asset structure

### Asset Structure
```
public/
└── assets/
    └── images/
        ├── logos/          # Application logos and brand assets
        ├── illustrations/  # Decorative illustrations and icons
        └── placeholders/   # Placeholder and fallback images
```

### Usage

The media system provides several ways to use images:

1. Direct import using constants:
```javascript
import { APP_LOGOS } from '../constants/media';

const logo = APP_LOGOS.DARK; // Theme-aware logo path
```

2. Using the Image component:
```javascript
import { Image } from '../components/media/Image';

<Image
  src={src}
  alt="Description"
  width={200}
  height={80}
  fallback="/assets/images/placeholders/image-fallback.svg"
/>
```

3. Theme-aware assets using the hook:
```javascript
import { useMediaAsset } from '../hooks/useMediaAsset';

const { getThemeAwareLogo } = useMediaAsset();
const logoSrc = getThemeAwareLogo(); // Automatically switches based on theme
```

### Media Categories

- **Logos**: Brand assets with dark/light variations
- **Illustrations**: Decorative SVG graphics for various UI states
- **Placeholders**: Fallback images and content placeholders

Visit `/media` route to view all available media assets with their paths and preview thumbnails.

## Environment Configuration

The template supports different environment configurations:

### Local Development
Use `.env.development` for local development settings.

### Docker Development
Environment variables are configured in both:
- `Dockerfile` - Build-time defaults
- `docker-compose.yml` - Runtime overrides

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build

## Docker Commands

- `docker-compose up --build` - Build and start the container
- `docker-compose up` - Start existing container
- `docker-compose down` - Stop and remove containers

## License

Proprietary. Not for reuse.