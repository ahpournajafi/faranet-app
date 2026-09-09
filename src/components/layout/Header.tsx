"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronLeft } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "خدمات ما", href: "#services" },
    { name: "راهکارها", href: "#why-us" },
    { name: "مسیر همکاری", href: "#process" },
    { name: "درباره ما", href: "#about" },
    { name: "ارتباط با ما", href: "#contact" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-200 py-1" 
          : "bg-white/60 backdrop-blur-sm border-b border-transparent py-2 md:py-3"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between transition-all duration-500">
          <div className="flex items-center md:w-1/4">
            <button 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="flex items-center gap-3 relative group focus:outline-none cursor-pointer"
            >
              <div className="absolute inset-0 bg-brand-green/5 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Image
                src="/brand/logo.png"
                alt={siteConfig.companyName}
                width={300}
                height={100}
                className="w-auto h-24 md:h-28 lg:h-32 object-contain transition-all duration-500 relative z-10"
                priority
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-10 md:w-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group py-2 whitespace-nowrap"
              >
                <span className="text-base font-black text-slate-800 group-hover:text-brand-green transition-colors">
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-brand-navy to-brand-green transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 rounded-t-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl bg-slate-100/80 text-slate-600 hover:bg-slate-200 hover:text-brand-navy focus:outline-none transition-colors"
              aria-label="منو"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          
          {/* Empty spacer for desktop centering */}
          <div className="hidden md:block md:w-1/4"></div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-slate-100 shadow-xl absolute w-full ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-between p-3 rounded-xl font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-green transition-colors"
            >
              {link.name}
              <ChevronLeft className="w-4 h-4 opacity-50" />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
