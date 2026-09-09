"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { checkRateLimit } from "@/lib/security";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "نام باید حداقل ۲ حرف باشد").max(100, "نام بیش از حد طولانی است").trim(),
  phone: z.string().regex(/^09[0-9]{9}$/, "شماره موبایل نامعتبر است (مثال: 09123456789)"),
  company: z.string().max(100).optional().nullable(),
  service: z.string().min(1),
  details: z.string().max(2000).optional().nullable(),
  honeypot: z.string().max(0, "درخواست نامعتبر است") // Must be empty
});

export async function submitConsultation(formData: FormData) {
  try {
    const reqHeaders = await headers();
    const ip = reqHeaders.get("x-forwarded-for") || reqHeaders.get("x-real-ip") || "unknown";
    
    // Rate limit: 3 requests per hour
    const rateLimit = await checkRateLimit(ip, "SUBMIT_FORM", 3, 60);
    if (!rateLimit.success) {
      return { success: false, error: "تعداد درخواست‌های شما بیش از حد مجاز است. لطفاً ساعتی دیگر تلاش کنید." };
    }

    // Validate inputs with Zod
    const rawData = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      company: formData.get("company") || null,
      service: formData.get("service"),
      details: formData.get("details") || null,
      honeypot: formData.get("website") || "", // Honeypot field
    };

    const validatedData = formSchema.safeParse(rawData);
    
    if (!validatedData.success) {
      return { 
        success: false, 
        error: validatedData.error.issues[0]?.message || "مقادیر وارد شده نامعتبر است."
      };
    }

    const { name, phone, company, service, details } = validatedData.data;

    const consultation = await prisma.consultation.create({
      data: {
        name,
        phone,
        company,
        service,
        details,
      },
    });

    return { success: true, id: consultation.id };
  } catch (error) {
    console.error("Error submitting consultation:", error);
    return { success: false, error: "خطایی در ثبت درخواست رخ داد." };
  }
}

export async function deleteConsultation(formData: FormData) {
  try {
    const id = formData.get("id") as string;
    
    if (id) {
      await prisma.consultation.delete({
        where: { id },
      });
      revalidatePath("/modirfaranet");
    }
  } catch (error) {
    console.error("Error deleting consultation:", error);
  }
}
