import { ServiceCard } from "@/components/ui/ServiceCard";
import { Network, Headset, Server, ShieldCheck, Cctv, PhoneForwarded, Cpu, LayoutTemplate, Briefcase } from "lucide-react";

const priorityServices = [
  {
    icon: Network,
    title: "پشتیبانی و راه‌اندازی شبکه",
    description: "طراحی نقشه شبکه، کابل‌کشی ساخت‌یافته، نصب تجهیزات و مانیتورینگ مستمر برای پایداری ۱۰۰ درصدی زیرساخت ارتباطی شما.",
    features: ["طراحی و راه‌اندازی", "پشتیبانی و نگهداری", "بهینه‌سازی شبکه", "امن‌سازی و مانیتورینگ"],
    priority: true,
  },
  {
    icon: Briefcase,
    title: "قرارداد پشتیبانی IT",
    description: "پشتیبانی منظم، سریع و قابل اتکا با برنامه‌های شفاف و منعطف متناسب با نیاز سازمان و کسب‌وکار شما.",
    features: ["کاهش زمان ازکارافتادگی", "نگهداری پیشگیرانه", "پاسخگویی سریع", "مدیریت زیرساخت"],
    priority: true,
  },
  {
    icon: Headset,
    title: "خدمات Help Desk",
    description: "رفع مشکلات نرم‌افزاری و سخت‌افزاری کاربران نهایی به صورت حضوری و ریموت با بالاترین سرعت.",
    features: ["پشتیبانی کاربران", "رفع خطاهای سیستمی", "نصب نرم‌افزار", "راهنمایی فنی"],
    priority: true,
  },
  {
    icon: LayoutTemplate,
    title: "زیرساخت فناوری اطلاعات",
    description: "مشاوره، طراحی و اجرای تخصصی پروژه‌های فناوری اطلاعات متناسب با نیاز و بودجه شما.",
    features: ["تحلیل نیازمندی‌ها", "ارائه راهکار جامع", "استانداردسازی", "ارتقای پایداری"],
    priority: true,
  },
];

const secondaryServices = [
  {
    icon: Server,
    title: "مجازی‌سازی و سرور",
    description: "پیاده‌سازی و مدیریت زیرساخت‌های مجازی (VMware, Hyper-V, Proxmox) و فضاسازی سرور.",
  },
  {
    icon: ShieldCheck,
    title: "امنیت شبکه",
    description: "پیکربندی فایروال، مدیریت دسترسی‌ها و حفاظت از داده‌های حساس سازمانی در برابر تهدیدات.",
  },
  {
    icon: Cctv,
    title: "دوربین‌های مداربسته",
    description: "مشاوره، طراحی، نصب و راه‌اندازی، پیکربندی و نگهداری سیستم‌های نظارت تصویری و مشاهده از راه دور.",
  },
  {
    icon: PhoneForwarded,
    title: "خدمات VoIP",
    description: "راه‌اندازی مراکز تلفن تحت شبکه برای ارتباطات یکپارچه و کاهش هزینه‌های ارتباطی سازمان.",
  },
  {
    icon: Cpu,
    title: "سخت‌افزار و نرم‌افزار",
    description: "مشاوره و تامین تجهیزات، اسمبل و ارتقای کامپیوترها، نصب و پیکربندی سیستم‌عامل‌ها و نرم‌افزارهای کاربردی.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">خدمات تخصصی فرانت</h2>
          <p className="text-slate-600 text-lg">
            فناوری را ساده، امن و پایدار در اختیار شما قرار می‌دهیم. مجموعه‌ای کامل از خدمات زیرساختی برای رشد کسب‌وکار شما.
          </p>
        </div>

        {/* Priority Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {priorityServices.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>

        {/* Secondary Services */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">سایر خدمات فناوری اطلاعات</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
