import { ACTIVE_PHONE, ACTIVE_WHATSAPP_DISPLAY, ADDRESS, APPLE_MAPS_URL, GOOGLE_MAPS_URL } from "../../lib/constants";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-slate-600 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-base font-bold text-slate-900">TechWayBaku</p>
          <p className="mt-3">Müasir elektronika və texnologiya məhsullarında gündəlik yenilənən seçimlər.</p>
        </div>
        <div>
          <p className="text-base font-semibold text-slate-900">Əlaqə</p>
          <p className="mt-3">Telefon: {ACTIVE_PHONE}</p>
          <a className="mt-2 block text-blue-600 hover:underline" href="https://wa.me/994504339633" target="_blank" rel="noreferrer">
            WhatsApp: {ACTIVE_WHATSAPP_DISPLAY}
          </a>
        </div>
        <div>
          <p className="text-base font-semibold text-slate-900">Ünvan</p>
          <p className="mt-3">{ADDRESS}</p>
          <div className="mt-3 flex gap-4">
            <a className="text-blue-600 hover:underline" href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer">
              Google Maps
            </a>
            <a className="text-blue-600 hover:underline" href={APPLE_MAPS_URL} target="_blank" rel="noreferrer">
              Apple Maps
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">{new Date().getFullYear()} TechWayBaku</div>
    </footer>
  );
}