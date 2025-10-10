// src/pages/Register.tsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, TextField, Typography, Stack } from "@mui/material";
import ChitChatLogo from "../assets/chit_chat_logo_v2_white.png";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(`${BACKEND_URL}/authentication/register`, {
        username,
        password,
        fullname,
      }, 
      { withCredentials: true }
      );

      alert("Account created successfully! You can now login.");
      navigate("/login");
    } catch (err: unknown) {
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
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ width: 400, p: 1, boxShadow: 4, borderRadius: 3 }}>
        <CardContent>
          <Box display="flex" justifyContent="center" mb={1}>
            <img src={ChitChatLogo} alt="Chit Chat Logo" style={{ width: 200 }} />
          </Box>
          <Typography variant="h5" textAlign="center" gutterBottom>
            Create Account
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
                fullWidth
                data-testid="register-fullname"
              />
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth
                data-testid="register-username"
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                data-testid="register-password"
              />
              <Button type="submit" variant="contained" fullWidth data-testid= "register-button">
                Register
              </Button>
            </Stack>
          </Box>

          {error && (
            <Typography color="error" textAlign="center" pt={2} data-testid="auth-error">{error}</Typography>
          )}

          <Typography variant="body2" textAlign="center" mt={2}>
            Already have an account?{" "}
            <Button onClick={() => navigate("/login")}>Login here</Button>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}