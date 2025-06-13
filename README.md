# PlanoPro

This is a React app for managing lesson plans.

## Technologies Used

### Frontend

- **NextJS + React + TypeScript**: Modern development environment for fast and efficient frontend building.
- **Axios**: For API requests.
- **TailwindCSS**: For styling the components.
- **Ant Design**: For modern UI components.

### Backend

- **Express + TypeScript**: A minimalist and modern web framework for building fast and scalable APIs with static typing support.
- **Prisma ORM**: A next-generation ORM for intuitive, type-safe, and performant database access.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn or pnpm installed

### Installation Backend

1. Clone the repository

2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Create the .env file based on .env.example:
   ```bash
   copy .env.example .env
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Generate prisma client:
   ```bash
   npx prisma generate
   ```
6. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```
7. Start the development server:
   ```bash
   npm run dev
   ```

### Installation Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Create the .env file based on .env.example:

   ```bash
   copy .env.example .env
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

⚠️ The Frontend application will be available at http://localhost:3000.
Make sure your API server (backend) is running at http://localhost:3333, or update the API base URL in .env file if necessary.
