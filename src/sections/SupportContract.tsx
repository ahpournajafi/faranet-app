import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "کاهش چشمگیر زمان ازکارافتادگی سیستم‌ها",
  "پاسخگویی منظم و در دسترس بودن تیم فنی",
  "نگهداری پیشگیرانه برای جلوگیری از خرابی‌های ناگهانی",
  "پشتیبانی مستمر کاربران و رفع مشکلات روزمره",
  "مدیریت یکپارچه زیرساخت شبکه و سرورها",
  "استمرار خدمات فناوری اطلاعات با بالاترین کیفیت",
];

export function SupportContract() {
  return (
    <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-green via-brand-navy to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              قرارداد پشتیبانی IT <span className="text-brand-green">همراه مطمئن شما</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed text-justify" style={{ textAlignLast: 'right' }}>
              با عقد قرارداد پشتیبانی شبکه و IT با فرانت، دغدغه‌های فنی سازمان خود را به متخصصان ما بسپارید و با خیالی آسوده بر روی توسعه کسب‌وکار خود تمرکز کنید. ما زیرساخت شما را همیشه روشن و پایدار نگه می‌داریم.
            </p>
            
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0" />
                  <span className="text-slate-200">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button href="#consultation" variant="secondary" size="lg">
              دریافت مشاوره پشتیبانی
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute inset-4 border-2 border-brand-green/30 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-12 border-2 border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                  <div className="text-5xl font-black text-brand-green mb-2">۹۹.۹٪</div>
                  <div className="text-lg font-medium text-white">پایداری شبکه تضمین‌شده</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
