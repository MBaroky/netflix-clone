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

Open [http://localhost:3000](http://localhost:8080) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Poppins](https://fonts.google.com/specimen/Poppins), a modern and versatile font family.

## Editing Features

### Custom Styles

#### Tailwind CSS Skeleton Class
To modify the skeleton class used for loading states, edit the `tailwind.config.js` file:
```javascript
// filepath: /tailwind.config.js
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

#### `useInfoModal`
Located in `hooks/useInfoModal.ts`. Manages the state of the information modal.

**Usage:**
```typescript
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

const { openModal } = useInfoModal();

return (
  <>
    <button onClick={() => openModal("movieId123")}>Open Info Modal</button>
    <InfoModal />
  </>
);
```

#### `useScrollListener`
Located in `hooks/useScrollListener.ts`. Listens for scroll events and executes a callback.

**Usage:**
```typescript
import useScrollListener from "@/hooks/useScrollListener";

useScrollListener((scrollY) => {
  console.log("Scroll position:", scrollY);
});
```

#### `useVideoDuration`
Located in `hooks/useVideoDuration.ts`. Controls playback duration of a video element.

**Usage:**
```typescript
import useVideoDuration from "@/hooks/useVideoDuration";
import { useRef } from "react";

const videoRef = useRef<HTMLVideoElement>(null);
useVideoDuration({ videoRef, startTime: 10, stopTime: 20 });
const Component = () =>{
  return(
    <video ref={videoRef} ></video>
  )
}
```

### Utilities and Constants

#### Constants
Constants are located in the `utils/constants.ts` file. To modify or add constants, edit this file:
```typescript
// filepath: /utils/constants.ts
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
// filepath: /utils/formatDate.ts
// ...existing code...
export const formatDate = (date: string): string => {
  // Logic to format a date string
  return new Date(date).toLocaleDateString();
};
// ...existing code...
```

To add or modify utility functions, create or edit files in the `utils` directory.

### Components

#### `Skeleton`
Located in `components/Skeleton.tsx`. Displays a skeleton loader for loading states.

**Usage:**
```tsx
import Skeleton from "@/components/Skeleton";

<Skeleton isLoading={true} className="w-32 h-8" placeholder="Loading...">
  <p>{Loaded Data}</p>
</Skeleton>;
```

#### `Loader`
Located in `components/Loader.tsx`. Displays a spinning loader icon.

**Usage:**
```tsx
import Loader from "@/components/Loader";

<Loader />;
```

#### `WatchVideoPlayer`
Located in `components/videoplayer/WatchVideoPlayer.tsx`. Plays a video for a specific movie.

**Usage:**
```tsx
import WatchVideoPlayer from "@/components/videoplayer/WatchVideoPlayer";

<WatchVideoPlayer movieId="movieId123" />;
```

#### `Toast`
Located in `components/Toast/index.tsx`. Displays toast notifications.

**Usage:**
```tsx
import Toast from "@/components/Toast";
import { useToastStore } from "@/components/Toast/toastStore";

const { showToast } = useToastStore();

<button onClick={() => showToast("This is a success message", "success")}>
  Show Success Toast
</button>;

<Toast />;
```

#### `MovieCard`
Located in `components/MovieCard/index.tsx`. Displays a card for a movie with actions.

**Usage:**
```tsx
import MovieCard from "@/components/MovieCard";

<MovieCard data={movieData} />;
```

#### `InfoModal`
Located in `components/InfoModal/index.tsx`. Displays detailed information about a movie.

**Usage:**
```tsx
import InfoModal from "@/components/InfoModal";
import useInfoModal from "@/hooks/useInfoModal";

const { openModal } = useInfoModal();

return (
  <>
    <button onClick={() => openModal("movieId123")}>Open Info Modal</button>
    <InfoModal />;
  </>
);
```

### Global Types
Global types are located in the `types` directory. For example:
```typescript
// filepath: /types/index.d.ts
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
