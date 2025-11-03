import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/70 backdrop-blur border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 ring-2 ring-blue-400/30 shadow-lg shadow-blue-500/30 grid place-items-center">
            <span className="text-white font-black">R</span>
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-white tracking-wide group-hover:text-blue-200 transition-colors">PT Raset Integrasi Teknologi</p>
            <p className="text-xs text-slate-400">Transformasi Digital Terintegrasi</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-slate-300 hover:text-white transition-colors">About Us</a>
          <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
          <a href="#portfolio" className="text-slate-300 hover:text-white transition-colors">Portfolio</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-blue-600/40 transition-shadow">Hubungi Kami</a>
      </div>
    </header>
  );
};

export default Header;
