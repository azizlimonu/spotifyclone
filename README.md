# Full Stack Spotify Clone with Next.js 13.4 React, Tailwind, Supabase, PostgreSQL, Stripe

Key Features:

- Song Upload & Audio Playback
- Stripe Integration for Payments
- Sleek UI Design with Tailwind CSS
- Smooth Animations & Transitions
- Full Responsiveness for All Devices
- Secure Credential Authentication (Supabase)
- GitHub Authentication Integration
- File & Image Upload with Supabase Storage
- Client-side Form Validation (react-hook-form)
- Server-side Error Handling (react-toast)
- Favorites & Playlists System
- Advanced Audio Player Component
- Stripe Recurring Payment Integration
- Custom API Routes (POST, GET, DELETE)
- Direct Database Access in Server React Components
- Real-time Component Communication
- Subscription Cancellation (Stripe)


### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/AntonioErdeljac/next13-spotify.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
```

### Add SQL Tables
Use `database.sql` file, create songs and liked_songs table (there is a video tutorial)

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
