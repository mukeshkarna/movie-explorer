import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MovieProvider } from "./context/MovieContext";

createRoot(document.getElementById("root")).render(
  <MovieProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </MovieProvider>
);
