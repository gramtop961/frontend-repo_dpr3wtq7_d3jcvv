import React from 'react';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-slate-300 font-medium">PT Raset Integrasi Teknologi</p>
            <p className="text-sm">© {year} Hak Cipta Dilindungi.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg border border-slate-700 hover:border-blue-600 hover:text-blue-300 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-lg border border-slate-700 hover:border-blue-600 hover:text-blue-300 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="p-2 rounded-lg border border-slate-700 hover:border-blue-600 hover:text-blue-300 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
