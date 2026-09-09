"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "قرارداد پشتیبانی IT شامل چه خدماتی است؟",
    answer: "قراردادهای پشتیبانی ما شامل مانیتورینگ مستمر شبکه، نگهداری دوره‌ای سرورها و تجهیزات سخت‌افزاری، رفع مشکلات نرم‌افزاری کاربران (Help Desk)، تهیه نسخه پشتیبان (Backup) منظم و ارائه مشاوره‌های تخصصی جهت بهبود زیرساخت می‌باشد. سطح خدمات بسته به نیاز و توافق با سازمان شما قابل سفارشی‌سازی است."
  },
  {
    question: "پشتیبانی شبکه برای چه کسب‌وکارهایی مناسب است؟",
    answer: "تمامی سازمان‌ها، ادارات، شرکت‌های کوچک و متوسط، کارخانه‌ها، کلینیک‌ها و مدارسی که برای انجام امور روزمره خود به کامپیوترها، اینترنت و نرم‌افزارهای یکپارچه وابسته هستند، به پشتیبانی شبکه نیاز دارند تا از توقف کار و از دست رفتن اطلاعات جلوگیری کنند."
  },
  {
    question: "هزینه پشتیبانی شبکه چگونه محاسبه می‌شود؟",
    answer: "برای دریافت برآورد هزینه، درخواست مشاوره ارسال کنید. هزینه‌ها بر اساس فاکتورهایی نظیر ابعاد شبکه، تعداد سرورها، تعداد کاربران (کلاینت‌ها)، مسافت و نوع خدمات درخواستی (حضوری، ریموت یا ترکیبی) به صورت اختصاصی برای هر سازمان محاسبه می‌شود."
  },
  {
    question: "راه‌اندازی شبکه یک شرکت شامل چه مراحلی است؟",
    answer: "این فرایند شامل نیازسنجی، طراحی نقشه شبکه، کابل‌کشی ساخت‌یافته، نصب داکت و ترانک، آرایش رک، نصب و پیکربندی سرورها، روترها و سوییچ‌ها، راه‌اندازی سرویس‌های نرم‌افزاری تحت شبکه و در نهایت تست و تحویل به کارفرما می‌باشد."
  },
  {
    question: "آیا پشتیبانی به صورت حضوری و غیرحضوری ارائه می‌شود؟",
    answer: "بله. بسته به نوع مشکل و مفاد قرارداد، خدمات ما هم به صورت ریموت (برای رفع سریع اختلالات نرم‌افزاری) و هم به صورت اعزام کارشناس حضوری (برای رفع مشکلات سخت‌افزاری و زیرساختی) ارائه می‌گردد."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">پرسش‌های متداول</h2>
          <p className="text-slate-600 text-lg">
            پاسخ به سوالاتی که معمولاً مدیران و صاحبان کسب‌وکار پیش از شروع همکاری از ما می‌پرسند.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === idx ? 'border-brand-green shadow-sm' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-right focus:outline-none"
                onClick={() => toggle(idx)}
              >
                <span className="font-bold text-slate-800 pr-2">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  openIndex === idx ? 'bg-brand-green text-white rotate-180' : 'bg-slate-100 text-slate-500'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 text-justify" style={{ textAlignLast: 'right' }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
