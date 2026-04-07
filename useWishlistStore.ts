import type { DeliveryMethod, OrderItem } from "../types";

export const STORE_NAME = "TechWayBaku";
export const ACTIVE_PHONE = "050 433 96 33";
export const ACTIVE_WHATSAPP_DISPLAY = "+994 50 433 96 33";
export const WHATSAPP_NUMBER = "+994504339633";
export const WHATSAPP_LINK_NUMBER = "994504339633";
export const ADDRESS = "Bakı ş., Nəsimi r., Səməd Vurğun küç., 34 (AF Mall T/M, 3-cü mərtəbə)";

export const MAP_COORDINATES = {
  lat: 40.376528,
  lng: 49.841667,
};

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=40.376528,49.841667";
export const APPLE_MAPS_URL = "http://maps.apple.com/?ll=40.376528,49.841667&q=TechWayBaku";

export const SHIPPING_FEE_NATIONWIDE = 5;

export const DELIVERY_METHOD_LABELS: Record<DeliveryMethod, string> = {
  pickup: "Mağazada təhvil alma",
  nationwide: "Ölkə daxili çatdırılma",
};

export const DEFAULT_META_DESCRIPTION =
  "Rəsmi zəmanətli smartfon, notebook və aksesuarlar";

export const ABOUT_TEXT =
  "TechWayBaku müxtəlif marka smartfonlar, telefon aksesuarları, saat, notebook, PlayStation və gündəlik istifadə üçün nəzərdə tutulmuş kiçik elektronika məhsulları təklif edir. Məqsədimiz münasib qiymət, keyfiyyətli seçim və müştəriyə rahat xidmət təqdim etməkdir.";

export function buildWhatsAppMessage(input: {
  items: OrderItem[];
  deliveryMethod: DeliveryMethod;
  finalTotal: number;
}) {
  const lines = input.items.map((item) => `- ${item.title} x ${item.quantity}`).join("\n");
  return `Salam, TechWayBaku-dan bu məhsulları sifariş etmək istəyirəm:\n${lines}\nÇatdırılma növü: ${DELIVERY_METHOD_LABELS[input.deliveryMethod]}\nYekun məbləğ: ${input.finalTotal} AZN`;
}

export function buildWhatsAppCheckoutUrl(message: string) {
  return `https://wa.me/${WHATSAPP_LINK_NUMBER}?text=${encodeURIComponent(message)}`;
}