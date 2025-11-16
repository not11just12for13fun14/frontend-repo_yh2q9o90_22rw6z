import Spline from '@splinetool/react-spline';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-black/5 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Available for freelance projects
          </span>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Kundan Kumar Jaiswal
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-700 max-w-xl">
            Software Engineer crafting modern, scalable web apps. I turn complex ideas into smooth, interactive experiences.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold shadow hover:shadow-md transition-shadow">
              View Projects
              <ChevronRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white/80 backdrop-blur border border-black/10 text-slate-900 font-semibold hover:bg-white">
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/60" />
    </section>
  );
}
