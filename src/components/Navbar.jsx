import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500" />
            <span className="text-sm sm:text-base font-semibold tracking-tight">Kundan Kumar Jaiswal</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-slate-300" />
            <div className="flex items-center gap-3">
              <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100">
                <Github className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="Email" href="#contact" className="p-2 rounded-md hover:bg-slate-100">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-slate-100">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-slate-100 text-slate-700">
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-3 px-1 pt-2">
                <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100">
                  <Github className="h-5 w-5" />
                </a>
                <a aria-label="LinkedIn" href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a aria-label="Email" href="#contact" className="p-2 rounded-md hover:bg-slate-100">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
