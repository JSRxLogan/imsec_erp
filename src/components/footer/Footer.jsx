const Footer = () => {
  return (
    <footer className="w-full flex items-center bg-[#f3f3f3] py-4 md:py-0 md:h-16">
      <div className="container mx-auto px-6">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Copyright */}
          <div className="ml-4">
            <p className="text-base text-[#333] font-medium">
              SustainChain © 2025-26
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mr-4">
            <a
              href="#about"
              className="text-[#333] hover:text-[#222] hover:underline transition-all duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[#333] hover:text-[#222] hover:underline transition-all duration-200 font-medium"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center space-y-3">
          {/* Navigation Links stacked vertically */}
          <div className="flex space-x-6">
            <a
              href="#about"
              className="text-[#333] hover:text-[#222] hover:underline transition-all duration-200 font-medium text-sm"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[#333] hover:text-[#222] hover:underline transition-all duration-200 font-medium text-sm"
            >
              Contact
            </a>
          </div>

          {/* Copyright centered below links */}
          <div className="text-center">
            <p className="text-sm text-[#333] font-medium">
              SustainChain © 2025-26
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;