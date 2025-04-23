This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Editing Features](#editing-features)
  - [Custom Styles](#custom-styles)
    - [Tailwind CSS Skeleton Class](#tailwind-css-skeleton-class)
  - [Custom Hooks](#custom-hooks)
  - [Utilities and Constants](#utilities-and-constants)
    - [Constants](#constants)
    - [Utility Functions](#utility-functions)
  - [Components](#components)
  - [Global Types](#global-types)
- [API Guide](#api-guide)
- [Live Demo](#live-demo)

## Netflix Clone

This project is a Netflix clone built with Next.js. It replicates the core functionality of Netflix, including browsing movies, viewing details, and streaming content. The application is styled to resemble Netflix's user interface.

### Features

- User authentication (sign up, login, and logout).
- Browse a collection of movies and TV shows.
- View detailed information about each movie or show.
- Responsive design for seamless use across devices.
- Video streaming functionality.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Inter](https://fonts.google.com/specimen/Inter), a modern and versatile font family.

## Editing Features

### Custom Styles

#### Tailwind CSS Skeleton Class
To modify the skeleton class used for loading states, edit the `tailwind.config.js` file:
```javascript
// filepath: /home/mbaroky/netflix-clone/tailwind.config.js
// ...existing code...
theme: {
  extend: {
    // Add or modify the skeleton class here
    animation: {
      skeleton: 'pulse 2s infinite',
    },
    colors: {
      skeleton: '#e0e0e0',
    },
  },
},
// ...existing code...
```

### Custom Hooks
Custom hooks are located in the `hooks` directory. For example:
```typescript
// filepath: /home/mbaroky/netflix-clone/hooks/useAuth.ts
// ...existing code...
export const useAuth = () => {
  // Logic for user authentication
};
// ...existing code...
```

### Utilities and Constants

#### Constants
Constants are located in the `utils/constants.ts` file. To modify or add constants, edit this file:
```typescript
// filepath: /home/mbaroky/netflix-clone/utils/constants.ts
// ...existing code...
export const API_BASE_URL = 'https://api.example.com';
export const DEFAULT_LANGUAGE = 'en-US';
// Add or modify constants here
export const MAX_ITEMS_PER_PAGE = 20;
// ...existing code...
```

#### Utility Functions
Utility functions are located in the `utils` directory. For example:
```typescript
// filepath: /home/mbaroky/netflix-clone/utils/formatDate.ts
// ...existing code...
export const formatDate = (date: string): string => {
  // Logic to format a date string
  return new Date(date).toLocaleDateString();
};
// ...existing code...
```

To add or modify utility functions, create or edit files in the `utils` directory.

### Components
Components are located in the `components` directory. For example:
```typescript
// filepath: /home/mbaroky/netflix-clone/components/Navbar.tsx
// ...existing code...
const Navbar = () => {
  return (
    <nav>
      {/* Navbar content */}
    </nav>
  );
};
export default Navbar;
// ...existing code...
```
To add or modify a component, create or edit files in the `components` directory.

### Global Types
Global types are located in the `types` directory. For example:
```typescript
// filepath: /home/mbaroky/netflix-clone/types/index.d.ts
// ...existing code...
export interface Movie {
  id: string;
  title: string;
  description: string;
  releaseDate: string;
}
// Add or modify global types here
// ...existing code...
```
To add or modify global types, create or edit files in the `types` directory.

## API Guide

### Available API Routes
Here is a list of available API routes, including dynamic ones:

- `GET /api/movies` - Fetch a list of movies.
- `GET /api/movies/[id]` - Fetch details of a specific movie by its ID.
- `POST /api/auth/login` - Log in a user.
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/logout` - Log out the current user.

Refer to the respective API route files in the `pages/api` directory for implementation details.

## Live Demo

Check out the live version of the project here: [Netflix Clone](https://netflix-clone-jimmy.vercel.app/)
