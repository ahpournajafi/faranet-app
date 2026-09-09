import { siteConfig } from "@/config/site";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">ارتباط با ما</h2>
          <p className="text-slate-600 text-lg">
            پاسخگوی سوالات شما هستیم. از طریق راه‌های ارتباطی زیر با ما در تماس باشید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Phone */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">تماس تلفنی</h3>
            <p className="text-slate-500 text-sm mb-4">مشاوره و پشتیبانی (ساعات کاری)</p>
            <a href={`tel:${siteConfig.phone}`} dir="ltr" className="font-mono font-bold text-lg text-brand-navy hover:text-brand-green transition-colors">
              {siteConfig.phone}
            </a>
          </div>

          {/* Email */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-brand-navy/10 text-brand-navy rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">ایمیل سازمانی</h3>
            <p className="text-slate-500 text-sm mb-4">ارسال مدارک و درخواست‌های رسمی</p>
            <a href={`mailto:info@faranetgroup.ir`} dir="ltr" className="font-mono font-bold text-base text-brand-navy hover:text-brand-green transition-colors">
              info@faranetgroup.ir
            </a>
          </div>

          {/* Address */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">آدرس دفتر</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {siteConfig.address}
            </p>
          </div>

          {/* Working Hours */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-14 h-14 bg-brand-navy/10 text-brand-navy rounded-full flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">ساعات کاری</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              شنبه تا چهارشنبه: ۸ الی ۱۷<br />
              پنجشنبه‌ها: ۸ الی ۱۳
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
