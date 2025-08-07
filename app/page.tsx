"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const time = setTimeout(() => {
      router.push("/onboarding");
    }, 3000);
    return () => clearTimeout(time);
  }, [router]);
  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-8 relative">
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-[#00BFA6] text-white px-4 py-2 rounded shadow-lg transition">
        Wait for 3 seconds
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <img src="/bag.png" alt="bag" className="w-8 h-8 sm:w-12 sm:h-12" />
        <span className="text-xl sm:text-3xl font-semibold">FirstStore</span>
      </div>
    </div>
  );
}
