# Soccer Matches App

This project displays a list of upcoming soccer matches fetched from a backend API.

## Project Structure

- `backend/`: Node.js Express backend server fetching match data from a free API.
- `frontend/`: React frontend built with Vite and styled with Tailwind CSS.

## Getting Started

### Backend

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the backend server:
   ```
   npm run dev
   ```
   The backend server will run on port 5000 by default.

### Frontend

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the frontend development server:
   ```
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`.

### Usage

- Open your browser and go to `http://localhost:5173`.
- The app will fetch upcoming soccer matches from the backend and display them.
- Use the search input to filter matches by team name.

## Notes

- Ensure the backend server is running before starting the frontend to avoid fetch errors.
- The backend fetches data from the Scorebat video API and serves the top 10 matches.

## Dependencies

- Backend: express, cors, axios
- Frontend: react, react-dom, vite, tailwindcss

## License

This project is open source and free to use.
