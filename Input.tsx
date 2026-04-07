import { Heart, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { STORE_NAME } from "../../lib/constants";
import { categoryRepository } from "../../lib/repositories/productRepository";
import { cn } from "../../lib/utils";
import { useCartStore } from "../../store/useCartStore";
import { useWishlistStore } from "../../store/useWishlistStore";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

const navLinks = [
  { to: "/", label: "Ana səhifə" },
  { to: "/katalog", label: "Məhsullar" },
  { to: "/xeberler", label: "Xəbərlər" },
  { to: "/elaqe", label: "Əlaqə" },
];

export function Header() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const totalItems = useCartStore((state) => state.totalItems());
  const favorites = useWishlistStore((state) => state.items.length);
  const categories = useMemo(() => categoryRepository.getAll().sort((a, b) => a.order - b.order), []);

  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(`/katalog?axtaris=${encodeURIComponent(query)}`);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-700 bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link to="/" className="mr-2 flex min-w-0 items-center gap-2">
            <img src="/logo-icon.svg" alt="TechWayBaku" className="h-9 w-9 rounded-md" />
            <span className="truncate text-lg font-bold tracking-tight">{STORE_NAME}</span>
          </Link>

          <form onSubmit={submitSearch} className="hidden flex-1 md:block">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Məhsul axtar"
                className="border-slate-700 bg-slate-900 pl-9 text-white placeholder:text-slate-400"
              />
            </div>
          </form>

          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => cn("text-sm text-slate-300 hover:text-white", isActive && "text-white")}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Link to="/favoriler" className="relative rounded-lg p-2 hover:bg-slate-800" aria-label="Favorilər">
              <Heart className="h-5 w-5" />
              {favorites > 0 && (
                <span className="absolute -right-1 -top-1 min-w-5 rounded-full bg-blue-600 px-1 text-center text-xs">{favorites}</span>
              )}
            </Link>
            <Link to="/sebet" className="relative rounded-lg p-2 hover:bg-slate-800" aria-label="Səbət">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 min-w-5 rounded-full bg-red-600 px-1 text-center text-xs">{totalItems}</span>
              )}
            </Link>
            <button className="rounded-lg p-2 hover:bg-slate-800 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menyu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <form onSubmit={submitSearch} className="mt-3 md:hidden">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Məhsul axtar"
              className="border-slate-700 bg-slate-900 pl-9 text-white placeholder:text-slate-400"
            />
          </div>
        </form>

        {open && (
          <div className="mt-3 space-y-3 border-t border-slate-700 pt-3 lg:hidden">
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg bg-slate-800 px-3 py-2 text-center text-slate-200"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 5).map((category) => (
                <Button
                  key={category.id}
                  variant="ghost"
                  className="rounded-full bg-slate-800 px-3 py-1.5 text-xs text-slate-100"
                  onClick={() => {
                    navigate(`/kateqoriya/${category.slug}`);
                    setOpen(false);
                  }}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}