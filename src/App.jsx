import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// Pages & Component
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign up/SignUp";
import Navbar from "./components/Navbar";

export default function App() {
  const {authIsReady, user} = useAuthContext()

  return (
    <div>
    {authIsReady && (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route 
            exact path="/" 
            element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" 
          element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/signup" 
          element={!user ? <SignUp /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    )}
    </div>
  );
}
