"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { MAIN_NAV } from "@/lib/constants/navigation";
import { BRAND } from "@/lib/constants/brand";
import { Button } from "@/components/ui/Button";
import { CallButton, WhatsAppButton } from "@/components/ContactActions";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils/cn";

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-edge/60 bg-ivory/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${BRAND.name} home`}>
          <Image
            src="/logos/ezyhelpers-mark.png"
            alt=""
            aria-hidden
            width={93}
            height={64}
            priority
            className="h-9 w-auto lg:h-10"
          />
          <span className="font-heading text-xl font-semibold tracking-tight text-brand-deep lg:text-2xl">
            EzyHelpers
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {MAIN_NAV.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {item.children ? (
                <>
                  <button
                    className="flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-brand-mint hover:text-brand-deep"
                    aria-expanded={openMenu === item.label}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenMenu(openMenu === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" aria-hidden />
                  </button>
                  {openMenu === item.label && (
                    <div className="absolute left-0 top-full z-50 w-64 pt-2">
                      <ul className="rounded-2xl border border-edge bg-white p-2 shadow-lift">
                        <li>
                          <Link
                            href={item.href}
                            className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-deep hover:bg-brand-mint"
                          >
                            View all {item.label}
                          </Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block rounded-lg px-3 py-2 text-sm text-ink hover:bg-brand-mint hover:text-brand-deep"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-ink hover:bg-brand-mint hover:text-brand-deep"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 xl:flex">
          <CallButton size="sm" />
          <WhatsAppButton size="sm" />
          <Button href="/contact" variant="cta" size="sm">
            Get Free Consultation
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-edge xl:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
