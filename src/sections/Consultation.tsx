"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { submitConsultation } from "@/actions/consultation";

export function Consultation() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Simple client-side validation
    const newErrors: Record<string, string> = {};
    if (!data.name) newErrors.name = "لطفاً نام و نام خانوادگی را وارد کنید.";
    if (!data.phone) newErrors.phone = "لطفاً شماره تماس معتبر وارد کنید.";
    if (!data.service) newErrors.service = "لطفاً خدمت موردنظر را انتخاب کنید.";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    // Call Server Action
    const result = await submitConsultation(formData);
    
    if (result.success) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("idle");
      alert(result.error);
    }
  };

  return (
    <section id="consultation" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex flex-col md:flex-row">
          
          <div className="md:w-2/5 bg-brand-navy p-10 text-white flex flex-col justify-center">
            <h2 className="text-2xl lg:text-[1.75rem] font-bold mb-4 whitespace-nowrap">درخواست مشاوره رایگان</h2>
            <p className="text-slate-300 mb-8 leading-relaxed text-justify" style={{ textAlignLast: 'right' }}>
              برای بررسی زیرساخت‌های سازمان خود و دریافت بهترین راهکارهای فناوری اطلاعات، فرم روبرو را پر کنید تا کارشناسان ما در سریع‌ترین زمان با شما تماس بگیرند.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green shrink-0">۱</div>
                <span className="text-sm">تکمیل فرم درخواست</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green shrink-0">۲</div>
                <span className="text-sm">تماس کارشناسان فرانت</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green shrink-0">۳</div>
                <span className="text-sm">ارائه راهکار و برآورد هزینه</span>
              </div>
            </div>
          </div>

          <div className="md:w-3/5 p-10">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">درخواست شما با موفقیت ثبت شد.</h3>
                <p className="text-slate-600">کارشناسان ما به زودی با شما تماس خواهند گرفت.</p>
                <Button variant="outline" className="mt-4" onClick={() => setStatus("idle")}>ثبت درخواست جدید</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">نام و نام خانوادگی *</label>
                    <input type="text" id="name" name="name" className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all`} placeholder="علی احمدی" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">شماره تماس *</label>
                    <input type="tel" id="phone" name="phone" dir="ltr" className={`w-full px-4 py-3 rounded-lg border text-left ${errors.phone ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all`} placeholder="09123456789" />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 text-right">{errors.phone}</p>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1">
                    <label htmlFor="company" className="text-sm font-medium text-slate-700">نام مجموعه / شرکت</label>
                    <input type="text" id="company" name="company" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all" placeholder="شرکت فناوری..." />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="service" className="text-sm font-medium text-slate-700">خدمت موردنظر *</label>
                    <select id="service" name="service" className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500' : 'border-slate-300'} focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all bg-white`}>
                      <option value="">انتخاب کنید...</option>
                      <option value="network">پشتیبانی و راه‌اندازی شبکه</option>
                      <option value="contract">قرارداد پشتیبانی IT</option>
                      <option value="helpdesk">خدمات Help Desk</option>
                      <option value="infrastructure">زیرساخت فناوری اطلاعات</option>
                      <option value="other">سایر خدمات</option>
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="details" className="text-sm font-medium text-slate-700">توضیحات (اختیاری)</label>
                  <textarea id="details" name="details" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-green focus:border-transparent outline-none transition-all resize-none" placeholder="توضیحات مختصری درباره نیاز خود بنویسید..."></textarea>
                </div>
                
                {/* Honeypot field for spam protection */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <label htmlFor="website">Website URL (leave empty)</label>
                  <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <Button type="submit" variant="primary" className="w-full" disabled={status === "submitting"}>
                  {status === "submitting" ? "در حال ارسال..." : "ثبت درخواست مشاوره"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
