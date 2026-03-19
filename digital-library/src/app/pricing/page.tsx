"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { CheckCircle2, XCircle, Crown, ShieldCheck, Zap, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function PricingPage() {
  const { user, upgradeToPremium } = useAuth();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const handleUpgrade = () => {
    setLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      upgradeToPremium();
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success || user?.tier === "Premium") {
    return (
      <div className="container mx-auto px-4 py-20 text-center flex-1 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">You're a Premium Member!</h1>
        <p className="text-slate-600 max-w-md mx-auto mb-8 text-lg">
          Thank you for subscribing. You now have unlimited access to all premium books and study materials.
        </p>
        <a href="/explore">
          <Button size="lg" variant="premium">Start Reading Premium Content</Button>
        </a>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Crown className="w-12 h-12 text-premium-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Choose Your Plan</h1>
          <p className="text-lg text-slate-600">
            Get unlimited access to the world's best digital library. Read offline, access premium content, and more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 items-center">
          
          {/* Free Tier */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Free Explorer</h3>
            <p className="text-slate-500 mb-6">Perfect for casual reading.</p>
            <div className="text-4xl font-extrabold text-slate-900 mb-8">₹0 <span className="text-lg font-medium text-slate-500">/ forever</span></div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Access to 5,000+ public domain books
              </li>
              <li className="flex gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" /> Basic children's storybooks
              </li>
              <li className="flex gap-3 text-slate-400">
                <XCircle className="w-5 h-5 text-slate-300 shrink-0" /> No offline downloads
              </li>
              <li className="flex gap-3 text-slate-400">
                <XCircle className="w-5 h-5 text-slate-300 shrink-0" /> No premium study materials
              </li>
              <li className="flex gap-3 text-slate-400">
                <XCircle className="w-5 h-5 text-slate-300 shrink-0" /> Ad-supported experience
              </li>
            </ul>
            
            <Button variant="outline" className="w-full" disabled={true}>
              Current Plan
            </Button>
          </div>
          
          {/* Premium Tier */}
          <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-2xl relative border border-primary-800 scale-100 md:scale-105 z-10">
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-gradient-to-r from-premium-500 to-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Most Popular
              </span>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">Premium Scholar</h3>
            <p className="text-slate-400 mb-6">Unlock everything DigiLib has to offer.</p>
            <div className="text-4xl font-extrabold mb-8 text-white">₹500 <span className="text-lg font-medium text-slate-400">/ year</span></div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3 text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-premium-400 shrink-0" /> Unlimited access to ALL 50,000+ books
              </li>
              <li className="flex gap-3 text-slate-200">
                <Download className="w-5 h-5 text-premium-400 shrink-0" /> Download PDFs for offline reading
              </li>
              <li className="flex gap-3 text-slate-200">
                <ShieldCheck className="w-5 h-5 text-premium-400 shrink-0" /> 100% Ad-free experience
              </li>
              <li className="flex gap-3 text-slate-200">
                <Zap className="w-5 h-5 text-premium-400 shrink-0" /> Premium university study materials
              </li>
              <li className="flex gap-3 text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-premium-400 shrink-0" /> Priority access to new releases
              </li>
            </ul>
            
            <Button 
              variant="premium" 
              className="w-full py-6 text-lg tracking-wide rounded-xl mt-4" 
              onClick={handleUpgrade}
              disabled={loading || !user}
            >
              {loading ? "Processing..." : user ? "Upgrade to Premium" : "Log In to Upgrade"}
            </Button>
            {!user && (
              <p className="text-center text-sm text-slate-400 mt-4">
                Please log in from the top right to upgrade your account.
              </p>
            )}
            <p className="text-center text-xs text-slate-500 mt-4">
              Secure payment processing. Cancel anytime.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
