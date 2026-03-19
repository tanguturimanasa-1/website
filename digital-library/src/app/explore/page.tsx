"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { MOCK_BOOKS, CATEGORIES, Category, Tier } from "@/lib/data";
import BookCard from "@/components/books/BookCard";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";

function ExploreContent() {
  const searchParams = useSearchParams();
  const defaultCategory = searchParams.get("category") as Category | null;
  const defaultSort = searchParams.get("sort");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">(defaultCategory || "All");
  const [selectedTier, setSelectedTier] = useState<Tier | "All">("All");
  const [sortBy, setSortBy] = useState<"newest" | "rating" | "popular">(defaultSort as any || "newest");
  
  // Filter and sort logic
  const filteredBooks = useMemo(() => {
    return MOCK_BOOKS.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            book.author.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
      const matchesTier = selectedTier === "All" || book.tier === selectedTier;
      return matchesSearch && matchesCategory && matchesTier;
    }).sort((a, b) => {
      if (sortBy === "newest") return b.publishedYear - a.publishedYear;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // Popular would normally sort by view count
    });
  }, [searchQuery, selectedCategory, selectedTier, sortBy]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl flex flex-col md:flex-row gap-8">
      
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 shrink-0 space-y-8">
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Filter className="w-5 h-5" /> Filters
          </h2>
          
          <div className="space-y-6">
            {/* Categories */}
            <div>
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Categories</h3>
              <div className="space-y-2">
                <button 
                  onClick={() => setSelectedCategory("All")}
                  className={`block w-full text-left text-sm px-3 py-2 rounded-md transition ${selectedCategory === "All" ? "bg-primary-50 text-primary-700 font-medium" : "text-slate-600 hover:bg-slate-100"}`}
                >
                  All Categories
                </button>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`block w-full text-left text-sm px-3 py-2 rounded-md transition ${selectedCategory === cat ? "bg-primary-50 text-primary-700 font-medium" : "text-slate-600 hover:bg-slate-100"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Access Tier */}
            <div>
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Access Tier</h3>
              <div className="flex bg-slate-100 p-1 rounded-lg">
                <button 
                  onClick={() => setSelectedTier("All")}
                  className={`flex-1 text-xs py-1.5 rounded-md transition font-medium ${selectedTier === "All" ? "bg-white shadow-sm text-slate-900" : "text-slate-500"}`}
                >
                  All
                </button>
                <button 
                  onClick={() => setSelectedTier("Free")}
                  className={`flex-1 text-xs py-1.5 rounded-md transition font-medium ${selectedTier === "Free" ? "bg-white shadow-sm text-slate-900" : "text-slate-500"}`}
                >
                  Free
                </button>
                <button 
                  onClick={() => setSelectedTier("Premium")}
                  className={`flex-1 text-xs py-1.5 rounded-md transition font-medium ${selectedTier === "Premium" ? "bg-white shadow-sm text-premium-600" : "text-slate-500"}`}
                >
                  Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Top Bar: Search and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search library..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 bg-white border border-slate-200 rounded-lg pl-10 pr-4 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition"
            />
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <SlidersHorizontal className="w-4 h-4 text-slate-500" />
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="h-10 bg-white border border-slate-200 rounded-lg px-3 text-sm focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition cursor-pointer"
            >
              <option value="newest">Newest Added</option>
              <option value="rating">Highest Rated</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">
            {selectedCategory === "All" ? "Library Catalog" : selectedCategory}
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Showing {filteredBooks.length} result{filteredBooks.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-slate-50 rounded-2xl border border-slate-100 text-center px-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
              <Search className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">No books found</h3>
            <p className="text-slate-500 mb-6">Try adjusting your filters or search query.</p>
            <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedCategory("All"); setSelectedTier("All"); }}>
              Clear all filters
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}

export default function ExplorePage() {
  return (
    <Suspense fallback={<div className="container mx-auto p-8 animate-pulse text-center">Loading Library...</div>}>
      <ExploreContent />
    </Suspense>
  )
}
