import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { formatPrice } from "../../lib/utils";
import { useCartStore } from "../../store/useCartStore";

export function PriceSummary() {
  const [open, setOpen] = useState(true);
  const subtotal = useCartStore((state) => state.subtotal());
  const discount = useCartStore((state) => state.discountTotal());
  const shipping = useCartStore((state) => state.shippingFee());
  const total = useCartStore((state) => state.finalTotal());

  return (
    <section className="rounded-xl border border-slate-200 bg-white">
      <button
        className="flex w-full items-center justify-between px-4 py-3 text-left"
        onClick={() => setOpen((value) => !value)}
      >
        <p className="font-semibold text-slate-900">Qiymət xülasəsi</p>
        <ChevronDown className={`h-5 w-5 text-slate-500 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="space-y-3 border-t border-slate-200 px-4 py-4 text-sm">
          <div className="flex items-center justify-between text-slate-600">
            <span>Endirimsiz cəm</span>
            <span>{formatPrice(subtotal + discount)}</span>
          </div>
          <div className="flex items-center justify-between text-slate-600">
            <span>Endirim</span>
            <span>-{formatPrice(discount)}</span>
          </div>
          <div className="flex items-center justify-between text-slate-600">
            <span>Çatdırılma</span>
            <span>{formatPrice(shipping)}</span>
          </div>
          <div className="flex items-center justify-between border-t border-slate-200 pt-3 text-base font-semibold text-slate-900">
            <span>Yekun</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      )}
    </section>
  );
}