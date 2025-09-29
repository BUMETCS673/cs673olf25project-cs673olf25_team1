// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

type ProtectedProps = {
  children: React.ReactNode;
  user: any;
};

export default function ProtectedRoute({ children, user }: ProtectedProps) {
  return user ? children : <Navigate to="/login" />;
}