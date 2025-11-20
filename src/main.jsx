import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="h-screen px-3 bg-[#f4f4f4b1] dark:bg-[var(--color-bg)]">
      <App />
    </div>
  </StrictMode>
);
