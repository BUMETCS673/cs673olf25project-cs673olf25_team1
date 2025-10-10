// src/pages/Login.tsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Stack,
  Link,
} from "@mui/material";
import ChitChatLogo from "../assets/chit_chat_logo_v2_white.png";
import socket from "../hooks/socket";

type LoginProps = {
  onLogin: (user: any) => void; // pass the user object to App
};

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        `${BACKEND_URL}/authentication/login`,
        { username, password },
        { withCredentials: true }
      );

      const token = res.data.accessToken || res.data.access_token;
      const user = res.data.user;

      if (!token) {
        console.error("No token found in response:", res.data);
        setError("Login failed: token missing.");
        return;
      }

      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(user));

      onLogin({ user, token }); // update App state
      navigate("/community"); // redirect after login
      socket.emit("user-logged-in", { username: user.username });
      socket.emit("recieve-existing-messages");
    } catch (err: unknown) {
      console.error("Login error:", err);
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
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card sx={{ width: 400, p: 1, boxShadow: 4, borderRadius: 3 }}>
        <CardContent>
          <Box display="flex" justifyContent="center" mb={1}>
            <img
              src={ChitChatLogo}
              alt="Chit Chat Logo"
              style={{ width: 200 }}
            />
          </Box>

          <Typography variant="h5" textAlign="center" gutterBottom>
            Sign In
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth
                data-testid="login-username"
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                data-testid="login-password"
              />
              <Button type="submit" variant="contained" fullWidth data-testid="login-button">
                Login
              </Button>
            </Stack>
          </Box>

          {error && (
            <Typography color="error" textAlign="center" pt={2} data-testid="auth-error">
              {error}
            </Typography>
          )}

          <Typography variant="body2" textAlign="center" mt={2}>
            Don’t have an account?{" "}
            <Link
              component="button"
              variant="body2"
              onClick={() => navigate("/register")}
            >
              Register here
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}