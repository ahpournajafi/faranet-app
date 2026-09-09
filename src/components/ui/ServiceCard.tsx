import React from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  priority?: boolean;
}

export function ServiceCard({ icon: Icon, title, description, features, priority = false }: ServiceCardProps) {
  return (
    <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
      priority 
        ? "bg-white border-brand-green/20 shadow-sm shadow-brand-green/5 hover:border-brand-green/40" 
        : "bg-white border-slate-200 hover:border-slate-300"
    }`}>
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
        priority ? "bg-brand-green/10 text-brand-green" : "bg-slate-100 text-brand-navy"
      }`}>
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed mb-6 text-justify" style={{ textAlignLast: 'right' }}>{description}</p>
      
      {features && features.length > 0 && (
        <ul className="space-y-2 mt-auto">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-green shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
