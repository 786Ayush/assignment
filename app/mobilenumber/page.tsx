"use client";
import { Header } from "@/Component/header";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const countryOptions = [
    { code: "91", label: "+91", flag: "🇮🇳" },
    { code: "1", label: "+1", flag: "🇺🇸" },
    { code: "44", label: "+44", flag: "🇬🇧" },
    { code: "61", label: "+61", flag: "🇦🇺" },
    { code: "81", label: "+81", flag: "🇯🇵" },
    { code: "49", label: "+49", flag: "🇩🇪" },
  ];
  const [selectedCode, setSelectedCode] = useState("91");
  const [data, setdata] = useState({ mobile: "", check: false });

  const selectedFlag =
    countryOptions.find((opt) => opt.code === selectedCode)?.flag || "🌐";

  return (
    <div className="bg-white text-black min-h-screen px-6 py-8 flex flex-col gap-6 ">
      {/* Back Arrow */}

      <div className="mb-10">
        <div
          className="w-10 h-10 flex items-center justify-center rounded-full  "
          style={{ boxShadow: "0px 4px 44px 0px #00000014" }}
        >
          <img
            src="/arrow.png"
            alt="Back"
            className=""
            onClick={() => {
              router.push("/onboarding");
            }}
          />
        </div>
      </div>

      {/* Header */}

      <Header
        content="Create an account in a few easy steps"
        heading="Welcome to FirstStore"
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="mobile" className="text-sm font-medium text-gray-700">
          Mobile Number
        </label>
        <div className="flex items-center  border border-[#E0E0E0] rounded-md">
          {/* Flag + Dropdown */}
          <div className="flex items-center gap-2  border-r border-[#E0E0E0] px-3 py-2 bg-[#E0E0E0] ">
            <span className="text-lg">{selectedFlag}</span>
            <select
              id="country-code"
              value={selectedCode}
              onChange={(e) => setSelectedCode(e.target.value)}
              className="bg-transparent text-sm focus:outline-none"
            >
              {countryOptions.map((country) => (
                <option
                  key={country.code}
                  value={country.code}
                  className="text-lg"
                >
                  {country.label}
                </option>
              ))}
            </select>
          </div>

          {/* Input */}
          <input
            id="mobile"
            type="tel"
            value={data?.mobile}
            onChange={(e) => setdata({ ...data, mobile: e.target.value })}
            placeholder="Enter mobile number"
            className="w-full  px-4 py-2 text-sm  focus:outline-none "
          />
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="flex items-start gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={data.check}
          onChange={(e) => setdata({ ...data, check: e.target.checked })}
          id="terms"
          className="mt-1"
        />
        <label htmlFor="terms">
          I agree to FirstStore’s{" "}
          <span className="text-blue-600 underline cursor-pointer">
            User Agreement
          </span>{" "}
          &{" "}
          <span className="text-blue-600 underline cursor-pointer">
            Privacy Policy
          </span>
        </label>
      </div>

      {/* Next Button */}
      <div className="pt-4">
        <button
          className={`w-full ${
            data.mobile.length === 10 && data.check
              ? "bg-[#00BFA6] text-white"
              : "bg-[#D9D9D9]"
          }  py-3 rounded-lg text-sm font-semibold  transition`}
          onClick={() => {
            data.mobile.length === 10 && data.check && router.push("/verify");
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
