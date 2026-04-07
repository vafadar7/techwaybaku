import type { PropsWithChildren } from "react";
import { AdminSidebar } from "../admin/AdminSidebar";

export function AdminLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 lg:flex-row">
        <AdminSidebar />
        <main className="min-w-0 flex-1 rounded-2xl bg-white p-4 shadow-sm sm:p-6">{children}</main>
      </div>
    </div>
  );
}