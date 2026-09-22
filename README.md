# AI Carbon Coach

AI Carbon Coach is a sustainability-focused web application designed to help students and eco-conscious users track, reduce, and understand their daily carbon footprint. The platform combines a clean dashboard experience with real-time eco insights, personalized recommendations, streak tracking, and gamified sustainability goals to make climate action engaging and measurable.

## Project Overview

This repository contains a complete frontend + backend prototype for a student-facing carbon tracking and recommendation system.

The main app focuses on:
- monitoring daily carbon impact
- tracking sustainability progress over time
- encouraging eco-friendly habits through interactive goals and streaks
- offering AI-inspired suggestions for reducing emissions
- presenting progress visually through charts and leaderboards

The product is tailored for students, campuses, and sustainability communities that want a simple, motivating, and visually rich way to improve habits and reduce emissions.

## Key Features

### 1. Smart Carbon Dashboard
- Track daily carbon-related performance and emissions overview
- View sustainability score and daily target progress
- Monitor progress against personalized eco goals

### 2. Goal-Based Sustainability System
- Adjustable personal eco goal modes such as Beginner, Intermediate, and Advanced
- Daily targets with clear progress bars and remaining reduction goals
- Personalized goal tracking stored in local storage for session continuity

### 3. AI Coach Suggestions
- AI-style recommendations for reducing carbon footprint
- Suggestions based on daily activities and eco patterns
- Encourages sustainable habits like using public transportation, reducing plastic use, and improving energy habits

### 4. Streak and Motivation System
- Daily eco streak tracking to encourage consistency
- Visual streak popups when progress improves
- Strong behavioral design to promote habit-building

### 5. Weekly Impact Visualization
- Charts showing carbon and sustainability trends over the last 7 days
- Activity breakdown by transport, electricity, and plastic footprint
- Clear comparison of daily and weekly impact

### 6. Leaderboard and Social Motivation
- Campus leaderboard with user rankings and eco scores
- Encourages healthy competition and community participation
- Built to support gamified engagement around sustainability

### 7. Achievement and Badge System
- Badges and achievement states for environmental progress
- Badge modal views and unlock logic aligned with user milestones
- Adds a rewarding layer to eco habits and consistency

### 8. Landing and Auth Experience
- Clear product landing page with value proposition
- Sign-in / onboarding flow for users entering the platform
- Professional, eco-themed UI designed to feel modern and approachable

## Tech Stack

### Frontend
- React 19
- Vite
- React Router
- Tailwind CSS
- Lucide React icons

### Backend
- Node.js
- Express.js
- dotenv

### Additional Tools
- JavaScript (ES modules)
- Vite dev server for local frontend development
- Environment-based configuration for backend API integration

## Repository Structure

```bash
AI-Carbon-Coach/
├── README.md
├── package.json
├── ai-carbon-coach/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── main.jsx
│       ├── index.css
│       ├── components/
│       └── pages/
├── server/
│   ├── index.js
│   ├── package.json
│   └── README.md
├── vite-project/
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   ├── public/
│   └── src/
│       ├── App.jsx
│       ├── components/
│       └── pages/
└── .gitignore
```

## Application Flow

1. User lands on the main product page and learns about the benefits of the app.
2. They sign in or continue through the onboarding flow.
3. They access a personalized dashboard with a carbon score and daily goals.
4. They review weekly trends, emissions breakdown, and goals.
5. They use the smart suggestion system to find actionable eco improvements.
6. They build streaks, earn badges, and compare themselves on the leaderboard.

## Getting Started

### Prerequisites
- Node.js 18+ recommended
- npm or yarn

### 1. Install frontend dependencies

```bash
cd ai-carbon-coach
npm install
```

### 2. Run the frontend app

```bash
npm run dev
```

This will start the Vite app locally, usually at:

```bash
http://localhost:5173
```

### 3. Install and run the backend server

```bash
cd server
npm install
node index.js
```

The server is configured to run on port 3000 by default.

### 4. Configure environment variables

Create a `.env` file in the `server` folder if needed:

```bash
PORT=3000
GEMINI_API_KEY=your_api_key_here
```

The backend currently exposes a sample route for Gemini integration and prepares the project for real AI-powered carbon suggestions.

## Current Status

This repository is a working prototype and frontend-driven eco dashboard with:
- interactive landing page
- sustainability dashboard
- AI suggestion experience
- leaderboard and streak system
- local goal management
- Express-based backend API scaffolding

## Future Enhancements

Potential next steps include:
- connecting the dashboard to a real database
- implementing user authentication with secure accounts
- integrating a live Gemini or OpenAI-powered recommendation engine
- storing emissions data per user over time
- adding personalized insights and forecast models
- expanding social features and campus challenge systems

## Project Purpose

AI Carbon Coach aims to turn sustainable living into a simple, motivating, and measurable habit. The platform is designed to help users understand their footprint, make smarter environmental choices, and stay consistent through reward-driven progress and AI-powered coaching.

## License

This project is currently distributed under the repository's default license configuration.

## Contributors

This project is suitable for student teams, hackathons, and sustainability-focused development workflows. Contributions are welcome.
