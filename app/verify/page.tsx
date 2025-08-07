"use client";

import { Header } from "@/Component/header";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

type CountryOption = {
  code: string;
  label: string;
  flag: string;
};

export default function Home() {
  const router = useRouter();

  const countryOptions: CountryOption[] = [
    { code: "91", label: "+91", flag: "🇮🇳" },
    { code: "1", label: "+1", flag: "🇺🇸" },
    { code: "44", label: "+44", flag: "🇬🇧" },
    { code: "61", label: "+61", flag: "🇦🇺" },
    { code: "81", label: "+81", flag: "🇯🇵" },
    { code: "49", label: "+49", flag: "🇩🇪" },
  ];

  const [selectedCode, setSelectedCode] = useState<string>("91");
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [timer, setTimer] = useState<number>(30);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const selectedFlag =
    countryOptions.find((opt) => opt.code === selectedCode)?.flag || "🌐";

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData
      .getData("Text")
      .replace(/\D/g, "")
      .slice(0, 6);
    const newOtp = Array(6).fill("");

    for (let i = 0; i < pasted.length; i++) {
      newOtp[i] = pasted[i];
    }

    setOtp(newOtp);
    const nextIndex = pasted.length < 6 ? pasted.length : 5;
    setTimeout(() => inputRefs.current[nextIndex]?.focus(), 0);
  };

  const handleResend = () => {
    setTimer(30);
    setOtp(Array(6).fill(""));
    inputRefs.current[0]?.focus();
    // TODO: Add resend logic here
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <div className="bg-white text-black min-h-screen px-4 py-6 sm:px-6 sm:py-8 flex flex-col gap-6 ">
      {/* Back Arrow */}
      <div className="mb-8">
        <div
          className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
          style={{ boxShadow: "0px 4px 44px 0px #00000014" }}
          onClick={() => router.push("/mobilenumber")}
        >
          <img src="/arrow.png" alt="Back" />
        </div>
      </div>

      {/* Header */}
      <Header
        heading="Verify Phone Number"
        content={`Enter the OTP sent to ${selectedFlag} +${selectedCode} XXXXXXXX`}
      />

      {/* OTP Inputs */}
      <div className="flex justify-between md:justify-start gap-2 mt-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            maxLength={1}
            inputMode="numeric"
            className="w-10 h-12 sm:w-12 sm:h-14 border border-gray-300 rounded text-center text-lg focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
          />
        ))}
      </div>

      {/* Next Button */}
      <div className="pt-4">
        <button
          className={`w-full ${
            isOtpComplete ? "bg-[#00BFA6] text-white" : "bg-[#D9D9D9]"
          } py-3 rounded-lg text-sm font-semibold transition`}
          disabled={!isOtpComplete}
          onClick={() => router.push("/complete")}
        >
          Next
        </button>
      </div>

      {/* Resend Code */}
      <div className="text-center text-sm mt-2">
        {timer > 0 ? (
          <p className="text-gray-500">
            Resend Code in 00:{timer.toString().padStart(2, "0")}
          </p>
        ) : (
          <button
            onClick={handleResend}
            className="text-[#00BFA6] font-semibold hover:underline"
          >
            Resend Code
          </button>
        )}
      </div>
    </div>
  );
}
