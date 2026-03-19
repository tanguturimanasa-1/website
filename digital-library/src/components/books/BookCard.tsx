import Link from "next/link";
import { Book as BookType } from "@/lib/data";
import { Star, Crown } from "lucide-react";

export default function BookCard({ book }: { book: BookType }) {
  return (
    <div className="group flex flex-col bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-primary-600/10 transition-all duration-300">
      
      {/* Cover Image Container */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-slate-100">
        <img 
          src={book.coverImage} 
          alt={book.title} 
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
        />
        
        {/* Tier Badge */}
        {book.tier === "Premium" && (
          <div className="absolute top-3 right-3 bg-premium-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg flex items-center gap-1">
            <Crown className="w-3 h-3" /> Premium
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded-md shadow text-slate-700">
          {book.category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1 gap-2">
          <Link href={`/book/${book.id}`} className="font-bold text-slate-900 line-clamp-2 hover:text-primary-600 transition">
            {book.title}
          </Link>
          <div className="flex items-center gap-1 text-accent-500 text-sm font-medium shrink-0 pt-0.5">
            <Star className="w-3.5 h-3.5 fill-accent-500" />
            {book.rating}
          </div>
        </div>
        
        <p className="text-sm text-slate-500 mb-3">{book.author}</p>
        
        <p className="text-sm text-slate-600 line-clamp-2 mt-auto mb-4">
          {book.description}
        </p>
        
        {/* Actions */}
        <div className="flex items-center justify-between mt-auto">
          <Link href={`/book/${book.id}`} className="text-sm font-semibold text-primary-600 hover:text-primary-700">
            View Details
          </Link>
          <span className="text-xs text-slate-400 font-medium bg-slate-100 px-2 py-1 rounded">
            {book.publishedYear}
          </span>
        </div>
      </div>
    </div>
  );
}
