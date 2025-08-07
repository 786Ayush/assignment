"use client";

import { useRouter } from "next/navigation";

type Onboardingprops = {
  content: string;
  img: string;
  page: number;
  handleChange: () => void;
};

export const Onboarding = ({
  content,
  img,
  page,
  handleChange,
}: Onboardingprops) => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full max-w-xl mx-auto px-4 py-6 sm:px-8 h-screen bg-black">
      {/* Progress Bar */}
      <div className="flex w-full items-center justify-between mb-4">
        <div className="flex flex-1 gap-2">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`transition-all duration-300 h-1 rounded-md ${
                page === step ? "w-[60%] bg-[#00BFA6]" : "w-[20%] bg-[#444444]"
              }`}
            ></div>
          ))}
        </div>
        {page !== 3 && (
          <button className="ml-4 text-xs sm:text-sm text-[#00BFA6]" onClick={()=>router.push("mobilenumber")}>
            Skip →
          </button>
        )}
      </div>

      {/* Scrollable Middle Section */}
      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center">
        {/* Content */}
        <div className=" text-5xl sm:text-4xl font-bold mb-4 w-full break-words text-white">
          {content}
        </div>

        {/* Image */}
        <div className="w-full flex justify-center mb-4">
          <img
            src={img}
            alt="content"
            className=" w-full h-auto object-contain rounded-md shadow-md"
          />
        </div>
      </div>

      {/* Bottom Button (Always Visible) */}
      <div className="w-full flex justify-center mt-4">
        <button
          className="w-full sm:w-auto px-6 py-2 bg-[#00BFA6] text-white rounded-lg font-semibold shadow hover:bg-[#009e8a] transition-colors"
          onClick={handleChange}
        >
          {page === 3 ? "Get Started!" : "Next"}
        </button>
      </div>
    </div>
  );
};
