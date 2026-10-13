import React from "react";
import { useLocation } from "wouter";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "../components/SEOHead";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center bg-[#09131c] text-white px-4 py-16">
      <SEOHead
        title="404 — Sayfa Bulunamadı | STRUCTIVA®"
        description="Aradığınız sayfa bulunamadı veya taşınmış olabilir."
        robots="noindex, nofollow"
        canonicalPath="/404"
      />
      <div className="w-full max-w-lg mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-amber-500/20 rounded-full animate-ping" />
            <div className="relative h-20 w-20 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <AlertCircle className="h-10 w-10" />
            </div>
          </div>
        </div>

        <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
          EN 1090-2 EXC4 · CE · EUROCODE 3
        </span>

        <h1 className="text-6xl sm:text-7xl font-black text-white tracking-tight mb-3">
          404
        </h1>

        <h2 className="text-xl font-bold text-slate-200 mb-3">
          Sayfa Bulunamadı / Page Not Found
        </h2>

        <p className="text-slate-400 text-sm mb-8 leading-relaxed max-w-md mx-auto">
          Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak kullanım dışı kalmış olabilir.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            onClick={() => setLocation("/tr")}
            className="bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] font-bold px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-amber-500/20"
          >
            <Home className="w-4 h-4 mr-2" />
            Ana Sayfa
          </Button>
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="bg-white/5 border-white/15 text-white hover:bg-white/10 px-6 py-2.5 rounded-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Geri Dön
          </Button>
        </div>
      </div>
    </div>
  );
}
