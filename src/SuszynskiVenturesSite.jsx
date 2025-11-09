import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Linkedin,
  ExternalLink,
  Sparkles,
  Rocket,
  Shuffle,
  Building2,
  Activity,
} from "lucide-react";

export default function SuszynskiVenturesSite() {
  // Scroll animation
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Mouse-follow glow
  const [cursor, setCursor] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 selection:bg-black/10 dark:selection:bg-white/20"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Mouse-follow glow */}
      <motion.div
        className="pointer-events-none fixed z-30 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),rgba(236,72,153,0.08)_40%,transparent_70%)] blur-3xl"
        style={{
          left: cursor.x - 300,
          top: cursor.y - 300,
        }}
      />

      {/* Gradient parallax blobs */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="absolute -top-40 left-1/2 h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500/20 via-sky-400/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-60 right-1/3 h-[42rem] w-[42rem] rounded-full bg-gradient-to-t from-fuchsia-500/10 via-blue-500/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 z-50"
      />

      {/* Header */}
      <header className="relative z-10 sticky top-0 border-b border-white/10 bg-white/60 backdrop-blur dark:bg-neutral-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold tracking-tight">Suszynski Ventures LLC</h1>
          <a
            href="#portfolio"
            className="rounded-lg border px-3 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10"
          >
            Explore Our Ventures
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 py-24 text-center">
        <motion.div style={{ scale }} className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
            Building tomorrow’s ideas — today.
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            A private holding and venture incubation company focused on developing high-impact
            consumer technologies across travel, lifestyle, and smart living.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#portfolio"
              className="flex items-center gap-2 rounded-lg bg-black text-white px-6 py-3 text-sm dark:bg-white dark:text-black"
            >
              Explore Our Ventures <ArrowDownRight size={18} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/10"
            >
              Partner With Us <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
    Suszynski Ventures LLC is a private incubator dedicated to building and accelerating the
    next generation of innovative consumer-technology ventures. We focus on identifying
    high-impact ideas, shaping them into scalable products, and guiding each through early
    growth with design, strategy, and operational support.
  </p>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-start gap-2">
            <Sparkles size={16} />{" "}
            <span>
              <b>Identify</b> market opportunities with clear pain points.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Shuffle size={16} />{" "}
            <span>
              <b>Incubate</b> rapidly with lean prototyping and validation.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Rocket size={16} />{" "}
            <span>
              <b>Launch</b> under the SV umbrella to prove traction.
            </span>
          </div>
          <div className="flex items-start gap-2">
            <Building2 size={16} />{" "}
            <span>
              <b>Spin-Out</b> into independent companies.
            </span>
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section id="portfolio" className="relative z-10 mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold mb-4">Ventures</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-8">A portfolio of brands built in-house.</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              name: "Travel Guardian",
              desc: "AI-powered travel safety and booking platform.",
              url: "https://travelguardian.app",
            },
            {
              name: "HomeLog",
              desc: "Smart home maintenance & family coordination app.",
              url: "#",
            },
            {
              name: "Forzaen",
              desc: "EV-focused aftermarket accessories & 3D design studio.",
              url: "#",
            },
            {
              name: "FlexEnd",
              desc: "Weekend productivity app for flexible lifestyles.",
              url: "#",
            },
          ].map((v) => (
            <div
              key={v.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 dark:bg-white/5 transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{v.name}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{v.desc}</p>
                </div>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border px-3 py-1 text-xs hover:bg-white/10 flex items-center gap-1"
                >
                  Visit <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section id="team" className="relative z-10 mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold mb-6">Leadership</h2>
        <div className="flex flex-col sm:flex-row items-center gap-6 border border-white/10 rounded-2xl p-6 bg-white/5 dark:bg-white/5">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-2xl flex items-center justify-center text-2xl font-bold text-white">
            SV
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Matthew Suszynski — Founder & Managing Partner
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Entrepreneur, product strategist, and operator building the next generation of consumer technology brands.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              For partnerships, press, or vendor inquiries:
            </p>
            <a
              href="mailto:info@suszynskiventures.com"
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5"
            >
              <Mail size={16} /> info@suszynskiventures.com
            </a>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-white"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
          <form className="space-y-4">
            <input
              className="w-full rounded-xl border border-white/10 bg-black/5 dark:bg-black/30 p-2 text-sm"
              placeholder="Your name"
            />
            <input
              type="email"
              className="w-full rounded-xl border border-white/10 bg-black/5 dark:bg-black/30 p-2 text-sm"
              placeholder="you@company.com"
            />
            <textarea
              rows="4"
              className="w-full rounded-xl border border-white/10 bg-black/5 dark:bg-black/30 p-2 text-sm"
              placeholder="Your message"
            ></textarea>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-2xl bg-black/5 px-4 py-2 text-sm ring-1 ring-black/10 hover:bg-black/10 dark:bg-white/10 dark:ring-white/20 dark:hover:bg-white/15"
            >
              <Activity size={16} /> Send (demo)
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/40 dark:bg-black/40 py-6 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Suszynski Ventures LLC. All rights reserved.
      </footer>
    </div>
  );
}
