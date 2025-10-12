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
  const [isRegistering, setIsRegistering] = useState(false);
  const [fullname, setFullname] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [fullname, setFullname] = useState("");

  const toggleMode = () => {
    setIsRegistering(!isRegistering);
    setError(""); // clear errors when switching modes
  };
  const navigate = useNavigate();

  const toggleMode = () => {
    setIsRegistering((prev) => !prev);
    setError("");
  };

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
                  data-testid="register-fullname" // ✅
                />
              )}

              <TextField
                label="Username"
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth
                data-testid="login-username" // ✅
              />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                data-testid="login-password" // ✅
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 1 }}
                data-testid={isRegistering ? "register-button" : "login-button"} // ✅
              >
                {isRegistering ? "Register" : "Login"}
              </Button>
            </Stack>
          </Box>

          {error && (
            <Typography
              color="error"
              variant="body2"
              textAlign="center"
              pt={2}
              data-testid="auth-error" // ✅
            >
              {error}
            </Typography>
          )}

          <Typography variant="body2" textAlign="center" mt={2}>
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
