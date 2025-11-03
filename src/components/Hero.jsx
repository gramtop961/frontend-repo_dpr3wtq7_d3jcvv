import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-16 bg-slate-950 text-white overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center py-24 md:py-28">
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              <span className="block">Inovasi Teknologi</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-amber-300">untuk Masa Depan Bisnis Anda</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl">
              PT Raset Integrasi Teknologi menghadirkan solusi digital end-to-end — mulai dari konsultasi, pengembangan software, hingga implementasi infrastruktur cloud dan keamanan — untuk mempercepat pertumbuhan bisnis Anda.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#about" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition">
                Pelajari Lebih Lanjut
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-slate-700 text-slate-200 hover:border-slate-500 hover:bg-slate-900/50 transition">
                Hubungi Kami
              </a>
            </div>
            <div className="mt-10 flex gap-8 text-slate-400 text-sm">
              <div>
                <p className="font-semibold text-white">10+ Tahun</p>
                <p>Pengalaman</p>
              </div>
              <div>
                <p className="font-semibold text-white">100+ Proyek</p>
                <p>Enterprise & UKM</p>
              </div>
              <div>
                <p className="font-semibold text-white">ISO-ready</p>
                <p>Keamanan & Kualitas</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
