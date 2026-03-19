import Link from "next/link";
import { Button } from "@/components/ui/Button";
import BookCard from "@/components/books/BookCard";
import { FEATURED_BOOKS, RECENTLY_ADDED, CATEGORIES } from "@/lib/data";
import { ArrowRight, BookOpen, GraduationCap, Sparkles, BookHeart, ShieldCheck, Star, Crown } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
          <div className="w-96 h-96 bg-primary-100/50 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
          <div className="w-96 h-96 bg-accent-100/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-accent-500" />
              <span>Over 10,000+ premium books & resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
              Unlock the World's Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-premium-600">Digital Library</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0">
              From academic textbooks to captivating novels, engaging children's stories to insightful study materials. Read anywhere, anytime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link href="/explore">
                <Button size="lg" className="w-full sm:w-auto gap-2">
                  Start Reading Free <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/50 backdrop-blur">
                  View Premium Plans
                </Button>
              </Link>
            </div>
            
            <div className="mt-10 flex items-center justify-center md:justify-start gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-green-500" /> Ad-free Experience</div>
              <div className="flex items-center gap-1"><BookOpen className="w-4 h-4 text-primary-500" /> Offline Downloads</div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md md:max-w-xl relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary-900/10 border border-slate-200">
              {/* Note: In a real app we would use next/image */}
              <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop" alt="Library showcase" className="w-full h-full object-cover" />
              
              {/* Floating UI Elements */}
              <div className="absolute top-6 -left-6 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="bg-accent-100 p-2 rounded-lg"><Star className="w-5 h-5 text-accent-500 fill-accent-500" /></div>
                <div>
                  <div className="text-sm font-bold">4.9/5 Rating</div>
                  <div className="text-xs text-slate-500">10k+ Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Hits</h2>
              <p className="text-slate-600">Our highest-rated community favorites.</p>
            </div>
            <Link href="/explore?sort=rating" className="hidden sm:flex items-center gap-1 text-primary-600 font-semibold hover:text-primary-700 transition">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_BOOKS.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Explore by Category</h2>
            <p className="text-slate-600">Discover handpicked collections tailored for your learning and entertainment needs.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            <CategoryCard title="Novels" icon={<BookOpen className="w-8 h-8" />} color="bg-indigo-50 text-indigo-600" />
            <CategoryCard title="Study Materials" icon={<GraduationCap className="w-8 h-8" />} color="bg-blue-50 text-blue-600" />
            <CategoryCard title="Children's Books" icon={<BookHeart className="w-8 h-8" />} color="bg-pink-50 text-pink-600" />
            <CategoryCard title="Comics" icon={<Sparkles className="w-8 h-8" />} color="bg-amber-50 text-amber-600" />
          </div>
        </div>
      </section>
      
      {/* Premium CTA Full-width */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-16 h-16 bg-gradient-to-br from-premium-400 to-primary-600 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-xl shadow-premium-500/20">
            <Crown className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Upgrade to Premium</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Get unlimited access to thousands of premium textbooks, exclusive novels, and offline downloads for just <span className="text-white font-bold bg-white/10 px-2 py-1 rounded">₹500/year</span>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/pricing">
              <Button variant="premium" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full shadow-xl shadow-premium-500/25">
                Start Premium Plan
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

function CategoryCard({ title, icon, color }: { title: string, icon: React.ReactNode, color: string }) {
  return (
    <Link href={`/explore?category=${encodeURIComponent(title)}`} className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all cursor-pointer">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-3 ${color}`}>
        {icon}
      </div>
      <h3 className="font-bold text-slate-900 text-center">{title}</h3>
    </Link>
  );
}
