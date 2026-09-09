"use server";

import { cookies, headers } from "next/headers";
import { signToken, checkRateLimit, logAudit } from "@/lib/security";

export async function loginAdmin(formData: FormData) {
  const reqHeaders = await headers();
  const ip = reqHeaders.get("x-forwarded-for") || reqHeaders.get("x-real-ip") || "unknown";
  
  // Rate limiting: 5 attempts per 15 minutes
  const rateLimit = await checkRateLimit(ip, "LOGIN_ADMIN", 5, 15);
  if (!rateLimit.success) {
    await logAudit("LOGIN_BLOCKED", ip, "Rate limit exceeded");
    return { success: false, error: "تلاش‌های ورود بیش از حد مجاز است. لطفاً ۱۵ دقیقه دیگر تلاش کنید." };
  }

  const password = formData.get("password") as string;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    throw new Error("تطبیق پیکربندی سرور: رمز عبور تنظیم نشده است.");
  }

  if (password === adminPassword) {
    const token = await signToken({ admin: true, ip });
    
    (await cookies()).set("admin_auth", token, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 8 * 60 * 60, // 8 hours
      path: "/"
    });
    
    await logAudit("LOGIN_SUCCESS", ip);
    return { success: true };
  }

  await logAudit("LOGIN_FAILED", ip);
  return { success: false, error: "رمز عبور اشتباه است." };
}

export async function logoutAdmin() {
  (await cookies()).delete("admin_auth");
}
