import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const base = import.meta.env.VITE_BACKEND_URL || '';
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Thanks! I will get back to you soon.');
        e.target.reset();
      } else {
        setStatus(data?.detail || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('Network error. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Let’s build something</h2>
          <p className="mt-3 text-slate-600">Tell me about your idea or project. I’ll reply within 24 hours.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6">
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input name="name" required placeholder="Your name" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input name="email" type="email" required placeholder="you@example.com" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" required rows="5" placeholder="What would you like to build?" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
              </div>
              <div className="sm:col-span-2 flex items-center gap-3">
                <button type="submit" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:shadow-md">
                  <Send className="h-4 w-4" /> Send message
                </button>
                <p className="text-sm text-slate-600">{status}</p>
              </div>
            </form>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-600">Email</p>
                <a href="mailto:kundan@example.com" className="font-medium">kundan@example.com</a>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">Based in India · Open to remote and on-site opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
