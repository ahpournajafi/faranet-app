"use client";

import { useState } from "react";
import { loginAdmin } from "@/actions/auth";

export function LoginForm() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await loginAdmin(formData);

    if (!result.success) {
      setError(result.error || "خطایی رخ داد.");
      setLoading(false);
    } else {
      // Reload the page to reflect auth state
      window.location.reload();
    }
  };

  return (
    <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">ورود مدیریت</h2>
        <p className="text-sm text-slate-500 mt-2">لطفاً رمز عبور خود را وارد کنید.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="password"
            name="password"
            placeholder="رمز عبور"
            dir="ltr"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-navy focus:border-transparent outline-none transition-all text-center"
            autoFocus
          />
        </div>
        
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-brand-navy hover:bg-brand-navy-dark text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-70"
        >
          {loading ? "در حال ورود..." : "ورود به پنل"}
        </button>
      </form>
    </div>
  );
}
