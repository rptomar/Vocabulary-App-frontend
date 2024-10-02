
## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- MongoDB (if using a local MongoDB instance)

## Running the Backend (Node.js)

1. Navigate to the backend directory after cloning from reposetory:
    ```bash
    cd vocabulary-app-backend
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `vocabulary-app-backend` folder with the following environment variables (replace with your actual values):
    ```plaintext
    OXFORD_APP_ID=your_oxford_app_id
    OXFORD_APP_KEY=your_oxford_app_key
    MONGODB_URI=your_mongodb_connection_string
    ```

4. Start the Node.js server:
    ```bash
    node server.js
    ```

5. The backend server should now be running on `http://localhost:5000`.

## Running the Frontend (React)

1. In a separate terminal, navigate to the React frontend directory:
    ```bash
    cd vocabulary-app-frontend
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

4. The React app should automatically open in your browser at `http://localhost:3000`. If it doesn't, manually navigate to that address.

## Summary of Commands

### Start the Backend:
```bash
cd vocabulary-app-backend
npm install
node server.js
