import Link from "next/link";
import { BookOpen, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-primary-700 mb-4 inline-flex">
              <BookOpen className="h-6 w-6" />
              <span className="font-bold text-xl tracking-tight">DigiLib</span>
            </Link>
            <p className="text-sm text-slate-500 mb-4">
              Your premium digital library. Explore novels, study materials, and comics from anywhere in the world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-primary-600 transition"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-primary-600 transition"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/explore?category=Novels" className="hover:text-primary-600">Novels & Fiction</Link></li>
              <li><Link href="/explore?category=Study" className="hover:text-primary-600">Study Materials</Link></li>
              <li><Link href="/explore?category=Kids" className="hover:text-primary-600">Children's Books</Link></li>
              <li><Link href="/explore?category=Comics" className="hover:text-primary-600">Comics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/about" className="hover:text-primary-600">About Us</Link></li>
              <li><Link href="/pricing" className="hover:text-primary-600">Pricing</Link></li>
              <li><Link href="/careers" className="hover:text-primary-600">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary-600">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Subscribe to Newsletter</h4>
            <p className="text-sm text-slate-500 mb-3">Get the latest arrivals and premium offers directly to your inbox.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="w-full text-sm px-3 py-2 border border-slate-300 rounded-l-md focus:outline-none focus:border-primary-500" />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-md text-sm font-medium transition">
                Subscribe
              </button>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">© 2026 DigiLib. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-slate-500">
            <Link href="/privacy" className="hover:text-primary-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
