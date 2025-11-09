import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
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
  // Scroll + parallax
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  // Mouse glow
  const [cursor, setCursor] = useState({ x: -500, y: -500 });
  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Fade-in on scroll
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 selection:bg-black/10 dark:selection:bg-white/20"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* Mouse glow (soft pulse) */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="pointer-events-none fixed z-30 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),rgba(236,72,153,0.12)_40%,transparent_70%)] blur-3xl"
        style={{ left: cursor.x - 300, top: cursor.y - 300 }}
      />

      {/* Background gradients (slow breathing) */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        animate={{ opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute -top-40 left-1/2 h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-indigo-500/20 via-sky-400/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-60 right-1/3 h-[42rem] w-[42rem] rounded-full bg-gradient-to-t from-fuchsia-500/10 via-blue-500/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Scroll bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-500 z-50"
      />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 sticky top-0 border-b border-white/10 bg-white/60 backdrop-blur dark:bg-neutral-950/70"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <h1 className="text-xl font-bold tracking-tight">Suszynski Ventures LLC</h1>
          <a
            href="#portfolio"
            className="rounded-lg border px-3 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            Explore Our Ventures
          </a>
        </div>
      </motion.header>

      {/* Hero */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center px-4 py-24 text-center"
      >
        <motion.div style={{ scale }} className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">
            Building tomorrow’s ideas — today.
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            A private incubator building, funding, and accelerating innovative ventures across
            consumer technology, lifestyle, and digital media.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#portfolio"
              className="flex items-center gap-2 rounded-lg bg-black text-white px-6 py-3 text-sm dark:bg-white dark:text-black transition hover:scale-105"
            >
              Explore Our Ventures <ArrowDownRight size={18} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg border border-neutral-300 dark:border-neutral-700 px-6 py-3 text-sm hover:bg-black/5 dark:hover:bg-white/10 transition hover:scale-105"
            >
              Partner With Us <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* About */}
      <motion.section
        id="about"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto max-w-6xl px-4 py-20"
      >
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-6">
          Suszynski Ventures LLC is a private incubator dedicated to building and accelerating the
          next generation of innovative consumer-technology ventures. We focus on identifying
          high-impact ideas, shaping them into scalable products, and guiding each through early growth with design, strategy, and operational support.
        </p>
      </motion.section>

      {/* Ventures */}
      <motion.section
        id="portfolio"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 mx-auto max-w-6xl px-4 py-20"
      >
        <h2 className="text-2xl font-semibold mb-4">Ventures</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-8">
          A curated portfolio of ventures across technology, media, and innovation.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              name: "Koavras",
              desc: "An upcoming platform currently under development. More details soon.",
              url: "#",
              featured: false,
            },
            {
              name: "Diskreet",
              desc: "Diskreet is Matthew’s artist project — a cinematic, melodic, and emotionally driven music experience.",
              url: "https://music.apple.com/us/artist/diskreet/1806778124",
              featured: true,
            },
            {
              name: "HomeLog",
              desc: "To be announced.",
              url: "#",
              featured: false,
            },
            {
              name: "Forzaen",
              desc: "A developing brand centered on performance and precision design.",
              url: "#",
              featured: false,
            },
          ].map((v) => (
            <motion.div
              key={v.name}
              whileHover={{ scale: 1.02 }}
              className={`rounded-2xl border border-white/10 p-5 transition ${
                v.featured
                  ? "relative overflow-hidden shadow-lg shadow-indigo-500/10"
                  : "bg-white/5 hover:bg-white/10 dark:bg-white/5"
              }`}
            >
              {v.featured && (
                <motion.div
                  animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 via-fuchsia-500/20 to-indigo-500/20"
                />
              )}
              <div className="relative flex items-start justify-between">
                <div>
                  <h3
                    className={`text-lg font-semibold ${
                      v.featured ? "text-indigo-400 dark:text-fuchsia-400" : ""
                    }`}
                  >
                    {v.name}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{v.desc}</p>
                </div>
                {v.url && v.url !== "#" ? (
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border px-3 py-1 text-xs hover:bg-white/10 flex items-center gap-1 relative z-10"
                  >
                    Visit <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="rounded-xl border border-white/10 px-3 py-1 text-xs text-neutral-500 dark:text-neutral-400 relative z-10">
                    Coming soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Leadership */}
      <motion.section
        id="team"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto max-w-6xl px-4 py-20"
      >
        <h2 className="text-2xl font-semibold mb-6">Leadership</h2>
        <div className="flex flex-col sm:flex-row items-center gap-6 border border-white/10 rounded-2xl p-6 bg-white/5 dark:bg-white/5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/15 shadow-lg"
          >
            <img
              src="/IMG_2518.jpeg"
              alt="Matthew Suszynski"
              className="h-full w-full object-cover object-top"
            />
          </motion.div>
          <div>
            <h3 className="text-lg font-semibold">
              Matthew Suszynski — Founder & Managing Partner
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              Entrepreneur, product strategist, and operator building the next generation of
              consumer technology ventures.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto max-w-6xl px-4 py-20"
      >
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4">
              For partnerships, press, or inquiries:
            </p>
            <a
              href="mailto:info@suszynskiventures.com"
              className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition"
            >
              <Mail size={16} /> info@suszynskiventures.com
            </a>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm hover:text-white transition"
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              className="inline-flex items-center gap-2 rounded-2xl bg-black/5 px-4 py-2 text-sm ring-1 ring-black/10 hover:bg-black/10 dark:bg-white/10 dark:ring-white/20 dark:hover:bg-white/15"
            >
              <Activity size={16} /> Send (demo)
            </motion.button>
          </form>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/40 dark:bg-black/40 py-6 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Suszynski Ventures LLC. All rights reserved.
      </footer>
    </div>
  );
}
