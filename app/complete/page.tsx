"use client";

import { Header } from "@/Component/header";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const isFormValid = formData.fullName && formData.email;

  return (
    <div className="bg-white text-black min-h-screen px-4 py-6 sm:px-6 sm:py-8 flex flex-col gap-6 relative">
      {/* Back Arrow */}
      {showToast && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#00BFA6] text-white px-4 py-2 rounded shadow-lg transition">
          🎉 Form completed successfully!
        </div>
      )}

      <div className="mb-8">
        <div
          className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer"
          style={{ boxShadow: "0px 4px 44px 0px #00000014" }}
          onClick={() => router.push("/verify")}
        >
          <img src="/arrow.png" alt="Back" />
        </div>
      </div>

      {/* Header */}
      <Header
        heading="Complete Your Profile"
        content="Enter your personal details"
      />

      {/* Input Form */}
      <div className="flex flex-col gap-4">
        <label className="flex flex-col text-sm font-bold gap-1">
          Full Name
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
        </label>

        <label className="flex flex-col text-sm font-bold gap-1">
          Email Address
          <input
            type="email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
      </div>

      {/* Continue Button */}
      <div className="pt-4">
        <button
          className={`w-full ${
            isFormValid
              ? "bg-[#00BFA6] text-white"
              : "bg-[#D9D9D9] text-gray-500"
          } py-3 rounded-lg text-sm font-semibold transition`}
          disabled={!isFormValid}
          onClick={() => {
            setShowToast(true);
            setTimeout(() => {
              setShowToast(false);
            }, 2000); // show toast for 2 seconds
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
