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
  Link,
  Stack,
} from "@mui/material";
import ChitChatLogo from "../assets/chit_chat_logo_v2_white.png";

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
          <Typography
            variant="h5"
            textAlign="center"
            fontWeight={400}
            gutterBottom
            sx={{ mb: 3 }}
          >
            {isRegistering ? "Create Account" : "Sign In"}
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              {isRegistering && (
                <TextField
                  label="Full Name"
                  variant="outlined"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                  fullWidth
                />
              )}

              <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth
              />

              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 1 }}
              >
                {isRegistering ? "Register" : "Login"}
              </Button>
            </Stack>
          </Box>

          {error && (
            <Typography color="error" variant="body2" textAlign="center" pt={2}>
              {error}
            </Typography>
          )}

          <Typography
            variant="body2"
            textAlign="center"
            mt={2}
          >
            {isRegistering ? (
              <>
                Already have an account?{" "}
                <Link
                  component="button"
                  variant="body2"
                  onClick={toggleMode}
                  sx={{ fontWeight: 600 }}
                >
                  Login here
                </Link>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <Link
                  component="button"
                  variant="body2"
                  onClick={toggleMode}
                  sx={{ fontWeight: 600 }}
                >
                  Register here
                </Link>
              </>
            )}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}