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
    <div className="mx-6 mt-4 grid grid-cols-3 items-center">
      <div className="col-span-2">
      <form onSubmit={handleSubmit} className=" mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Security Settings</h1>
        <p className="mb-6">Change your account password</p>
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
      <div className="bg-[#b0b7ff5f] p-6 rounded-xl">
        <h1 className="text-xl font-medium mb-3">Rules for password</h1>
        <p>To create a new password, you would have to meet all the requirements</p>
        <ol className="my-3.5">
          <li className="mb-2">- Lorem ipsum dolor.</li>
          <li className="mb-2">- Ratione perferendis rerum eius colpa eligendi.</li>
          <li className="mb-2">- Eius colpa eligendi.</li>
        </ol>
      </div>
    </div>
  );
};

export default Security;