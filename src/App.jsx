import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Make sure to import BrowserRouter
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import HomePage from "./pages/HomePage";
import DonationPage from "./pages/DonationPage";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Wrap everything inside Router */}
      <Router>
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/donate" element={<DonationPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
