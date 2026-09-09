import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { PhoneCall } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-brand-navy/5 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-base md:text-lg font-bold text-brand-green-dark mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            {siteConfig.companyName}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-8 lg:whitespace-nowrap">
            راهکارهای هوشمند فناوری اطلاعات <span className="text-brand-navy">برای کسب‌و‌کارها</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-5xl mx-auto leading-[2.2] text-center">
            طراحی، راه‌اندازی و پشتیبانی زیرساخت‌های شبکه و فناوری اطلاعات؛ از شبکه و سرور تا مجازی‌سازی و امنیت.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#consultation" variant="primary" size="lg" className="w-full sm:w-auto gap-2">
              درخواست مشاوره
            </Button>
            <Button href={`tel:${siteConfig.phone}`} variant="secondary" size="lg" className="w-full sm:w-auto gap-2 shadow-lg shadow-brand-green/20">
              <PhoneCall className="w-5 h-5" />
              <span dir="ltr" className="inline-block font-[family-name:var(--font-iransans)] font-medium text-2xl tracking-wide">{siteConfig.phone}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
