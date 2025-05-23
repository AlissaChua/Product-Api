# Project Setup Guide

This document provides instructions on how to set up and run the project.

## Prerequisites

Before you begin, ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (which includes npm)

## Backend Setup (Product API)

The backend handles product-related functionalities.

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    *   In the `backend` directory, you will find a file named `.env.example`.
    *   Create a copy of this file and name it `.env`.
        ```bash
        cp .env.example .env
        ```
        (On Windows, you can use `copy .env.example .env`)
    *   Open the `.env` file and update the placeholder values with your actual configuration (e.g., database connection string, port).

4.  **Run the backend server:**
    (Assuming you have a start script in `backend/package.json`, e.g., `"start": "node server.js" or "node index.js"`)
    ```bash
    npm start
    ```
    If you don't have a start script, you might run it directly, for example:
    ```bash
    node server.js 
    ```
    (Replace `server.js` with your backend's main entry point file if different.)

## Frontend & Messaging Server Setup (Root)

The root directory may contain a server for the frontend and messaging features.

1.  **Navigate to the project root directory** (if you are in the `backend` directory, go up one level):
    ```bash
    cd .. 
    ```

2.  **Install dependencies** (if there's a `package.json` in the root):
    ```bash
    npm install
    ```

3.  **Run the server:**
    (Assuming you have a start script in the root `package.json`, e.g., `"start": "node server.js"`)
    ```bash
    npm start
    ```
    If you don't have a start script, you might run it directly:
    ```bash
    node server.js
    ```
    (Replace `server.js` with your root server's main entry point file if different.)

## Accessing the Application

*   **Backend API (Products):** Typically available at `http://localhost:PORT_BACKEND_API` (e.g., `http://localhost:5000/api/products` if your backend server runs on port 5000 and routes are under `/api/products`). Check your backend server's console output for the exact port.
*   **Frontend/Messaging:** Typically available at `http://localhost:PORT_FRONTEND_SERVER` (e.g., `http://localhost:3000` if your root server runs on port 3000).

Adjust port numbers and paths based on your specific project configuration.

