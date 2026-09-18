/** Builds the WhatsApp "click to chat" link. Works with personal WhatsApp: no Business account or backend. */

export interface Lead {
  name: string;
  company: string;
  phone: string;
  email?: string;
  size: string;
  interest: string;
  note?: string;
}

/** The pre-filled message the visitor sends to the centre. */
export function formatLeadMessage(greeting: string, lead: Lead): string {
  const lines = [
    greeting,
    '',
    `Name: ${lead.name}`,
    `Company: ${lead.company}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || '-'}`,
    `Team size: ${lead.size}`,
    `Interested in: ${lead.interest}`,
  ];
  if (lead.note) lines.push('', `Note: ${lead.note}`);
  return lines.join('\n');
}

export interface WhatsAppLinks {
  /** Opens the installed WhatsApp app (desktop app via whatsapp://, phone app via wa.me). */
  app: string;
  /** Browser fallback for computers without the app. */
  web: string;
}

/**
 * Phones: wa.me opens the WhatsApp app directly.
 * Computers: whatsapp:// opens the desktop app; WhatsApp Web is offered as a fallback link,
 * because a website can't reliably detect whether the desktop app is installed.
 */
export function whatsappLinks(phoneDigits: string, message: string, isMobile: boolean): WhatsAppLinks {
  const text = encodeURIComponent(message);
  return {
    app: isMobile
      ? `https://wa.me/${phoneDigits}?text=${text}`
      : `whatsapp://send?phone=${phoneDigits}&text=${text}`,
    web: `https://web.whatsapp.com/send?phone=${phoneDigits}&text=${text}`,
  };
}

export const isMobileDevice = (ua: string): boolean => /Android|iPhone|iPad|iPod/i.test(ua);
