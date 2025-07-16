import React from 'react'

// DOB Field
type DateOfBirthInputProps = {
  value: string;
  onChange: (val: string) => void;
};
const DateOfBirthInput: React.FC<DateOfBirthInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className=" flex flex-col w-full mb-4">
      <label
        htmlFor="dob"
       className="text-[#232323] mb-2"
      >
        Date of Birth
      </label>
      <input
        type="date"
        id="dob"
        value={value}
        onChange={(e) => onChange(e.target.value)}
         className="w-full border border-[#DFEAF2] py-2 px-3 placeholder:text-sm rounded-xl"
      />
    </div>
  );
};

export default DateOfBirthInput