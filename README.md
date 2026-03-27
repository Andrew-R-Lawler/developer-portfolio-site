# Developer Portfolio Site

A modern, high-performance developer portfolio website featuring a premium dark-mode design with glassmorphism. It uses a monorepo structure with a Golang built backend over the Gin framework and a React TypeScript frontend.

## 🚀 Features

*   **Premium Dark-Mode Design:** A sleek, modern aesthetic using glassmorphism for a polished user experience.
*   **Responsive Layout:** Fully responsive UI built with React and modern CSS techniques.
*   **Dynamic Content:** Data (projects, skills, profile information) is served dynamically via a REST API from the Go backend.
*   **Interactive UI Capabilities:** Features client-side routing, interactive project displays, and a functional contact form outline.
*   **Monorepo Structure:** Cleanly separates frontend and backend code within a single repository for easier development and deployment.

## 🛠️ Technology Stack

**Frontend:**
*   [React 18](https://react.dev/) - UI Library
*   [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language
*   [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
*   [React Router](https://reactrouter.com/) - Client-side routing
*   [Lucide React](https://lucide.dev/) - Beautiful & consistent icons

**Backend:**
*   [Go (Golang)](https://go.dev/) - Fast, statically typed, compiled language
*   [Gin](https://gin-gonic.com/) - HTTP web framework written in Go
*   RESTful API architecture

## 📁 Project Structure

```
developer-portfolio-site/
├── backend/          # Golang server & API code
│   ├── main.go       # Main entry point and API routes
│   └── go.mod        # Go module dependencies
├── frontend/         # React SPA
│   ├── src/          # React components, styles, and logic
│   ├── public/       # Static assets
│   ├── index.html    # Entry HTML
│   ├── package.json  # NPM scripts and dependencies
│   └── vite.config.ts# Vite configuration
└── README.md         # Project documentation
```

## 🚦 Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18+ recommended)
*   [Go](https://go.dev/doc/install) (1.21+ recommended)

### Running the Frontend

1.  Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
    The frontend will typically run on `http://localhost:5173`.

### Running the Backend

1.  Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2.  Download Go modules (if not already cached):
    ```bash
    go mod tidy
    ```
3.  Run the server:
    ```bash
    go run main.go
    ```
    The backend API will run on `http://localhost:8080/api/v1`. 

### Production Build

For an integrated setup, you can build the frontend and serve it from the Go backend.

1.  Build the frontend:
    ```bash
    cd frontend
    npm run build
    ```
2.  Run the Go backend (it's configured to serve the static frontend dist files):
    ```bash
    cd backend
    go run main.go
    ```
    You can now access the full application on `http://localhost:8080`.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.