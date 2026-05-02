import Image from "next/image";
import Link from "next/link";
import { BUILD_VERSION } from "@/src/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="section-shell grid gap-8 py-12 sm:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <Image
            src="/acfix-logo.png"
            alt="ACFix Fast AC Repair"
            width={180}
            height={120}
            className="h-20 w-auto rounded-xl bg-white object-contain p-1"
          />
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">
            ACFix is a referral service and does not directly perform HVAC repairs. Services are
            provided by independent local HVAC companies. Availability, pricing, licensing, and
            service terms are the responsibility of the provider.
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-cold">
            Build {BUILD_VERSION}
          </p>
        </div>
        <div className="grid gap-2 text-sm text-slate-300">
          <p className="font-bold text-white">Pages</p>
          <Link href="/#how-it-works" className="hover:text-white">
            How It Works
          </Link>
          <Link href="/#repair-or-replace" className="hover:text-white">
            Repair or Replace
          </Link>
          <Link href="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
        <div className="grid gap-2 text-sm text-slate-300">
          <p className="font-bold text-white">Legal</p>
          <Link href="/privacy" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
