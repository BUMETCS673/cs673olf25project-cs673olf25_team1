// pages/Profile.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Stack,
  Avatar,
  Tooltip,
} from "@mui/material";

const availableAvatars = [
  "/avatar1.png",
  "/avatar2.png",
  "/avatar3.png",
  "/avatar4.png",
  "/avatar5.png",
  "/avatar6.png",
];

const availableThemes = [
  { name: "Blue", color: "#3b82f6" },
  { name: "Green", color: "#10b981" },
  { name: "Purple", color: "#8b5cf6" },
  { name: "Red", color: "#ef4444" },
];

interface UserProfile {
  displayName: string;
  avatar: string;
  themeColor: string;
}

interface ProfilePageProps {
  user: any;
  onUpdateUser: (updatedUser: any) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user, onUpdateUser }) => {
  const [profile, setProfile] = useState<UserProfile>({
    displayName: user.displayName || "",
    avatar: user.avatar || availableAvatars[0],
    themeColor: user.themeColor || availableThemes[0].color,
  });
  const [loading, setLoading] = useState(false);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

  const handleChange = (field: keyof UserProfile, value: string) => {
    setProfile({ ...profile, [field]: value });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const token = sessionStorage.getItem("token");
      console.log(token);
      if (!token) throw new Error("No token found. Please log in again.");

      const { data } = await axios.put(`${BACKEND_URL}/account/me`, profile, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Update the app-level user state and sessionStorage
      onUpdateUser(data);
      sessionStorage.setItem("user", JSON.stringify(data));

      alert("Profile updated successfully!");
    } catch (err: any) {
      console.error(err);
      alert("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Card sx={{ width: 450, borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h5" textAlign="center" gutterBottom>
            Edit Profile
          </Typography>

          <Stack spacing={3}>
            {/* Display Name */}
            <TextField
              label="Display Name"
              value={profile.displayName}
              onChange={(e) => handleChange("displayName", e.target.value)}
              fullWidth
            />

            {/* Avatar Selection */}
            <Box>
              <Typography variant="subtitle1" mb={1}>
                Avatar
              </Typography>
              <Stack direction="row" spacing={2}>
                {availableAvatars.map((a) => (
                  <Tooltip key={a} title="Click to select">
                    <Avatar
                      src={a}
                      sx={{
                        width: 56,
                        height: 56,
                        border:
                          profile.avatar === a
                            ? `3px solid ${profile.themeColor}`
                            : "2px solid transparent",
                        cursor: "pointer",
                      }}
                      onClick={() => handleChange("avatar", a)}
                    />
                  </Tooltip>
                ))}
              </Stack>
            </Box>

            {/* Theme Selection */}
            <Box>
              <Typography variant="subtitle1" mb={1}>
                Theme Color
              </Typography>
              <Stack direction="row" spacing={2}>
                {availableThemes.map((t) => (
                  <Box
                    key={t.color}
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      backgroundColor: t.color,
                      border:
                        profile.themeColor === t.color
                          ? "3px solid black"
                          : "2px solid transparent",
                      cursor: "pointer",
                    }}
                    onClick={() => handleChange("themeColor", t.color)}
                  />
                ))}
              </Stack>
            </Box>

            {/* Save Button */}
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              fullWidth
              disabled={loading}
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfilePage;