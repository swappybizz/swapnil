import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white w-full px-6 py-4 shadow-lg font-poppins">
      <div className="flex justify-between items-center">
        <div
        className='flex items-center space-x-4'>
        

        <h1 className="text-4xl font- tracking-wide border-r-2 pr-2">§</h1>
        <div
        className='flex flex-col'
        >
        <h2>Swapnil</h2>
        <h2>Kumar</h2>

        </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 md:mr-12">


          <a
            href="mailto:swapnil@nooffice.no"
            className="relative text-lg font-medium after:content-[''] after:block after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-gray-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-gray-900 text-white p-4 rounded-md mt-4 space-y-4 transition-transform duration-300 ease-in-out`}
      >
        <a href="#" className="block text-lg hover:text-gray-400 transition-colors">
          Home
        </a>
        <a href="#" className="block text-lg hover:text-gray-400 transition-colors">
          Projects
        </a>
        <a href="#" className="block text-lg hover:text-gray-400 transition-colors">
          Contact
        </a>
      </div>
    </header>
  );
}
