import React from "react";

interface FooterProps {
  onOpenModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-primary-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-primary-50 mb-6">
          Let's Build Something Amazing
        </h2>
        <button
          onClick={onOpenModal}
          className="px-8 py-3 bg-white text-primary-800 rounded-full font-bold hover:bg-primary-100 transition-all transform hover:scale-105"
        >
          Get in Touch
        </button>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-primary-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Full Stack Developer. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Github
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
