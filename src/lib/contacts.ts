// Keep all contact links in one place.
// TODO: replace with real social handles if needed.
export const PHONE_E164 = "447853314920"; // +44 with no leading 0

const base = `https://wa.me/${PHONE_E164}`;

export const WA_MSG_TASTER =
  `${base}?text=` +
  encodeURIComponent(
    "Hi — I’d like to book a FREE taster for my child.\nName:\nAge:\nSpecial requirements:"
  );

export const WA_MSG_QUESTION =
  `${base}?text=` +
  encodeURIComponent("Hi — I’ve got a quick question about the sessions.");

export const FB_MESSENGER = "https://m.me/coachingforconfidence";

export const WA_GENERIC = `https://wa.me/${PHONE_E164}`;

// Instagram profile URL
export const INSTAGRAM_URL = "https://www.instagram.com/coachingforconfidence__";
