"use client";

import { useAuth } from "@/lib/auth";
import { FEATURED_BOOKS } from "@/lib/data";
import BookCard from "@/components/books/BookCard";
import { BookOpen, Clock, Heart, Settings, Crown, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function DashboardPage() {
  const { user, logout } = useAuth();
  
  if (!user) {
    return (
      <div className="container mx-auto px-4 py-20 text-center flex-1 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-6">
          <BookOpen className="w-8 h-8 text-slate-400" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">Login Required</h1>
        <p className="text-slate-500 max-w-md mx-auto mb-8">You need to log in to access your dashboard, reading history, and saved items.</p>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-10">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header Profile */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
          {user.tier === "Premium" && (
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-premium-400/20 to-primary-600/5 rounded-bl-full -z-10"></div>
          )}
          
          <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full border-4 border-white shadow-md bg-slate-100" />
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">{user.name}</h1>
            <p className="text-slate-500 mb-3">{user.email}</p>
            
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${user.tier === 'Premium' ? 'bg-premium-100 text-premium-700' : 'bg-slate-100 text-slate-600'}`}>
              {user.tier === "Premium" ? <Crown className="w-4 h-4" /> : <Award className="w-4 h-4" />}
              {user.tier} Plan Member
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <Settings className="w-4 h-4" /> Settings
            </Button>
            <Button variant="destructive" onClick={logout}>
              Log Out
            </Button>
          </div>
        </div>
        
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar */}
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4 px-2">Navigation</h3>
              <nav className="space-y-1">
                <a href="#" className="flex items-center gap-3 bg-primary-50 text-primary-700 px-3 py-2 rounded-lg font-medium">
                  <BookOpen className="w-5 h-5" /> My Shelf
                </a>
                <a href="#" className="flex items-center gap-3 hover:bg-slate-50 text-slate-600 px-3 py-2 rounded-lg font-medium transition">
                  <Heart className="w-5 h-5" /> Wishlist
                </a>
                <a href="#" className="flex items-center gap-3 hover:bg-slate-50 text-slate-600 px-3 py-2 rounded-lg font-medium transition">
                  <Clock className="w-5 h-5" /> History
                </a>
              </nav>
            </div>
            
            {user.tier === "Free" && (
              <div className="bg-gradient-to-br from-slate-900 to-primary-900 p-6 rounded-xl shadow-md text-white">
                <Crown className="w-8 h-8 text-premium-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">Upgrade Your Experience</h3>
                <p className="text-sm text-slate-300 mb-4">Unlock offline downloads and 1000+ premium resources.</p>
                <Link href="/pricing">
                  <Button variant="premium" className="w-full text-sm">Upgrade Now</Button>
                </Link>
              </div>
            )}
          </div>
          
          {/* Main Feed */}
          <div className="lg:col-span-3 space-y-8">
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-900">Continue Reading</h2>
                <a href="#" className="text-sm text-primary-600 hover:text-primary-700 font-medium">View History</a>
              </div>
              
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-4">
                <img src={FEATURED_BOOKS[0].coverImage} alt="Book" className="w-20 h-28 object-cover rounded shadow-md shrink-0 bg-slate-100" />
                <div className="flex-1 text-center sm:text-left">
                  <div className="text-xs font-semibold text-primary-600 mb-1">CHAPTER 4: ADVANCED TOPICS</div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{FEATURED_BOOKS[0].title}</h3>
                  <p className="text-sm text-slate-500 mb-3">{FEATURED_BOOKS[0].author}</p>
                  
                  {/* Progress Bar */}
                  <div className="flex items-center gap-3">
                    <div className="h-2 flex-1 bg-slate-100 rounded-full overflow-hidden max-w-sm">
                      <div className="h-full bg-primary-500 w-[45%]"></div>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">45%</span>
                  </div>
                </div>
                <Button className="shrink-0 mt-4 sm:mt-0">Resume</Button>
              </div>
            </section>
            
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-900">Recommended for You</h2>
                <Link href="/explore" className="text-sm text-primary-600 hover:text-primary-700 font-medium">Explore All</Link>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                {FEATURED_BOOKS.slice(1, 4).map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </section>
          </div>
          
        </div>
      </div>
    </div>
  );
}
