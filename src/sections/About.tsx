import Image from "next/image";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 w-full order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">درباره {siteConfig.companyName}</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-[2.2] text-justify">
              <p>
                مجموعه <strong>{siteConfig.companyName}</strong> (با نام تجاری فرانت) با هدف ارائه خدمات تخصصی و نوین در حوزه فناوری اطلاعات و ارتباطات تأسیس شده است. ما با تکیه بر دانش روز و تیمی مجرب، در تلاشیم تا دغدغه‌های زیرساختی سازمان‌ها و کسب‌وکارها را برطرف کنیم.
              </p>
              <p>
                فرانت به عنوان یک شریک قابل اعتماد در کنار شما قرار می‌گیرد تا از شبکه‌ای پایدار، امن و پرسرعت بهره‌مند شوید. رسالت ما کاهش هزینه‌های پنهان IT، افزایش بهره‌وری کارمندان شما و ایجاد بستری مطمئن برای توسعه کسب‌وکارتان است.
              </p>
              <p>
                ارائه مشاوره‌های تخصصی پیش از اجرا، طراحی زیرساخت بر اساس استانداردهای جهانی، و پشتیبانی بی‌وقفه، اصول کلیدی ما در فرانت محسوب می‌شوند.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                <span className="block text-4xl font-black text-brand-green mb-2">+۱۰</span>
                <span className="text-sm font-medium text-slate-500">سال تجربه مدیران</span>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                <span className="block text-4xl font-black text-brand-navy mb-2">۲۴/۷</span>
                <span className="text-sm font-medium text-slate-500">پشتیبانی مداوم</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full order-1 lg:order-2">
            <div className="relative rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/3] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
                alt="زیرساخت فناوری اطلاعات"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
