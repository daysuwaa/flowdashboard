"use client";

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Button from "@mui/material/Button";
import InputField from "../components/InputField";
import CircularProgress from "@mui/material/CircularProgress";

const Security = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    match: "",
    strength: "",
  });

  const isPasswordStrong = (password: string) => password.length >= 8;

  const isFormValid =
    newPassword === confirmPassword && isPasswordStrong(newPassword);

  useEffect(() => {
    if (!newPassword || !confirmPassword) {
      setErrors({ match: "", strength: "" });
      return;
    }

    const match = newPassword !== confirmPassword ? "Passwords do not match" : "";
    const strength = !isPasswordStrong(newPassword)
      ? "Password must be at least 8 characters"
      : "";

    setErrors({ match, strength });
  }, [newPassword, confirmPassword]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error("Please fix validation errors before saving.");
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
      setErrors({ match: "", strength: "" });
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:mx-6 mt-4 grid lg:grid-cols-3 items-center gap-4">
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="mx-auto lg:p-8">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Security Settings</h1>
          <p className="mb-6">Change your account password</p>

          <InputField
            type="password"
            placeholder="********"
            label="Old Password"
            aria-label="Old Password"
            value={oldPassword}
            onChange={setOldPassword}
          />

          <InputField
            type="password"
            placeholder="********"
            label="New Password"
            aria-label="New Password"
            aria-invalid={!!errors.strength}
            value={newPassword}
            onChange={setNewPassword}
          />
          {errors.strength && (
            <p className="text-red-500 text-sm mt-1">{errors.strength}</p>
          )}

          <InputField
            type="password"
            placeholder="********"
            label="Confirm Password"
            aria-label="Confirm Password"
            aria-invalid={!!errors.match}
            value={confirmPassword}
            onChange={setConfirmPassword}
          />
          {errors.match && (
            <p className="text-red-500 text-sm mt-1">{errors.match}</p>
          )}

          <div className="w-full flex justify-end mt-4">
            <Button
              type="submit"
              variant="contained"
              disabled={!isFormValid || loading}
              sx={{
                backgroundColor: "#232323",
                textTransform: "none",
                width: { xs: "100%", md: "auto" },
                '&:hover': {
                  backgroundColor: '#464646',
                  color: '#fff',
                },
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

      <div className="bg-[#b0b7ff5f] mt-4 p-6 rounded-xl">
        <h1 className="text-xl font-medium mb-3">Rules for password</h1>
        <p>To create a new password, you would have to meet all the requirements:</p>
        <ol className="my-3.5 list-disc ml-5 text-sm text-gray-700">
          <li className="mb-2">Must be at least 8 characters long.</li>
          <li className="mb-2">Avoid common or guessable words.</li>
          <li className="mb-2">Use a mix of letters, numbers, and symbols.</li>
        </ol>
      </div>
    </div>
  );
};

export default Security;