"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { authorsDropdown, primaryNav, siteName } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [authorsOpen, setAuthorsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAuthorsOpen, setMobileAuthorsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const menuId = useId();

  useEffect(() => {
    setAuthorsOpen(false);
    setMobileOpen(false);
    setMobileAuthorsOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setAuthorsOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setAuthorsOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-green-deep focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:gap-8 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="shrink-0 transition-opacity hover:opacity-85"
          aria-label={`${siteName} home`}
        >
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-7">
            {primaryNav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              if ("hasDropdown" in item && item.hasDropdown) {
                return (
                  <li
                    key={item.href}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setAuthorsOpen(true)}
                    onMouseLeave={() => setAuthorsOpen(false)}
                    onFocus={() => setAuthorsOpen(true)}
                    onBlur={(event) => {
                      if (
                        !event.currentTarget.contains(
                          event.relatedTarget as Node | null
                        )
                      ) {
                        setAuthorsOpen(false);
                      }
                    }}
                  >
                    <button
                      type="button"
                      className="nav-link inline-flex items-center gap-1"
                      data-active={active}
                      aria-expanded={authorsOpen}
                      aria-controls={menuId}
                      aria-haspopup="menu"
                      onClick={() => setAuthorsOpen((open) => !open)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-4 opacity-60 transition-transform duration-200",
                          authorsOpen && "rotate-180"
                        )}
                        aria-hidden
                      />
                    </button>
                    <div
                      id={menuId}
                      role="menu"
                      hidden={!authorsOpen}
                      className={cn(
                        "absolute top-full left-1/2 z-50 pt-3 transition-opacity duration-150",
                        authorsOpen
                          ? "visible opacity-100"
                          : "invisible opacity-0"
                      )}
                    >
                      <ul className="-translate-x-1/2 min-w-[220px] rounded-lg border border-border bg-card p-2 shadow-lg shadow-green-deep/5">
                        {authorsDropdown.map((link) => (
                          <li key={link.href} role="none">
                            <Link
                              href={link.href}
                              role="menuitem"
                              className="block rounded-md px-3 py-2.5 text-[0.95rem] text-foreground/80 transition-colors hover:bg-green-mist hover:text-green-deep focus-visible:bg-green-mist focus-visible:outline-none"
                              onClick={() => setAuthorsOpen(false)}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="nav-link"
                    data-active={active}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-0">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav
              aria-label="Mobile primary"
              className="flex-1 overflow-y-auto bg-card px-3 py-4"
            >
              <ul className="space-y-1">
                {primaryNav.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  if ("hasDropdown" in item && item.hasDropdown) {
                    return (
                      <li key={item.href}>
                        <button
                          type="button"
                          className="flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-base font-medium text-foreground hover:bg-green-mist hover:text-green-deep"
                          aria-expanded={mobileAuthorsOpen}
                          onClick={() =>
                            setMobileAuthorsOpen((open) => !open)
                          }
                        >
                          {item.label}
                          <ChevronDown
                            className={cn(
                              "size-4 transition-transform",
                              mobileAuthorsOpen && "rotate-180"
                            )}
                          />
                        </button>
                        {mobileAuthorsOpen ? (
                          <ul className="mb-2 ml-2 space-y-1 border-l border-border pl-3">
                            {authorsDropdown.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="block rounded-md px-3 py-2.5 text-sm text-foreground/80 hover:bg-green-mist hover:text-green-deep"
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    );
                  }

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-md px-3 py-3 text-base font-medium hover:bg-green-mist hover:text-green-deep",
                          active
                            ? "bg-green-mist text-green-deep"
                            : "text-foreground"
                        )}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
