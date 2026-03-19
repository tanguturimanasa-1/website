"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Search, BookOpen, Menu, UserCircle, Crown } from "lucide-react";
import { useAuth } from "@/lib/auth";

export default function Navbar() {
  const pathname = usePathname();
  const { user, login, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-primary-700 hover:opacity-80 transition">
          <BookOpen className="h-6 w-6" />
          <span className="font-bold text-xl tracking-tight">DigiLib</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/explore" className={`hover:text-primary-600 transition ${pathname === "/explore" ? "text-primary-600 font-semibold" : ""}`}>
            Explore
          </Link>
          <Link href="/categories/kids" className={`hover:text-accent-500 transition ${pathname === "/categories/kids" ? "text-accent-500 font-semibold" : ""}`}>
            Kids Area
          </Link>
          <Link href="/categories/academic" className={`hover:text-primary-600 transition ${pathname === "/categories/academic" ? "text-primary-600 font-semibold" : ""}`}>
            Academics
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden lg:flex flex-1 max-w-sm mx-6 relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
          <input 
            type="text" 
            placeholder="Search books, authors, or subjects..." 
            className="w-full h-10 bg-slate-100 border-transparent focus:bg-white focus:border-primary-400 focus:ring-2 focus:ring-primary-100 rounded-full pl-10 pr-4 text-sm transition-all outline-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              {user.tier === "Free" && (
                <Link href="/pricing" className="hidden sm:block">
                  <Button variant="premium" size="sm" className="gap-1 animate-pulse hover:animate-none">
                    <Crown className="w-4 h-4" /> Go Premium
                  </Button>
                </Link>
              )}
              <div className="flex items-center gap-2 ml-2">
                <Link href="/dashboard" className="flex items-center gap-2 hover:opacity-80 transition">
                  {user.avatar ? (
                    <img src={user.avatar} alt="Avatar" className="w-8 h-8 rounded-full border border-slate-200 bg-white" />
                  ) : (
                    <UserCircle className="w-8 h-8 text-slate-400" />
                  )}
                </Link>
              </div>
            </>
          ) : (
            <>
              <Button variant="ghost" onClick={() => login("test@example.com")}>Log In</Button>
              <Button onClick={() => login("test@example.com")}>Sign Up</Button>
            </>
          )}

          {/* Mobile Menu */}
          <button className="md:hidden p-2 text-slate-600">
            <Menu className="w-5 h-5" />
          </button>
        </div>

      </div>
    </header>
  );
}
