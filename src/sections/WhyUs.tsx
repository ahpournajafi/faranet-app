import { Lightbulb, Shield, Clock, Users, Zap, Handshake } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "تخصص فنی و تجربه",
    description: "بهره‌گیری از دانش روز و متخصصان مجرب برای ارائه بهترین راهکارهای فناوری اطلاعات.",
  },
  {
    icon: Handshake,
    title: "نگاه زیرساختی",
    description: "طراحی شبکه‌ها با رویکردی بلندمدت برای جلوگیری از هزینه‌های مجدد در آینده.",
  },
  {
    icon: Shield,
    title: "امنیت و پایداری",
    description: "حفاظت از داده‌های حیاتی کسب‌وکار شما و تضمین پایداری سیستم‌های ارتباطی.",
  },
  {
    icon: Clock,
    title: "پشتیبانی مستمر و سریع",
    description: "حضور به موقع و رفع سریع مشکلات فنی برای جلوگیری از توقف کارمندان شما.",
  },
  {
    icon: Zap,
    title: "راهکار متناسب با نیاز",
    description: "پرهیز از تحمیل هزینه‌های اضافی و ارائه خدمات دقیقاً مطابق با نیاز و ابعاد سازمان.",
  },
  {
    icon: Users,
    title: "شفافیت در همکاری",
    description: "ارائه گزارش‌های دوره‌ای دقیق از وضعیت شبکه و خدمات انجام‌شده در قالب پروژه‌ای یا قراردادی.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">چرا فرانت را انتخاب کنید؟</h2>
          <p className="text-slate-600 text-lg">
            ما تنها یک مجری خدمات نیستیم، بلکه شریک فناوری شما در مسیر رشد کسب‌وکارتان خواهیم بود.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center">
                <reason.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{reason.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed text-justify" style={{ textAlignLast: 'right' }}>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
