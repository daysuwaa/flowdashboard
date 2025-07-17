"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import UserProfile from "../../assets/EditProfile.png";
import toast from "react-hot-toast";
import Button from '@mui/material/Button';
import InputField from "../../components/InputField";
import DateOfBirthInput from "./DOBSelect";

const EditProfile = () => {
  const [dob, setDob] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [presentAddress, setPresentAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

const handleSubmit = async () => {
  const data = {
    name,
    email,
    dob,
    address,
    postalCode,
    userName,
    password,
    presentAddress,
    city,
    country,
  };

  try {
    const response = await fetch("/api/mock", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    toast.success("Saved successfully!");

    // ✅ Clear all fields
    setName("");
    setEmail("");
    setDob("");
    setAddress("");
    setPostalCode("");
    setUserName("");
    setPassword("");
    setPresentAddress("");
    setCity("");
    setCountry("");
  } catch (error) {
    toast.error("Something went wrong!");
    console.error(error);
  }
};
  const fileInputRef = useRef<HTMLInputElement | null>(null);
const [preview, setPreview] = useState(UserProfile.src);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  return (
    <div className="mx-6 mt-4 lg:flex ">
      <div className="lg:mr-16 flex justify-center mx-auto">
       <input
        type="file"
        accept=".png, .jpeg, .jpg"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <Image
        src={preview}
        alt="edit profile"
        width={90}
        height={90}
        onClick={handleImageClick}
        className="rounded-full cursor-pointer object-cover  h-[86px] "
      />
      </div>

      
      <form onSubmit={handleSubmit} className=" w-full">
        <div className="lg:flex gap-3">
          <InputField
            type="text"
            placeholder="Charlene Reed"
            label="Your name"
            value={name}
            onChange={setName}
          />
          <InputField
            type="text"
            placeholder="Charlene Reed"
            label="Username"
            value={userName}
            onChange={setUserName}
          />
          </div>
         <div className="lg:flex gap-3">
            <InputField
            type="email"
            placeholder="charleenreed@gmail.com"
            label="Email"
            value={email}
            onChange={setEmail}
          />
           <InputField
            type="password"
            placeholder="*******"
            label="Password"
            value={password}
            onChange={setPassword}
          />
          </div>
        <div className="lg:flex gap-3">
          <DateOfBirthInput value={dob} onChange={setDob} />
           <InputField
            type="text"
            placeholder="San Jose, California, USA"
            label="Prsent Address"
            value={presentAddress}
            onChange={setPresentAddress}
          />
          </div>
          <div className="lg:flex gap-3">
            <InputField
            type="text"
            placeholder="San Jose, California, USA"
            label="Permanent Address"
            value={address}
            onChange={setAddress}
          />
            
          <InputField
            type="text"
             placeholder="San Jose"
            label="City"
            value={city}
            onChange={setCity}
           
          />
          </div>
          <div className="lg:flex gap-3">
            <InputField
            type="number"
            placeholder="4567"
            label="Postal Code"
            value={postalCode}
            onChange={setPostalCode}
          />
        <InputField
            type="text"
            placeholder="USA"
            label="Country"
            value={country}
            onChange={setCountry}
          />
          </div>
          <div className="w-full flex justify-end">
              <Button
               sx={{backgroundColor:'#232323', textTransform: 'none', borderRadius:'15px', 
                width: {
                xs: '100%', 
                md:'auto',
                lg: '190px', 
                },

                padding:{
                  xs:'10px 50px'
                },
                '&:hover': {
                backgroundColor: '#464646', 
                color: '#fff', 
    },
              
              }}
              type="submit"
               variant="contained">
               Save
               </Button>
          </div>
      </form>

    </div>
  );
};

export default EditProfile;