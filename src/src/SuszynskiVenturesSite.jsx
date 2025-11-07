import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Mail, Linkedin, ExternalLink } from "lucide-react";

export default function SuszynskiVenturesSite() {
  return (
    <div className='min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100'>
      <header className='border-b border-neutral-300 dark:border-neutral-700 px-6 py-4 flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Suszynski Ventures LLC</h1>
      </header>
      <main className='text-center p-10'>
        <h2 className='text-4xl font-semibold mb-4'>Building tomorrow’s ideas — today.</h2>
        <p className='max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400'>
          A private holding and venture incubation company focused on developing high-impact consumer technologies across travel, lifestyle, and smart living.
        </p>
        <div className='mt-8 flex justify-center gap-4'>
          <a href='#portfolio' className='bg-black text-white px-6 py-3 rounded-md flex items-center gap-2'>
            Explore Our Ventures <ArrowDownRight size={18} />
          </a>
          <a href='#contact' className='border px-6 py-3 rounded-md flex items-center gap-2'>
            Partner With Us <ArrowUpRight size={18} />
          </a>
        </div>
      </main>
      <footer className='border-t border-neutral-300 dark:border-neutral-700 p-6 text-sm text-neutral-500'>
        © {new Date().getFullYear()} Suszynski Ventures LLC. All rights reserved.
      </footer>
    </div>
  );
}
