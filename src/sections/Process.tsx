export function Process() {
  const steps = [
    { num: "۱", title: "بررسی نیاز", desc: "شنیدن دغدغه‌ها و نیازهای دقیق سازمان شما" },
    { num: "۲", title: "تحلیل زیرساخت", desc: "بررسی وضعیت موجود شبکه و تجهیزات" },
    { num: "۳", title: "ارائه راهکار", desc: "طراحی نقشه و پیشنهاد بهترین راهکار زیرساختی" },
    { num: "۴", title: "اجرا و پیاده‌سازی", desc: "نصب تجهیزات و پیکربندی تخصصی سرویس‌ها" },
    { num: "۵", title: "تست و تحویل", desc: "آزمون صحت عملکرد سیستم و آموزش به کاربران" },
    { num: "۶", title: "پشتیبانی و نگهداری", desc: "مانیتورینگ و رفع مشکلات در قالب قرارداد پشتیبانی" },
  ];

  return (
    <section id="process" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">مسیر همکاری با ما</h2>
          <p className="text-slate-600 text-lg">
            فرایندی شفاف و اصولی برای رسیدن به یک زیرساخت پایدار و استاندارد.
          </p>
        </div>

        <div className="relative mt-8">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-slate-200 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-20 h-20 mx-auto bg-white border-4 border-slate-100 rounded-full flex items-center justify-center text-3xl font-black text-brand-navy mb-8 shadow-sm relative z-10">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-4">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-[2] px-2 text-justify" style={{ textAlignLast: 'center' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
