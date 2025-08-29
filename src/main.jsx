import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "./index.css";
import LandingPage from "./pages/LandingPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);
