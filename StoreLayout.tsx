import { DELIVERY_METHOD_LABELS, SHIPPING_FEE_NATIONWIDE } from "../../lib/constants";
import { cn } from "../../lib/utils";
import { useCartStore } from "../../store/useCartStore";
import type { DeliveryMethod } from "../../types";

const options: { value: DeliveryMethod; note: string }[] = [
  { value: "pickup", note: "Çatdırılma haqqı: 0 AZN" },
  { value: "nationwide", note: `Çatdırılma haqqı: ${SHIPPING_FEE_NATIONWIDE} AZN` },
];

export function DeliverySelector() {
  const method = useCartStore((state) => state.deliveryMethod);
  const setMethod = useCartStore((state) => state.setDeliveryMethod);

  return (
    <div className="space-y-3">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => setMethod(option.value)}
          className={cn(
            "w-full rounded-xl border p-4 text-left transition",
            method === option.value ? "border-blue-600 bg-blue-50" : "border-slate-200 bg-white",
          )}
        >
          <p className="font-medium text-slate-900">{DELIVERY_METHOD_LABELS[option.value]}</p>
          <p className="text-sm text-slate-500">{option.note}</p>
        </button>
      ))}
    </div>
  );
}