import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-[#FCFCF9] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-lg font-bold mb-2 font-nunito">Let's Connect</p>
            <p className="text-sm text-[#CFCFCF] font-nunito">
              Turning ideas into impactful digital solutions
            </p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://linkedin.com/in/jeremyifrah" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CFCFCF] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/jeremyifrah" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CFCFCF] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://twitter.com/jeremyifrah" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CFCFCF] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#1D1D1F] text-center">
          <p className="text-sm text-[#CFCFCF] font-nunito">
            © {currentYear} Jérémy Ifrah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};