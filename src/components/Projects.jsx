import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat App',
    description: 'Socket-powered chat with rooms, typing indicators, and message persistence.',
    tech: ['React', 'Node', 'Socket.io', 'MongoDB'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Code Assistant',
    description: 'Interactive coding helper with inline suggestions and test generation.',
    tech: ['React', 'FastAPI', 'OpenAI'],
    github: '#',
    demo: '#',
  },
  {
    title: '3D Product Showcase',
    description: 'Immersive e-commerce product viewer with 3D models and animations.',
    tech: ['React', 'Spline', 'Framer Motion'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
          <p className="mt-3 text-slate-600">A selection of things I’ve built recently.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-5 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video rounded-xl bg-gradient-to-br from-indigo-100 via-blue-100 to-purple-100" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-900/5 text-slate-700 border border-slate-900/10">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.github} className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900">
                  <Github className="h-4 w-4" /> Code
                </a>
                <a href={p.demo} className="inline-flex items-center gap-1 text-sm text-slate-700 hover:text-slate-900">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
