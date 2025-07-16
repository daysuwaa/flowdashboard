import React from 'react'

// Reusable InputField
type InputFieldProps = {
  type: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (val: string) => void;
};
const InputField = ({type,placeholder,label,value,onChange,}: InputFieldProps) => {
  return (
    <div className="flex flex-col w-full mb-4">
      <label className="text-[#232323] mb-2 font-normal text-[16px]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required
       className="w-full border placeholder:text-[#718EBF] border-[#DFEAF2] py-2 px-3 placeholder:text-sm rounded-xl"
      />
    </div>
  );
};

export default InputField