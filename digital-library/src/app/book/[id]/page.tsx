"use client";

import { use } from "react";
import Link from "next/link";
import { MOCK_BOOKS } from "@/lib/data";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Star, Heart, Share2, BookOpen, Download, Lock, CheckCircle2 } from "lucide-react";
import BookCard from "@/components/books/BookCard";

export default function BookDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { user } = useAuth();
  
  const book = MOCK_BOOKS.find(b => b.id === id);
  
  if (!book) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Book not found</h1>
        <Link href="/explore">
          <Button>Return to Library</Button>
        </Link>
      </div>
    );
  }

  // Related books (same category, excluding current)
  const relatedBooks = MOCK_BOOKS.filter(b => b.category === book.category && b.id !== book.id).slice(0, 4);

  const isPremiumUser = user?.tier === "Premium";
  const canAccessContent = book.tier === "Free" || isPremiumUser;

  return (
    <div className="bg-white min-h-screen">
      {/* Decor */}
      <div className="h-64 bg-slate-900 absolute top-0 w-full z-0"></div>
      
      <div className="container mx-auto px-4 pt-8 pb-20 relative z-10">
        
        {/* Back Button */}
        <Link href="/explore" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition font-medium text-sm">
          <ArrowLeft className="w-4 h-4" /> Back to Catalog
        </Link>
        
        {/* Main Content Area */}
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-10 mb-16">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            
            {/* Cover Column */}
            <div className="w-full md:w-1/3 lg:w-1/4 shrink-0 flex flex-col items-center">
              <div className="relative w-full max-w-[280px] aspect-[2/3] rounded-lg overflow-hidden shadow-2xl mb-6">
                <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="w-full flex justify-center gap-3">
                <Button variant="outline" size="icon" title="Save to Wishlist">
                  <Heart className="w-5 h-5 text-slate-600" />
                </Button>
                <Button variant="outline" size="icon" title="Share">
                  <Share2 className="w-5 h-5 text-slate-600" />
                </Button>
              </div>
            </div>
            
            {/* Details Column */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 text-slate-600 uppercase tracking-wider">
                  {book.category}
                </span>
                {book.tier === "Premium" && (
                  <span className="text-xs font-bold px-2 py-1 rounded bg-premium-100 text-premium-700 flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Premium Content
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 leading-tight">
                {book.title}
              </h1>
              
              <p className="text-lg text-slate-600 mb-6 font-medium">By {book.author}</p>
              
              <div className="flex items-center gap-6 mb-8 border-y border-slate-100 py-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent-500 fill-accent-500" />
                  <div>
                    <div className="font-bold text-slate-900">{book.rating} Rating</div>
                    <div className="text-xs text-slate-500">2.4k reviews</div>
                  </div>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div>
                  <div className="font-bold text-slate-900">{book.publishedYear}</div>
                  <div className="text-xs text-slate-500">Published</div>
                </div>
              </div>

              {/* Action Area based on permission */}
              <div className="bg-slate-50 rounded-xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-100">
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-slate-900">
                    {canAccessContent ? "Ready to Read!" : "Unlock Premium Content"}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">
                    {canAccessContent 
                      ? "You have full access to this material."
                      : "Upgrade to Premium to read or download this book entirely."
                    }
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                  {canAccessContent ? (
                    <>
                      <Button className="gap-2 bg-primary-600 hover:bg-primary-700 w-full sm:w-auto">
                        <BookOpen className="w-4 h-4" /> Read Online
                      </Button>
                      <Button variant="outline" className="gap-2 w-full sm:w-auto">
                        <Download className="w-4 h-4" /> Download PDF
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" className="gap-2 w-full sm:w-auto bg-white">
                        <BookOpen className="w-4 h-4" /> Read Sample
                      </Button>
                      <Link href="/pricing" className="w-full sm:w-auto">
                        <Button variant="premium" className="gap-2 w-full">
                          Upgrade to Premium
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>

              {/* Synopsis */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Synopsis</h3>
                <p className="text-slate-600 leading-relaxed max-w-3xl mb-6">
                  {book.description} 
                  <br/><br/>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {book.tags.map(tag => (
                    <span key={tag} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm hover:bg-slate-200 cursor-pointer transition">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">More from {book.category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
              {relatedBooks.map(rb => (
                <BookCard key={rb.id} book={rb} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
