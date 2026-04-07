import type { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function StoreLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  );
}