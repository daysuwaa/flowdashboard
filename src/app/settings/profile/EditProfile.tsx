"use client";

import Image from "next/image";
import React, { useState } from "react";
import UserProfile from "../../assets/EditProfile.png";
import toast from "react-hot-toast";
import Button from '@mui/material/Button';
import InputField from "./inputfield/InputField";
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
  // toaster
  const handleClick = () => {
    toast.success("Saved successfully!");
  };


  return (
    <div className="mx-6 mt-4 lg:flex ">
      <div className="lg:mr-16 flex justify-center mx-auto">
        <Image
          src={UserProfile}
          alt="editprofile"
          className="w-[100px] h-[90px] rounded-full lg:h-[71px]"
        />
      </div>

      
      <div className=" w-full">
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
               sx={{backgroundColor:'#232323', textTransform: 'none', 
                width: {
                xs: '100%', 
                md: 'auto', 
                },

                padding:{
                  xs:'8px 40px'
                }
              
              }}
               variant="contained"
               onClick={handleClick}>
               Save
               </Button>
          </div>
      </div>

    </div>
  );
};

export default EditProfile;