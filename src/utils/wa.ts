export function buildWhatsAppUrl(e164Phone: string, message: string) {
  const base = `https://wa.me/${e164Phone}`;
  return `${base}?text=${encodeURIComponent(message)}`;
}
