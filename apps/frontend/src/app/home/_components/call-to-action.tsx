export function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10">
      <a
        href="#"
        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 hover:shadow-lg"
      >
        Get started
      </a>
      <a 
        href="#" 
        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 hover:text-blue-600 transition-all duration-200 group"
      >
        Learn more 
        <svg
          className="ml-2 w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    </div>
  );
} 