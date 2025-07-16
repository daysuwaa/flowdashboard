"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";
import InputField from "../components/InputField";
import CircularProgress from "@mui/material/CircularProgress";

const Security = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/mock", {
        method: "POST",
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      if (!response.ok) throw new Error("Failed");

      toast.success("Password updated successfully!");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="mx-6 mt-4 lg:fle">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto border rounded-lg border-gray-200 p-6 shadow-md">
        <h1 className="text-xl text-[#343C6A] font-semibold mb-6">Change your Password</h1>
        <InputField
          type="password"
          placeholder="********"
          label="Old Password"
          value={oldPassword}
          onChange={setOldPassword}
        />
        <InputField
          type="password"
          placeholder="*******"
          label="New Password"
          value={newPassword}
          onChange={setNewPassword}
        />
        <InputField
          type="password"
          placeholder="*******"
          label="Confirm Password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />
          <div className="w-full flex justify-end">
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{
              backgroundColor: "#232323",
              textTransform: "none",
              width: { xs: "100%", md: "auto" },
              padding: { xs: "8px 40px" },
              "&:disabled": { backgroundColor: "#999" },
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Save"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Security;