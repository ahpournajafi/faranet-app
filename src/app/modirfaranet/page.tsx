import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { LoginForm } from "./LoginForm";
import { logoutAdmin } from "@/actions/auth";
import { deleteConsultation } from "@/actions/consultation";
import { verifyToken } from "@/lib/security";

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_auth")?.value;
  const isAuthenticated = token ? await verifyToken(token) : null;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <LoginForm />
      </div>
    );
  }

  const requests = await prisma.consultation.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-slate-50 p-6 lg:p-12">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 md:p-8 flex justify-between items-center border-b border-slate-100 bg-brand-navy text-white">
          <h1 className="text-2xl font-bold">پنل مدیریت درخواست‌های مشاوره</h1>
          <form action={logoutAdmin}>
            <button type="submit" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm transition-colors">
              خروج
            </button>
          </form>
        </div>

        <div className="p-0 overflow-x-auto">
          {requests.length === 0 ? (
            <div className="p-12 text-center text-slate-500">هیچ درخواستی ثبت نشده است.</div>
          ) : (
            <table className="w-full text-right border-collapse">
              <thead className="bg-slate-50 text-slate-600 text-sm">
                <tr>
                  <th className="p-4 border-b">نام</th>
                  <th className="p-4 border-b">شماره تماس</th>
                  <th className="p-4 border-b">مجموعه</th>
                  <th className="p-4 border-b">نوع خدمت</th>
                  <th className="p-4 border-b">توضیحات</th>
                  <th className="p-4 border-b">تاریخ</th>
                  <th className="p-4 border-b text-center">عملیات</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {requests.map((req) => (
                  <tr key={req.id} className="hover:bg-slate-50 border-b border-slate-100">
                    <td className="p-4 font-medium text-slate-900">{req.name}</td>
                    <td className="p-4 dir-ltr font-mono">{req.phone}</td>
                    <td className="p-4 text-slate-600">{req.company || "-"}</td>
                    <td className="p-4 text-slate-600">
                      <span className="px-3 py-1 bg-brand-green/10 text-brand-green-dark rounded-full text-xs">
                        {req.service === "network" ? "راه‌اندازی شبکه" : 
                         req.service === "contract" ? "قرارداد پشتیبانی" :
                         req.service === "helpdesk" ? "خدمات Help Desk" :
                         req.service === "infrastructure" ? "زیرساخت فناوری" : "سایر خدمات"}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600 max-w-xs truncate" title={req.details || ""}>{req.details || "-"}</td>
                    <td className="p-4 text-slate-500 dir-ltr text-right">
                      {new Date(req.createdAt).toLocaleString("fa-IR")}
                    </td>
                    <td className="p-4 text-center">
                      <form action={deleteConsultation}>
                        <input type="hidden" name="id" value={req.id} />
                        <button 
                          type="submit" 
                          className="px-3 py-1.5 text-xs text-red-600 bg-red-50 hover:bg-red-100 rounded-md transition-colors border border-red-100"
                        >
                          حذف
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
