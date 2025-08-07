type HeaderProps = {
  heading: string;
  content: string;
};

export const Header = ({ heading, content }: HeaderProps) => {
  return (
    <header className="">
      <div className="flex items-center gap-3 sm:gap-5">
        <img src="/logo.png" alt="bag" className="w-10 h-10 sm:w-14 sm:h-14" />
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">FirstStore</h1>
      </div>

      <div className="mt-4 sm:mt-6">
        <h2 className="text-2xl sm:text-2xl font-semibold text-gray-700">{heading}</h2>
        <p className="text-sm sm:text-base text-gray-600 mt-1">{content}</p>
      </div>
    </header>
  );
};
