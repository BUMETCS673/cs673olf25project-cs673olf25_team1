// src/pages/Login.tsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type LoginProps = {
  onLogin: (username: string) => void;
};

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

export default function Auth({ onLogin }: LoginProps) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleMode = () => {
    setError("");
    setIsRegistering(!isRegistering);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const url = `${BACKEND_URL}/authentication/${isRegistering ? "register" : "login"}`;
      const payload = isRegistering
        ? { username, password, fullname }
        : { username, password };

      console.log("Sending request to:", url, "payload:", payload);

      const res = await axios.post(url, payload, { withCredentials: true });
      console.log("Response:", res.data);

      if (isRegistering) {
        alert("Account created successfully! You can now login.");
        setIsRegistering(false);
        setUsername("");
        setPassword("");
        setFullname("");
      } else {
        const { accessToken, user } = res.data;
        localStorage.setItem("token", accessToken);
        onLogin(user);
        navigate("/community");
      }
    } catch (err: unknown) {
      console.error("Login/Register error:", err);
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Something went wrong");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <div className="auth-page">
      <h2>{isRegistering ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isRegistering && (
          <input
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        )}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">{isRegistering ? "Register" : "Login"}</button>
      </form>
      <p onClick={toggleMode} style={{ cursor: "pointer", marginTop: "10px" }}>
        {isRegistering
          ? "Already have an account? Login here"
          : "Don't have an account? Register here"}
      </p>
    </div>
  );
}