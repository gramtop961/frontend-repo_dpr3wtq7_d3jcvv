import React from 'react';
import { Code2, Cloud, Shield, Server, Rocket, Star, Briefcase, MessageCircle } from 'lucide-react';

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div className="text-center mb-12">
    {eyebrow && (
      <p className="text-xs uppercase tracking-widest text-amber-300/80 mb-2">{eyebrow}</p>
    )}
    <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
    {subtitle && <p className="mt-3 text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const About = () => (
  <section id="about" className="py-20 bg-slate-950 text-slate-200">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Tentang Kami"
        title="PT Raset Integrasi Teknologi"
        subtitle="Mitra strategis transformasi digital Anda. Kami membangun solusi yang aman, skalabel, dan berdampak nyata pada kinerja bisnis."
      />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h3 className="font-semibold text-white">Visi</h3>
          <p className="mt-2 text-slate-400">Menjadi perusahaan teknologi terdepan yang mempercepat inovasi dan daya saing bisnis di Indonesia dan regional.</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h3 className="font-semibold text-white">Misi</h3>
          <ul className="mt-2 list-disc list-inside text-slate-400 space-y-1">
            <li>Menyediakan solusi end-to-end yang relevan dan efisien.</li>
            <li>Mengutamakan keamanan, kualitas, dan keberlanjutan.</li>
            <li>Kolaborasi erat dengan klien untuk hasil terbaik.</li>
          </ul>
        </div>
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
          <h3 className="font-semibold text-white">Nilai</h3>
          <ul className="mt-2 list-disc list-inside text-slate-400 space-y-1">
            <li>Integrity & Accountability</li>
            <li>Customer Success First</li>
            <li>Continuous Innovation</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const services = [
  {
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    title: 'Pengembangan Software',
    desc: 'Aplikasi web, mobile, dan integrasi sistem yang andal dan skalabel.'
  },
  {
    icon: <Cloud className="w-6 h-6 text-cyan-400" />,
    title: 'Cloud Solutions',
    desc: 'Arsitektur cloud, migrasi, DevOps, dan optimasi biaya.'
  },
  {
    icon: <Shield className="w-6 h-6 text-amber-300" />,
    title: 'Keamanan Siber',
    desc: 'Audit keamanan, hardening, SOC, dan kepatuhan standar.'
  },
  {
    icon: <Server className="w-6 h-6 text-indigo-400" />,
    title: 'Infrastruktur & Integrasi',
    desc: 'Jaringan, server, API gateway, dan integrasi enterprise.'
  }
];

const Services = () => (
  <section id="services" className="py-20 bg-slate-950">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Layanan"
        title="Solusi Terintegrasi untuk Kebutuhan Anda"
        subtitle="Kami menggabungkan keahlian teknis dan pemahaman bisnis untuk menghadirkan solusi yang tepat sasaran."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, idx) => (
          <div key={idx} className="group p-6 rounded-2xl border border-slate-800 bg-slate-900/60 hover:bg-slate-900 transition">
            <div className="h-11 w-11 rounded-lg bg-slate-800/70 grid place-items-center mb-4">
              {s.icon}
            </div>
            <h3 className="font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Advantages = () => (
  <section className="py-20 bg-slate-950">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Keunggulan"
        title="Mengapa Memilih Kami"
        subtitle="Kami fokus pada hasil nyata, bukan sekadar teknologi."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: <Rocket className="w-5 h-5 text-blue-400" />, title: 'Time-to-Value Cepat', desc: 'Pendekatan iteratif agar nilai bisnis segera terasa.' },
          { icon: <Star className="w-5 h-5 text-amber-300" />, title: 'Kualitas Terukur', desc: 'Standar engineering yang ketat, automated testing & review.' },
          { icon: <Briefcase className="w-5 h-5 text-cyan-300" />, title: 'Pengalaman Industri', desc: 'Berbagai sektor: finansial, manufaktur, logistik, publik.' },
        ].map((a, i) => (
          <div key={i} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-slate-800/70 grid place-items-center">{a.icon}</div>
              <h4 className="font-semibold text-white">{a.title}</h4>
            </div>
            <p className="mt-3 text-sm text-slate-400">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-slate-950">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Portfolio"
        title="Contoh Proyek"
        subtitle="Cuplikan beberapa solusi yang pernah kami implementasikan."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { title: 'Platform E-Commerce B2B', desc: 'Skalabel, headless, terintegrasi ERP.' },
          { title: 'Aplikasi Mobile Field Service', desc: 'Offline-first, realtime sync, dashboard operasional.' },
          { title: 'Data Platform & Dashboard BI', desc: 'Pipeline ETL, data lake, insight interaktif.' },
        ].map((p, i) => (
          <div key={i} className="rounded-2xl overflow-hidden border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="aspect-video bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.25),transparent_50%),radial-gradient(circle_at_70%_70%,rgba(251,191,36,0.25),transparent_40%)]" />
            <div className="p-5">
              <h4 className="font-semibold text-white">{p.title}</h4>
              <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 bg-slate-950">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Testimoni"
        title="Apa Kata Klien"
      />
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: 'Andi – CTO, Fintech', quote: 'Raset mengeksekusi cepat dengan standar keamanan tinggi. Dampaknya terasa dalam 3 bulan.' },
          { name: 'Sari – Head of Ops, Manufaktur', quote: 'Automasi proses menurunkan lead time hingga 40%. Timnya kolaboratif dan solutif.' },
          { name: 'Budi – CEO, Retail', quote: 'Arsitektur cloud yang dirancang stabil, hemat biaya, dan mudah di-scale.' },
        ].map((t, i) => (
          <figure key={i} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
            <MessageCircle className="w-5 h-5 text-amber-300" />
            <blockquote className="mt-3 text-slate-300">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-slate-400">{t.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 bg-slate-950">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Kontak"
        title="Hubungi Kami"
        subtitle="Siap berdiskusi tentang kebutuhan Anda. Kirim pesan melalui formulir di bawah atau hubungi kami langsung."
      />
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
          <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-300">Nama</label>
              <input className="mt-1 w-full rounded-lg bg-slate-800/70 border border-slate-700 px-3 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Nama Anda" required />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg bg-slate-800/70 border border-slate-700 px-3 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="email@perusahaan.com" required />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-300">Perihal</label>
              <input className="mt-1 w-full rounded-lg bg-slate-800/70 border border-slate-700 px-3 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Topik pesan" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-300">Pesan</label>
              <textarea rows={5} className="mt-1 w-full rounded-lg bg-slate-800/70 border border-slate-700 px-3 py-2 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Ceritakan kebutuhan Anda" />
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition">
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
          <h4 className="font-semibold text-white">Kontak Langsung</h4>
          <ul className="mt-3 space-y-2 text-slate-300 text-sm">
            <li><span className="text-slate-400">Alamat:</span> Jl. Contoh No. 123, Jakarta</li>
            <li><span className="text-slate-400">Email:</span> hello@raset.co.id</li>
            <li><span className="text-slate-400">Telepon:</span> +62 21 555 1234</li>
          </ul>
          <div className="mt-6">
            <a href="mailto:hello@raset.co.id" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700 text-slate-200 hover:border-slate-500 hover:bg-slate-900/50 transition">
              Kirim Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Sections = () => {
  return (
    <>
      <About />
      <Services />
      <Advantages />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Sections;
