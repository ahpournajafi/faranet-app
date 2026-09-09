import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Clock, Send } from "lucide-react";

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const EitaaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="h-5 w-5">
    <path d="M5.968 23.942a6.624 6.624 0 0 1-2.332-.83c-1.62-.929-2.829-2.593-3.217-4.426-.151-.717-.17-1.623-.15-7.207C.288 5.47.274 5.78.56 4.79c.142-.493.537-1.34.823-1.767C2.438 1.453 3.99.445 5.913.08c.384-.073.94-.08 6.056-.08 6.251 0 6.045-.009 7.066.314a6.807 6.807 0 0 1 4.314 4.184c.33.937.346 1.087.369 3.555l.02 2.23-.391.268c-.558.381-1.29 1.06-2.316 2.15-1.182 1.256-2.376 2.42-2.982 2.907-1.309 1.051-2.508 1.651-3.726 1.864-.634.11-1.682.067-2.302-.095-.553-.144-.517-.168-.726.464a6.355 6.355 0 0 0-.318 1.546l-.031.407-.146-.03c-1.215-.241-2.419-1.285-2.884-2.5a3.583 3.583 0 0 1-.26-1.219l-.016-.34-.309-.284c-.644-.59-1.063-1.312-1.195-2.061-.212-1.193.34-2.542 1.538-3.756 1.264-1.283 3.127-2.29 4.953-2.68.658-.14 1.818-.177 2.403-.075 1.138.198 2.067.773 2.645 1.639.182.271.195.31.177.555a.812.812 0 0 1-.183.493c-.465.651-1.848 1.348-3.336 1.68-2.625.585-4.294-.142-4.033-1.759.026-.163.04-.304.031-.313-.032-.032-.293.104-.575.3-.479.334-.903.984-1.05 1.607-.036.156-.05.406-.034.65.02.331.053.454.192.736.092.186.275.45.408.589l.24.251-.096.122a4.845 4.845 0 0 0-.677 1.217 3.635 3.635 0 0 0-.105 1.815c.103.461.421 1.095.739 1.468.242.285.797.764.886.764.024 0 .044-.048.044-.106.001-.23.184-.973.326-1.327.423-1.058 1.351-1.96 2.82-2.74.245-.13.952-.47 1.572-.757 1.36-.63 2.103-1.015 2.511-1.305 1.176-.833 1.903-2.065 2.14-3.625.086-.57.086-1.634 0-2.207-.368-2.438-2.195-4.096-4.818-4.37-2.925-.307-6.648 1.953-8.942 5.427-1.116 1.69-1.87 3.565-2.187 5.443-.123.728-.169 2.08-.093 2.75.193 1.704.822 3.078 1.903 4.156a6.531 6.531 0 0 0 1.87 1.313c2.368 1.13 4.99 1.155 7.295.071.996-.469 1.974-1.196 3.023-2.25 1.02-1.025 1.71-1.88 3.592-4.458 1.04-1.423 1.864-2.368 2.272-2.605l.15-.086-.019 3.091c-.018 2.993-.022 3.107-.123 3.561-.6 2.678-2.54 4.636-5.195 5.242l-.468.107-5.775.01c-4.734.008-5.85-.002-6.19-.056z"/>
  </svg>
);

const BaleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2C6.477 2 2 6.03 2 11c0 2.865 1.5 5.41 3.868 7.07L4.5 21.5l3.966-1.983C9.57 19.828 10.75 20 12 20c5.523 0 10-4.03 10-9s-4.477-9-10-9zm-2.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
  </svg>
);

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-navy text-slate-300 py-12 lg:py-16 font-[family-name:var(--font-iransans)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block bg-white p-4 rounded-2xl">
              <Image
                src="/brand/logo.png"
                alt={siteConfig.name}
                width={300}
                height={100}
                className="h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              {siteConfig.companyName}
              <br />
              {siteConfig.slogan}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href={`https://instagram.com/${siteConfig.socials.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group" aria-label="اینستاگرام">
                <span className="bg-slate-800 p-2 rounded-lg group-hover:bg-brand-green transition-colors"><InstagramIcon /></span>
              </a>
              <a href={`https://t.me/${siteConfig.socials.telegram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group" aria-label="تلگرام">
                <span className="bg-slate-800 p-2 rounded-lg group-hover:bg-brand-green transition-colors"><Send className="h-5 w-5" /></span>
              </a>
              <a href={`https://eitaa.com/${siteConfig.socials.eitaa}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group" aria-label="ایتا">
                <span className="bg-slate-800 p-2 rounded-lg group-hover:bg-brand-green transition-colors"><EitaaIcon /></span>
              </a>
              <a href={`https://ble.ir/${siteConfig.socials.bale}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group" aria-label="بله">
                <span className="bg-slate-800 p-2 rounded-lg group-hover:bg-brand-green transition-colors"><BaleIcon /></span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">خدمات ما</h3>
            <ul className="space-y-3">
              <li><Link href="#services" className="hover:text-white transition-colors text-sm">پشتیبانی و راه‌اندازی شبکه</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors text-sm">قرارداد پشتیبانی IT</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors text-sm">مجازی‌سازی سرور</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors text-sm">امنیت شبکه</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors text-sm">دوربین‌های مداربسته</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">ارتباط با ما</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-green shrink-0" />
                <span dir="ltr" className="text-sm text-right w-full font-sans inline-block">{siteConfig.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-brand-green shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href="mailto:info@faranetgroup.ir" dir="ltr" className="text-sm text-right w-full font-sans inline-block hover:text-brand-green transition-colors">info@faranetgroup.ir</a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">ساعات کاری</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                <div className="text-sm flex flex-col gap-1">
                  <span>{siteConfig.workingHours.weekdays}</span>
                  <span>{siteConfig.workingHours.thursday}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700/50 text-center text-sm leading-loose">
          <p>کلیه حقوق برای شرکت توسعه ارتباطات هوشمند نیکان (فرانت) محفوظ است.</p>
          <p className="mt-2 text-slate-400">ساخته شده با ❤️ در فرانت</p>
        </div>
      </div>
    </footer>
  );
}
