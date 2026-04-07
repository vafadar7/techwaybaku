import { BarChart3, Boxes, FileSpreadsheet, LayoutDashboard, Megaphone, Settings, Shapes, ShoppingBasket } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";

const links = [
  { to: "/admin", label: "Panel", icon: LayoutDashboard },
  { to: "/admin/mehsullar", label: "Məhsullar", icon: Boxes },
  { to: "/admin/kateqoriyalar", label: "Kateqoriyalar", icon: Shapes },
  { to: "/admin/brendler", label: "Brendlər", icon: BarChart3 },
  { to: "/admin/sifarisler", label: "Sifarişlər", icon: ShoppingBasket },
  { to: "/admin/xeberler", label: "Xəbərlər", icon: Megaphone },
  { to: "/admin/import", label: "CSV / Excel import", icon: FileSpreadsheet },
  { to: "/admin/ayarlar", label: "Ayarlar", icon: Settings },
];

export function AdminSidebar() {
  return (
    <aside className="w-full shrink-0 lg:w-64">
      <div className="rounded-2xl bg-[#111827] p-4 text-slate-100 lg:min-h-[calc(100vh-2rem)]">
        <div className="mb-6 flex items-center gap-2 border-b border-slate-700 pb-4">
          <img src="/logo-icon.svg" alt="TechWayBaku" className="h-8 w-8 rounded-md" />
          <p className="font-semibold">TechWayBaku</p>
        </div>
        <nav className="space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.to}
                end={link.to === "/admin"}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white",
                    isActive && "bg-slate-800 text-white",
                  )
                }
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}