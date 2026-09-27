"use client";

import Link from "next/link";

import { Logo } from "@/components/brand/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  footerAuthors,
  footerExplore,
  siteName,
  siteTagline,
} from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/80 bg-card/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label={`${siteName} home`}>
            <Logo />
          </Link>
          <p className="mt-4 max-w-xs font-display text-base leading-snug text-foreground/85 italic sm:text-lg">
            {siteTagline}
          </p>
        </div>

        {/* Desktop / tablet: open lists */}
        <nav
          aria-labelledby="footer-explore-heading"
          className="hidden md:block"
        >
          <p
            id="footer-explore-heading"
            className="font-sans text-xs font-semibold tracking-[0.14em] text-green-forest uppercase"
          >
            Explore
          </p>
          <ul className="mt-4 space-y-3">
            {footerExplore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav
          aria-labelledby="footer-authors-heading"
          className="hidden md:block"
        >
          <p
            id="footer-authors-heading"
            className="font-sans text-xs font-semibold tracking-[0.14em] text-green-forest uppercase"
          >
            For Authors
          </p>
          <ul className="mt-4 space-y-3">
            {footerAuthors.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile: accordion */}
        <div className="w-full md:hidden">
          <Accordion type="multiple" className="w-full space-y-3">
            <AccordionItem value="explore">
              <AccordionTrigger>Explore</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3">
                  {footerExplore.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="footer-link block py-0.5">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="authors">
              <AccordionTrigger>For Authors</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3">
                  {footerAuthors.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="footer-link block py-0.5">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="border-t border-border/70">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} {siteName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
