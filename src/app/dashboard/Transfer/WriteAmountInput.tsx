'use client';
import React from 'react';
import Arrow from "../../assets/arrow.png";
import Image from 'next/image';

const WriteAmountInput = () => {
  return (
    <div className="mx-4 mt-6 flex items-center gap-4">
      {/* Label on the left */}
      <h1 className="font-light text-sm text-[#343C6A] whitespace-nowrap">
        Write Amount
      </h1>

      {/* Input with embedded Send button */}
      <div className="relative w-full ml-auto max-w-[300px]">
        <input
          type="number"
          placeholder="525.50"
          className="w-full rounded-full bg-[#F4F5F9] px-5 pr-24 py-3 text-sm placeholder-[#343C6A] outline-none focus:ring-2 focus:ring-[#343C6A]"
        />

        <button
        aria-label="submit button"
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-md hover:bg-gray-800 transition"
        >
          Send
          <Image src={Arrow} alt="arrow" width={16} height={16} />
        </button>
      </div>
    </div>
  );
};

export default WriteAmountInput;