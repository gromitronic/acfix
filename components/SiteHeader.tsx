"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#repair-or-replace", label: "Repair or Replace" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/90 shadow-[0_12px_40px_rgba(8,43,69,0.06)] backdrop-blur-xl">
      <div className="section-shell flex min-h-20 items-center justify-between gap-5 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="ACFix.com home">
          <Image
            src="/acfix-logo.png"
            alt="ACFix Fast AC Repair"
            width={180}
            height={120}
            priority
            className="h-16 w-auto object-contain"
          />
          <span className="sr-only">
            ACFix.com AC repair referrals for St. Lucie, Martin, and Palm Beach counties
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold text-slate-700 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-service">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="/#lead-form"
            className="rounded-full bg-coral px-5 py-3 text-sm font-black text-white shadow-[0_14px_34px_rgba(255,107,61,0.28)] transition hover:-translate-y-0.5 hover:bg-service hover:shadow-[0_18px_44px_rgba(11,92,173,0.25)] focus:focus-ring"
          >
            Check My AC Now
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-softborder bg-white text-navy shadow-sm lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="grid gap-1.5">
            <span className="block h-0.5 w-5 rounded bg-current" />
            <span className="block h-0.5 w-5 rounded bg-current" />
            <span className="block h-0.5 w-5 rounded bg-current" />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-softborder bg-white lg:hidden">
          <nav className="section-shell grid gap-2 py-4 text-sm font-bold text-navy" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 hover:bg-cold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#lead-form"
              className="mt-2 rounded-full bg-coral px-5 py-3 text-center font-black text-white"
              onClick={() => setOpen(false)}
            >
              Check My AC Now
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
