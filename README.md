# Full Stack Portfolio

A modern, responsive full-stack portfolio application built with React, Vite, TailwindCSS, Node.js, and Express.

## Features

- **Modern Design**: Clean, monochromatic aesthetic with subtle animations.
- **Responsive**: Mobile-first approach ensuring great experience on all devices.
- **Sections**: Home, About, Projects, and Skills.
- **Contact Form**: Functional contact modal with backend integration (mock email sending).
- **Tech Stack**:
    - **Frontend**: Vite, React, TypeScript, TailwindCSS, Lucide React.
    - **Backend**: Node.js, Express, TypeScript.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd portfolio-gemini
```

### 2. Backend Setup
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file in the `server` directory (already created):
```
PORT=3001
```

Start the backend server:
```bash
npm start
# OR for development with auto-reload
npx ts-node src/server.ts
```
The server will run on `http://localhost:3001`.

### 3. Frontend Setup
Open a new terminal, navigate to the client directory and install dependencies:
```bash
cd client
npm install
```

Start the development server:
```bash
npm run dev
```
The application will run on `http://localhost:5173`.

## Project Structure

```
portfolio-gemini/
├── client/                 # Frontend (Vite + React)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── sections/       # Page sections
│   │   ├── hooks/          # Custom hooks
│   │   ├── assets/         # Static assets
│   │   ├── App.tsx         # Main application component
│   │   └── main.tsx        # Entry point
│   └── ...
└── server/                 # Backend (Express)
    ├── src/
    │   ├── controllers/    # Request handlers
    │   ├── routes/         # API routes
    │   └── server.ts       # Server entry point
    └── ...
```

## API Endpoints

- `POST /api/contact`: Accepts `{ name, email, message }` and returns a success message.

## Customization

- **Colors**: Edit `client/tailwind.config.js` to change the primary color palette.
- **Content**: Update the components in `client/src/sections/` to add your own information.
