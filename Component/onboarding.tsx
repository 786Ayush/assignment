"use client";
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
  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto px-4 py-6 sm:px-8 h-screen justify-between">
      {/* Progress Bar */}
      <div className="flex w-full items-center justify-between mb-6">
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
          <button className="ml-4 text-xs sm:text-sm text-gray-500 hover:text-gray-700 transition-colors">
            Skip
          </button>
        )}
      </div>

      {/* Content */}
      <div className="text-center text-3xl sm:text-4xl  font-bold mb-4 w-full break-words">
        {content}
      </div>

      {/* Image */}
      <div className="w-full flex justify-center mb-4">
        <img
          src={img}
          alt="content"
          className="max-w-[200px] sm:max-w-[300px] w-full h-auto object-contain rounded-md shadow-md"
        />
      </div>

      {/* Action Button */}
      <div className="w-full flex justify-center">
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
